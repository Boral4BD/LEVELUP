import { TIERS } from "../data/content";
import { Emblem } from "../prototype/LevelUpPrototype";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="chip" style={{ color: "var(--cyan)", borderColor: "rgba(79,216,255,.4)" }}>
            Competitive fitness gaming
          </span>
          <h1 className="hero-title">
            Turn every rep into<br />
            <span className="grad-text">rank, coins, and clout.</span>
          </h1>
          <p className="hero-sub">
            LEVELUP is a gamified fitness platform that transforms exercise into an
            immersive, rewarding experience — AI-scored training, daily quests, a ranked
            ladder, and coins you can redeem for real game credit or cash out.
          </p>
          <div className="hero-cta-row">
            <a href="#demo" className="btn btn-primary">Try the interactive demo</a>
            <a href="#features" className="btn btn-ghost">See how it works</a>
          </div>
          <div className="hero-tiers">
            <span className="eyebrow">Seven tiers to climb</span>
            <div className="hero-tier-chips">
              {TIERS.map((t) => (
                <span key={t.name} className="tier-chip" style={{ color: t.c, borderColor: t.c + "66" }}>
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-mock" aria-hidden="true">
          <div className="hero-mock-card card">
            <div className="hero-mock-row">
              <div className="hero-mock-badge"><Emblem tier={4} div={2} size={40} /></div>
              <div>
                <div className="hero-mock-name">Boral</div>
                <div className="hero-mock-sub">Diamond I · LVL 22</div>
              </div>
              <div className="hero-mock-streak">
                <div className="hero-mock-streak-n">12</div>
                <div className="eyebrow">day streak</div>
              </div>
            </div>
            <div className="hero-mock-bar"><i /></div>
            <div className="hero-mock-barlbl">
              <span>rank progress</span><span>1,240 / 1,800 XP</span>
            </div>
          </div>

          {[
            { l: "Train", m: "2 quests open today" },
            { l: "Clans", m: "VOID · 1st of 6" },
            { l: "Rewards", m: "1,240 coins ready" },
          ].map((row) => (
            <div key={row.l} className="hero-mock-item card">
              <span className="hero-mock-bar-mini" />
              <div>
                <div className="hero-mock-item-l">{row.l}</div>
                <div className="hero-mock-item-m">{row.m}</div>
              </div>
              <span className="hero-mock-arrow">▸</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
