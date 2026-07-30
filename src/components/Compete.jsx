import { TIERS, CLAN_REWARDS } from "../data/content";
import "./Compete.css";

export default function Compete() {
  return (
    <section id="compete" className="section compete">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Rank & clans</span>
          <h2 className="section-title">Climb alone. Get paid together.</h2>
          <p className="section-sub">
            Every session pushes you up a personal ladder of seven tiers. Join a clan and
            your weekly XP pools with everyone else's — the clan's ladder position pays
            out to the whole roster.
          </p>
        </div>

        <div className="compete-grid">
          <div className="tier-track card">
            <div className="eyebrow" style={{ marginBottom: 18 }}>Seven tiers, three divisions each</div>
            <div className="tier-list">
              {TIERS.map((t, i) => (
                <div className="tier-row" key={t.name}>
                  <span className="tier-dot" style={{ background: t.c }} />
                  <span className="tier-name" style={{ color: t.c }}>{t.name}</span>
                  <span className="tier-div mono">III · II · I</span>
                  {i === 0 && <span className="tier-tag mono">start here</span>}
                  {i === TIERS.length - 1 && <span className="tier-tag mono" style={{ color: "var(--gold)" }}>top rank</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="clan-table card">
            <div className="eyebrow" style={{ marginBottom: 18 }}>Weekly clan payout, by placement</div>
            {CLAN_REWARDS.map((r) => (
              <div className="clan-row" key={r.place}>
                <span className="clan-place">{r.place}</span>
                <span className="clan-payout mono">
                  <span style={{ color: "var(--cyan)" }}>+{r.xp.toLocaleString()} XP</span>
                  <span style={{ color: "var(--dim)" }}> · </span>
                  <span style={{ color: "var(--gold)" }}>◆ {r.coins.toLocaleString()}</span>
                </span>
              </div>
            ))}
            <p className="clan-note">Every member of the clan receives the full payout for that placement — not a divided share.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
