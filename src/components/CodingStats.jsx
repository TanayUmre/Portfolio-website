import React from 'react';
import { ExternalLink, Trophy, Flame, Code, CheckCircle2 } from 'lucide-react';
import { codingStats } from '../data/portfolioData';

export default function CodingStats() {
  return (
    <section className="section coding-section" id="coding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Problem Solving & Algorithms</span>
          </div>
          <h2 className="section-title">Competitive Programming</h2>
          <p className="section-subtitle">
            A strong algorithmic foundation built over hundreds of contest problems, optimizing time and space complexities.
          </p>
        </div>

        <div className="stats-grid">
          {codingStats.map((item) => (
            <a
              key={item.platform}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="stat-card"
            >
              <div className="stat-card-top">
                <span className="platform-name">{item.platform}</span>
                <span className="platform-badge" style={{ borderColor: item.color, color: item.color }}>
                  {item.badge}
                </span>
              </div>

              <div className="stat-card-body">
                <div className="stat-rating" style={{ color: item.color }}>
                  {item.rating}
                </div>
                <div className="stat-rank">{item.rank}</div>
                <p className="stat-detail">{item.detail}</p>
              </div>

              <div className="stat-card-footer">
                <span>View Profile</span>
                <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>

        {/* Highlight Banner: CP-31 Sheet */}
        <div className="cp-banner">
          <div className="cp-banner-content">
            <div className="cp-icon">
              <Flame size={24} color="#f97316" />
            </div>
            <div>
              <h3 className="cp-title">CP-31 Sheet in C++</h3>
              <p className="cp-desc">
                Actively solving and maintaining implementations of the renowned CP-31 sheet (800 to 1600+ rating ladder) covering greedy methods, prefix sums, binary search, tree & graph algorithms, and DP.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/TanayUmre/CP31_SHEET_IN_CPP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <span>View Solutions</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
