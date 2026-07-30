import { useState } from "react";
import { FAQS } from "../data/content";
import "./FAQ.css";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container faq-inner">
        <div className="section-head" style={{ marginBottom: 32 }}>
          <span className="eyebrow">Questions</span>
          <h2 className="section-title">Before you try it</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={`faq-item card${open === i ? " is-open" : ""}`} key={f.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <span className="faq-plus">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="faq-a">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
