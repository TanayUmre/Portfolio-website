import React from 'react';
import { ArrowRight, Mail, Award, Terminal, Sparkles, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight-gradient">{personalInfo.name}</span>
          </h1>

          <p className="hero-role">
            <span className="code-font">&gt; </span>
            {personalInfo.role}
          </p>

          <p className="hero-description">
            {personalInfo.tagline}
          </p>

          <div className="hero-cta-group">
            <button
              onClick={() => scrollTo('#projects')}
              className="btn btn-primary"
            >
              <span>Explore My Work</span>
              <ArrowRight size={17} />
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className="btn btn-outline"
            >
              <Mail size={17} />
              <span>Get in Touch</span>
            </button>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="hero-highlights">
            <div className="highlight-item">
              <div className="highlight-icon" style={{ color: '#FFA116' }}>
                <Award size={20} />
              </div>
              <div className="highlight-text">
                <span className="highlight-val">LeetCode Knight</span>
                <span className="highlight-label">1870 Peak Rating (Top 5%)</span>
              </div>
            </div>

            <div className="highlight-divider"></div>

            <div className="highlight-item">
              <div className="highlight-icon" style={{ color: '#38bdf8' }}>
                <Terminal size={20} />
              </div>
              <div className="highlight-text">
                <span className="highlight-val">FastAPI + React</span>
                <span className="highlight-label">Production Full-Stack</span>
              </div>
            </div>

            <div className="highlight-divider"></div>

            <div className="highlight-item">
              <div className="highlight-icon" style={{ color: '#a855f7' }}>
                <Code2 size={20} />
              </div>
              <div className="highlight-text">
                <span className="highlight-val">C++ & Python</span>
                <span className="highlight-label">Algorithms & CP-31</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
