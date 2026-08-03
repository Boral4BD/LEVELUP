import { useState } from "react";
import TabBar from "./components/TabBar";
import Section from "./components/Section";
import Hero from "./components/Hero";
import DemoSection from "./components/DemoSection";
import Footer from "./components/Footer";
import { SECTIONS } from "./data/content";
import { ProdDefs } from "./prototype/LevelUpPrototype";

function App() {
  const [active, setActive] = useState("problem");

  const go = (id) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const current = SECTIONS.find((s) => s.id === active);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ProdDefs />
      <Hero onStart={() => go("problem")} />
      <TabBar active={active} onChange={go} />

      {/* keyed so each section fades in fresh when the tab changes */}
      <main id="main" className="stage" key={active}>
        {current ? <Section s={current} /> : <DemoSection />}
      </main>

      <Footer />
    </>
  );
}

export default App;
