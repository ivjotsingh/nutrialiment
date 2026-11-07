export function Logo({
  light = false,
  testid = "brand-logo",
}: {
  light?: boolean;
  testid?: string;
}) {
  const ring = light ? "#f6f4ef" : "#1d2c1a";
  return (
    <a
      href="#top"
      data-testid={testid}
      className="flex shrink-0 items-center gap-3"
      aria-label="NutriAliment by Mansi — home"
    >
      <svg width="42" height="42" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="29" fill="none" stroke={ring} strokeWidth="2.4" />
        <path
          d="M32 46c0-11 0-17-1.2-23M30.8 23c-4.8-2.4-8.6-1.2-11 2.4 3.6 2.4 8.4 2.4 11-2.4zm2.4 3.6c1.2-6 4.8-9.6 10.8-10.8 0 6-3.6 10.8-10.8 10.8z"
          fill="none"
          stroke={ring}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-serif text-[22px] tracking-[0.01em] ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          NutriAliment
        </span>
        <span
          className={`mt-1 block text-[9px] font-bold tracking-[0.42em] uppercase ${
            light ? "text-sage" : "text-faint"
          }`}
        >
          by Mansi
        </span>
      </span>
    </a>
  );
}
