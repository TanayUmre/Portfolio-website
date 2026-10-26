import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles, Server, Laptop, Database, Info } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack & Backend' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'desktop', label: 'Desktop & Mobile' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">Projects I've Built</h2>
          <p className="section-subtitle">
            From full-stack production architectures and AI integrations to desktop tools and algorithmic software.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured-project-card' : ''}`}
            >
              {project.featured && (
                <div className="featured-ribbon">
                  <Sparkles size={13} />
                  <span>Featured Project</span>
                </div>
              )}

              <div className="project-card-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>

              <div className="project-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                <span className="highlights-heading">Key Highlights:</span>
                <ul>
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              {project.demoNote && (
                <div className="demo-note">
                  <Info size={14} />
                  <span>{project.demoNote}</span>
                </div>
              )}

              <div className="project-actions">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                )}

                {project.apiUrl && (
                  <a
                    href={project.apiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <span>API Docs</span>
                    <Server size={14} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    <GithubIcon size={15} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
