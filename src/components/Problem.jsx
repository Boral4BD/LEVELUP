import { PROBLEMS, OLD_LOOP, NEW_LOOP } from "../data/content";
import BizIcon from "./Icons";
import "./Problem.css";

export default function Problem() {
  return (
    <section id="problem" className="section problem">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The problem</span>
          <h2 className="section-title">Fitness apps track. They don't motivate.</h2>
          <p className="section-sub">
            Market research during LEVELUP's development found that people want
            competition, rewards, and progression systems like those in video
            games — a clear gap in the market. LEVELUP fills it.
          </p>
        </div>

        <div className="problem-grid">
          {PROBLEMS.map((p) => (
            <div className="problem-card card" key={p.t}>
              <div className="problem-icon"><BizIcon name={p.icon} size={19} /></div>
              <h3 className="problem-t">{p.t}</h3>
              <p className="problem-d">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="loop-compare">
          <div className="loop card loop-old">
            <div className="eyebrow loop-lbl">Typical fitness app</div>
            <div className="loop-flow">
              {OLD_LOOP.map((s, i) => (
                <div className="loop-step-wrap" key={s}>
                  <span className="loop-step">{s}</span>
                  {i < OLD_LOOP.length - 1 && <span className="loop-arrow" aria-hidden="true">→</span>}
                </div>
              ))}
              <span className="loop-end mono" style={{ color: "var(--heat)" }}>dead end</span>
            </div>
          </div>

          <div className="loop card loop-new">
            <div className="eyebrow loop-lbl" style={{ color: "var(--cyan)" }}>The LEVELUP loop</div>
            <div className="loop-flow">
              {NEW_LOOP.map((s, i) => (
                <div className="loop-step-wrap" key={s}>
                  <span className="loop-step loop-step-on">{s}</span>
                  {i < NEW_LOOP.length - 1 && <span className="loop-arrow" aria-hidden="true">→</span>}
                </div>
              ))}
              <span className="loop-end mono" style={{ color: "var(--mint)" }}>↺ repeats</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
