import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { BOOK_LINK } from "../lib/constants";

const QUALIFICATIONS = [
  "Bachelor's degree in Food, Nutrition & Dietetics, IHM, Delhi University",
  "Postgraduate in Dietetics, Food & Nutrition, Institute of Hotel Management, PUSA",
  "ACE Fitness and Sports Nutrition certification",
  "Certified Supplement Strategist",
  "TTC Yoga, certified by Yoga Alliance USA",
];

const ASSOCIATIONS = [
  { img: "/assets/logo-fortis.png", alt: "Fortis", sub: "Clinical Nutritionist" },
  { img: "/assets/logo-qua.png", alt: "QUA Nutrition", sub: "Senior Nutritionist" },
  { img: "/assets/logo-fitnessfirst.svg", alt: "Fitness First", sub: "Sports Nutrition" },
  { img: null, alt: "IHM PUSA — New Delhi", sub: "Postgraduate, Dietetics", textMark: true },
  { img: "/assets/logo-ace.svg", alt: "American Council on Exercise", sub: "Certified, Sports Nutrition" },
  { img: "/assets/logo-yogaalliance.png", alt: "Yoga Alliance", sub: "TTC Yoga Certified" },
];

export default function WhyMansi() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why-mansi"
      data-testid="why-mansi-section"
      className="border-y border-forest/10 bg-paper"
    >
      <div className="mx-auto max-w-[1480px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2
                data-testid="why-mansi-heading"
                className="max-w-[620px] font-serif text-[48px] font-light leading-[1.05] text-ink sm:text-[58px] lg:text-[64px]"
              >
                Why Mansi as your nutritionist
              </h2>
              <p
                data-testid="why-mansi-subheading"
                className="mt-8 font-serif text-[29px] font-light leading-[1.18] text-ink sm:text-[34px] lg:text-[38px]"
              >
                Experience you can trust.
                <br />
                <span className="italic text-moss">Care built around you.</span>
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-12 grid grid-cols-3 divide-x divide-forest/10 border-y border-forest/10">
                {[
                  ["8+", "Years in nutrition"],
                  ["1,500+", "Clients guided"],
                  ["5", "Specialist credentials"],
                ].map(([num, label]) => (
                  <div key={label} className="px-4 py-7 text-center first:pl-0 last:pr-0">
                    <p className="font-serif text-[32px] font-light leading-none text-ink">
                      {num}
                    </p>
                    <p className="mt-2.5 text-[11px] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-faint">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="eyebrow mt-14 text-faint">Associations &amp; credentials</p>
              <div
                data-testid="associations-grid"
                className="mt-7 grid grid-cols-2 overflow-hidden rounded-[22px] border border-forest/10 bg-cream shadow-[0_18px_46px_-34px_rgba(29,44,26,0.35)]"
              >
                {ASSOCIATIONS.map((a, i) => (
                  <div
                    key={a.alt}
                    className={`flex flex-col items-center justify-center gap-3 px-6 py-9 ${
                      i % 2 === 0 ? "border-r border-forest/10" : ""
                    } ${i < 4 ? "border-b border-forest/10" : ""}`}
                  >
                    {a.textMark ? (
                      <span className="text-center">
                        <span className="block text-[26px] font-extrabold tracking-[0.06em] text-moss">
                          IHM PUSA
                        </span>
                        <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.3em] text-faint">
                          New Delhi
                        </span>
                      </span>
                    ) : (
                      <img
                        src={a.img!}
                        alt={a.alt}
                        loading="lazy"
                        className="h-12 w-auto max-w-[150px] object-contain"
                      />
                    )}
                    <span className="font-serif text-[14px] italic text-soft">
                      {a.sub}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="text-[18px] leading-[1.75] text-ink">
                Clinical nutrition, sports nutrition, supplements and lifestyle
                coaching, connected in one 360° plan.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="eyebrow mt-14 text-faint">
                Qualifications &amp; certifications
              </p>
              <ul className="mt-7 divide-y divide-forest/10 border-y border-forest/10">
                {QUALIFICATIONS.map((q) => (
                  <li key={q} className="flex items-start gap-4 py-5">
                    <Check size={17} strokeWidth={2.2} className="mt-1 shrink-0 text-moss" />
                    <span className="text-[16px] leading-[1.65] text-ink">{q}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="eyebrow mt-14 text-faint">Why this experience matters</p>
              <h3 className="mt-6 font-serif text-[34px] font-light leading-[1.25] text-ink sm:text-[38px]">
                Clinical knowledge, applied to{" "}
                <span className="italic text-moss">your everyday life.</span>
              </h3>
              <p className="mt-5 max-w-[520px] text-[16px] leading-[1.75] text-soft">
                From Fortis Hospital to sports academies, Mansi has spent eight
                years guiding athletes, families and complex health cases.
              </p>
              <motion.a
                href={BOOK_LINK}
                data-testid="why-mansi-book-button"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-8 py-[18px] text-[15px] font-semibold text-cream transition-colors duration-300 hover:bg-pine"
              >
                Book a free consultation
                <ArrowRight size={17} strokeWidth={2} />
              </motion.a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
