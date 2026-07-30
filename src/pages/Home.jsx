import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Features from "../components/Features";
import "./Home.css";

const EXPLORE = [
  { to: "/platform", t: "The platform", d: "How sessions, ranks, clans, and the shop fit together." },
  {
    to: "/business-plan", t: "The business plan", d: "The full plan, in its own words:",
    topics: ["Identified problem & introduction", "Products & services", "Vision, mission & values", "Registration", "Structure & ownership", "Organisation chart", "Legal considerations"],
  },
  { to: "/demo", t: "The demo", d: "A limited interactive preview, right in your browser." },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <section className="section-tight">
        <div className="container">
          <div className="explore-grid">
            {EXPLORE.map((e) => (
              <Link className="explore-card card" to={e.to} key={e.to}>
                <h3 className="explore-t">{e.t}</h3>
                <p className="explore-d">{e.d}</p>
                {e.topics && (
                  <ul className="explore-topics">
                    {e.topics.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                )}
                <span className="explore-arrow mono">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
