import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { waLink } from "../lib/constants";

const WHATSAPP_BOOK = waLink("Hi Mansi, I'd like to book a free consultation.");

const LINKS = [
  { label: "Where we help", href: "#where-we-help" },
  { label: "Process", href: "#process" },
  { label: "Programme", href: "#programme" },
  { label: "Why Mansi", href: "#why-mansi" },
  { label: "Stories", href: "#stories" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <motion.header
      data-testid="navbar"
      initial={shouldReduceMotion ? false : { y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-forest/10 transition-[background-color,box-shadow] duration-500 ${
        scrolled
          ? "bg-cream/90 shadow-[0_8px_30px_-24px_rgba(29,44,26,0.42)] backdrop-blur-xl"
          : "bg-cream/95"
      }`}
    >
      <div className="mx-auto flex h-[84px] max-w-[1480px] items-center justify-between px-6 lg:px-12">
        <Logo testid="navbar-brand-logo" />

        <nav
          data-testid="nav-links"
          className="hidden items-center gap-9 lg:flex"
          aria-label="Primary"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative text-[15px] font-medium text-soft transition-colors duration-300 hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-forest transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            data-testid="nav-book-consultation-button"
            href={WHATSAPP_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="hidden items-center gap-2.5 rounded-full bg-forest px-6 py-3.5 text-[14px] font-semibold text-cream transition-colors duration-300 hover:bg-pine sm:inline-flex"
          >
            Book consultation
            <ArrowRight size={16} strokeWidth={2} />
          </motion.a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/15 text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-forest/10 bg-cream lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-serif text-2xl text-ink transition-colors hover:bg-sagebg"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_BOOK}
                data-testid="mobile-nav-book-consultation-button"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-[15px] font-semibold text-cream"
              >
                Book consultation <ArrowRight size={16} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
