import LevelUpPrototype from "../prototype/LevelUpPrototype";
import "./DemoSection.css";

/** The interactive prototype, annotated feature by feature. */
export default function DemoSection({ annotations = [] }) {
  return (
    <div className="demo">
      <p className="demo-limits">
        It runs entirely in your browser. Camera tracking is simulated, checkout and
        reward redemption are switched off, and nothing is saved.
      </p>

      <div className="demo-layout">
        <div className="phone-frame">
          <div className="phone-notch" aria-hidden="true" />
          <div className="phone-screen">
            <LevelUpPrototype />
          </div>
        </div>

        {annotations.length > 0 && (
          <div className="demo-notes">
            <div className="demo-notes-cap mono">
              <span>What each part does</span>
              <span className="demo-notes-rule" />
              <span>need it answers</span>
            </div>
            <ol className="demo-note-list">
              {annotations.map((a) => (
                <li className="demo-note" key={a.t}>
                  <span className="demo-note-n mono">{a.n}</span>
                  <div className="demo-note-body">
                    <div className="demo-note-head">
                      <span className="demo-note-t">{a.t}</span>
                      <span className="demo-note-need mono">{a.need}</span>
                    </div>
                    <p className="demo-note-d">{a.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
