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
      case 'Databases & Cloud':
        return <Database size={18} />;
      case 'Data & AI':
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
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Tools, languages, and frameworks I use to design, develop, and deploy software.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-cat-icon">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="skill-cat-title">{cat.category}</h3>
              </div>

              <div className="skill-pills">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
