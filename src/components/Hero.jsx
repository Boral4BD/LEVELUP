import { HERO } from "../data/content";
import heroImg from "../assets/img/hero.jpg";
import "./Hero.css";

export default function Hero({ onStart }) {
  return (
    <header className="hero" id="top">
      <img className="hero-bg" src={heroImg} alt="" aria-hidden="true" />
      <div className="hero-inner">
        <h1 className="hero-name">
          Level<em>up</em>
        </h1>
        <p className="hero-line">{HERO.line}</p>
        <button className="hero-cta" onClick={onStart}>Read the plan</button>
      </div>
    </header>
  );
}
