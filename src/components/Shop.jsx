import { SHOP_ITEMS, REWARD_SAMPLES } from "../data/content";
import { ProductArt } from "../prototype/LevelUpPrototype";
import "./Shop.css";

export default function Shop() {
  return (
    <section id="shop" className="section shop">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Kit & rewards</span>
          <h2 className="section-title">Gear that pays you back.</h2>
          <p className="section-sub">
            Buy the kit with cash, or with coins you've already earned. Most pieces accept either.
          </p>
        </div>

        <div className="shop-grid">
          {SHOP_ITEMS.map((it) => (
            <div className="shop-card card" key={it.t}>
              <div className="shop-card-art" aria-hidden="true">
                <ProductArt id={it.id} />
              </div>
              <div className="shop-card-b">
                <div className="shop-card-t">{it.t}</div>
                <div className="shop-card-tag mono">{it.tag}</div>
                <div className="shop-card-p mono">
                  ${it.price}
                  {it.coins && <span className="shop-card-or"> or ◆ {it.coins.toLocaleString()}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rewards-strip">
          <div className="section-head" style={{ marginBottom: 28 }}>
            <span className="eyebrow">Redeem your coins</span>
            <h3 className="rewards-title">Or skip the gear and cash out.</h3>
          </div>
          <div className="rewards-row">
            {REWARD_SAMPLES.map((r) => (
              <div className="reward-pill card" key={r.t}>
                <div className="reward-t">{r.t}</div>
                <div className="reward-v mono">{r.v}</div>
                <div className="reward-c mono">◆ {r.coins.toLocaleString()}</div>
              </div>
            ))}
          </div>
          <p className="rewards-note">
            Plus PayPal, bank transfer, and retail gift cards. The full list lives in the app —
            the interactive preview below shows the same catalog with redemption switched off.
          </p>
        </div>
      </div>
    </section>
  );
}
