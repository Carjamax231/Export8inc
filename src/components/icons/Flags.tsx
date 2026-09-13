type FlagProps = {
  className?: string;
  title?: string;
};

/** Banderas SVG simplificadas para UI (no emoji). */

export function FlagUSA({ className, title = "United States" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect width="24" height="16" rx="1.5" fill="#B22234" />
      <path
        fill="#fff"
        d="M0 1.78h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24V16H0z"
      />
      <rect width="10" height="8.6" fill="#3C3B6E" />
    </svg>
  );
}

export function FlagSpain({ className, title = "Spain" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect width="24" height="16" rx="1.5" fill="#AA151B" />
      <rect y="4" width="24" height="8" fill="#F1BF00" />
    </svg>
  );
}

export function FlagVenezuela({ className, title = "Venezuela" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect width="24" height="16" rx="1.5" fill="#00247D" />
      <rect width="24" height="5.33" fill="#FFCC00" />
      <rect y="10.67" width="24" height="5.33" fill="#CF142B" />
      <circle cx="12" cy="8" r="1.1" fill="#fff" />
      <circle cx="9.8" cy="8.6" r="0.7" fill="#fff" />
      <circle cx="14.2" cy="8.6" r="0.7" fill="#fff" />
    </svg>
  );
}
