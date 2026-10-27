import React from 'react';
import { Cpu, Terminal, Database, Layout, BrainCircuit, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Languages':
        return <Terminal size={18} />;
      case 'Backend & Systems':
        return <Cpu size={18} />;
      case 'Frontend & UI':
        return <Layout size={18} />;
      case 'DevOps & Tools':
        return <Database size={18} />;
      case 'AI & Data Tools':
        return <BrainCircuit size={18} />;
      default:
        return <CheckCircle2 size={18} />;
    }
  };

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Tools & Technologies</span>
          </div>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            The core languages, frameworks, and infrastructure tools I reach for when building software.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-cat-icon">
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3 className="skill-cat-title">{cat.category}</h3>
                  <span className="skill-cat-desc">{cat.description}</span>
                </div>
              </div>

              <div className="skill-items-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-card">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
