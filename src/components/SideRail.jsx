import { useEffect, useRef, useState } from "react";
import { PAGES } from "../data/content";
import "./SideRail.css";

/**
 * Floating glass menu.
 *
 * Carries both levels of navigation — the four sections, and the sub-sections
 * of whichever one is open — so you are never forced back to the top bar to
 * move around. It sticks as the page scrolls, and a single highlight glides
 * between entries rather than snapping.
 */
export default function SideRail({ subs, activePage, onPage }) {
  const [active, setActive] = useState(subs[0]?.id);
  const listRef = useRef(null);
  const markRef = useRef(null);

  /* track which sub-section is on screen */
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

  /* glide the highlight to the active entry */
  useEffect(() => {
    const list = listRef.current;
    const mark = markRef.current;
    if (!list || !mark) return;
    const move = () => {
      const el = list.querySelector('[data-on="1"]');
      if (!el) { mark.style.opacity = "0"; return; }
      mark.style.opacity = "1";
      mark.style.height = `${el.offsetHeight}px`;
      mark.style.transform = `translateY(${el.offsetTop}px)`;
    };
    move();
    const ro = new ResizeObserver(move);
    ro.observe(list);
    return () => ro.disconnect();
  }, [active, subs, activePage]);

  const goSub = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav className="rail" aria-label="Sections and contents">
      <div className="rail-glass">
        <span className="rail-sheen" aria-hidden="true" />

        <div className="rail-inner" ref={listRef}>
          <span className="rail-mark" ref={markRef} aria-hidden="true" />

          <span className="rail-cap mono">Plan</span>
          <ul className="rail-group">
            {PAGES.map((p) => (
              <li key={p.id}>
                <button
                  className={`rail-link is-page${activePage === p.id ? " is-current" : ""}`}
                  onClick={() => onPage(p.id)}
                  aria-current={activePage === p.id ? "page" : undefined}
                >
                  <span className="rail-n mono">{p.n}</span>
                  <span className="rail-t">{p.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {subs.length > 1 && (
            <>
              <span className="rail-cap mono rail-cap-2">On this page</span>
              <ul className="rail-group">
                {subs.map((s) => (
                  <li key={s.id}>
                    <button
                      data-on={active === s.id ? "1" : "0"}
                      className={`rail-link${active === s.id ? " is-on" : ""}`}
                      onClick={() => goSub(s.id)}
                      aria-current={active === s.id ? "true" : undefined}
                    >
                      <span className="rail-n mono">{s.n}</span>
                      <span className="rail-t">{s.nav}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
