import { Link } from "react-router-dom";
import {
  VISION, MISSION, VALUES, REGISTRATION, OWNERSHIP, ORG_NOW, ORG_FUTURE,
} from "../data/content";
import "../components/BusinessPlan.css";
import "./BusinessPlanPage.css";

const SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "products", label: "Products & services" },
  { id: "vision", label: "Vision & values" },
  { id: "registration", label: "Registration" },
  { id: "structure", label: "Structure & ownership" },
  { id: "organisation", label: "Organisation chart" },
  { id: "legal", label: "Legal considerations" },
];

const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function BusinessPlanPage() {
  return (
    <div className="bp">
      <section className="section-tight" style={{ paddingBottom: 24 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <span className="eyebrow">The business plan</span>
            <h1 className="section-title">LEVELUP, on paper.</h1>
          </div>
          <div className="bp-toc">
            {SECTIONS.map((s) => (
              <button key={s.id} className="chip bp-toc-chip" onClick={() => jump(s.id)}>{s.label}</button>
            ))}
          </div>
        </div>
      </section>

      {/* 1 — identified problem and introduction */}
      <section id="introduction" className="bp-section">
        <div className="container bp-grid">
          <div className="bp-side">
            <span className="eyebrow">01</span>
            <h2 className="bp-h">Identified problem and introduction</h2>
          </div>
          <div className="bp-prose">
            <p>
              Physical inactivity among teenagers and young adults is becoming an increasingly
              significant issue in Australia. Many individuals struggle to maintain consistent
              exercise habits due to a lack of motivation, expensive gym memberships, and fitness
              experiences that fail to keep users engaged over time. Existing fitness applications
              often focus solely on tracking workouts rather than creating an enjoyable and
              rewarding experience.
            </p>
            <p>
              Market research conducted during the development of LEVELUP identified that many
              respondents preferred a fitness platform that incorporated competition, rewards, and
              progression systems similar to those found in video games. This highlights a clear
              gap in the market for an innovative solution that combines fitness with gamification.
            </p>
          </div>
        </div>
      </section>

      {/* 2 — products and services */}
      <section id="products" className="bp-section">
        <div className="container bp-grid">
          <div className="bp-side">
            <span className="eyebrow">02</span>
            <h2 className="bp-h">Products and services</h2>
          </div>
          <div className="bp-prose">
            <p>
              LEVELUP is a gamified fitness platform designed to transform exercise into an
              immersive and rewarding experience. The application utilises artificial intelligence
              to provide personalised workout recommendations while incorporating experience
              points, achievement systems, leaderboards, and multiplayer challenges to encourage
              long-term engagement.
            </p>
            <p>
              The prototype has been intentionally designed so that every feature directly
              addresses an identified customer need. For example, the AI fitness coach provides
              users with tailored workout plans based on their goals and fitness levels, while the
              XP system rewards consistency and encourages users to progress through increasingly
              challenging milestones. Additionally, multiplayer challenges foster a sense of
              community and accountability, allowing users to compete with friends and other
              members worldwide.
            </p>
            <p className="bp-note">
              See it for yourself: <Link to="/demo" className="bp-link">try the interactive prototype →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* 3 — vision, mission, values */}
      <section id="vision" className="bp-section">
        <div className="container bp-grid">
          <div className="bp-side">
            <span className="eyebrow">03</span>
            <h2 className="bp-h">Vision, mission, and values</h2>
          </div>
          <div className="bp-prose">
            <p>
              LEVELUP's vision is to become the world's leading gamified fitness platform,
              inspiring individuals to adopt healthier lifestyles through innovation and
              technology. Its purpose is to make fitness enjoyable, accessible, and sustainable by
              removing many of the barriers that prevent people from exercising consistently.
            </p>
            <p>
              The business is guided by several core values, including innovation, accessibility,
              community, health and wellbeing, and continuous improvement. These values determine
              every decision made by the organisation and ensure that the business remains focused
              on delivering meaningful outcomes for its customers.
            </p>
            <div className="bp-diagram">
              <div className="biz-vision card" style={{ marginBottom: 0 }}>
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
            </div>
          </div>
        </div>
      </section>

      {/* 4 — registration */}
      <section id="registration" className="bp-section">
        <div className="container bp-grid">
          <div className="bp-side">
            <span className="eyebrow">04</span>
            <h2 className="bp-h">Registration</h2>
          </div>
          <div className="bp-prose">
            <p>
              As an Australian startup, LEVELUP will be required to complete several registration
              processes before commencing operations. The business name will be registered through
              the Australian Securities and Investments Commission (ASIC), and an Australian
              Business Number (ABN) and Tax File Number (TFN) will be obtained to ensure compliance
              with taxation requirements. Should annual revenue exceed the relevant threshold, the
              business will also register for Goods and Services Tax (GST).
            </p>
            <p>
              In addition, trademark protection will be sought for the LEVELUP name and logo to
              safeguard the business's identity and prevent unauthorised use by competitors.
            </p>
            <div className="bp-diagram">
              <div className="eyebrow bp-diagram-lbl">Registration pathway</div>
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
          </div>
        </div>
      </section>

      {/* 5 — structure and ownership */}
      <section id="structure" className="bp-section">
        <div className="container bp-grid">
          <div className="bp-side">
            <span className="eyebrow">05</span>
            <h2 className="bp-h">Structure and ownership</h2>
          </div>
          <div className="bp-prose">
            <p>
              Initially, LEVELUP will operate as a sole trader business. This structure has been
              selected as it provides complete ownership and control, enabling faster decision
              making and reducing the administrative burden commonly associated with larger
              business structures.
            </p>
            <p>
              However, as the business grows and seeks external investment, there is potential for
              LEVELUP to transition into a proprietary limited company (Pty Ltd). This would
              provide limited liability protection and create greater opportunities for expansion,
              partnerships, and capital investment. By adopting a phased approach to ownership, the
              business can remain flexible while supporting long-term growth objectives.
            </p>
            <div className="bp-diagram">
              <div className="eyebrow bp-diagram-lbl">Ownership pathway</div>
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
          </div>
        </div>
      </section>

      {/* 6 — organisation chart */}
      <section id="organisation" className="bp-section">
        <div className="container bp-grid">
          <div className="bp-side">
            <span className="eyebrow">06</span>
            <h2 className="bp-h">Organisation chart</h2>
          </div>
          <div className="bp-prose">
            <p>
              During its initial stages, LEVELUP will operate with a relatively small
              organisational structure consisting of the Founder and Chief Executive Officer, a
              software developer, a marketing manager, a customer support officer, and a graphic
              designer. This lean structure enables the business to remain cost-effective while
              ensuring that all critical functions are adequately managed.
            </p>
            <p>
              As the business expands, additional personnel, including project managers, data
              analysts, and sales representatives, may be employed to support increasing demand and
              facilitate future growth.
            </p>
            <div className="bp-diagram">
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
          </div>
        </div>
      </section>

      {/* 7 — legal considerations */}
      <section id="legal" className="bp-section">
        <div className="container bp-grid">
          <div className="bp-side">
            <span className="eyebrow">07</span>
            <h2 className="bp-h">Legal considerations</h2>
          </div>
          <div className="bp-prose">
            <p>
              As LEVELUP collects personal and health-related information, compliance with
              Australian privacy legislation is essential. The business will adhere to the Privacy
              Act 1988 and implement appropriate safeguards to ensure the protection of customer
              data. It must also comply with Australian Consumer Law, which governs consumer
              rights, product guarantees, and advertising practices.
            </p>
            <p>
              To further protect the business, LEVELUP will obtain public liability, professional
              indemnity, and cyber security insurance. These policies will provide financial
              protection in the event of legal disputes, cyber incidents, or other unforeseen
              circumstances.
            </p>
            <div className="bp-diagram">
              <div className="camera-callout">
                <div className="camera-callout-hd">
                  <span className="camera-dot" aria-hidden="true" />
                  <h3 className="camera-t">Camera footage is sensitive information</h3>
                </div>
                <p className="camera-d">
                  Form tracking films users while they train, and that footage is treated as
                  sensitive health-related information under the Privacy Act 1988. Frames are
                  analysed on the user's device for pose only — never stored, never uploaded, and
                  never shared — and camera tracking is always optional: every station can be
                  logged manually instead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
