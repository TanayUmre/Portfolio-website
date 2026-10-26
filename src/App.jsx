import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CodingStats from './components/CodingStats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('tu_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    // Default to dark theme for developer portfolio aesthetic
    return true;
  });

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tu_theme', theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="portfolio-app">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <CodingStats />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
