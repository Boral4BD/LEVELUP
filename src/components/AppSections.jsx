import { APP_SECTIONS, KPIS } from "../data/content";
import { StatRow } from "./DataViz";
import BizIcon from "./Icons";
import Reveal from "./Reveal";
import "./AppSections.css";

export default function AppSections() {
  return (
    <section id="app" className="section app-sections">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Inside the app</span>
          <h2 className="section-title">The app, section by section.</h2>
          <p className="section-sub">
            Every feature directly addresses an identified customer need — here is how
            the application is divided up.
          </p>
        </div>

        <StatRow items={KPIS} />

        <div className="app-grid">
          {APP_SECTIONS.map((s, i) => (
            <Reveal className="app-card card card-lift" key={s.t} index={i}>
              <div className="app-card-hd">
                <div className="app-card-icon"><BizIcon name={s.icon} size={19} /></div>
                <span className="app-card-n mono">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="app-card-t">{s.t}</h3>
              <p className="app-card-d">{s.d}</p>
              <span className="app-card-tag mono">{s.tag}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
