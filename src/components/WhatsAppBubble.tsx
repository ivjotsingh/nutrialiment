import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { waLink } from "../lib/constants";

const SESSION_KEY = "nutrialiment_mansi_chat_prompt_shown";
const CHAT_LINK = waLink("Hi Mansi, I'd like to know more.");

export default function WhatsAppBubble() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = window.setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, 8000);
    return () => window.clearTimeout(timer);
  }, []);

  const launchChat = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    window.open(CHAT_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            data-testid="whatsapp-popup-card"
            className="relative w-[min(360px,calc(100vw-32px))] rounded-[26px] border border-forest/10 bg-paper p-3.5 pr-12 shadow-[0_24px_60px_-22px_rgba(29,44,26,0.38)]"
          >
            <a
              href={CHAT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="whatsapp-popup-chat-link"
              aria-label="Open WhatsApp chat with Mansi"
              className="flex items-center gap-4 rounded-[18px] focus-visible:outline-offset-4"
            >
              <span className="relative shrink-0">
                <img
                  src="/assets/mansi-hero.jpg"
                  alt="Mansi"
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-16 w-16 rounded-full border border-forest/10 object-cover object-top"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-paper bg-[#25d366]"
                />
              </span>
              <span className="min-w-0">
                <span className="block text-[18px] font-bold leading-tight text-ink">
                  Hi, I’m Mansi.
                </span>
                <span className="mt-1 block text-[15px] leading-snug text-soft">
                  Questions? Chat with me
                </span>
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat prompt"
              data-testid="whatsapp-popup-close-button"
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-faint transition-[background-color,color,transform] duration-300 hover:bg-sagebg hover:text-ink active:scale-[0.96]"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={launchChat}
        data-testid="whatsapp-bubble"
        aria-label="Chat on WhatsApp"
        className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#25d366] shadow-[0_14px_30px_-10px_rgba(37,211,102,0.55)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-10px_rgba(37,211,102,0.62)] active:scale-[0.96]"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </button>
    </div>
  );
}