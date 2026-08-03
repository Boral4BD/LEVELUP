import ValueTower from "./ValueTower";
import DemoSection from "./DemoSection";
import "./Section.css";

/* One sub-section: number, heading, photo, prose, and at most one supporting
   visual so nothing competes for attention. */
export default function Section({ s }) {
  return (
    <article className="sec" id={s.id}>
      <header className="sec-head">
        <span className="sec-n mono">{s.n}</span>
        <h2 className="sec-title">{s.title}</h2>
      </header>

      <div className={`sec-grid${s.image ? "" : " sec-grid-solo"}`}>
        {s.image && (
          <figure className="sec-fig">
            <img src={s.image} alt={s.alt} loading="lazy" width="1200" height="800" />
          </figure>
        )}
        <div className="sec-prose">
          {s.body.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
        </div>
      </div>

      {s.tower && <ValueTower t={s.tower} />}

      {s.steps && (
        <ol className="sec-steps">
          {s.steps.map((v, i) => (
            <li key={v}><span className="mono">{i + 1}</span>{v}</li>
          ))}
        </ol>
      )}

      {s.ownership && (
        <div className="sec-own">
          <div className="sec-own-card"><span className="mono">Now</span>{s.ownership.now}</div>
          <span className="sec-own-arrow" aria-hidden="true">→</span>
          <div className="sec-own-card is-next"><span className="mono">As it grows</span>{s.ownership.next}</div>
        </div>
      )}

      {s.org && (
        <div className="sec-org">
          <div className="sec-org-lead">{s.org.lead}</div>
          <div className="sec-org-stem" aria-hidden="true" />
          <ul className="sec-org-row">
            {s.org.now.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <div className="sec-org-later mono">As the business expands</div>
          <ul className="sec-org-row is-later">
            {s.org.later.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>
      )}

      {s.camera && <p className="sec-note">{s.camera}</p>}

      {s.prototype && <DemoSection />}
    </article>
  );
}
