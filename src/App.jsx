import React from "react";
import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import QuoteCard from "./ui/QuoteCard";
import Work from "./components/Work";
import WorkFlow from "./components/WorkFlow";
import TechImpact from "./components/TechImpact";
import SkillProof from "./components/SkillProof";

const App = () => (
  <MotionConfig reducedMotion="user">
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <QuoteCard />
        <About />
        <Work />
        <Technology />
        <WorkFlow />
        <SkillProof />
        <TechImpact />
        <Contact />
      </main>
      <Footer />
    </div>
  </MotionConfig>
);

export default App;
