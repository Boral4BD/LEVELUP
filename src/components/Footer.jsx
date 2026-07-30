import { NAV_LINKS } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-logo">
            Level<em>up</em>
          </div>
          <p className="footer-tag">Train · Rank · Cash out</p>
        </div>

        <nav className="footer-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <p className="footer-fine">
          LEVELUP is a concept product. The interactive preview on this page is a
          demo — it runs entirely in your browser, isn't connected to real payments,
          and doesn't save any data.
        </p>
      </div>
    </footer>
  );
}
