import { useState } from "react";
import "./DataViz.css";

const nf = (n) => n.toLocaleString("en-AU");

/* ---------------------------------------------------------------
   Horizontal bar chart — single series, sequential (one hue).
   Bars cap at 24px, 4px rounded data-end, values direct-labelled
   at the tip, hairline baseline, hover tooltip per mark.
   --------------------------------------------------------------- */
export function BarChart({ data, title, note, unit = "", hue = "cyan" }) {
  const [hover, setHover] = useState(-1);
  const max = Math.max(...data.map((d) => d.v)) || 1;

  return (
    <figure className={`dv dv-${hue}`}>
      {title && <figcaption className="dv-title">{title}</figcaption>}
      <div className="dv-bars">
        {data.map((d, i) => (
          <div
            className="dv-row"
            key={d.k}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(-1)}
          >
            <span className="dv-key">{d.k}</span>
            <div className="dv-track">
              {/* scaled to 80% so the tip label always has room inside the card */}
              <span className="dv-bar" style={{ width: `${Math.max((d.v / max) * 80, 1.5)}%` }} />
              <span className="dv-val mono">{nf(d.v)}{unit}</span>
            </div>
            {hover === i && (
              <span className="dv-tip mono" role="status">{d.k} · {nf(d.v)}{unit}</span>
            )}
          </div>
        ))}
      </div>
      {note && <p className="dv-note mono">{note}</p>}
    </figure>
  );
}

/* ---------------------------------------------------------------
   Step chart — cumulative XP required to enter each tier.
   One hue, light to dark by magnitude; caps direct-labelled.
   --------------------------------------------------------------- */
export function StepChart({ data, title, note }) {
  const [hover, setHover] = useState(-1);
  const max = Math.max(...data.map((d) => d.v)) || 1;

  return (
    <figure className="dv dv-step">
      {title && <figcaption className="dv-title">{title}</figcaption>}
      <div className="dv-cols">
        {data.map((d, i) => {
          const pct = (d.v / max) * 100;
          return (
            <div
              className="dv-col"
              key={d.k}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(-1)}
            >
              <div className="dv-col-track">
                <div className="dv-col-mark" style={{ height: `${Math.max(pct, 1.5)}%` }}>
                  <span className="dv-col-val mono">{d.v ? `${nf(d.v / 1000)}k` : "0"}</span>
                  <span
                    className="dv-col-bar"
                    style={{ opacity: 0.42 + (i / (data.length - 1)) * 0.58 }}
                  />
                </div>
              </div>
              <span className="dv-col-key">{d.k}</span>
              {hover === i && <span className="dv-tip mono">{d.k} · {nf(d.v)} XP</span>}
            </div>
          );
        })}
      </div>
      {note && <p className="dv-note mono">{note}</p>}
    </figure>
  );
}

/* ---------------------------------------------------------------
   Reference table — the honest form when every row carries meaning.
   --------------------------------------------------------------- */
export function DataTable({ cols, rows, title, note, align }) {
  return (
    <figure className="dv dv-table-wrap">
      {title && <figcaption className="dv-title">{title}</figcaption>}
      <div className="dv-scroll">
        <table className="dv-table">
          <thead>
            <tr>{cols.map((c, i) => (
              <th key={c} style={align && align[i] === "r" ? { textAlign: "right" } : undefined}>{c}</th>
            ))}</tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>
                {r.map((cell, ci) => (
                  <td key={ci} style={align && align[ci] === "r" ? { textAlign: "right" } : undefined}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="dv-note mono">{note}</p>}
    </figure>
  );
}

/* ---------------------------------------------------------------
   KPI row — headline numbers that are not charts.
   --------------------------------------------------------------- */
export function StatRow({ items }) {
  return (
    <div className="dv-kpis">
      {items.map((k) => (
        <div className="dv-kpi card card-lift" key={k.l}>
          <div className="dv-kpi-v">{k.v}</div>
          <div className="dv-kpi-l">{k.l}</div>
          <div className="dv-kpi-s mono">{k.s}</div>
        </div>
      ))}
    </div>
  );
}
