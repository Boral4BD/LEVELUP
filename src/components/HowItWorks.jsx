import { STEPS, STATIONS } from "../data/content";
import { Figure } from "../prototype/LevelUpPrototype";
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

        <div className="tracker-visual card" aria-hidden="true">
          <div className="tracker-cam">
            <div className="tracker-grid" />
            <span className="tracker-brk tl" /><span className="tracker-brk tr" />
            <span className="tracker-brk bl" /><span className="tracker-brk br" />
            <Figure phase={0.35} station="pushup" />
            <div className="tracker-hud">
              <div>
                <div className="eyebrow">Push-ups</div>
                <div className="tracker-reps">14</div>
              </div>
              <div className="tracker-form">
                <div className="eyebrow">form</div>
                <div className="tracker-pct">94%</div>
              </div>
            </div>
          </div>
          <div className="tracker-copy">
            <span className="eyebrow" style={{ color: "var(--cyan)" }}>AI form tracking</span>
            <h3 className="tracker-t">The camera is your referee.</h3>
            <p className="tracker-d">
              Set your phone on the tripod mount and the tracker draws your skeleton,
              counts every rep, and scores your form live. Clean reps earn full XP;
              sloppy ones earn less. Try it in the demo — simulated, no camera needed.
            </p>
          </div>
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
