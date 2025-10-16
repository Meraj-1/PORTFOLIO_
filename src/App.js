import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import initializeAnalytics from './components/Analytics';
import Technology from './components/Technology';
import InterviewFAQ from './components/InterViewFAQ';

const App = () => {


  return (
  <div className='bg-[#282C33]'>
     <Header />
     <div>
      {/* <Header/> */}
      <Hero/>
      <div className=''>
      <Technology/>
      <About />
      <InterviewFAQ/>
      <Projects />
      <Contact />
    <Footer /> 
    </div>
    </div>
  </div>
);
}
export default App;

// px-4 sm:px-[5vw] ms:px-[7vw] lg:px-[9vw]