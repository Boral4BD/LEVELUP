import {
  VISION, MISSION, VALUES, REGISTRATION, OWNERSHIP, ORG_NOW, ORG_FUTURE, LEGAL,
} from "../data/content";
import "./BusinessPlan.css";

export default function BusinessPlan() {
  return (
    <section id="business" className="section business">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The plan</span>
          <h2 className="section-title">An Australian startup, built to scale.</h2>
        </div>

        {/* vision / mission / values */}
        <div className="biz-vision card">
          <div className="biz-vm">
            <div>
              <div className="eyebrow">Vision</div>
              <p className="biz-vm-t">{VISION}</p>
            </div>
            <div>
              <div className="eyebrow">Mission</div>
              <p className="biz-vm-t">{MISSION}</p>
            </div>
          </div>
          <div className="biz-values">
            {VALUES.map((v) => <span className="chip" key={v}>{v}</span>)}
          </div>
        </div>

        {/* registration pipeline */}
        <div className="biz-block">
          <div className="biz-block-hd"><span className="eyebrow">Registration</span><div className="biz-rule" /></div>
          <div className="reg-flow">
            {REGISTRATION.map((r, i) => (
              <div className="reg-step-wrap" key={r.t}>
                <div className="reg-step card">
                  <div className="reg-n mono">{String(i + 1).padStart(2, "0")}</div>
                  <div className="reg-t">{r.t}</div>
                  <div className="reg-d mono">{r.d}</div>
                </div>
                {i < REGISTRATION.length - 1 && <span className="reg-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* ownership flow: now -> later */}
        <div className="biz-block">
          <div className="biz-block-hd"><span className="eyebrow">Structure & ownership</span><div className="biz-rule" /></div>
          <div className="own-flow">
            <div className="own-card card">
              <span className="own-tag mono" style={{ color: "var(--cyan)", borderColor: "rgba(79,216,255,.45)" }}>{OWNERSHIP.now.tag}</span>
              <h3 className="own-t">{OWNERSHIP.now.t}</h3>
              <ul className="own-list">
                {OWNERSHIP.now.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div className="own-arrow" aria-hidden="true">
              <span className="own-arrow-line" />
              <span className="own-arrow-head">▸</span>
            </div>
            <div className="own-card card own-card-later">
              <span className="own-tag mono" style={{ color: "var(--gold)", borderColor: "rgba(255,200,92,.45)" }}>{OWNERSHIP.later.tag}</span>
              <h3 className="own-t">{OWNERSHIP.later.t}</h3>
              <ul className="own-list">
                {OWNERSHIP.later.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* organisation chart */}
        <div className="biz-block">
          <div className="biz-block-hd"><span className="eyebrow">Organisation chart</span><div className="biz-rule" /></div>
          <div className="org card">
            <div className="org-root">
              <div className="org-node org-node-ceo">Founder & CEO</div>
            </div>
            <div className="org-stem" aria-hidden="true" />
            <div className="org-row">
              {ORG_NOW.map((r) => (
                <div className="org-node" key={r}>{r}</div>
              ))}
            </div>
            <div className="org-future-lbl mono">+ as the business grows</div>
            <div className="org-row org-row-future">
              {ORG_FUTURE.map((r) => (
                <div className="org-node org-node-future" key={r}>{r}</div>
              ))}
            </div>
          </div>
        </div>

        {/* legal */}
        <div className="biz-block" style={{ marginBottom: 0 }}>
          <div className="biz-block-hd"><span className="eyebrow">Legal & privacy</span><div className="biz-rule" /></div>
          <div className="legal-grid">
            {LEGAL.map((l) => (
              <div className="legal-card card" key={l.t}>
                <h3 className="legal-t">{l.t}</h3>
                <p className="legal-d">{l.d}</p>
              </div>
            ))}
          </div>

          <div className="camera-callout">
            <div className="camera-callout-hd">
              <span className="camera-dot" aria-hidden="true" />
              <h3 className="camera-t">Your camera footage is sensitive information</h3>
            </div>
            <p className="camera-d">
              Form tracking films you while you train — and we treat that footage as
              sensitive health information under the Privacy Act 1988. Frames are
              analysed on your device for pose only, never stored, never uploaded, and
              never shared. Camera tracking is always optional: every station can be
              logged manually instead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
