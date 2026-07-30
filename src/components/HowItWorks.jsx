import { STEPS, STATIONS } from "../data/content";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">From loadout to leaderboard.</h2>
        </div>

        <div className="how-steps">
          {STEPS.map((s) => (
            <div className="how-step" key={s.n}>
              <div className="how-step-n mono">{s.n}</div>
              <h3 className="how-step-t">{s.t}</h3>
              <p className="how-step-d">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="stations card">
          <div className="stations-head">
            <span className="eyebrow">The seven stations</span>
          </div>
          <div className="stations-grid">
            {STATIONS.map((st) => (
              <div className="station" key={st.n}>
                <div className="station-n">{st.n}</div>
                <div className="station-k mono">{st.kit}</div>
                {st.cam && <span className="station-cam mono">camera tracked</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
