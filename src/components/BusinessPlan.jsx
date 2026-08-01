import {
  VISION, MISSION, VALUES, REGISTRATION, OWNERSHIP, ORG_NOW, ORG_FUTURE, LEGAL,
  FLOW_TODAY, FLOW_LEVELUP, REGISTRATION_TABLE, LEGAL_TABLE,
} from "../data/content";
import { Bot, TrendingUp, Users } from "lucide-react";
import { DataTable } from "./DataViz";
import DisplayCards from "./ui/DisplayCards";
import BizIcon from "./Icons";
import "./BusinessPlan.css";

/* The three pillars named in the Products and services paragraph, shown as a
   fanned card stack. Each card quotes that paragraph rather than new copy. */
const PILLAR_CARDS = [
  {
    icon: <Bot size={16} />,
    title: "AI fitness coach",
    description: "Tailored workout plans",
    date: "Based on your goals and fitness level",
    accent: "var(--cyan)",
    className: "dc-1 dc-dim",
  },
  {
    icon: <TrendingUp size={16} />,
    title: "XP system",
    description: "Rewards consistency",
    date: "Increasingly challenging milestones",
    accent: "var(--gold)",
    className: "dc-2 dc-dim",
  },
  {
    icon: <Users size={16} />,
    title: "Multiplayer challenges",
    description: "Community and accountability",
    date: "Compete with members worldwide",
    accent: "var(--purple)",
    className: "dc-3",
  },
];

const Block = ({ title, children }) => (
  <div className="biz-block">
    <div className="biz-block-hd"><span className="eyebrow">{title}</span><div className="biz-rule" /></div>
    {children}
  </div>
);

const OrgChart = ({ roles, future = false }) => (
  <div className={`org card${future ? " org-alt" : ""}`}>
    <div className="org-root">
      <div className="org-node org-node-ceo">Founder & CEO</div>
    </div>
    <div className="org-stem" aria-hidden="true" />
    <div className="org-row">
      {roles.slice(0, 4).map((r) => <div className="org-node" key={r}>{r}</div>)}
    </div>
    {roles.length > 4 && (
      <div className="org-row org-row-extra">
        {roles.slice(4).map((r) => <div className="org-node org-node-new" key={r}>{r}</div>)}
      </div>
    )}
  </div>
);

export default function BusinessPlan() {
  return (
    <section id="business" className="section business">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The plan</span>
          <h2 className="section-title">An Australian startup, built to scale.</h2>
        </div>

        {/* identified problem and introduction */}
        <Block title="Identified problem and introduction">
          <div className="biz-prose">
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
          <div className="eyebrow biz-diagram-lbl">Fitness today — the initial flow</div>
          <div className="biz-flow biz-flow-bad">
            {FLOW_TODAY.map((s, i) => (
              <div className="biz-flow-wrap" key={s}>
                <span className="biz-flow-step">{s}</span>
                {i < FLOW_TODAY.length - 1 && <span className="biz-flow-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
            <span className="biz-flow-end mono" style={{ color: "var(--heat)" }}>inactivity</span>
          </div>
          <div className="eyebrow biz-diagram-lbl" style={{ marginTop: 16, color: "var(--cyan)" }}>
            What respondents preferred — the LEVELUP flow
          </div>
          <div className="biz-flow biz-flow-good">
            {FLOW_LEVELUP.map((s, i) => (
              <div className="biz-flow-wrap" key={s}>
                <span className="biz-flow-step biz-flow-step-on">{s}</span>
                {i < FLOW_LEVELUP.length - 1 && <span className="biz-flow-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
            <span className="biz-flow-end mono" style={{ color: "var(--mint)" }}>fitness + gamification</span>
          </div>
        </Block>

        {/* products and services */}
        <Block title="Products and services">
          <div className="biz-prose">
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
          </div>
          <div className="biz-pillars">
            <DisplayCards cards={PILLAR_CARDS} />
          </div>
          <p className="biz-note mono">
            See it for yourself in the <a href="#demo" className="biz-link">interactive prototype ↓</a>
          </p>
        </Block>

        {/* vision, mission, values */}
        <Block title="Vision, mission, and values">
          <div className="biz-prose">
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
          </div>
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
              {VALUES.map((v) => (
                <span className="chip biz-value-chip" key={v.t}>
                  <BizIcon name={v.icon} size={13} /> {v.t}
                </span>
              ))}
            </div>
          </div>
        </Block>

        {/* registration */}
        <Block title="Registration">
          <div className="biz-prose">
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
          </div>
          <div className="reg-flow">
            {REGISTRATION.map((r, i) => (
              <div className="reg-step-wrap" key={r.t}>
                <div className="reg-step card">
                  <div className="reg-head">
                    <span className="reg-icon"><BizIcon name={r.icon} size={16} /></span>
                    <span className="reg-n mono">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="reg-t">{r.t}</div>
                  <div className="reg-d mono">{r.d}</div>
                </div>
                {i < REGISTRATION.length - 1 && <span className="reg-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14 }}>
            <DataTable
              title="Registration requirements"
              cols={["Requirement", "Registered with", "Why"]}
              rows={REGISTRATION_TABLE}
            />
          </div>
        </Block>

        {/* structure and ownership */}
        <Block title="Structure and ownership">
          <div className="biz-prose">
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
          </div>
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
        </Block>

        {/* organisation chart */}
        <Block title="Organisation chart">
          <div className="biz-prose">
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
          </div>
          <div className="eyebrow biz-diagram-lbl">Initial structure</div>
          <OrgChart roles={ORG_NOW} />
          <div className="eyebrow biz-diagram-lbl" style={{ marginTop: 20, color: "var(--gold)" }}>
            As the business expands
          </div>
          <OrgChart roles={[...ORG_NOW, ...ORG_FUTURE]} future />
        </Block>

        {/* legal considerations */}
        <Block title="Legal considerations">
          <div className="biz-prose">
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
          </div>
          <div className="biz-minis">
            {LEGAL.map((l) => (
              <div className="biz-mini card card-lift" key={l.t}>
                <div className="biz-mini-icon"><BizIcon name={l.icon} size={20} /></div>
                <div className="biz-mini-t">{l.t}</div>
                <div className="biz-mini-d">{l.d}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14 }}>
            <DataTable
              title="Compliance and cover"
              cols={["Legislation or policy", "Covers", "Purpose"]}
              rows={LEGAL_TABLE}
            />
          </div>
          <div className="camera-callout" style={{ marginTop: 16, marginBottom: 0 }}>
            <div className="camera-callout-hd">
              <span className="camera-icon"><BizIcon name="camera" size={20} color="var(--heat)" /></span>
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
        </Block>
      </div>
    </section>
  );
}
