import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">TU</span>
            <span className="logo-dot">.</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-tagline">
            Designing scalable full-stack applications & solving hard algorithmic puzzles.
          </p>
        </div>

        <div className="footer-center">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite & Pure CSS.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer-social-link"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="footer-social-link"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
