# NAP Uniformity & Backlink Audit Checklist
## Sri Geetha Eye Hospital — All 10 External Portals

**Last Updated:** 2026-08-15
**Auditor:** Technical SEO Team

---

## The Canonical NAP Standard

Every single external profile must match the following **exact** values.
Any variation — even a single character — creates a separate entity in
Google's Knowledge Graph, splitting your ranking authority.

```
Name:     Sri Geetha Eye Hospital
Address:  Laxmipuram, 4th Lane, Behind Harihara Cinemas,
          Opp. Indian Bank, Guntur, Andhra Pradesh 522007
Phone:    +91 85009 22266
Website:  https://www.srigeethaeyehospital.com
Email:    info@srigeethaeyehospital.com
```

**Critical Website URL Rules:**
- Must use `https://` (NOT `http://`)
- Must include `www.` (NOT bare `srigeethaeyehospital.com`)
- No trailing slash variations (NOT `https://www.srigeethaeyehospital.com/`)
- Never use the plural URL (`srigeethaeyehospitals.com`) in any external listing

---

## Portal 1: Justdial
**URL:** https://www.justdial.com

### How to Access
1. Go to https://business.justdial.com
2. Log in with the registered business mobile number
3. Click **"My Business"** > **"Edit Profile"**

### Fields to Audit and Fix

| Field | Must Be | Common Error |
|---|---|---|
| Business Name | `Sri Geetha Eye Hospital` | "Srigeetha Eye Hospital" or "Sri Geeta Eye Hospital" |
| Category | `Eye Hospital` or `Ophthalmologist` | Wrong category = wrong search cluster |
| Address Line 1 | `Laxmipuram, 4th Lane` | Missing "4th Lane" |
| Address Line 2 | `Behind Harihara Cinemas, Opp. Indian Bank` | Abbreviated or missing |
| City | `Guntur` | "Guntur City" or "Guntur District" |
| State | `Andhra Pradesh` | "AP" (not accepted by Google for NAP matching) |
| PIN Code | `522007` | Wrong PIN dilutes local pack ranking |
| Phone (Primary) | `+91 85009 22266` | `08632-XXXXXX` format (inconsistent with website) |
| Website | `https://www.srigeethaeyehospital.com` | `http://` or missing `www.` |
| Working Hours | Mon-Sat: 9am-8pm, Sun: 9am-1pm | Outdated or missing |

### Step-by-Step Fix
1. Under **Business Name**, ensure it reads exactly: `Sri Geetha Eye Hospital`
   - If it shows "Srigeetha" (no space), raise an edit request
2. Under **Phone**, enter `+918500922266` (international format)
3. Under **Website**, paste: `https://www.srigeethaeyehospital.com`
4. Under **Photos**, upload at least 5 high-quality photos (interior, exterior, doctors)
5. Click **Save** and note the "Pending Review" status
6. After approval (~24h), copy the **exact Justdial listing URL** (e.g., `https://www.justdial.com/Guntur/Sri-Geetha-Eye-Hospital-...`)
7. **ACTION REQUIRED:** Replace the placeholder in `site.ts` externalListings with this URL

---

## Portal 2: Practo
**URL:** https://www.practo.com

### How to Access
1. Go to https://www.practo.com/for-providers
2. Log in to your Practo Pro / Practo Ray account
3. Navigate to **Profile** > **Clinic Information**

### Fields to Audit and Fix

| Field | Must Be | Common Error |
|---|---|---|
| Clinic Name | `Sri Geetha Eye Hospital` | Listed under individual doctor name only |
| Specialization | `Ophthalmology`, `Vitreo-Retinal Surgery` | Only "Eye" listed — too vague |
| Address | Full address as above | PIN code missing or wrong |
| Phone | `+91 85009 22266` | Different number for individual doctors |
| Website | `https://www.srigeethaeyehospital.com` | `http://` or not set |
| About / Description | Must mention Guntur, Vitreo Retinal, ZEISS, Alcon, 1983 | Generic or empty |

### Step-by-Step Fix
1. Under **Clinic Details**, confirm Name = `Sri Geetha Eye Hospital`
2. Under **Contact Info**, set Website = `https://www.srigeethaeyehospital.com`
3. Under **Services**, add all treatments that exist on your website:
   - Cataract Surgery, Vitreo Retinal Surgery, LASIK, Diabetic Eye, Glaucoma, Cornea, Keratoconus, Retinal Detachment, Macular Hole, Pterygium Surgery
4. Under each **Doctor Profile** (Dr. P. Narasimha Rao, Dr. P. Mohan Krishna, Dr. B. Prathyusha):
   - Set "Practice at: Sri Geetha Eye Hospital"
   - Ensure all three doctors show the same clinic address and phone
5. Add clinic photos — minimum 3 (reception, consultation room, equipment)
6. Copy the **Practo clinic listing URL** and update `site.ts`

---

## Portal 3: Bajaj Finserv Health
**URL:** https://www.bajajfinservhealth.in

### How to Access
1. Go to https://pro.bajajfinservhealth.in (provider portal)
2. Log in with your empanelled provider credentials
3. Navigate to **Hospital Profile** > **Basic Information**

### Fields to Audit and Fix

| Field | Must Be | Common Error |
|---|---|---|
| Hospital Name | `Sri Geetha Eye Hospital` | Variation in spelling |
| Registered Address | Full NAP standard address above | Short-form address |
| Phone (SPOC) | `+91 85009 22266` | Billing department number listed instead |
| Website | `https://www.srigeethaeyehospital.com` | `http://` version or not filled |
| Speciality | `Ophthalmology` | Listed under General or Multi-Speciality |
| NABH/Accreditation | Fill if applicable | Often left blank |

### Step-by-Step Fix
1. Log in to the Bajaj Finserv Health provider dashboard
2. Under **Hospital Details**, verify Hospital Name character by character
3. Under **Contact**, set the primary phone to `+91 85009 22266`
4. Set Website field = `https://www.srigeethaeyehospital.com`
5. Under **Specialities**, select or type: `Ophthalmology`
6. Submit changes — changes typically reflect in 3-5 business days

**NAP consistency note:** The name used in the Bajaj insurance database is
cross-referenced by Google when verifying your business. Any mismatch here
creates a "trust conflict" that weakens your local pack ranking.

---

## Portal 4: ESI Health (ESIC)
**URL:** https://www.esic.in / https://www.esi.in

### How to Access
1. Contact your regional ESIC office (Guntur) to update hospital profile
2. OR log in to https://www.esic.in/EmployerPortal if empanelled online
3. Navigate to **Empanelled Hospital Details**

### Fields to Audit and Fix

| Field | Must Be |
|---|---|
| Hospital Name | `Sri Geetha Eye Hospital` |
| Full Address | Laxmipuram, 4th Lane, Behind Harihara Cinemas, Opp. Indian Bank, Guntur, AP 522007 |
| Phone | +91 85009 22266 |
| Website | https://www.srigeethaeyehospital.com |
| Speciality | Ophthalmology |

### Step-by-Step Fix
1. Contact ESIC Guntur branch and request a **profile update form**
2. Fill in the NAP standard details exactly as above
3. Submit with a letterhead from the hospital confirming the details
4. Follow up in 7-10 working days

**Note:** ESIC profiles are government-maintained. Google gives them very
high trust weight (government domain = high E-A-T signal). Ensuring your
name here matches exactly is critical.

---

## Portal 5: Zurich Kotak General Insurance
**URL:** https://www.zurichkotak.com

### How to Access
1. Contact your Zurich Kotak TPA / relationship manager
2. Request access to the hospital network profile update
3. OR email: network.hospitals@zurichkotak.com (typical address)

### Fields to Audit and Fix

| Field | Must Be |
|---|---|
| Network Hospital Name | `Sri Geetha Eye Hospital` |
| Address | Full NAP standard |
| SPOC Phone | +91 85009 22266 |
| Website | https://www.srigeethaeyehospital.com |
| Speciality | Eye / Ophthalmology |

### Step-by-Step Fix
1. Email your relationship manager with subject: **"NAP Correction Request — Sri Geetha Eye Hospital Guntur"**
2. In the email body, provide the exact name, address, phone, and website as listed above
3. Request written confirmation once the profile is updated
4. Verify after 5-7 business days by searching your hospital name on the Zurich Kotak cashless hospital locator

---

## Portal 6: Best Care Health Card
**URL:** https://www.bestcarehealthcard.com

### How to Access
1. Contact Best Care via their provider helpline or email
2. Request the **empanelled hospital information update form**

### Fields to Audit and Fix

| Field | Must Be |
|---|---|
| Hospital Name | `Sri Geetha Eye Hospital` |
| Address | Full NAP standard |
| Contact Number | +91 85009 22266 |
| Website | https://www.srigeethaeyehospital.com |
| Speciality | Eye Hospital |

### Step-by-Step Fix
1. Email: info@bestcarehealthcard.com with NAP correction details
2. Attach a copy of your hospital registration certificate for verification
3. Confirm the update within 7 days

---

## Portal 7: Magicpin
**URL:** https://www.magicpin.in

### How to Access
1. Go to https://business.magicpin.in
2. Log in or claim your business listing
3. Navigate to **Edit Business Info**

### Fields to Audit and Fix

| Field | Must Be | Common Error |
|---|---|---|
| Business Name | `Sri Geetha Eye Hospital` | Short form or typo |
| Category | `Eye Hospital` or `Ophthalmologist` | Wrong category |
| Phone | `+91 85009 22266` | Old number or missing |
| Website | `https://www.srigeethaeyehospital.com` | `http://` or absent |
| Address | Full NAP standard | Missing PIN code |
| Hours | Mon-Sat 9am-8pm, Sun 9am-1pm | Not set |

### Step-by-Step Fix
1. Under **Basic Info**, fix Business Name if incorrect
2. Under **Contact Details**, update Website to `https://www.srigeethaeyehospital.com`
3. Update Phone = `+91 85009 22266`
4. Under **Address**, enter full address with PIN = `522007`
5. Under **Photos**, upload minimum 5 images
6. After saving, copy the **specific Magicpin listing URL** and update `site.ts`

---

## Portal 8: 5BestInCity
**URL:** https://www.5bestincity.com

### How to Access
1. Go to https://www.5bestincity.com
2. Search for your listing by name
3. Click **"Claim this listing"** if not claimed, or **"Edit"** if already claimed
4. Contact: support@5bestincity.com for corrections

### Fields to Audit and Fix

| Field | Must Be |
|---|---|
| Name | `Sri Geetha Eye Hospital` |
| Address | Full NAP standard |
| Phone | +91 85009 22266 |
| Website | https://www.srigeethaeyehospital.com |
| Category | Eye Hospital |

### Step-by-Step Fix
1. Email support@5bestincity.com with the subject: **"Listing Update: Sri Geetha Eye Hospital, Guntur"**
2. Provide all NAP details as above
3. Request the specific listing URL once updated
4. Update `site.ts` externalListings with the specific page URL

---

## Portal 9: Facebook Business Page
**URL:** https://www.facebook.com/srigeethaeyehospitals/

### How to Access
1. Log in to Facebook as Page admin
2. Go to your Page > **Settings** > **Page Info**

### Fields to Audit and Fix

| Field | Must Be | Common Error |
|---|---|---|
| Page Name | `Sri Geetha Eye Hospital` | Must match NAP name exactly |
| Category | `Eye Care Center` or `Hospital` | Generic category |
| Phone | `+91 85009 22266` | Format variation |
| Website | `https://www.srigeethaeyehospital.com` | `http://` or absent |
| Address | Laxmipuram, 4th Lane, Behind Harihara Cinemas, Opp. Indian Bank, Guntur, AP 522007 | Incomplete |
| About | Mention Guntur, Vitreo Retinal, 1983, ZEISS, Alcon | Generic |
| Hours | Mon-Sat: 9am-8pm, Sun: 9am-1pm | Not set |

### Step-by-Step Fix
1. Go to Page > About > Edit Page Info
2. Under **Contact**, set Website = `https://www.srigeethaeyehospital.com`
3. Under **Location**, enter the full NAP address with PIN 522007
4. Under **Hours**, set Mon-Sat 9:00-20:00, Sun 9:00-13:00
5. Under **About**, write a 150-word description mentioning:
   Guntur, Andhra Pradesh, Vitreo Retinal Surgery, ZEISS, Alcon, founded 1983
6. Verify the Page Name is `Sri Geetha Eye Hospital` (note: Facebook name changes require review)
7. Turn on **Messaging** and **Reviews** to allow patient trust signals

---

## Portal 10: Instagram Business Profile
**URL:** https://www.instagram.com/srigeethaeyehospitalofficial/

### How to Access
1. Open Instagram app or instagram.com
2. Log in as the account owner
3. Go to **Settings** > **Account** > **Edit Profile**

### Fields to Audit and Fix

| Field | Must Be |
|---|---|
| Name (Display) | `Sri Geetha Eye Hospital` |
| Username | `srigeethaeyehospitalofficial` |
| Website | `https://www.srigeethaeyehospital.com` |
| Bio | Include: Guntur, Andhra Pradesh, Vitreo Retinal Surgery, phone number |
| Category | `Eye Care Center` or `Hospital` |
| Contact Options | Phone: +91 85009 22266 |
| Business Account | Must be set to Business (not Creator or Personal) |

### Step-by-Step Fix
1. Go to **Edit Profile**
2. Under **Website**, paste: `https://www.srigeethaeyehospital.com`
3. Under **Bio** (max 150 chars), use:
   ```
   Eye Hospital, Guntur | Vitreo Retinal Surgery Centre
   Cataract | LASIK | Diabetic Eye | ZEISS | Alcon
   Since 1983 | +91 85009 22266
   ```
4. Under **Category**, select `Eye Care Center`
5. Under **Contact Options**, add phone: `+91 85009 22266`
6. Ensure the profile is set to **Business Account** (required for contact buttons)
7. Link to Facebook Page: Settings > Account > Linked Accounts > Facebook

---

## Master Verification Checklist

After completing updates in all portals, run through this final check:

### Phase 1: Immediate (Do Now)
- [ ] Justdial — website URL corrected to `https://www.srigeethaeyehospital.com`
- [ ] Practo — all 3 doctors linked to same clinic with same phone/address
- [ ] Facebook — website URL, address, hours all filled correctly
- [ ] Instagram — website URL, bio, category all updated

### Phase 2: Within 1 Week
- [ ] Bajaj Finserv — profile updated and confirmation received
- [ ] Magicpin — all fields verified, listing URL captured
- [ ] 5BestInCity — listing claimed, email confirmation received

### Phase 3: Within 2 Weeks (Government/Insurance Portals)
- [ ] ESIC — update letter submitted to Guntur ESIC office
- [ ] Zurich Kotak — email sent to relationship manager, confirmation pending
- [ ] Best Care Health Card — update email sent

### Phase 4: Update site.ts (After All Listings Are Updated)
- [ ] Replace `https://www.justdial.com` in `externalListings` with actual listing URL
- [ ] Replace `https://www.practo.com` with actual clinic listing URL
- [ ] Replace `https://www.magicpin.in` with actual listing URL
- [ ] Replace `https://www.5bestincity.com` with actual listing URL
- [ ] Redeploy the Next.js app after site.ts update
- [ ] Run: `python seo-tools/sitemap_auditor.py --mode live`

---

## HTTP vs HTTPS Correction Priority Table

This is the single most impactful fix. Search for your hospital on each
portal and verify what URL format they show in the listing:

| Portal | Check This URL Field | Required Format |
|---|---|---|
| Justdial | "Website" in listing | `https://www.srigeethaeyehospital.com` |
| Practo | "Website URL" in clinic profile | `https://www.srigeethaeyehospital.com` |
| Magicpin | "Website" under business info | `https://www.srigeethaeyehospital.com` |
| Facebook | "Website" in About section | `https://www.srigeethaeyehospital.com` |
| Instagram | "Website" in bio | `https://www.srigeethaeyehospital.com` |
| Bajaj Health | "Hospital Website" field | `https://www.srigeethaeyehospital.com` |
| ESIC | "Website" in profile form | `https://www.srigeethaeyehospital.com` |
| Zurich Kotak | "Website" in network profile | `https://www.srigeethaeyehospital.com` |
| Best Care | "Website" in empanelment form | `https://www.srigeethaeyehospital.com` |
| 5BestInCity | "Website" in listing | `https://www.srigeethaeyehospital.com` |

**Rule:** If ANY portal shows `http://srigeethaeyehospital.com` (without www,
without https) — flag it as Priority 1 and fix immediately. Google treats
`http://srigeethaeyehospital.com` and `https://www.srigeethaeyehospital.com`
as two completely different entities.

---

*End of NAP Audit Checklist — Sri Geetha Eye Hospital*
