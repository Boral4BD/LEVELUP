import { Sparkles } from "lucide-react";
import "./DisplayCards.css";

/**
 * Display Cards — a fanned stack of cards that de-saturates until hovered.
 *
 * Ported from the 21st.dev shadcn/Tailwind component to this project's
 * conventions: plain JSX instead of TypeScript, a local stylesheet instead of
 * Tailwind utilities, and the site's own colour tokens instead of shadcn's
 * `bg-muted` / `text-muted-foreground` theme variables. Behaviour, geometry
 * and the hover choreography are unchanged.
 */

const cx = (...parts) => parts.filter(Boolean).join(" ");

export function DisplayCard({
  className,
  icon = <Sparkles size={16} />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  accent = "var(--cyan)",
}) {
  return (
    <div className={cx("dc-card", className)} style={{ "--dc-accent": accent }}>
      <div className="dc-row">
        <span className="dc-icon">{icon}</span>
        <p className="dc-title">{title}</p>
      </div>
      <p className="dc-desc">{description}</p>
      <p className="dc-date">{date}</p>
    </div>
  );
}

export default function DisplayCards({ cards }) {
  const defaultCards = [
    { className: "dc-1 dc-dim" },
    { className: "dc-2 dc-dim" },
    { className: "dc-3" },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="dc-stack">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
