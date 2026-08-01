import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/content";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-bar${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-bar-inner">
        <a href="#top" className="nav-logo">
          Level<em>up</em>
        </a>

        <nav className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href="#demo" className="btn btn-accent nav-cta">Try the demo</a>

        <button
          className="nav-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#demo" className="btn btn-primary" onClick={() => setOpen(false)}>Try the demo</a>
        </div>
      )}
    </header>
  );
}
