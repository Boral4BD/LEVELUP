export const NAV_LINKS = [
  { href: "#problem", label: "Why" },
  { href: "#features", label: "Features" },
  { href: "#app", label: "The app" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#compete", label: "Compete" },
  { href: "#shop", label: "Shop" },
  { href: "#business", label: "The plan" },
  { href: "#faq", label: "FAQ" },
];

/* ---- problem / introduction ---- */
export const PROBLEMS = [
  { icon: "warn", t: "Inactivity is rising", d: "Physical inactivity among teenagers and young adults is an increasingly significant issue in Australia." },
  { icon: "improve", t: "Motivation fades", d: "Many individuals struggle to maintain consistent exercise habits due to a lack of motivation." },
  { icon: "dollar", t: "Gyms cost too much", d: "Expensive gym memberships put fitness out of reach for many." },
  { icon: "search", t: "Apps only track", d: "Existing fitness apps focus solely on tracking workouts rather than creating an enjoyable, rewarding experience." },
];

export const OLD_LOOP = ["Download app", "Track workouts", "Motivation fades", "Quit"];
export const NEW_LOOP = ["Train", "Earn XP & coins", "Rank up & compete", "Redeem rewards"];

/* ---- vision, mission, values ---- */
export const VISION = "To become the world's leading gamified fitness platform, inspiring individuals to adopt healthier lifestyles through innovation and technology.";
export const MISSION = "Make fitness enjoyable, accessible, and sustainable by removing many of the barriers that prevent people from exercising consistently.";
export const VALUES = [
  { t: "Innovation", icon: "bulb" },
  { t: "Accessibility", icon: "access" },
  { t: "Community", icon: "people" },
  { t: "Health & wellbeing", icon: "heart" },
  { t: "Continuous improvement", icon: "improve" },
];

/* ---- registration pipeline ---- */
export const REGISTRATION = [
  { icon: "clipboard", t: "Business name", d: "Registered through ASIC" },
  { icon: "id", t: "ABN + TFN", d: "Compliance with taxation requirements" },
  { icon: "percent", t: "GST", d: "Once annual revenue exceeds the threshold" },
  { icon: "seal", t: "Trademark", d: "LEVELUP name and logo protected" },
];

/* ---- ownership flow ---- */
export const OWNERSHIP = {
  now: {
    t: "Sole trader",
    tag: "Now",
    points: ["Complete ownership and control", "Faster decision making", "Minimal administrative burden"],
  },
  later: {
    t: "Pty Ltd company",
    tag: "As we grow",
    points: ["Limited liability protection", "Capital investment", "Partnerships and expansion"],
  },
};

/* ---- organisation chart ---- */
export const ORG_NOW = ["Software developer", "Marketing manager", "Customer support", "Graphic designer"];
export const ORG_FUTURE = ["Project managers", "Data analysts", "Sales representatives"];

/* ---- legal ---- */
export const LEGAL = [
  { icon: "shield", t: "Privacy Act 1988", d: "Appropriate safeguards to ensure the protection of customer data." },
  { icon: "scale", t: "Australian Consumer Law", d: "Consumer rights, product guarantees, and advertising practices." },
  { icon: "umbrella", t: "Insurance", d: "Public liability, professional indemnity, and cyber security cover." },
];

/* ---- business plan flowcharts (worded from the plan) ---- */
export const FLOW_TODAY = ["Lack of motivation", "Expensive gym memberships", "Apps that only track workouts", "Users disengage over time"];
export const FLOW_LEVELUP = ["Competition", "Rewards", "Progression systems", "Long-term engagement"];

/* ---- headline figures (all drawn from the prototype's own systems) ---- */
export const KPIS = [
  { v: "7", l: "Ranked tiers", s: "Bronze through Apex" },
  { v: "21", l: "Divisions to climb", s: "Three per tier" },
  { v: "7", l: "Training stations", s: "Five camera tracked" },
  { v: "5", l: "Core values", s: "Guiding every decision" },
];

/* ---- the app, split into its sections (the prototype's own menu) ---- */
export const APP_SECTIONS = [
  { icon: "xp", t: "Train", d: "Daily quests and a live session — pick a loadout, work the stations, bank the XP.", tag: "Quests · Sessions" },
  { icon: "coach", t: "Form tracker", d: "The camera counts reps and scores form live, so clean reps earn more than sloppy ones.", tag: "AI · Camera" },
  { icon: "org", t: "Rank", d: "Seven tiers, three divisions each, with tier perks unlocking as you climb.", tag: "XP · Perks" },
  { icon: "people", t: "Clans", d: "Pool weekly XP with your clan, climb the clan ladder, and chat with the roster.", tag: "Teams · Chat" },
  { icon: "controller", t: "Compete", d: "A friends ladder and a global ranking, both reset weekly.", tag: "Leaderboards" },
  { icon: "dollar", t: "Rewards", d: "Redeem coins for game credit, or cash out to PayPal, bank, or a retail gift card.", tag: "Redeem · Cash out" },
  { icon: "seal", t: "Shop", d: "Kit and apparel, payable with cash or with the coins you have already earned.", tag: "Kit · Apparel" },
];

/* ---- chart data, taken from the prototype's real values ---- */
export const XP_PER_REP = [
  { k: "Pull-ups", v: 9 },
  { k: "Ab rollout", v: 7 },
  { k: "Band squats", v: 4 },
  { k: "Band rows", v: 4 },
  { k: "Push-ups", v: 3 },
];

export const STATION_TABLE = [
  ["Push-ups", "Push-up stand", "3 XP / rep", "Yes"],
  ["Pull-ups", "Pull-up grips", "9 XP / rep", "Yes"],
  ["Band squats", "Resistance bands", "4 XP / rep", "Yes"],
  ["Band rows", "Resistance bands", "4 XP / rep", "Yes"],
  ["Ab rollout", "Ab grips", "7 XP / rep", "Yes"],
  ["Plank", "Training mat", "1.4 XP / sec", "No"],
  ["Run", "Tracked by phone", "0.14 XP / m", "No"],
];

export const TIER_TABLE = [
  ["Bronze", "0", "Ranked ladder, daily quests"],
  ["Silver", "5,400", "—"],
  ["Gold", "10,800", "Custom avatars"],
  ["Platinum", "16,200", "Advanced analytics"],
  ["Diamond", "21,600", "Exclusive quests"],
  ["Master", "27,000", "Coin multiplier ×1.5"],
  ["Apex", "32,400", "Top rank"],
];

export const TIER_CHART = [
  { k: "Bronze", v: 0 }, { k: "Silver", v: 5400 }, { k: "Gold", v: 10800 },
  { k: "Platinum", v: 16200 }, { k: "Diamond", v: 21600 }, { k: "Master", v: 27000 },
  { k: "Apex", v: 32400 },
];

export const PAYOUT_CHART = [
  { k: "1st", v: 5000 }, { k: "2nd", v: 3000 }, { k: "3rd", v: 2000 },
  { k: "4th–10th", v: 800 }, { k: "Everyone else", v: 200 },
];

export const QUEST_TABLE = [
  ["50 push-ups", "Medium", "500 XP", "◆ 100"],
  ["1 km run", "Easy", "200 XP", "◆ 50"],
  ["30 band squats", "Hard", "460 XP", "◆ 150"],
  ["2 minutes plank", "Medium", "460 XP", "◆ 150"],
];

export const REGISTRATION_TABLE = [
  ["Business name", "Australian Securities and Investments Commission (ASIC)", "Registered before commencing operations"],
  ["ABN and TFN", "Australian Taxation Office", "Compliance with taxation requirements"],
  ["GST", "Australian Taxation Office", "Should annual revenue exceed the relevant threshold"],
  ["Trademark", "IP Australia", "Safeguards the LEVELUP name and logo"],
];

export const LEGAL_TABLE = [
  ["Privacy Act 1988", "Personal and health-related information", "Appropriate safeguards to protect customer data"],
  ["Australian Consumer Law", "Consumer rights and advertising", "Product guarantees and advertising practices"],
  ["Public liability insurance", "Third-party claims", "Financial protection in the event of legal disputes"],
  ["Professional indemnity insurance", "Advice and service delivery", "Financial protection in the event of legal disputes"],
  ["Cyber security insurance", "Customer data and systems", "Financial protection in the event of cyber incidents"],
];

export const FEATURES = [
  {
    k: "tracking",
    t: "AI coach & form tracking",
    d: "The AI fitness coach provides tailored workout plans based on your goals and fitness level, while the camera counts reps and scores your form live.",
  },
  {
    k: "quests",
    t: "Daily quests & achievements",
    d: "Targeted challenges reset every day — easy, medium, and hard — each with its own XP and coin payout, rewarding consistency.",
  },
  {
    k: "rank",
    t: "XP & ranked progression",
    d: "The XP system rewards consistency and pushes you through increasingly challenging milestones — seven tiers, Bronze through Apex.",
  },
  {
    k: "clans",
    t: "Clans",
    d: "Team up, pool your weekly XP, and climb the clan ladder together. Every member gets the full weekly payout — not a split of it.",
  },
  {
    k: "compete",
    t: "Multiplayer challenges",
    d: "Compete with friends and other members worldwide on weekly leaderboards — fostering community and accountability.",
  },
  {
    k: "rewards",
    t: "Rewards that pay out",
    d: "Redeem coins for game credit — Fortnite, Valorant, Steam, PlayStation, Xbox, Nintendo, League of Legends — or cash out to PayPal, bank, or a retail gift card.",
  },
];

export const STEPS = [
  {
    n: "01",
    t: "Pick a loadout",
    d: "Full clear, Upper, Core, or Cardio — each pulls from seven stations: push-ups, pull-ups, band squats, band rows, plank, ab rollouts, and running.",
  },
  {
    n: "02",
    t: "Train with the camera, or log it yourself",
    d: "Set your phone on the tripod mount and the tracker counts reps and scores form as you go. No kit nearby? Log sets manually and keep moving.",
  },
  {
    n: "03",
    t: "Earn XP and coins",
    d: "Streaks multiply your session XP, cleared quests pay bonus coins, and every set moves you toward the next rank.",
  },
  {
    n: "04",
    t: "Cash out or gear up",
    d: "Spend coins on game credit or a cash payout, or put them — plus real dollars — toward the kit and apparel in the shop.",
  },
];

export const TIERS = [
  { name: "Bronze", c: "#C77B4A" },
  { name: "Silver", c: "#B9C6DE" },
  { name: "Gold", c: "#FFC43D" },
  { name: "Platinum", c: "#4FD8FF" },
  { name: "Diamond", c: "#7FA8FF" },
  { name: "Master", c: "#C08BFF" },
  { name: "Apex", c: "#FF6B4A" },
];

export const STATIONS = [
  { n: "Push-ups", kit: "Push-up stand", cam: true },
  { n: "Pull-ups", kit: "Pull-up grips", cam: true },
  { n: "Band squats", kit: "Resistance bands", cam: true },
  { n: "Band rows", kit: "Resistance bands", cam: true },
  { n: "Plank", kit: "Training mat", cam: false },
  { n: "Ab rollout", kit: "Ab grips", cam: true },
  { n: "Run", kit: "Tracked by phone", cam: false },
];

export const CLAN_REWARDS = [
  { place: "1st", xp: 5000, coins: 2500 },
  { place: "2nd", xp: 3000, coins: 1500 },
  { place: "3rd", xp: 2000, coins: 1000 },
  { place: "4th–10th", xp: 800, coins: 400 },
  { place: "Everyone else", xp: 200, coins: 100 },
];

export const REWARD_SAMPLES = [
  { t: "Fortnite", v: "1,000 V-Bucks", coins: 1900 },
  { t: "Valorant", v: "1,050 VP", coins: 1900 },
  { t: "Steam", v: "$20 wallet credit", coins: 1950 },
  { t: "PlayStation Store", v: "$20 credit", coins: 1950 },
  { t: "Xbox", v: "$20 credit", coins: 1950 },
  { t: "PayPal transfer", v: "$10 cash out", coins: 1200 },
];

export const SHOP_ITEMS = [
  { id: "s1", t: "LEVELUP kit bag", price: 149, coins: null, tag: "The whole system, one bag." },
  { id: "s2", t: "Push-up stand", price: 89, coins: null, tag: "Two stations in one frame." },
  { id: "s3", t: "Resistance band set", price: 45, coins: 4200, tag: "Five tensions, one pouch." },
  { id: "s4", t: "Ab grips", price: 35, coins: 3300, tag: "A wheel that won't fold you in half." },
  { id: "s5", t: "Phone tripod mount", price: 39, coins: 3600, tag: "The angle the tracker needs." },
  { id: "s6", t: "Training mat", price: 59, coins: 5400, tag: "Marked for hand placement." },
  { id: "s7", t: "Shaker bottle", price: 25, coins: 2300, tag: "Your rank, printed on it." },
  { id: "s8", t: "Training tee", price: 45, coins: 4100, tag: "Sleeve colour tracks your tier." },
  { id: "s9", t: "Joggers", price: 69, coins: 6200, tag: "Pockets that hold a phone at pace." },
];

export const FAQS = [
  {
    q: "Is the camera tracking in the demo real?",
    a: "No — the interactive preview on this page simulates rep counting and form scoring so you can feel the loop instantly in your browser. The real app uses your phone's camera and on-device pose tracking.",
  },
  {
    q: "Do I need the kit to play?",
    a: "No. Every station can be logged manually with just your phone. The kit — stand, bands, ab grips, tripod, mat — makes camera tracking possible and gets you cleaner form scores, but it isn't required to start.",
  },
  {
    q: "Are the rewards and cash-outs real money?",
    a: "In the shipped app, yes — coins earned from training redeem for real game credit or a real cash payout. In this browser preview, redemption and checkout are disabled; nothing is charged and nothing is issued.",
  },
  {
    q: "Does my progress in the demo save anywhere?",
    a: "No. The preview runs entirely in your browser tab with no account and no server. Refreshing the page resets it back to a fresh profile.",
  },
  {
    q: "How do clan payouts work?",
    a: "Clans pool everyone's weekly XP into one combined score. Wherever the clan finishes on the clan ladder, every member — not a split of the group — receives that placement's full XP and coin payout.",
  },
];
