import { Reveal } from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      data-testid="definition-section"
      className="relative overflow-hidden border-y border-forest/10 bg-parch"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cream/70 to-transparent"
      />
      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 px-6 py-24 md:px-10 md:py-28 lg:min-h-[520px] lg:grid-cols-12 lg:content-center lg:px-14 lg:py-32">
        <Reveal className="lg:col-span-4" y={16}>
          <h2
            data-testid="definition-heading"
            className="font-serif text-[48px] font-light leading-none text-ink sm:text-[56px] lg:text-[62px]"
          >
            NutriAliment
          </h2>
          <p
            data-testid="definition-pronunciation"
            className="mt-5 whitespace-nowrap font-serif text-[16px] font-light italic text-faint sm:text-[17px]"
          >
            /nu·tri·al·i·ment/ · noun
          </p>
        </Reveal>

        <div className="relative mt-16 border-t border-forest/10 pt-10 md:mt-20 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:border-0 lg:pt-1">
          <Reveal delay={0.08} y={16}>
            <div data-testid="definition-meaning">
              <p className="text-[17px] leading-[1.75] text-ink sm:text-[18px]">
                <span className="font-bold">Nutri</span>, derived from Nutrition.
              </p>
              <p className="mt-3 text-[17px] leading-[1.75] text-ink sm:text-[18px]">
                <span className="font-bold">Aliment</span>, the French word for
                Food.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16} y={16}>
            <p
              data-testid="definition-tagline"
              className="mt-10 max-w-[580px] font-serif text-[30px] font-light italic leading-[1.35] text-moss sm:text-[36px] lg:text-[40px]"
            >
              The science of nourishment through food.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
