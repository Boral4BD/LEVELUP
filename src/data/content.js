export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#compete", label: "Compete" },
  { href: "#shop", label: "Shop" },
  { href: "#faq", label: "FAQ" },
];

export const FEATURES = [
  {
    k: "tracking",
    t: "AI form tracking",
    d: "Prop your phone up and the tracker counts reps and scores your form live. Sloppy reps still count — they just earn less XP than clean ones.",
  },
  {
    k: "quests",
    t: "Daily quests",
    d: "A handful of targeted challenges reset every day — easy, medium, and hard — each with its own XP and coin payout.",
  },
  {
    k: "rank",
    t: "Ranked ladder",
    d: "Seven tiers, Bronze through Apex, three divisions each. Higher tiers unlock real perks: custom avatars, analytics, exclusive quests, coin multipliers.",
  },
  {
    k: "clans",
    t: "Clans",
    d: "Team up, pool your weekly XP, and climb the clan ladder together. Every member gets the full weekly payout — not a split of it.",
  },
  {
    k: "compete",
    t: "Global leaderboards",
    d: "A friends ladder and a global ranking across every player on LEVELUP, reset weekly, with placement badges for the top three.",
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
  { t: "LEVELUP kit bag", price: 149, coins: null, tag: "The whole system, one bag." },
  { t: "Push-up stand", price: 89, coins: null, tag: "Two stations in one frame." },
  { t: "Resistance band set", price: 45, coins: 4200, tag: "Five tensions, one pouch." },
  { t: "Ab grips", price: 35, coins: 3300, tag: "A wheel that won't fold you in half." },
  { t: "Phone tripod mount", price: 39, coins: 3600, tag: "The angle the tracker needs." },
  { t: "Training mat", price: 59, coins: 5400, tag: "Marked for hand placement." },
  { t: "Shaker bottle", price: 25, coins: 2300, tag: "Your rank, printed on it." },
  { t: "Training tee", price: 45, coins: 4100, tag: "Sleeve colour tracks your tier." },
  { t: "Joggers", price: 69, coins: 6200, tag: "Pockets that hold a phone at pace." },
];

export const FAQS = [
  {
    q: "Is the camera tracking in the demo real?",
    a: "No — the interactive preview below simulates rep counting and form scoring so you can feel the loop instantly in your browser. The real app uses your phone's camera and on-device pose tracking.",
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
