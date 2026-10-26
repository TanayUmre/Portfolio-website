import React from 'react';
import { User, Code2, Rocket, Award, Coffee, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Background & Journey</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A developer who loves solving hard problems and shipping clean, practical applications.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text-content">
            <h3 className="about-heading">
              From competitive problem-solving to full-stack software engineering.
            </h3>
            
            <p className="about-paragraph">
              My journey started with <strong>C++ and competitive programming</strong>, where I developed a rigorous appreciation for time-complexity, memory efficiency, and corner-case handling. Competing regularly on platforms like <strong>LeetCode (Knight, 1870)</strong> and <strong>CodeChef (3-Star)</strong> taught me how to break down complex constraints into elegant solutions.
            </p>

            <p className="about-paragraph">
              I brought this analytical mindset into full-stack development, building modern web and desktop systems. With <strong>FastAPI, PostgreSQL, and React</strong>, I focus on clean RESTful API design, database integrity with <strong>Alembic migrations</strong>, and decoupled, reactive user experiences.
            </p>

            <p className="about-paragraph">
              I'm also passionate about applied AI and automation — from integrating open-source LLMs via <strong>Hugging Face</strong> in Chef AI, to automating scheduled backend maintenance with <strong>GitHub Actions</strong> workflows.
            </p>

            <div className="about-values">
              <div className="value-item">
                <span className="value-bullet">⚡</span>
                <div>
                  <strong>Performance First:</strong> Writing optimized algorithms and non-blocking asynchronous APIs.
                </div>
              </div>
              <div className="value-item">
                <span className="value-bullet">🛡️</span>
                <div>
                  <strong>Reliability:</strong> Robust data validation with Pydantic, relational schemas, and secure auth.
                </div>
              </div>
              <div className="value-item">
                <span className="value-bullet">🚀</span>
                <div>
                  <strong>Continuous Growth:</strong> Actively learning new paradigms, libraries, and frameworks every week.
                </div>
              </div>
            </div>
          </div>

          <div className="about-cards-col">
            <div className="about-stat-box">
              <div className="about-stat-icon">
                <Award size={24} color="#FFA116" />
              </div>
              <div className="about-stat-num">Top 5%</div>
              <div className="about-stat-desc">Global LeetCode Knight with 1870 peak contest rating</div>
            </div>

            <div className="about-stat-box">
              <div className="about-stat-icon">
                <Rocket size={24} color="#38bdf8" />
              </div>
              <div className="about-stat-num">Full-Stack</div>
              <div className="about-stat-desc">End-to-end applications deployed with automated CI/CD workflows</div>
            </div>

            <div className="about-stat-box">
              <div className="about-stat-icon">
                <BookOpen size={24} color="#a855f7" />
              </div>
              <div className="about-stat-num">22+ Projects</div>
              <div className="about-stat-desc">From algorithmic CLI simulators and games to desktop Electron and AI apps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
