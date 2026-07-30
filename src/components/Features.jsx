import { FEATURES } from "../data/content";
import "./Features.css";

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What you get</span>
          <h2 className="section-title">One loop: train, rank, get paid.</h2>
          <p className="section-sub">
            Every part of LEVELUP feeds the same loop — reps become XP, XP becomes rank,
            and rank and coins become things you can actually redeem.
          </p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className="feature-card card" key={f.k}>
              <div className={`feature-icon feature-icon-${f.k}`} aria-hidden="true" />
              <h3 className="feature-t">{f.t}</h3>
              <p className="feature-d">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
