import LevelUpPrototype from "../prototype/LevelUpPrototype";
import "./DemoSection.css";

export default function DemoSection() {
  return (
    <article className="sec" id="demo">
      <header className="sec-head">
        <span className="sec-n mono">08</span>
        <h1 className="sec-title">Prototype</h1>
      </header>

      <div className="demo-lede">
        <p>
          The prototype has been intentionally designed so that every feature directly
          addresses an identified customer need.
        </p>
        <p className="demo-limits">
          It runs entirely in your browser. Camera tracking is simulated, checkout and
          reward redemption are switched off, and nothing is saved.
        </p>
      </div>

      <div className="phone-frame">
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-screen">
          <LevelUpPrototype />
        </div>
      </div>
    </article>
  );
}
