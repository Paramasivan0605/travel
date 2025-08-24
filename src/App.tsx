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
import { ThemeProvider } from './context/ThemeContext';


function App() {
  return (
    // <div className="min-h-screen">
      <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Destinations />
      <Packages />
      {/* <Testimonials /> */}
      <About />
      <Contact />
      <Footer />
      </div>
    </ThemeProvider>
     );
}

export default App;