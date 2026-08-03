import { useEffect, useRef } from "react";
import { TABS } from "../data/content";
import "./TabBar.css";

/**
 * Sticky section switcher. Only one section is on screen at a time, so the
 * page never presents more than one idea at once. The sliding indicator is
 * measured from the active button rather than assumed, so it stays correct at
 * any width and font size.
 */
export default function TabBar({ active, onChange }) {
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
      // keep the active tab in view when the bar scrolls on narrow screens
      btn.scrollIntoView({ block: "nearest", inline: "nearest" });
    };

    move();
    const ro = new ResizeObserver(move);
    ro.observe(list);
    return () => ro.disconnect();
  }, [active]);

  return (
    <div className="tabbar">
      <div className="tabbar-inner">
        <button
          className="tabbar-logo"
          onClick={() => onChange(TABS[0].id)}
          aria-label="LEVELUP, go to first section"
        >
          Level<em>up</em>
        </button>

        <div className="tabbar-list" ref={listRef} role="tablist" aria-label="Sections">
          <span className="tabbar-mark" ref={markRef} aria-hidden="true" />
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              data-on={active === t.id ? "1" : "0"}
              aria-selected={active === t.id}
              className="tabbar-tab"
              onClick={() => onChange(t.id)}
            >
              {t.tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
