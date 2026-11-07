import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, ChevronDown, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink, INSTAGRAM_URL, EMAIL_URL } from "../lib/constants";

const GOALS = [
  "Weight management",
  "Gut & digestive health",
  "Clinical & metabolic care",
  "Women's & family nutrition",
  "Everyday wellbeing",
  "Sports & performance nutrition",
  "Something else",
];

const CONTACTS = [
  {
    icon: MessageCircle,
    title: "WhatsApp · +91 99531 75709",
    sub: "Fastest way to reach the team",
    href: waLink("Hi Mansi, I'd like to know more."),
    testid: "contact-whatsapp",
  },
  {
    icon: Instagram,
    title: "@nutrialiment.mansi",
    sub: "Daily food-first inspiration",
    href: INSTAGRAM_URL,
    testid: "contact-instagram",
  },
  {
    icon: Mail,
    title: "hello@nutrialiment.in",
    sub: "Open a new email to Mansi",
    href: EMAIL_URL,
    testid: "contact-email",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", goal: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      "Hi Mansi, I'd like to book a consultation.",
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.goal && `Primary goal: ${form.goal}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "w-full rounded-xl border border-forest/15 bg-cream/70 px-4 py-3.5 text-[15px] text-ink outline-none transition-[background-color,border-color,box-shadow] duration-300 focus:border-moss/60 focus:bg-paper focus:shadow-[0_0_0_3px_rgba(62,82,55,0.08)]";
  const labelCls =
    "mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-faint";

  return (
    <section id="contact" data-testid="contact-section" className="bg-cream">
      <div className="mx-auto max-w-[1480px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow text-faint">Ready to begin?</p>
              <h2 className="mt-6 font-serif text-[46px] font-light leading-[1.1] text-ink sm:text-[58px]">
                Let's talk about{" "}
                <span className="italic text-moss">your plate.</span>
              </h2>
              <p className="mt-6 max-w-[420px] text-[17px] leading-[1.7] text-soft">
                Share a few details and Mansi will get back to you within 24
                hours. No obligation.
              </p>
            </Reveal>

            <div className="mt-12 space-y-4">
              {CONTACTS.map((c, i) => (
                <Reveal key={c.title} delay={0.08 * i}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={c.testid}
                    className="group flex items-center gap-5 rounded-2xl border border-forest/10 bg-paper px-6 py-5 transition-[border-color,box-shadow,transform] duration-300 motion-safe:hover:-translate-y-0.5 hover:border-moss/25 hover:shadow-[0_18px_40px_-26px_rgba(29,44,26,0.32)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sagebg text-moss">
                      <c.icon size={19} strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-bold text-ink">
                        {c.title}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-faint">
                        {c.sub}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="ml-auto shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-forest"
                    />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              data-testid="contact-form"
              className="rounded-[22px] border border-forest/10 bg-paper p-8 shadow-[0_24px_60px_-34px_rgba(29,44,26,0.3)] sm:p-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    data-testid="form-name-input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    type="tel"
                    required
                    pattern="^\+[1-9]\d{1,14}(?:[ -]\d+)*$"
                    title="Enter a valid phone number with country code, e.g. +91 98765 43210"
                    data-testid="form-phone-input"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="email" className={labelCls}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  data-testid="form-email-input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email address"
                  className={inputCls}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="goal" className={labelCls}>
                  Primary goal
                </label>
                <div className="relative">
                  <select
                    id="goal"
                    name="goal"
                    required
                    data-testid="form-goal-select"
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value })}
                    className={`${inputCls} pr-11 ${form.goal ? "" : "text-[#a3a89d]"}`}
                  >
                    <option value="" disabled>
                      Select a goal
                    </option>
                    {GOALS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-faint"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className={labelCls}>
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  data-testid="form-message-textarea"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share anything helpful"
                  rows={4}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <button
                type="submit"
                data-testid="form-submit-button"
                className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-forest px-8 py-[18px] text-[15px] font-semibold text-cream transition-colors duration-300 hover:bg-pine"
              >
                Send on WhatsApp
                <ArrowUpRight size={17} strokeWidth={2} />
              </button>
              <p className="mt-4 text-center text-[12px] text-faint">
                Your details stay private. No spam, ever.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
