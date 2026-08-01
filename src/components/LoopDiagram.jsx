import BizIcon from "./Icons";
import "./LoopDiagram.css";

/* The economy as a closed circle: reps become XP, XP becomes rank and coins,
   coins become rewards and kit, kit makes the next session better. Nodes are
   positioned on a circle so the return arrow reads as a genuine loop. */
const NODES = [
  { icon: "dumbbell", t: "Train", d: "Work the stations", c: "var(--cyan)" },
  { icon: "camera", t: "Get scored", d: "Form drives the rate", c: "var(--mint)" },
  { icon: "xp", t: "Earn XP", d: "Streak multiplies it", c: "var(--blue)" },
  { icon: "trophy", t: "Rank up", d: "Tiers unlock perks", c: "var(--gold)" },
  { icon: "coins", t: "Bank coins", d: "Every session pays", c: "var(--gold)" },
  { icon: "store", t: "Redeem", d: "Credit, cash, or kit", c: "var(--purple)" },
];

export default function LoopDiagram() {
  const R = 40; // % radius within the square

  return (
    <figure className="loopd">
      <figcaption className="eyebrow loopd-cap">The loop, end to end</figcaption>

      <div className="loopd-ring">
        <svg className="loopd-svg" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4FD8FF" />
              <stop offset="50%" stopColor="#2B7BFF" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <marker id="loopArrow" viewBox="0 0 10 10" refX="6" refY="5"
              markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" fill="url(#loopGrad)" />
            </marker>
          </defs>
          <circle cx="50" cy="50" r={R} fill="none" stroke="url(#loopGrad)"
            strokeWidth="0.6" strokeDasharray="2.4 2.2" opacity=".75"
            markerStart="url(#loopArrow)" className="loopd-track" />
        </svg>

        {NODES.map((n, i) => {
          const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <div
              className="loopd-node"
              key={n.t}
              style={{
                left: `${50 + R * Math.cos(a)}%`,
                top: `${50 + R * Math.sin(a)}%`,
                "--n": n.c,
                "--d": `${i * 90}ms`,
              }}
            >
              <span className="loopd-icon"><BizIcon name={n.icon} size={17} /></span>
              <div className="loopd-txt">
                <div className="loopd-t">{n.t}</div>
                <div className="loopd-d mono">{n.d}</div>
              </div>
            </div>
          );
        })}

        <div className="loopd-hub">
          <div className="loopd-hub-v">∞</div>
          <div className="loopd-hub-l mono">repeats<br />weekly</div>
        </div>
      </div>

      <p className="loopd-note mono">
        Every arrow feeds the next. The ladder resets weekly, so the loop restarts
        with the rank and kit you have already earned.
      </p>
    </figure>
  );
}
