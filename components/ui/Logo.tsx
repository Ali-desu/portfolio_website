/**
 * Personal mark: an A whose crossbar runs past both legs, echoing the
 * hairline rules used across the site.
 *
 * Kept identical to app/icon.svg so the header, the browser tab and the
 * phone home screen all show the same thing. If you change one, change both.
 */
export default function Logo({
  size = 26,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ali El Adnani"
      className={className}
    >
      <rect width="64" height="64" rx="13" fill="#B0432A" />
      <path
        d="M19.5 47 L32 17 L44.5 47"
        stroke="#FBFAF7"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 38.5 H47"
        stroke="#FBFAF7"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
