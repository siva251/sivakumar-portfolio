import "./Custom.css";
import "./Exp.css";
import React, { lazy, Suspense, useState } from "react";
import Header from "./Components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Particle from "./Components/Particle";
import { AnimatePresence } from "framer-motion";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Skillset from "./Components/Skillset";
function App() {
  const About = lazy(() => import("./Components/About"));
  const Home = lazy(() => import("./Components/Home"));
  const KeySkills = lazy(() => import("./Components/KeySkills"));
  const Project = lazy(() => import("./Components/Experience"));
  const Resume = lazy(() => import("./Components/Resume"));

  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={isDarkMode ? "dark-mode App" : "light-mode App"}>
      {console.log("skk...App_isdarkmove", isDarkMode)}
      <div>
        <Particle />
        <div style={{ position: "relative", minHeight: "100vh", zIndex: 1 }}>
          <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
          <Suspense fallback={<h2>Loading...</h2>}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/keyskills" element={<KeySkills />} />
                <Route path="/eperience" element={<Experience />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
          {/* <Footer/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
