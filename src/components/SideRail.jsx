import { useEffect, useState } from "react";
import "./SideRail.css";

/**
 * Sub-section rail for the current page. Tracks which sub-section is on
 * screen as you scroll and jumps to any other on click.
 */
export default function SideRail({ subs }) {
  const [active, setActive] = useState(subs[0]?.id);

  useEffect(() => {
    if (!subs.length || typeof IntersectionObserver === "undefined") return;
    setActive(subs[0].id);

    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(vis.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.6] }
    );

    subs.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [subs]);

  if (subs.length < 2) return null;

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="rail" aria-label="On this page">
      <span className="rail-cap mono">On this page</span>
      <ul>
        {subs.map((s) => (
          <li key={s.id}>
            <button
              className={`rail-link${active === s.id ? " is-on" : ""}`}
              onClick={() => go(s.id)}
              aria-current={active === s.id ? "true" : undefined}
            >
              <span className="rail-n mono">{s.n}</span>
              <span className="rail-t">{s.nav}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
