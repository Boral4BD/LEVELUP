import { useEffect, useRef } from "react";
import { PAGES } from "../data/content";
import "./TopNav.css";

/** Top-level switcher between the four sections of the plan. */
export default function TopNav({ active, onChange }) {
  const listRef = useRef(null);
  const markRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const mark = markRef.current;
    if (!list || !mark) return;
    const move = () => {
      const btn = list.querySelector('[data-on="1"]');
      if (!btn) return;
      mark.style.width = `${btn.offsetWidth}px`;
      mark.style.transform = `translateX(${btn.offsetLeft}px)`;
    };
    move();
    const ro = new ResizeObserver(move);
    ro.observe(list);
    return () => ro.disconnect();
  }, [active]);

  return (
    <div className="topnav">
      <div className="topnav-inner">
        <button className="topnav-logo" onClick={() => onChange(PAGES[0].id)}>
          Level<em>up</em>
        </button>

        <div className="topnav-list" ref={listRef} role="tablist" aria-label="Plan sections">
          <span className="topnav-mark" ref={markRef} aria-hidden="true" />
          {PAGES.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={active === p.id}
              data-on={active === p.id ? "1" : "0"}
              className="topnav-tab"
              onClick={() => onChange(p.id)}
            >
              <span className="topnav-n mono">{p.n}</span>
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
