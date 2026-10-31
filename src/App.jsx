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
import Experience from "./components/Experience";
import NotFound from "./components/NotFound";
import ProjectDetail from "./components/ProjectDetail";
import { getProjectSlugFromPath, isPortfolioHomePath } from "./utils/routes";

const App = () => {
  const pathname = window.location.pathname;
  const projectSlug = getProjectSlugFromPath(pathname);
  const isHome = isPortfolioHomePath(pathname);

  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell">
        <Header />
        {isHome ? (
          <main>
            <Hero />
            <QuoteCard />
            <About />
            <Experience />
            <Work />
            <Technology />
            <WorkFlow />
            <SkillProof />
            <TechImpact />
            <Contact />
          </main>
        ) : projectSlug ? (
          <ProjectDetail slug={projectSlug} />
        ) : (
          <NotFound />
        )}
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default App;
