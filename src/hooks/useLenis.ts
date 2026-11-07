import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const onClick = (e: Event) => {
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!target || target === "#") return;
      const el = document.querySelector(target);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -90 });
      }
    };
    anchors.forEach((a) => a.addEventListener("click", onClick));

    return () => {
      cancelAnimationFrame(raf);
      anchors.forEach((a) => a.removeEventListener("click", onClick));
      lenis.destroy();
    };
  }, []);
}
