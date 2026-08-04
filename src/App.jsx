import { useState } from "react";
import TopNav from "./components/TopNav";
import Page from "./components/Page";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { PAGES } from "./data/content";
import { ProdDefs } from "./prototype/LevelUpPrototype";

function App() {
  const [active, setActive] = useState("business");

  const go = (id) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const page = PAGES.find((p) => p.id === active) ?? PAGES[0];

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ProdDefs />
      <Hero onStart={() => go("business")} />
      <TopNav active={active} onChange={go} />

      {/* keyed so each section fades in fresh when the tab changes */}
      <main id="main" className="stage" key={active}>
        <Page page={page} onPage={go} />
      </main>

      <Footer />
    </>
  );
}

export default App;
