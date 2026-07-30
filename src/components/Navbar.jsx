import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <Link to="/" className="nav-logo">
          Level<em>up</em>
        </Link>

        <nav className="nav-links">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? "is-active" : "")}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/demo" className="btn btn-primary nav-cta">Try the demo</Link>

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
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
          <Link to="/demo" className="btn btn-primary" onClick={() => setOpen(false)}>Try the demo</Link>
        </div>
      )}
    </header>
  );
}
