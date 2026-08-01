import { useEffect, useState } from "react";
import "./Glide.css";

/**
 * Scroll progress rail + section dots.
 *
 * Gives the page a "glideshow" feel: a thin progress bar across the top, and
 * a dot rail that tracks which section you're in and glides you to another on
 * click. Purely additive — the page scrolls normally without it.
 */
export default function Glide({ sections }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(vis.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [sections]);

  return (
    <>
      <div className="glide-bar" aria-hidden="true">
        <i style={{ transform: `scaleX(${progress})` }} />
      </div>

      <nav className="glide-rail" aria-label="Section navigation">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`glide-dot${active === s.id ? " is-active" : ""}`}
            aria-current={active === s.id ? "true" : undefined}
          >
            <span className="glide-dot-mark" />
            <span className="glide-dot-label">{s.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
