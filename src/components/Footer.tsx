import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { waLink, INSTAGRAM_URL, EMAIL_ADDRESS, EMAIL_URL } from "../lib/constants";

const NAV = [
  { label: "Where we help", href: "#where-we-help" },
  { label: "Process", href: "#process" },
  { label: "Programme", href: "#programme" },
  { label: "Why Mansi", href: "#why-mansi" },
  { label: "Stories", href: "#stories" },
];

const MARQUEE_ITEMS = [
  "Bio-individuality",
  "Science-backed plans",
  "Clinical & sports nutrition",
  "One-to-one with Mansi",
  "Food first",
  "Sustainable results",
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="grain relative overflow-hidden bg-forest">
      {/* marquee */}
      <div className="border-b border-cream/10 py-7" aria-hidden="true">
        <div className="animate-marquee flex w-max items-center gap-10">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="whitespace-nowrap font-serif text-[26px] font-light italic text-sage">
                {item}
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0 text-sage/50">
                <path
                  d="M7 13c0-3.5 0-5.5-.3-7.5M6.7 5.5C5.2 4.8 4 5 3.3 6c1.1.7 2.6.7 3.4-.5zm.7 1c.4-1.8 1.5-2.9 3.3-3.3 0 1.8-1.1 3.3-3.3 3.3z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1480px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light testid="footer-brand-logo" />
            <p className="mt-6 max-w-[340px] font-serif text-[24px] font-light italic leading-[1.4] text-cream/80">
              The science of nourishment through food.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-sage">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-testid={`footer-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[15px] text-cream/70 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-sage">
              Reach out
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={waLink(
                    "Hi Mansi, I'd like to know more about your nutrition programme and how it works.",
                  )}
                  data-testid="footer-whatsapp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[15px] text-cream/70 transition-colors hover:text-cream"
                >
                  WhatsApp · +91 99531 75709
                  <ArrowUpRight size={14} className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  data-testid="footer-instagram-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[15px] text-cream/70 transition-colors hover:text-cream"
                >
                  @nutrialiment.mansi
                  <ArrowUpRight size={14} className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_URL}
                  data-testid="footer-email-link"
                  className="group inline-flex items-center gap-2 text-[15px] text-cream/70 transition-colors hover:text-cream"
                >
                  {EMAIL_ADDRESS}
                  <ArrowUpRight size={14} className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[13px] text-cream/50">
            © {new Date().getFullYear()} NutriAliment by Mansi. All rights
            reserved.
          </p>
          <p className="text-[13px] text-cream/50">
            Clinical &amp; Sports Nutritionist · New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  );
}
