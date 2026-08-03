import problemImg from "../assets/img/problem.jpg";
import productImg from "../assets/img/product.jpg";
import visionImg from "../assets/img/vision.jpg";
import registrationImg from "../assets/img/registration.jpg";
import structureImg from "../assets/img/structure.jpg";
import legalImg from "../assets/img/legal.jpg";

/* Every paragraph below is the business plan's own wording, unchanged.
   Nothing here is invented copy. */

export const SECTIONS = [
  {
    id: "problem",
    tab: "Problem",
    n: "01",
    title: "Identified problem and introduction",
    image: problemImg,
    alt: "A person sitting alone, disengaged",
    body: [
      "Physical inactivity among teenagers and young adults is becoming an increasingly significant issue in Australia. Many individuals struggle to maintain consistent exercise habits due to a lack of motivation, expensive gym memberships, and fitness experiences that fail to keep users engaged over time. Existing fitness applications often focus solely on tracking workouts rather than creating an enjoyable and rewarding experience.",
      "Market research conducted during the development of LEVELUP identified that many respondents preferred a fitness platform that incorporated competition, rewards, and progression systems similar to those found in video games. This highlights a clear gap in the market for an innovative solution that combines fitness with gamification.",
    ],
  },
  {
    id: "product",
    tab: "Product",
    n: "02",
    title: "Products and services",
    image: productImg,
    alt: "Training with a phone tracking the session",
    body: [
      "LEVELUP is a gamified fitness platform designed to transform exercise into an immersive and rewarding experience. The application utilises artificial intelligence to provide personalised workout recommendations while incorporating experience points, achievement systems, leaderboards, and multiplayer challenges to encourage long-term engagement.",
      "The prototype has been intentionally designed so that every feature directly addresses an identified customer need. For example, the AI fitness coach provides users with tailored workout plans based on their goals and fitness levels, while the XP system rewards consistency and encourages users to progress through increasingly challenging milestones. Additionally, multiplayer challenges foster a sense of community and accountability, allowing users to compete with friends and other members worldwide.",
    ],
  },
  {
    id: "vision",
    tab: "Vision",
    n: "03",
    title: "Vision, mission, and values",
    image: visionImg,
    alt: "An open landscape at sunrise",
    body: [
      "LEVELUP's vision is to become the world's leading gamified fitness platform, inspiring individuals to adopt healthier lifestyles through innovation and technology. Its purpose is to make fitness enjoyable, accessible, and sustainable by removing many of the barriers that prevent people from exercising consistently.",
      "The business is guided by several core values, including innovation, accessibility, community, health and wellbeing, and continuous improvement. These values determine every decision made by the organisation and ensure that the business remains focused on delivering meaningful outcomes for its customers.",
    ],
    values: ["Innovation", "Accessibility", "Community", "Health and wellbeing", "Continuous improvement"],
  },
  {
    id: "registration",
    tab: "Registration",
    n: "04",
    title: "Registration",
    image: registrationImg,
    alt: "Paperwork on a desk",
    body: [
      "As an Australian startup, LEVELUP will be required to complete several registration processes before commencing operations. The business name will be registered through the Australian Securities and Investments Commission (ASIC), and an Australian Business Number (ABN) and Tax File Number (TFN) will be obtained to ensure compliance with taxation requirements. Should annual revenue exceed the relevant threshold, the business will also register for Goods and Services Tax (GST).",
      "In addition, trademark protection will be sought for the LEVELUP name and logo to safeguard the business's identity and prevent unauthorised use by competitors.",
    ],
    steps: ["Business name", "ABN and TFN", "GST", "Trademark"],
  },
  {
    id: "structure",
    tab: "Structure",
    n: "05",
    title: "Structure and ownership",
    image: structureImg,
    alt: "A small team working together",
    body: [
      "Initially, LEVELUP will operate as a sole trader business. This structure has been selected as it provides complete ownership and control, enabling faster decision making and reducing the administrative burden commonly associated with larger business structures.",
      "However, as the business grows and seeks external investment, there is potential for LEVELUP to transition into a proprietary limited company (Pty Ltd). This would provide limited liability protection and create greater opportunities for expansion, partnerships, and capital investment. By adopting a phased approach to ownership, the business can remain flexible while supporting long-term growth objectives.",
    ],
    ownership: { now: "Sole trader", next: "Pty Ltd" },
  },
  {
    id: "team",
    tab: "Team",
    n: "06",
    title: "Organisation chart",
    body: [
      "During its initial stages, LEVELUP will operate with a relatively small organisational structure consisting of the Founder and Chief Executive Officer, a software developer, a marketing manager, a customer support officer, and a graphic designer. This lean structure enables the business to remain cost-effective while ensuring that all critical functions are adequately managed.",
      "As the business expands, additional personnel, including project managers, data analysts, and sales representatives, may be employed to support increasing demand and facilitate future growth.",
    ],
    org: {
      lead: "Founder and Chief Executive Officer",
      now: ["Software developer", "Marketing manager", "Customer support officer", "Graphic designer"],
      later: ["Project managers", "Data analysts", "Sales representatives"],
    },
  },
  {
    id: "legal",
    tab: "Legal",
    n: "07",
    title: "Legal considerations",
    image: legalImg,
    alt: "A locked device representing data protection",
    body: [
      "As LEVELUP collects personal and health-related information, compliance with Australian privacy legislation is essential. The business will adhere to the Privacy Act 1988 and implement appropriate safeguards to ensure the protection of customer data. It must also comply with Australian Consumer Law, which governs consumer rights, product guarantees, and advertising practices.",
      "To further protect the business, LEVELUP will obtain public liability, professional indemnity, and cyber security insurance. These policies will provide financial protection in the event of legal disputes, cyber incidents, or other unforeseen circumstances.",
    ],
    camera: "Camera footage is sensitive information. Form tracking films users while they train, so that footage is treated as sensitive health-related information under the Privacy Act 1988.",
  },
];

export const TABS = [
  ...SECTIONS.map((s) => ({ id: s.id, tab: s.tab })),
  { id: "demo", tab: "Prototype" },
];

export const HERO = {
  name: "LEVELUP",
  line: "A gamified fitness platform designed to transform exercise into an immersive and rewarding experience.",
};
