/* Small stroke icon set shared across the marketing pages */

const PATHS = {
  warn: "M12 3 2 21h20L12 3zM12 10v5M12 18h.01",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.35-4.35",
  coach: "M12 2v3M7 5h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM9 11h.01M15 11h.01M9.5 14.5h5M8 22l1.5-4h5L16 22",
  xp: "M5 21h14M8 21V9M12 21V4M16 21v-8",
  people: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21c0-4 3-6 7-6s7 2 7 6M17 8a3 3 0 1 0 0-6M18 21c0-3-1-5-3-6",
  eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  clipboard: "M9 2h6v4H9zM9 4H6a1 1 0 0 0-1 1v16h14V5a1 1 0 0 0-1-1h-3M9 13l2 2 4-4",
  branch: "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 9v6M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9",
  org: "M9 3h6v5H9zM4 16h6v5H4zM14 16h6v5h-6zM12 8v4M7 16v-4h10v4",
  shield: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z",
  camera: "M4 7h3l2-3h6l2 3h3v13H4zM12 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10.5c-.8.7-1 1.5-1 2.5h-6c0-1-.2-1.8-1-2.5A6 6 0 0 1 12 3z",
  heart: "M12 21S3 14 3 8.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 9 2.5C21 14 12 21 12 21z",
  access: "M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM4 9c2.5.8 5 1.2 8 1.2S17.5 9.8 20 9M12 10v4M12 14l-3.5 7M12 14l3.5 7",
  improve: "M2 17l7-7 4 4 9-9M15 5h6v6",
  dollar: "M12 2v20M17 6h-7a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H6",
  id: "M3 5h18v14H3zM7 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM6 16c.5-1.5 1.7-2.5 3-2.5s2.5 1 3 2.5M15 9h4M15 13h4",
  percent: "M19 5 5 19M7.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
  seal: "M12 2l2.2 2.2H17.4v3.2L19.6 9.6l-2.2 2.2v3.2h-3.2L12 17.2l-2.2-2.2H6.6v-3.2L4.4 9.6l2.2-2.2V4.2h3.2L12 2zM12 17v5M9 10l2 2 4-4",
  scale: "M12 4v16M8 20h8M12 6L5 8m7-2l7 2M5 8l-2.5 6a3.2 3.2 0 0 0 5 0L5 8zM19 8l-2.5 6a3.2 3.2 0 0 0 5 0L19 8z",
  umbrella: "M12 2a9 9 0 0 1 9 10H3A9 9 0 0 1 12 2zM12 12v7a2 2 0 0 0 4 0",
  controller: "M6 9h12a4 4 0 0 1 4 4v3a3 3 0 0 1-5.6 1.5L15 15H9l-1.4 2.5A3 3 0 0 1 2 16v-3a4 4 0 0 1 4-4zM7.5 12.5h3M9 11v3M16 11h.01M18 13h.01",
};

export default function BizIcon({ name, size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}
