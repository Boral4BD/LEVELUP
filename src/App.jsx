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
import { ProdDefs } from "./prototype/LevelUpPrototype";

function App() {
  return (
    <>
      <ProdDefs />
      <Navbar />
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
      <Footer />
    </>
  );
}

export default App;
