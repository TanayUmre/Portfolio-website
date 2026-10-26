import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Algorithms', href: '#coding' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="nav-logo" onClick={(e) => handleNavClick(e, '#')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">TU</span>
          <span className="logo-dot">.</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm resume-btn"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="mobile-controls">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mobile-resume-btn"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
