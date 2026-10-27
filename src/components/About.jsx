import React from 'react';
import { User, Rocket, Award, BookOpen, Compass, Terminal, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Behind The Code</span>
          </div>
          <h2 className="section-title">A Bit About Me</h2>
          <p className="section-subtitle">
            How I write code, what keeps me curious, and the principles I care about.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text-content">
            <h3 className="about-heading">
              "If it's worth writing, it's worth making fast, reliable, and clean."
            </h3>
            
            <p className="about-paragraph">
              I didn't start programming by clicking boilerplate templates. My foundation is built on <strong>C++ and competitive programming</strong>. Grinding over 500+ problems on LeetCode (earning the <strong>Knight badge with a peak rating of 1870</strong>) drilled an obsession with time complexity, memory limits, and edge cases deep into my reflexes.
            </p>

            <p className="about-paragraph">
              When I transitioned into full-stack development, that same rigor followed me. I naturally gravitated toward <strong>FastAPI and PostgreSQL</strong> because of strict type validation (Pydantic), asynchronous performance, and clean database versioning via <strong>Alembic</strong>. I like building backends that don't silently fail and frontends in <strong>React</strong> that feel instant.
            </p>

            <p className="about-paragraph">
              Outside of building APIs and solving contest rounds, I love tinkering with desktop tools in <strong>Electron</strong> and applied AI through <strong>Hugging Face</strong>.
            </p>

            {/* What I'm Doing Now (Live Ticker) */}
            <div className="now-card">
              <div className="now-header">
                <Clock size={16} className="now-icon" />
                <span className="now-title">What I'm focused on right now</span>
              </div>
              <div className="now-items">
                {personalInfo.now.map((item, idx) => (
                  <div key={idx} className="now-item">
                    <span className="now-item-tag">{item.label}</span>
                    <span className="now-item-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-cards-col">
            <div className="about-stat-box">
              <div className="about-stat-icon">
                <Award size={24} color="#FFA116" />
              </div>
              <div className="about-stat-num">1870 Rating</div>
              <div className="about-stat-title">LeetCode Knight</div>
              <p className="about-stat-desc">
                Top ~5% worldwide. Active contest solver practicing trees, dynamic programming, and graph traversals.
              </p>
            </div>

            <div className="about-stat-box">
              <div className="about-stat-icon">
                <Terminal size={24} color="#38bdf8" />
              </div>
              <div className="about-stat-num">FastAPI & React</div>
              <div className="about-stat-title">Production Web Architecture</div>
              <p className="about-stat-desc">
                Decoupled services, Alembic migrations, serverless Neon DB, and automated cron jobs via GitHub Actions.
              </p>
            </div>

            <div className="about-stat-box">
              <div className="about-stat-icon">
                <Compass size={24} color="#a855f7" />
              </div>
              <div className="about-stat-num">CP-31 Ladder</div>
              <div className="about-stat-title">Systematic Codeforces Practice</div>
              <p className="about-stat-desc">
                Conquering curated rating ladders in C++ to sharpen mathematical reasoning and speed under time constraints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
