import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import BusinessPlanPage from "./pages/BusinessPlanPage";
import DemoPage from "./pages/DemoPage";
import { ProdDefs } from "./prototype/LevelUpPrototype";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <ProdDefs />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/business-plan" element={<BusinessPlanPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
