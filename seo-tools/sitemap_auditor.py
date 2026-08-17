#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
  SEO INTEGRITY AUDITOR — Sri Geetha Eye Hospital (3-Domain Suite)
  Version: 1.0.0
  Date: 2026-08-15

  PURPOSE:
    Programmatic validation of XML sitemaps for three interconnected domains.
    Run this script before and after any sitemap changes.

  DEPENDENCIES:
    pip install requests beautifulsoup4 lxml colorama

  USAGE:
    # Validate all three live sitemaps from their live URLs:
    python sitemap_auditor.py --mode live

    # Validate from local XML files (offline/CI):
    python sitemap_auditor.py --mode local \
      --main ../public/sitemap-main.xml \
      --plural ../public/sitemap-plural.xml \
      --geo ../public/sitemap-geo.xml

    # Validate a single sitemap:
    python sitemap_auditor.py --mode single --url https://www.srigeethaeyehospital.com/sitemap.xml

=============================================================================
"""

import argparse
import sys
import time
import xml.etree.ElementTree as ET
from dataclasses import dataclass, field
from typing import Optional
from urllib.parse import urlparse

import io
import os

# Force UTF-8 output on Windows to avoid cp1252 encoding errors
if os.name == "nt":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8", errors="replace")

try:
    import requests
    from bs4 import BeautifulSoup
    from colorama import Fore, Style, init as colorama_init
    colorama_init(autoreset=True)
    DEPS_OK = True
except ImportError:
    DEPS_OK = False

# ─────────────────────────────────────────────────────────────────────────────
# CONFIGURATION — Domain Rules
# ─────────────────────────────────────────────────────────────────────────────

DOMAIN_CONFIG = {
    "main": {
        "label": "Main (Canonical)",
        "expected_host": "www.srigeethaeyehospital.com",
        "live_sitemap_url": "https://www.srigeethaeyehospital.com/sitemap.xml",
        "expected_protocol": "https",
        "forbidden_hosts": [
            "srigeethaeyehospitals.com",
            "guntureyehospital.com",
        ],
        "min_url_count": 20,
        "max_url_count": 200,
    },
    "plural": {
        "label": "Plural Alias",
        "expected_host": "srigeethaeyehospitals.com",
        "live_sitemap_url": "https://srigeethaeyehospitals.com/sitemap.xml",
        "expected_protocol": "https",
        "forbidden_hosts": [
            "srigeethaeyehospital.com",
            "guntureyehospital.com",
        ],
        "min_url_count": 1,
        "max_url_count": 5,  # Should be minimal — mainly 301-redirect domain
    },
    "geo": {
        "label": "Geo-Targeted (Guntur)",
        "expected_host": "www.guntureyehospital.com",
        "live_sitemap_url": "https://www.guntureyehospital.com/sitemap.xml",
        "expected_protocol": "https",
        "forbidden_hosts": [
            "srigeethaeyehospital.com",
            "srigeethaeyehospitals.com",
        ],
        "min_url_count": 5,
        "max_url_count": 100,
    },
}

SITEMAP_NS = "http://www.sitemaps.org/schemas/sitemap/0.9"
REQUEST_TIMEOUT = 15  # seconds
REQUEST_DELAY = 0.5   # seconds between requests (be kind to servers)
USER_AGENT = "SriGeetha-SEO-Auditor/1.0 (Internal SEO Tool; not Googlebot)"


# ─────────────────────────────────────────────────────────────────────────────
# DATA STRUCTURES
# ─────────────────────────────────────────────────────────────────────────────

@dataclass
class AuditIssue:
    severity: str  # "ERROR", "WARNING", "INFO"
    check: str
    url: Optional[str]
    message: str


@dataclass
class DomainAuditResult:
    domain_key: str
    label: str
    urls_found: list[str] = field(default_factory=list)
    issues: list[AuditIssue] = field(default_factory=list)
    passed: int = 0
    failed: int = 0

    @property
    def error_count(self):
        return sum(1 for i in self.issues if i.severity == "ERROR")

    @property
    def warning_count(self):
        return sum(1 for i in self.issues if i.severity == "WARNING")


# ─────────────────────────────────────────────────────────────────────────────
# XML PARSING
# ─────────────────────────────────────────────────────────────────────────────

def parse_sitemap_from_file(path: str) -> list[dict]:
    """
    Parse sitemap XML from a local file path.
    Read as bytes so ET respects the XML encoding declaration correctly.
    """
    with open(path, "rb") as f:
        content = f.read()
    root = ET.fromstring(content)
    return _extract_urls(root)


def parse_sitemap_from_url(url: str) -> tuple[list[dict], Optional[str]]:
    """
    Fetch and parse a sitemap from a live URL.
    Returns (url_list, error_message).
    """
    try:
        session = _get_session()
        resp = session.get(url, timeout=REQUEST_TIMEOUT)
        if resp.status_code != 200:
            return [], f"HTTP {resp.status_code} when fetching sitemap"
        root = ET.fromstring(resp.content)
        return _extract_urls(root), None
    except requests.exceptions.ConnectionError:
        return [], "Connection refused — domain may not be live yet"
    except requests.exceptions.Timeout:
        return [], "Request timed out"
    except ET.ParseError as e:
        return [], f"XML parse error: {e}"


def _extract_urls(root: ET.Element) -> list[dict]:
    """Extract all <url> entries from a sitemap XML root."""
    ns = {"sm": SITEMAP_NS}
    entries = []
    for url_el in root.findall("sm:url", ns):
        loc_el = url_el.find("sm:loc", ns)
        lastmod_el = url_el.find("sm:lastmod", ns)
        changefreq_el = url_el.find("sm:changefreq", ns)
        priority_el = url_el.find("sm:priority", ns)
        if loc_el is not None:
            entries.append({
                "loc": (loc_el.text or "").strip(),
                "lastmod": lastmod_el.text.strip() if lastmod_el is not None and lastmod_el.text else None,
                "changefreq": changefreq_el.text.strip() if changefreq_el is not None and changefreq_el.text else None,
                "priority": priority_el.text.strip() if priority_el is not None and priority_el.text else None,
            })
    return entries


# ─────────────────────────────────────────────────────────────────────────────
# CHECK SUITE
# ─────────────────────────────────────────────────────────────────────────────

def check_host_cleanliness(entries: list[dict], config: dict, result: DomainAuditResult):
    """
    CHECK 1: HOST CLEANLINESS
    Ensures no cross-domain URL leakage. Every <loc> must match the
    expected host and protocol. Forbidden hosts must not appear.
    """
    check_name = "Host Cleanliness"
    forbidden = config["forbidden_hosts"]
    expected_host = config["expected_host"]
    expected_protocol = config["expected_protocol"]

    for entry in entries:
        loc = entry["loc"]
        parsed = urlparse(loc)

        # Protocol check
        if parsed.scheme != expected_protocol:
            result.issues.append(AuditIssue(
                severity="ERROR",
                check=check_name,
                url=loc,
                message=f"Wrong protocol '{parsed.scheme}' — expected '{expected_protocol}'",
            ))
            result.failed += 1
        else:
            result.passed += 1

        # Host check — exact match
        if parsed.netloc != expected_host:
            result.issues.append(AuditIssue(
                severity="ERROR",
                check=check_name,
                url=loc,
                message=f"Host mismatch: got '{parsed.netloc}', expected '{expected_host}'",
            ))
            result.failed += 1
        else:
            result.passed += 1

        # Forbidden host check (cross-domain leakage detection)
        for forbidden_host in forbidden:
            if forbidden_host in loc:
                result.issues.append(AuditIssue(
                    severity="ERROR",
                    check=check_name,
                    url=loc,
                    message=f"CROSS-DOMAIN LEAK! URL contains forbidden domain '{forbidden_host}'",
                ))
                result.failed += 1


def check_url_count(entries: list[dict], config: dict, result: DomainAuditResult):
    """
    CHECK 2: URL COUNT BOUNDS
    Validates the sitemap has a sensible number of URLs for its role.
    """
    check_name = "URL Count"
    count = len(entries)
    minimum = config["min_url_count"]
    maximum = config["max_url_count"]

    if count < minimum:
        result.issues.append(AuditIssue(
            severity="WARNING",
            check=check_name,
            url=None,
            message=f"Only {count} URLs found — expected at least {minimum}. Sitemap may be incomplete.",
        ))
        result.failed += 1
    elif count > maximum:
        result.issues.append(AuditIssue(
            severity="WARNING",
            check=check_name,
            url=None,
            message=f"{count} URLs found — exceeds recommended maximum {maximum} for this domain type.",
        ))
    else:
        result.passed += 1
        _info(result, check_name, None, f"URL count {count} is within acceptable range [{minimum}–{maximum}]")


def check_required_tags(entries: list[dict], result: DomainAuditResult):
    """
    CHECK 3: REQUIRED SEO TAGS
    Every <url> entry should have <loc>, <lastmod>, and <changefreq>.
    Missing tags degrade crawl signal quality.
    """
    check_name = "Required Tags"
    for entry in entries:
        loc = entry["loc"]
        if not entry.get("lastmod"):
            result.issues.append(AuditIssue(
                severity="WARNING",
                check=check_name,
                url=loc,
                message="Missing <lastmod> tag — Googlebot uses this for crawl prioritization",
            ))
        else:
            result.passed += 1

        if not entry.get("changefreq"):
            result.issues.append(AuditIssue(
                severity="WARNING",
                check=check_name,
                url=loc,
                message="Missing <changefreq> tag",
            ))
        else:
            result.passed += 1

        if not entry.get("priority"):
            result.issues.append(AuditIssue(
                severity="INFO",
                check=check_name,
                url=loc,
                message="Missing <priority> tag (optional but recommended)",
            ))


def check_duplicate_urls(entries: list[dict], result: DomainAuditResult):
    """
    CHECK 4: DUPLICATE URL DETECTION
    Duplicate URLs waste crawl budget and create ambiguity.
    """
    check_name = "Duplicate URLs"
    seen = {}
    for entry in entries:
        loc = entry["loc"]
        if loc in seen:
            result.issues.append(AuditIssue(
                severity="ERROR",
                check=check_name,
                url=loc,
                message="Duplicate URL found in sitemap — only one entry allowed per URL",
            ))
            result.failed += 1
        else:
            seen[loc] = True
            result.passed += 1


def check_trailing_slash_consistency(entries: list[dict], result: DomainAuditResult):
    """
    CHECK 5: TRAILING SLASH CONSISTENCY
    Inconsistent trailing slashes (e.g., /about and /about/) are treated as
    different URLs by crawlers, creating potential duplicate content.
    """
    check_name = "Trailing Slash Consistency"
    paths = [urlparse(e["loc"]).path for e in entries if e["loc"]]
    has_trailing = [p for p in paths if p.endswith("/") and p != "/"]
    no_trailing = [p for p in paths if not p.endswith("/") and p != "/"]

    if has_trailing and no_trailing:
        result.issues.append(AuditIssue(
            severity="WARNING",
            check=check_name,
            url=None,
            message=(
                f"Mixed trailing slash pattern detected. "
                f"{len(has_trailing)} URLs have trailing slash, {len(no_trailing)} do not. "
                "Standardize across all pages and ensure canonical tags match."
            ),
        ))
        result.failed += 1
    else:
        result.passed += 1


def check_http_status_codes(entries: list[dict], config: dict, result: DomainAuditResult):
    """
    CHECK 6: HTTP STATUS CODE VERIFICATION  (LIVE MODE ONLY)
    Every URL in the sitemap must return HTTP 200.
    - 301/302 redirects: Indicates a redirect chain; exclude from sitemap
    - 404: Page doesn't exist; must be removed
    - 5xx: Server error; investigate immediately
    Only 200 OK responses are acceptable in a sitemap.
    """
    check_name = "HTTP Status Codes"
    session = _get_session()

    for entry in entries:
        loc = entry["loc"]
        try:
            # allow_redirects=False to detect redirects explicitly
            resp = session.head(loc, allow_redirects=False, timeout=REQUEST_TIMEOUT)
            status = resp.status_code

            if status == 200:
                result.passed += 1
            elif status in (301, 302, 307, 308):
                redirect_to = resp.headers.get("Location", "unknown")
                result.issues.append(AuditIssue(
                    severity="ERROR",
                    check=check_name,
                    url=loc,
                    message=(
                        f"HTTP {status} Redirect detected → {redirect_to}. "
                        "Non-canonical URLs must NOT appear in sitemaps. "
                        "Add canonical tag or remove from sitemap."
                    ),
                ))
                result.failed += 1
            elif status == 404:
                result.issues.append(AuditIssue(
                    severity="ERROR",
                    check=check_name,
                    url=loc,
                    message="HTTP 404 Not Found — page doesn't exist. REMOVE from sitemap immediately.",
                ))
                result.failed += 1
            elif status == 403:
                result.issues.append(AuditIssue(
                    severity="WARNING",
                    check=check_name,
                    url=loc,
                    message="HTTP 403 Forbidden — Googlebot may not be able to crawl this page.",
                ))
            elif status >= 500:
                result.issues.append(AuditIssue(
                    severity="ERROR",
                    check=check_name,
                    url=loc,
                    message=f"HTTP {status} Server Error — investigate immediately.",
                ))
                result.failed += 1
            else:
                result.issues.append(AuditIssue(
                    severity="WARNING",
                    check=check_name,
                    url=loc,
                    message=f"Unexpected HTTP status {status}",
                ))
        except requests.exceptions.ConnectionError:
            result.issues.append(AuditIssue(
                severity="ERROR",
                check=check_name,
                url=loc,
                message="Connection refused — domain or page not reachable",
            ))
            result.failed += 1
        except requests.exceptions.Timeout:
            result.issues.append(AuditIssue(
                severity="WARNING",
                check=check_name,
                url=loc,
                message="Request timed out — page may be slow",
            ))

        time.sleep(REQUEST_DELAY)  # Be a good citizen; don't hammer the server


def check_canonical_alignment(entries: list[dict], config: dict, result: DomainAuditResult):
    """
    CHECK 7: CANONICAL TAG ALIGNMENT  (LIVE MODE ONLY)
    For every URL in the sitemap, fetches the page and checks that:
    1. A canonical tag exists
    2. The canonical tag href == the sitemap <loc> URL
    Mismatch = Google will ignore this sitemap URL for indexing purposes.
    """
    check_name = "Canonical Alignment"
    session = _get_session()
    expected_host = config["expected_host"]

    for entry in entries:
        loc = entry["loc"]
        try:
            resp = session.get(loc, timeout=REQUEST_TIMEOUT, allow_redirects=True)
            if resp.status_code != 200:
                # Status code check handles this — skip canonical check
                continue

            soup = BeautifulSoup(resp.text, "lxml")
            canonical_tag = soup.find("link", {"rel": "canonical"})

            if not canonical_tag:
                result.issues.append(AuditIssue(
                    severity="ERROR",
                    check=check_name,
                    url=loc,
                    message="NO canonical tag found on this page. Google may not index this URL.",
                ))
                result.failed += 1
                continue

            canonical_href = canonical_tag.get("href", "").strip()

            # Normalize: strip trailing slash for comparison (except root /)
            def normalize(u: str) -> str:
                return u.rstrip("/") if u != "/" else u

            if normalize(canonical_href) != normalize(loc):
                # Check if canonical points to a different domain (forbidden)
                canonical_parsed = urlparse(canonical_href)
                if canonical_parsed.netloc != expected_host:
                    result.issues.append(AuditIssue(
                        severity="ERROR",
                        check=check_name,
                        url=loc,
                        message=(
                            f"Canonical points to DIFFERENT DOMAIN: '{canonical_href}'. "
                            "This page defers to another domain — remove from THIS sitemap."
                        ),
                    ))
                else:
                    result.issues.append(AuditIssue(
                        severity="WARNING",
                        check=check_name,
                        url=loc,
                        message=(
                            f"Canonical mismatch: sitemap has '{loc}', "
                            f"page canonical is '{canonical_href}'"
                        ),
                    ))
                result.failed += 1
            else:
                result.passed += 1

        except Exception as e:
            result.issues.append(AuditIssue(
                severity="WARNING",
                check=check_name,
                url=loc,
                message=f"Could not verify canonical: {e}",
            ))

        time.sleep(REQUEST_DELAY)


# ─────────────────────────────────────────────────────────────────────────────
# HELPERS
# ─────────────────────────────────────────────────────────────────────────────

def _get_session() -> "requests.Session":
    session = requests.Session()
    session.headers.update({"User-Agent": USER_AGENT})
    return session


def _info(result: DomainAuditResult, check: str, url: Optional[str], msg: str):
    result.issues.append(AuditIssue(severity="INFO", check=check, url=url, message=msg))


# ─────────────────────────────────────────────────────────────────────────────
# REPORT PRINTER
# ─────────────────────────────────────────────────────────────────────────────

def print_report(results: list[DomainAuditResult], live_mode: bool):
    if not DEPS_OK:
        _print = print
        RED = GREEN = YELLOW = CYAN = BOLD = RESET = ""
    else:
        RED = Fore.RED
        GREEN = Fore.GREEN
        YELLOW = Fore.YELLOW
        CYAN = Fore.CYAN
        BOLD = Style.BRIGHT
        RESET = Style.RESET_ALL

    print(f"\n{'═' * 70}")
    print(f"  {BOLD}SRI GEETHA EYE HOSPITAL — SEO SITEMAP INTEGRITY AUDIT{RESET}")
    print(f"  Mode: {'[LIVE]' if live_mode else '[LOCAL FILE]'}")
    print(f"  Date: 2026-08-15")
    print(f"{'═' * 70}\n")

    total_errors = 0
    total_warnings = 0

    for result in results:
        print(f"{'─' * 70}")
        print(f"  {BOLD}{CYAN}Domain: {result.label}{RESET}")
        print(f"  URLs Found: {len(result.urls_found)}")
        print(f"  Checks Passed: {GREEN}{result.passed}{RESET} | "
              f"Failed: {RED}{result.failed}{RESET} | "
              f"Errors: {RED}{result.error_count}{RESET} | "
              f"Warnings: {YELLOW}{result.warning_count}{RESET}")
        print()

        if not result.issues:
            print(f"  {GREEN}[PASS] No issues found -- sitemap is clean!{RESET}\n")
            continue

        for issue in result.issues:
            if issue.severity == "ERROR":
                icon = f"{RED}[ERROR]{RESET}"
                total_errors += 1
            elif issue.severity == "WARNING":
                icon = f"{YELLOW}[WARN] {RESET}"
                total_warnings += 1
            else:
                icon = f"[INFO] "

            url_str = f"\n         URL: {issue.url}" if issue.url else ""
            print(f"  [{icon}] [{issue.check}]{url_str}")
            print(f"         → {issue.message}\n")

    print(f"{'═' * 70}")
    print(f"  FINAL SUMMARY")
    print(f"  Total Errors:   {RED}{total_errors}{RESET}")
    print(f"  Total Warnings: {YELLOW}{total_warnings}{RESET}")
    if total_errors == 0:
        print(f"\n  {GREEN}{BOLD}[OK] ALL CRITICAL CHECKS PASSED -- Sitemaps are SEO-clean!{RESET}")
    else:
        print(f"\n  {RED}{BOLD}[FAIL] {total_errors} CRITICAL ERROR(S) FOUND -- Fix before submitting to GSC!{RESET}")
    print(f"{'═' * 70}\n")

    return total_errors


# ─────────────────────────────────────────────────────────────────────────────
# AUDIT RUNNER
# ─────────────────────────────────────────────────────────────────────────────

def run_audit_on_entries(
    domain_key: str,
    entries: list[dict],
    live_mode: bool,
) -> DomainAuditResult:
    config = DOMAIN_CONFIG[domain_key]
    result = DomainAuditResult(
        domain_key=domain_key,
        label=config["label"],
        urls_found=[e["loc"] for e in entries],
    )

    # Static checks (work on local files and live)
    check_host_cleanliness(entries, config, result)
    check_url_count(entries, config, result)
    check_required_tags(entries, result)
    check_duplicate_urls(entries, result)
    check_trailing_slash_consistency(entries, result)

    # Live-only checks (require actual HTTP requests)
    if live_mode and DEPS_OK:
        print(f"  [LIVE] Checking HTTP status codes for {config['label']} ({len(entries)} URLs)...")
        check_http_status_codes(entries, config, result)
        print(f"  [LIVE] Verifying canonical tags for {config['label']}...")
        check_canonical_alignment(entries, config, result)
    elif live_mode and not DEPS_OK:
        print("  [WARNING] requests/bs4 not installed — skipping live HTTP checks")
        print("            Run: pip install requests beautifulsoup4 lxml")

    return result


# ─────────────────────────────────────────────────────────────────────────────
# MAIN ENTRY POINT
# ─────────────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="XML Sitemap SEO Integrity Auditor — Sri Geetha Eye Hospital"
    )
    parser.add_argument(
        "--mode",
        choices=["live", "local", "single"],
        default="local",
        help="Audit mode: 'live' fetches live sitemaps, 'local' reads local XML files",
    )
    parser.add_argument("--main", default="../public/sitemap-main.xml",
                        help="Local path to main domain sitemap XML")
    parser.add_argument("--plural", default="../public/sitemap-plural.xml",
                        help="Local path to plural domain sitemap XML")
    parser.add_argument("--geo", default="../public/sitemap-geo.xml",
                        help="Local path to geo-targeted domain sitemap XML")
    parser.add_argument("--url", help="Single sitemap URL (for --mode single)")
    args = parser.parse_args()

    results = []

    if args.mode == "local":
        print("\n[LOCAL] Loading sitemaps from local files...\n")
        for domain_key, local_path in [
            ("main", args.main),
            ("plural", args.plural),
            ("geo", args.geo),
        ]:
            try:
                entries = parse_sitemap_from_file(local_path)
                print(f"  [OK] Loaded {len(entries)} URLs from {local_path}")
                results.append(run_audit_on_entries(domain_key, entries, live_mode=False))
            except FileNotFoundError:
                print(f"  [MISSING] File not found: {local_path}")
            except ET.ParseError as e:
                print(f"  [XML ERROR] Parse error in {local_path}: {e}")

    elif args.mode == "live":
        if not DEPS_OK:
            print("ERROR: 'requests' library required for live mode.")
            print("       Run: pip install requests beautifulsoup4 lxml colorama")
            sys.exit(1)
        print("\n[LIVE] Fetching live sitemaps...\n")
        for domain_key, config in DOMAIN_CONFIG.items():
            url = config["live_sitemap_url"]
            print(f"  Fetching {url} ...")
            entries, error = parse_sitemap_from_url(url)
            if error:
                print(f"  [FAIL] {error}")
                # Create a result with the connection error noted
                r = DomainAuditResult(domain_key=domain_key, label=config["label"])
                r.issues.append(AuditIssue(
                    severity="ERROR", check="Sitemap Fetch", url=url,
                    message=f"Could not fetch sitemap: {error}",
                ))
                r.failed += 1
                results.append(r)
            else:
                print(f"  [OK] Loaded {len(entries)} URLs")
                results.append(run_audit_on_entries(domain_key, entries, live_mode=True))

    elif args.mode == "single":
        if not args.url:
            print("ERROR: --url is required for single mode")
            sys.exit(1)
        if not DEPS_OK:
            print("ERROR: 'requests' library required. Run: pip install requests beautifulsoup4 lxml")
            sys.exit(1)
        # Guess domain key from URL
        domain_key = "main"
        for key, cfg in DOMAIN_CONFIG.items():
            if cfg["expected_host"] in args.url:
                domain_key = key
                break
        entries, error = parse_sitemap_from_url(args.url)
        if error:
            print(f"ERROR: {error}")
            sys.exit(1)
        results.append(run_audit_on_entries(domain_key, entries, live_mode=True))

    error_count = print_report(results, live_mode=(args.mode != "local"))
    sys.exit(1 if error_count > 0 else 0)


if __name__ == "__main__":
    main()
