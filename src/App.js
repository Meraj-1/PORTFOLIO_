import React from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
// import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import initializeAnalytics from './components/Analytics';
import Technology from './components/Technology';

const App = () => {

  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
  <div>
     <Header />
     <div className='px-4 sm:px-[5vw] ms:px-[7vw] lg:px-[9vw] bg-[#000000]'>
      <Hero/>
      <Technology/>
      {/* <About /> */}
      <Projects />
      <Contact />
    <Footer /> 
    </div>
  </div>
);
}
export default App;

