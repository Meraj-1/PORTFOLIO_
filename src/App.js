import React from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import initializeAnalytics from './components/Analytics';

const App = () => {

  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
  <div className=''>
     <Header />
      <Hero/>
      <About />
      <Projects />
      <Contact />
    <Footer /> 
    
  </div>
);
}
export default App;

