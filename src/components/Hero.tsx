import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { MaskedLines } from "./Reveal";
import { BOOK_LINK } from "../lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

const CREDENTIALS = [
  "PG in Dietetics & Nutrition",
  "ACE Certified: Fitness & Sports Nutrition",
  "Certified Supplement Strategist",
  "Yoga TTC: Yoga Alliance USA",
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden bg-cream pt-[124px]"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-10 pb-14 pt-10 lg:min-h-[calc(100vh-124px)] lg:grid-cols-12 lg:gap-0 lg:pb-16 lg:pt-8">
          {/* Left column */}
          <div className="relative z-10 lg:col-span-6">
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              data-testid="hero-eyebrow"
              className="eyebrow text-soft"
            >
              Clinical &amp; Sports Nutritionist: Mansi Chadha
            </motion.p>

            <h1
              data-testid="hero-heading"
              className="mt-8 font-serif text-[54px] font-light leading-[1.05] text-ink sm:text-[68px] lg:text-[84px]"
            >
              <MaskedLines
                baseDelay={0.35}
                lines={[
                  <>Your Body Is</>,
                  <>Unique.</>,
                  <>
                    <span className="italic text-moss">Your Nutrition</span>
                  </>,
                  <>Should Be Too.</>,
                ]}
              />
            </h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
              data-testid="hero-subtext"
              className="mt-8 max-w-[440px] text-[17px] leading-[1.7] text-soft"
            >
              I believe in bio-individuality. Every plan is personalised,
              science-backed and built around you.
            </motion.p>

            <motion.a
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              data-testid="hero-book-consultation-button"
              href={BOOK_LINK}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-forest px-9 py-[19px] text-[15px] font-semibold text-cream transition-colors duration-300 hover:bg-pine"
            >
              Book a free consultation
              <ArrowRight size={17} strokeWidth={2} />
            </motion.a>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.25 }}
              data-testid="hero-stats"
              className="mt-16 grid max-w-[520px] grid-cols-3 gap-3 border-t border-forest/10 pt-8 sm:gap-6"
            >
              {[
                ["8+", "Years of practice"],
                ["1,500+", "Clients guided"],
                ["1:1", "Support from Mansi"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="font-serif text-[26px] font-light leading-none text-ink sm:text-[36px]">
                    {num}
                  </p>
                  <p className="mt-2.5 text-[10px] font-semibold uppercase leading-[1.5] tracking-[0.12em] text-faint sm:text-[11px] sm:tracking-[0.16em]">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column */}
          <div className="relative mt-8 lg:col-span-6 lg:mt-0">
            <div className="relative ml-auto w-full max-w-[620px]">
              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : { clipPath: "inset(100% 0 0 0)", opacity: 0.4 }
                }
                animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
                transition={{ duration: 1.3, delay: 0.45, ease: EASE }}
                className="relative overflow-hidden rounded-b-[28px] rounded-t-[999px] bg-parch"
              >
                <motion.img
                  src="/assets/mansi-hero.jpg"
                  alt="Mansi Chadha, Clinical & Sports Nutritionist"
                  data-testid="hero-portrait"
                  fetchPriority="high"
                  width={880}
                  height={1169}
                  initial={shouldReduceMotion ? false : { scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, delay: 0.45, ease: EASE }}
                  className="aspect-[7/9] w-full object-cover object-[50%_15%] lg:aspect-auto lg:h-[min(78vh,780px)]"
                />
              </motion.div>

              {/* Credential card */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
                data-testid="hero-credentials-card"
                className="absolute bottom-4 left-3 right-3 rounded-2xl bg-forest p-5 text-cream shadow-[0_24px_60px_-16px_rgba(29,44,26,0.45)] sm:bottom-6 sm:left-[-42px] sm:right-auto sm:w-[400px] sm:p-7 lg:bottom-6 lg:left-[-64px]"
              >
                <p className="font-serif text-[24px] italic text-cream">
                  Mansi Chadha
                </p>
                <div className="my-5 h-px bg-cream/15" />
                <ul className="space-y-3">
                  {CREDENTIALS.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-[12px] leading-relaxed text-cream/80 sm:text-[13px]"
                    >
                      <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-sage" />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        data-testid="hero-scroll-indicator"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-faint lg:block"
        aria-label="Scroll down"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
