import LevelUpPrototype from "../prototype/LevelUpPrototype";
import "./DemoSection.css";

/** The interactive prototype, embedded inside the Prototype sub-section. */
export default function DemoSection() {
  return (
    <div className="demo">
      <p className="demo-limits">
        It runs entirely in your browser. Camera tracking is simulated, checkout and
        reward redemption are switched off, and nothing is saved.
      </p>

      <div className="phone-frame">
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-screen">
          <LevelUpPrototype />
        </div>
      </div>
    </div>
  );
}
