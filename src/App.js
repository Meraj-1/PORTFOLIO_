import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div>
     <Header />
    <main>
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer /> 
    
  </div>
);

export default App;

