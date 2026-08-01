import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import AppSections from "./components/AppSections";
import HowItWorks from "./components/HowItWorks";
import Compete from "./components/Compete";
import Shop from "./components/Shop";
import BusinessPlan from "./components/BusinessPlan";
import DemoSection from "./components/DemoSection";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Parallax from "./components/Parallax";
import Glide from "./components/Glide";
import { ProdDefs } from "./prototype/LevelUpPrototype";

const SECTIONS = [
  { id: "top", label: "Home" },
  { id: "problem", label: "Why" },
  { id: "features", label: "Features" },
  { id: "app", label: "The app" },
  { id: "how-it-works", label: "How it works" },
  { id: "compete", label: "Compete" },
  { id: "shop", label: "Shop" },
  { id: "business", label: "The plan" },
  { id: "demo", label: "Demo" },
  { id: "faq", label: "FAQ" },
];

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Parallax />
      <Glide sections={SECTIONS} />
      <ProdDefs />
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <Features />
        <AppSections />
        <HowItWorks />
        <Compete />
        <Shop />
        <BusinessPlan />
        <DemoSection />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
