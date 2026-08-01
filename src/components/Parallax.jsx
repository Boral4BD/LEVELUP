import { useEffect, useRef } from "react";
import "./Parallax.css";

/**
 * Decorative parallax backdrop.
 *
 * Three blurred colour fields drift at different rates as you scroll, so the
 * page reads as one continuous space rather than stacked blocks. Applied to
 * background layers only — never to text or controls — and the deltas stay
 * small (≤ 14%) so foreground and background never visibly desync.
 */
export default function Parallax() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const layers = [...root.querySelectorAll("[data-rate]")];
    let frame = 0;
    let settle;

    const apply = () => {
      frame = 0;
      const y = window.scrollY;
      layers.forEach((el) => {
        el.style.transform = `translate3d(0, ${y * Number(el.dataset.rate)}px, 0)`;
      });
    };

    const onScroll = () => {
      layers.forEach((el) => { el.style.willChange = "transform"; });
      if (!frame) frame = requestAnimationFrame(apply);
      clearTimeout(settle);
      // release GPU memory once scrolling stops
      settle = setTimeout(() => {
        layers.forEach((el) => { el.style.willChange = "auto"; });
      }, 200);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(settle);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="px-root" ref={ref} aria-hidden="true">
      <span className="px-layer px-a" data-rate="0.06" />
      <span className="px-layer px-b" data-rate="0.11" />
      <span className="px-layer px-c" data-rate="0.04" />
      <span className="px-grid" data-rate="0.02" />
    </div>
  );
}
