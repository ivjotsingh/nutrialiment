import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, RefreshCw } from "lucide-react";
import { CALENDLY_URL } from "../lib/constants";

const SCRIPT_ID = "calendly-widget-script";
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        resize?: boolean;
      }) => void;
    };
  }
}

type WidgetState = "loading" | "ready" | "error";

export const CalendlyEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const readyRef = useRef(false);
  const widgetTimeoutRef = useRef<number>();
  const [state, setState] = useState<WidgetState>("loading");
  const [attempt, setAttempt] = useState(0);
  const [bookingStatus, setBookingStatus] = useState("");
  const [detailsStep, setDetailsStep] = useState(false);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;
      const eventName = event.data?.event;
      if (typeof eventName !== "string" || !eventName.startsWith("calendly.")) return;

      readyRef.current = true;
      window.clearTimeout(widgetTimeoutRef.current);
      setState("ready");

      if (eventName === "calendly.date_and_time_selected") {
        setDetailsStep(true);
        setBookingStatus("Date and time selected. Continue in the calendar to confirm.");
      }
      if (eventName === "calendly.event_scheduled") {
        setBookingStatus("Your consultation is booked.");
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let scriptTimeout: number | undefined;
    readyRef.current = false;
    setState("loading");
    setBookingStatus("");
    setDetailsStep(false);

    const fail = () => {
      if (!cancelled && !readyRef.current) setState("error");
    };
    const initialize = () => {
      if (!window.Calendly || cancelled) return fail();
      window.clearTimeout(scriptTimeout);
      container.replaceChildren();
      try {
        window.Calendly.initInlineWidget({
          url: `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=fdfcfa&text_color=182415&primary_color=1d2c1a`,
          parentElement: container,
          resize: false,
        });
        widgetTimeoutRef.current = window.setTimeout(fail, 12000);
      } catch {
        fail();
      }
    };

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (attempt > 0 && script && !window.Calendly) {
      script.remove();
      script = null;
    }

    scriptTimeout = window.setTimeout(fail, 10000);
    if (window.Calendly) initialize();
    else if (script) {
      script.addEventListener("load", initialize, { once: true });
      script.addEventListener("error", fail, { once: true });
    } else {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      script.addEventListener("load", initialize, { once: true });
      script.addEventListener("error", fail, { once: true });
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      window.clearTimeout(scriptTimeout);
      window.clearTimeout(widgetTimeoutRef.current);
      script?.removeEventListener("load", initialize);
      script?.removeEventListener("error", fail);
    };
  }, [attempt]);

  const retry = () => {
    readyRef.current = false;
    setState("loading");
    containerRef.current?.replaceChildren();
    setAttempt((value) => value + 1);
  };

  return (
    <div
      data-testid="calendly-widget-shell"
      className={`relative overflow-hidden rounded-[18px] bg-paper transition-[height] duration-500 motion-reduce:transition-none ${
        detailsStep ? "h-[1000px] sm:h-[920px]" : "h-[720px] sm:h-[760px]"
      }`}
    >
      <p data-testid="calendly-status" className="sr-only" aria-live="polite">
        {bookingStatus ||
          (state === "loading"
            ? "Loading booking calendar."
            : state === "ready"
              ? "Booking calendar loaded."
              : "Booking calendar could not be loaded.")}
      </p>

      {state === "loading" && (
        <div
          data-testid="calendly-loading-state"
          className="absolute inset-0 z-10 flex items-center justify-center bg-paper"
        >
          <span className="h-7 w-7 animate-spin rounded-full border-2 border-forest/15 border-t-forest" />
        </div>
      )}

      <div
        ref={containerRef}
        data-testid="calendly-widget"
        role="region"
        aria-label="Calendly 30-minute consultation booking"
        className="h-full min-w-[320px] w-full"
      />

      {state === "error" && (
        <div
          data-testid="calendly-error-state"
          role="alert"
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-paper px-6 text-center"
        >
          <p className="font-serif text-[30px] font-light text-ink">
            The booking calendar is unavailable.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              data-testid="calendly-retry-button"
              onClick={retry}
              className="inline-flex items-center gap-2 rounded-full border border-forest/15 px-6 py-3.5 text-[14px] font-semibold text-ink transition-[background-color,color,transform] duration-300 hover:bg-sagebg active:scale-[0.98]"
            >
              <RefreshCw size={16} />
              Try again
            </button>
            <a
              data-testid="calendly-fallback-button"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[14px] font-semibold text-cream transition-[background-color,transform] duration-300 hover:bg-pine active:scale-[0.98]"
            >
              Open Calendly
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};