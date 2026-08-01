/* Icon set — real Lucide icons rather than hand-drawn paths, so each glyph
   actually depicts what it labels. Names are the site's semantic keys; the
   map keeps call sites unchanged. */

import {
  TriangleAlert, Search, Bot, TrendingUp, Users, Eye, ClipboardCheck,
  GitBranch, Network, ShieldCheck, Camera, Lightbulb, HeartPulse,
  Accessibility, DollarSign, IdCard, Percent, BadgeCheck, Scale, Umbrella,
  Gamepad2, Trophy, Dumbbell, Coins, Store, Swords, Flame, Target,
  ScrollText, Timer, Footprints, ChartColumnIncreasing,
} from "lucide-react";

const MAP = {
  // problem / introduction
  warn: TriangleAlert,
  search: Search,
  improve: TrendingUp,
  dollar: DollarSign,

  // product pillars
  coach: Bot,
  xp: ChartColumnIncreasing,
  people: Users,
  controller: Gamepad2,

  // app sections
  org: Network,
  seal: BadgeCheck,
  trophy: Trophy,
  dumbbell: Dumbbell,
  coins: Coins,
  store: Store,
  swords: Swords,
  flame: Flame,
  target: Target,
  timer: Timer,
  run: Footprints,
  quest: ScrollText,

  // business plan
  eye: Eye,
  clipboard: ClipboardCheck,
  branch: GitBranch,
  shield: ShieldCheck,
  camera: Camera,
  bulb: Lightbulb,
  heart: HeartPulse,
  access: Accessibility,
  id: IdCard,
  percent: Percent,
  scale: Scale,
  umbrella: Umbrella,
};

export default function BizIcon({ name, size = 20, color = "currentColor" }) {
  const Glyph = MAP[name] || TriangleAlert;
  return <Glyph size={size} color={color} strokeWidth={1.7} aria-hidden="true" />;
}
