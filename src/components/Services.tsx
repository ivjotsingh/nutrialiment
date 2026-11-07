import {
  Activity,
  Soup,
  Scale,
  Baby,
  Sparkles,
  Dumbbell,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { motion, useReducedMotion } from "framer-motion";
import { waLink } from "../lib/constants";

const SERVICES = [
  {
    icon: Activity,
    title: "Clinical & Metabolic Care",
    desc: "Guided by your medical history and blood work.",
    tags: ["Diabetes", "PCOS", "Thyroid", "Cholesterol"],
  },
  {
    icon: Soup,
    title: "Gut & Digestive Health",
    desc: "Find triggers and build a gut-friendly routine.",
    tags: ["Bloating", "Digestion"],
  },
  {
    icon: Scale,
    title: "Healthy Weight Management",
    desc: "Sustainable results without crash diets.",
    tags: ["Fat loss", "Body composition"],
  },
  {
    icon: Baby,
    title: "Women's & Family Nutrition",
    desc: "Hormones, pregnancy, postpartum and childhood.",
    tags: ["Pregnancy", "Postpartum", "Kids"],
  },
  {
    icon: Sparkles,
    title: "Everyday Wellbeing",
    desc: "Fix nutritional gaps and lift your energy.",
    tags: ["Energy", "Micronutrients"],
  },
  {
    icon: Dumbbell,
    title: "Sports & Performance Nutrition",
    desc: "Fuel, recovery and performance for your sport.",
    tags: ["Training fuel", "Recovery"],
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="where-we-help"
      data-testid="services-section"
      className="grain relative bg-pine"
    >
      <div className="mx-auto max-w-[1480px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal className="text-center">
          <p className="eyebrow text-sage">Where we can help</p>
          <h2 className="mx-auto mt-6 max-w-[700px] font-serif text-[42px] font-light leading-[1.15] text-cream sm:text-[54px]">
            What would you like to{" "}
            <span className="italic text-sage">improve?</span>
          </h2>
          <p className="mt-5 text-[16px] text-cream/60">
            Tap any area to enquire directly on WhatsApp.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i} testid={`service-card-${i}`}>
              <motion.a
                data-testid={`service-link-${i}`}
                href={waLink(
                  `Hi Mansi, I'd like to know more about ${s.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col rounded-[22px] border border-cream/10 bg-paper p-8 shadow-[0_12px_32px_-24px_rgba(8,18,7,0.3)] transition-[border-color,box-shadow] duration-300 hover:border-sage/40 hover:shadow-[0_26px_54px_-28px_rgba(8,18,7,0.42)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sagebg text-moss">
                    <s.icon size={24} strokeWidth={1.6} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-forest"
                  />
                </div>
                <h3 className="mt-9 font-serif text-[26px] font-normal leading-[1.25] text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-soft">
                  {s.desc}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-sagebg px-4 py-2 text-[12px] font-medium text-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
