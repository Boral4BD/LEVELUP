import Section from "./Section";
import SideRail from "./SideRail";
import "./Page.css";

/** One top-level section rendered as a long scrolling page. */
export default function Page({ page }) {
  const empty = page.subs.length === 0;

  return (
    <div className="page">
      <header className="page-head">
        <span className="page-n mono">Section {page.n}</span>
        <h1 className="page-title">{page.label}</h1>
        <p className="page-lede">{page.lede}</p>
      </header>

      {empty ? (
        <div className="page-pending">
          <p className="page-pending-t">Content to come</p>
          <p className="page-pending-d">
            This section is ready and waiting for its content.
          </p>
        </div>
      ) : (
        <div className="page-body">
          <SideRail subs={page.subs} />
          <div className="page-subs">
            {page.subs.map((s) => <Section s={s} key={s.id} />)}
          </div>
        </div>
      )}
    </div>
  );
}
