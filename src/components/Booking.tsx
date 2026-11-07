import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { waLink } from "../lib/constants";

export default function Booking() {
  return (
    <section
      id="book"
      data-testid="booking-section"
      className="border-y border-forest/10 bg-[#f4f5ef]"
    >
      <div className="mx-auto max-w-[1480px] px-6 py-24 md:px-10 lg:px-14 lg:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7" y={16}>
            <p className="eyebrow text-faint">Book a free consultation</p>
            <h2 className="mt-5 font-serif text-[46px] font-light leading-[1.08] text-ink sm:text-[58px] lg:text-[68px]">
              Pick a time that <span className="italic text-moss">suits you.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08} y={16} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-[480px] text-[16px] leading-[1.75] text-soft lg:text-[17px]">
              A relaxed 30-minute call with Mansi. No obligation — just a clear
              picture of what your plan could look like.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={12} className="mx-auto mt-8 flex max-w-[980px] flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
          <p className="text-[14px] text-soft">Can’t find a slot that works?</p>
          <a
            data-testid="booking-whatsapp-button"
            href={waLink("Hi Mansi, I couldn't find a consultation slot that works for me.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[#1ebd5a] bg-[#25d366] px-6 py-3.5 text-[14px] font-semibold text-[#123d22] shadow-[0_12px_28px_-18px_rgba(37,211,102,0.72)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#20c760] hover:shadow-[0_16px_34px_-18px_rgba(37,211,102,0.8)] active:scale-[0.98]"
          >
            <MessageCircle size={17} />
            Message Mansi on WhatsApp
            <ArrowRight size={17} />
          </a>
        </Reveal>

        <Reveal delay={0.12} y={16}>
          <div className="mx-auto mt-6 max-w-[980px] rounded-[28px] border border-forest/10 bg-[#dfe2da] p-2.5 shadow-[0_28px_70px_-42px_rgba(29,44,26,0.38)] sm:p-4">
            <CalendlyEmbed />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
