import "./ValueTower.css";

/**
 * Vision, mission and values as a progression tower.
 *
 * LEGO expressed its principles as bricks because bricks are what LEGO is.
 * LEVELUP's own language is levelling up, so the same idea is expressed as a
 * climb: five values form the foundation, the mission is the ascent, and the
 * vision sits at the summit — drawn like the app's own XP ladder.
 */
export default function ValueTower({ t }) {
  return (
    <figure className="vt">
      <div className="vt-peak">
        <span className="vt-badge mono">Vision</span>
        <p className="vt-peak-t">{t.vision}</p>
        <p className="vt-peak-s">{t.visionSub}</p>
      </div>

      <div className="vt-climb" aria-hidden="true">
        <span className="vt-climb-line" />
        <span className="vt-climb-tick" />
        <span className="vt-climb-tick" />
        <span className="vt-climb-tick" />
      </div>

      <div className="vt-mission">
        <span className="vt-badge mono">Mission</span>
        <p className="vt-mission-t">{t.mission}</p>
        <p className="vt-mission-s">{t.missionSub}</p>
      </div>

      <div className="vt-base">
        <div className="vt-base-lbl mono">
          <span>Values</span>
          <span className="vt-base-rule" />
          <span>the foundation every decision rests on</span>
        </div>
        <ol className="vt-blocks">
          {t.values.map((v, i) => (
            <li className="vt-block" key={v} style={{ "--i": i }}>
              <span className="vt-block-n mono">{String(i + 1).padStart(2, "0")}</span>
              <span className="vt-block-t">{v}</span>
              <span className="vt-block-bar" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
