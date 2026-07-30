import { Link } from "react-router-dom";
import HowItWorks from "../components/HowItWorks";
import Compete from "../components/Compete";
import Shop from "../components/Shop";

export default function Platform() {
  return (
    <>
      <section className="section-tight" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">The platform</span>
            <h1 className="section-title">Everything feeds the same loop.</h1>
            <p className="section-sub">
              Sessions become XP, XP becomes rank, and rank and coins become things you
              can actually redeem. Here's how each piece works.
            </p>
          </div>
        </div>
      </section>
      <HowItWorks />
      <Compete />
      <Shop />
      <section className="section-tight">
        <div className="container" style={{ textAlign: "center" }}>
          <Link to="/demo" className="btn btn-primary">Try it in the demo</Link>
        </div>
      </section>
    </>
  );
}
