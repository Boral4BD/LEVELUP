import { STEPS, STATIONS, XP_PER_REP, STATION_TABLE, QUEST_TABLE } from "../data/content";
import { BarChart, DataTable } from "./DataViz";
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
              sloppy ones earn less. Try it in the demo below — simulated, no camera needed.
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

        <div className="dv-pair" style={{ marginTop: 14 }}>
          <BarChart
            title="XP per rep, by station"
            data={XP_PER_REP}
            unit=" XP"
            note="Rep-based stations only. Harder movements pay more per rep, so the XP system rewards effort rather than time spent."
          />
          <DataTable
            title="Every station, and what it pays"
            cols={["Station", "Kit", "Rate", "Camera"]}
            rows={STATION_TABLE}
            note="Plank is scored per second and running per metre, so those two sit outside the per-rep chart."
          />
        </div>

        <div style={{ marginTop: 14 }}>
          <DataTable
            title="A day's quests"
            cols={["Quest", "Difficulty", "XP", "Coins"]}
            rows={QUEST_TABLE}
            align={["l", "l", "r", "r"]}
            note="Quests reset daily. Clearing one pays its XP and coins on top of the session total, and a streak multiplier applies at session end."
          />
        </div>
      </div>
    </section>
  );
}
