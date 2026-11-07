import { ClipboardList, TestTubes, CalendarDays, Users, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  { icon: ClipboardList, label: ["Consultation &", "Assessment"] },
  { icon: TestTubes, label: ["Blood, Gut & DNA", "Testing"] },
  { icon: CalendarDays, label: ["Personalised Monthly", "Diet Plans"] },
  { icon: Users, label: ["Weekly Follow-ups for", "Tracking"] },
  { icon: MessageCircle, label: ["WhatsApp Support"] },
];

export default function Process() {
  return (
    <section id="process" data-testid="process-section" className="grain relative bg-forest">
      <div className="mx-auto max-w-[1480px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal className="text-center">
          <p className="eyebrow text-sage">Our process</p>
          <h2 className="mt-6 font-serif text-[42px] font-light text-cream sm:text-[54px]">
            Five steps. <span className="italic text-sage">One clear plan.</span>
          </h2>
        </Reveal>

        <div className="relative mt-20 grid grid-cols-2 gap-y-14 sm:grid-cols-3 lg:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-[52px] hidden h-px bg-cream/15 lg:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.label[0]} delay={0.1 * i} className="relative flex flex-col items-center text-center">
              <div className="relative">
                <span className="absolute -left-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-sage text-[12px] font-bold text-forest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-[104px] w-[104px] items-center justify-center rounded-full border border-sage/30 bg-pine/70 text-sage shadow-[inset_0_0_0_8px_rgba(255,255,255,0.015)] transition-[border-color,background-color] duration-300 hover:border-sage/60 hover:bg-pine">
                  <s.icon size={34} strokeWidth={1.4} />
                </span>
              </div>
              <p className="mt-6 font-serif text-[21px] font-light leading-[1.35] text-cream">
                {s.label[0]}
                {s.label[1] && (
                  <>
                    <br />
                    {s.label[1]}
                  </>
                )}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
