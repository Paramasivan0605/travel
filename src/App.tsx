import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
// import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Destinations />
      <Packages />
      {/* <Testimonials /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;