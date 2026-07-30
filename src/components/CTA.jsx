import "./CTA.css";

export default function CTA() {
  return (
    <section className="section-tight cta-section">
      <div className="container cta-inner card">
        <h2 className="cta-title">Ready to see your first quest?</h2>
        <p className="cta-sub">
          Jump into the interactive preview above — no sign-up, no camera, no card required.
        </p>
        <a href="#demo" className="btn btn-primary">Try the demo now</a>
      </div>
    </section>
  );
}
