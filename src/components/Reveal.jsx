import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal. Mirrors the stagger-list motion preset —
 * opacity + slight scale + y, ~400ms, back-out easing, 60ms between siblings.
 * Falls back to visible immediately when IntersectionObserver is unavailable
 * or the user prefers reduced motion, so content is never gated on animation.
 */
export default function Reveal({ children, index = 0, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal-in${shown ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--reveal-delay": `${Math.min(index, 8) * 60}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
