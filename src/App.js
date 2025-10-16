import React from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
// import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Technology from './components/Technology';

const App = () => {

  return (
  <div>
     <Header />
     <div className=' bg-[#ffffff]'>'
      {/* <Header/> */}
      <Hero/>
      <div className=''>
      <Technology/>
      {/* <About /> */}
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