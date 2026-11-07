import { Reveal } from "./Reveal";

const FEATURED = [
  {
    quote:
      "As a cyclist training for competitive events, my goal was to lose weight while simultaneously building strength, a tough balance to strike. Thanks to their personalised nutrition plans, I lost 9 kg and felt stronger and more energetic. They tailored my diet around my lifestyle, including frequent travel for work.",
    name: "Neelmani Bhardwaj",
    tag: "Sports nutrition / Cycling",
  },
  {
    quote:
      "The personalised nutritional plans not only supported my fitness goals but also played a crucial role during my pregnancy. Their well-planned meals, frequent communication and special care made all the difference. Thanks to the team, including Mansi, I felt confident and healthy throughout my journey.",
    name: "Nishat Lakhani",
    tag: "Pregnancy nutrition",
  },
  {
    quote:
      "What really stood out was her detailed approach. It began with a comprehensive blood test, and Mansi designed a plan that fit seamlessly into my corporate lifestyle. With her guidance, I reduced my body-fat percentage and saw improvements in my gut health. I later extended my programme for another six months.",
    name: "Shagun Vaid",
    tag: "Gut health / Body composition",
  },
  {
    quote:
      "Mansi gently guided me through introducing semi-solid and solid foods to my baby, making the process smooth and stress-free. She also helped us with my little one's gut issues through a thoughtful food plan. With her support, my baby is now healthy, active and reaching milestones. It means the world to me as a parent.",
    name: "Nishat Lakhani",
    tag: "Infant & child nutrition",
  },
];

const MORE = [
  {
    quote:
      "The diet plan not only helped me achieve my weight-loss goals, but also drastically improved my sleep quality. Their attention to detail and ongoing support made the process seamless. I appreciated Ayesha and Mansi being willing to adjust the plan to match my goals and preferences.",
    name: "Shivom Munjal",
    tag: "Weight loss / Sleep",
  },
  {
    quote:
      "After a thorough assessment and medical tests, the team created a personalised plan that significantly improved my hair, skin and overall health. I appreciated the focus on lifestyle changes rather than weight loss alone. The experience was so encouraging that I wanted to continue for a few more months.",
    name: "Kritika Rana",
    tag: "Overall wellbeing / Skin & hair",
  },
];

function QuoteCard({
  quote,
  name,
  tag,
  testid,
}: {
  quote: string;
  name: string;
  tag: string;
  testid: string;
}) {
  return (
    <div
      data-testid={testid}
      className="flex h-full flex-col rounded-[22px] border border-sage/25 bg-pine/45 p-8 shadow-[0_18px_46px_-34px_rgba(0,0,0,0.5)] transition-[border-color,background-color,transform] duration-300 motion-safe:hover:-translate-y-1 hover:border-sage/45 hover:bg-pine/60 sm:p-10"
    >
      <span className="font-serif text-[34px] leading-none text-sage" aria-hidden="true">
        &#8221;
      </span>
      <p className="mt-5 font-serif text-[19px] font-light leading-[1.65] text-cream/90">
        {quote}
      </p>
      <div className="mt-auto flex items-center gap-4 pt-8">
        <span className="h-px w-9 bg-sage/50" />
        <div>
          <p className="text-[14px] font-bold text-cream">{name}</p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/80">
            {tag}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Stories() {
  return (
    <section id="stories" data-testid="stories-section" className="grain relative bg-forest">
      <div className="mx-auto max-w-[1480px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <p className="eyebrow text-sage">Their words</p>
          <h2 className="mt-6 font-serif text-[42px] font-light text-cream sm:text-[54px]">
            Real people. <span className="italic text-sage">Thoughtful care.</span>
          </h2>
          <p className="mt-5 text-[16px] text-cream/60">
            Feedback shared during Mansi's earlier professional work.
          </p>
        </Reveal>

        <div className="mt-16 space-y-6">
          <Reveal>
            <QuoteCard {...FEATURED[0]} testid="story-card-0" />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal delay={0.08}>
              <QuoteCard {...FEATURED[1]} testid="story-card-1" />
            </Reveal>
            <Reveal delay={0.16}>
              <QuoteCard {...FEATURED[2]} testid="story-card-2" />
            </Reveal>
          </div>
          <Reveal>
            <QuoteCard {...FEATURED[3]} testid="story-card-3" />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-24">
          <p className="eyebrow text-sage">More client experiences</p>
          <h3 className="mt-6 font-serif text-[36px] font-light text-cream sm:text-[44px]">
            More stories. <span className="italic text-sage">Real progress.</span>
          </h3>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {MORE.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <QuoteCard {...t} testid={`story-more-card-${i}`} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
