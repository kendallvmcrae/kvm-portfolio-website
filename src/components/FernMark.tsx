interface FernMarkProps {
  className?: string;
}

/** Simplified 3-leaf resurrection fern mark — one curled, one semi-unfurled, one fully
 * unfurled — as a single-weight black outline icon, echoing the dormant-to-revived cycle
 * that the fuller FernColony animates. Static; sized for nav/favicon use. */
export function FernMark({ className }: FernMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* fully unfurled */}
      <path
        d="M12 21C10.5 15 7 10 4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* semi-unfurled */}
      <path
        d="M12 21C11.3 15.5 10.5 10.5 12 5.5C12.4 4.3 13.2 4.4 12.8 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* curled */}
      <path
        d="M12 21C13.5 16.5 16 14.5 17.5 15C19.2 15.6 18.3 18 16.3 17.6C14.8 17.3 14.9 15.3 16.5 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* base */}
      <circle cx="12" cy="21.5" r="1.1" fill="currentColor" />
    </svg>
  );
}
