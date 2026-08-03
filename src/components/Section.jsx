import "./Section.css";

/* One section, one idea. Image and prose sit side by side; each section gets at
   most one small supporting visual so nothing competes for attention. */
export default function Section({ s }) {
  return (
    <article className="sec" key={s.id}>
      <header className="sec-head">
        <span className="sec-n mono">{s.n}</span>
        <h1 className="sec-title">{s.title}</h1>
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

      {s.values && (
        <ul className="sec-values">
          {s.values.map((v) => <li key={v}>{v}</li>)}
        </ul>
      )}

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
    </article>
  );
}
