type Props = { className?: string };

export function FacebookIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 9H15V6.5h-1.5C11.6 6.5 10.5 7.6 10.5 9v1.5H9V13h1.5v7.5h2.5V13h2l.5-2.5h-2.5V9c0-.28.22-.5.5-.5z" />
    </svg>
  );
}

export function InstagramIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2.1C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.9 2.9 0 0 0-2 2.1C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2.1c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.9 2.9 0 0 0 2-2.1C22 15.2 22 12 22 12Z" />
      <path d="M10 15.2V8.8L15.5 12Z" fill="var(--color-brand-900, #0b3b36)" />
    </svg>
  );
}

export function XIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4 3h3.6l4 5.4L16.2 3H20l-6.3 8.1L20.4 21H16.8l-4.3-5.8L7.5 21H4l6.7-8.6Z" />
    </svg>
  );
}
