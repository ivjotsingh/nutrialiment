import { FlaskConical, Pill, WheatOff } from "lucide-react";
import { Reveal } from "./Reveal";

export default function Included() {
  return (
    <section id="programme" data-testid="included-section" className="bg-cream">
      <div className="mx-auto max-w-[1480px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-faint">Also included</p>
            <h2 className="mt-6 font-serif text-[42px] font-light text-ink sm:text-[54px]">
              More than a <span className="italic text-moss">diet chart</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[17px] leading-[1.7] text-soft">
              One-to-one with Mansi. No juniors, no handoffs.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Photo card */}
          <Reveal testid="included-photo-card" className="h-full">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[22px] border border-forest/10 shadow-[0_20px_48px_-32px_rgba(29,44,26,0.35)]">
              <img
                src="/assets/food-flatlay.jpg"
                alt="Healthy food flat-lay — kale, banana, apple, walnuts and a water bottle"
                className="absolute inset-0 h-full w-full object-cover object-[30%_50%] lg:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
                  <WheatOff size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-serif text-[28px] font-normal leading-[1.3] text-ink">
                  Customised recipes &amp; eating guidance
                </h3>
                <p className="mt-2 text-[15px] text-soft">
                  Portions, swaps, travel and dining out, made simple.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1} testid="included-card-analysis" className="flex-1">
              <div className="flex h-full flex-col justify-center rounded-[22px] border border-forest/10 bg-paper p-8 shadow-[0_14px_36px_-28px_rgba(29,44,26,0.32)] transition-[border-color,box-shadow] duration-300 hover:border-moss/25 hover:shadow-[0_22px_46px_-30px_rgba(29,44,26,0.4)] sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
                  <FlaskConical size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-serif text-[26px] font-normal leading-[1.35] text-ink">
                  Analysis of blood reports and Body composition assessment
                </h3>
              </div>
            </Reveal>
            <Reveal delay={0.2} testid="included-card-supplements" className="flex-1">
              <div className="flex h-full flex-col justify-center rounded-[22px] border border-forest/10 bg-paper p-8 shadow-[0_14px_36px_-28px_rgba(29,44,26,0.32)] transition-[border-color,box-shadow] duration-300 hover:border-moss/25 hover:shadow-[0_22px_46px_-30px_rgba(29,44,26,0.4)] sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
                  <Pill size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-serif text-[26px] font-normal leading-[1.35] text-ink">
                  Supplement strategy &amp; superfoods
                </h3>
                <p className="mt-2 text-[15px] text-soft">
                  Only what your reports and intake call for.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
