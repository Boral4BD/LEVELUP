import LevelUpPrototype from "../prototype/LevelUpPrototype";
import "./DemoSection.css";

export default function DemoSection() {
  return (
    <section id="demo" className="section demo">
      <div className="container demo-inner">
        <div className="section-head">
          <span className="eyebrow">Try it</span>
          <h2 className="section-title">A limited, in-browser preview.</h2>
          <p className="section-sub">
            This is the real training loop — quests, camera tracking, rank, clans, chat,
            leaderboards, the shop — running client-side in your browser. It's intentionally
            scaled back from the full app: no account, no real camera, and no real money
            moves. Everything resets the moment you refresh.
          </p>
        </div>

        <div className="demo-limits">
          <div className="demo-limit">
            <span className="demo-limit-dot" style={{ background: "var(--mint)" }} />
            Full training loop — quests, sessions, streaks, and rank
          </div>
          <div className="demo-limit">
            <span className="demo-limit-dot" style={{ background: "var(--gold)" }} />
            Simulated camera tracking, not your real camera
          </div>
          <div className="demo-limit">
            <span className="demo-limit-dot" style={{ background: "var(--heat)" }} />
            Shop checkout and reward redemption are switched off
          </div>
          <div className="demo-limit">
            <span className="demo-limit-dot" style={{ background: "var(--cyan)" }} />
            Nothing is saved — it's a fresh profile every time you load the page
          </div>
        </div>

        <div className="phone-frame">
          <div className="phone-notch" aria-hidden="true" />
          <div className="phone-screen">
            <LevelUpPrototype />
          </div>
        </div>
      </div>
    </section>
  );
}
