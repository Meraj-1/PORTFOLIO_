import React from 'react';
import Header from './components/Header';
import About from './components/About';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Technology from './components/Technology';
import InterviewFAQ from './components/InterViewFAQ';
import QuoteCard from './ui/QuoteCard';
import Work from './components/Work';
import Services from './components/Services';
import WorkFlow from './components/WorkFlow';
import TechImpact from './components/TechImpact';
import SkillProof from './components/SkillProof';
// import SkillPlayGround from './components/SkillPlayGround';
const App = () => {

  return (
  <div className='bg-[#121316]'>
     <Header />
     <div>
      {/* <Header/> */}
      <Hero/>
      <QuoteCard/>
      <div className=''>
      <Technology/>
      <WorkFlow/>
      <SkillProof/>
      <Work/>
      <About />
      {/* <Services/> */}
      <InterviewFAQ/>
      <TechImpact/>
      {/* <Projects />    */}
      {/* <SkillPlayGround/> */}
      <Contact />
    <Footer /> /
    </div>
    </div>
  </div>
);
}
export default App;

// px-4 sm:px-[5vw] ms:px-[7vw] lg:px-[9vw]