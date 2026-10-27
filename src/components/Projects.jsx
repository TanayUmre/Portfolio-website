import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles, Server, Info, BookOpen, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedStory, setExpandedStory] = useState({});

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack & Backend' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'desktop', label: 'Desktop & Tools' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const toggleStory = (id) => {
    setExpandedStory(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Real Software, Real Code</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Things I've built to solve everyday problems, explore new tech, or test architectural patterns under real constraints.
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
          {filteredProjects.map((project) => {
            const isStoryOpen = expandedStory[project.id];

            return (
              <div
                key={project.id}
                className={`project-card ${project.featured ? 'featured-project-card' : ''}`}
              >
                <div className="project-card-header">
                  {project.featured && (
                    <div className="featured-badge">
                      <Sparkles size={13} />
                      <span>Featured Build</span>
                    </div>
                  )}
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

                {/* Human Story Callout */}
                <div className="project-story-box">
                  <div className="story-header">
                    <span className="story-badge">The Backstory</span>
                  </div>
                  <p className="project-story-text">{project.story}</p>
                </div>

                {/* Key Technical Bullets */}
                <div className="project-highlights">
                  <span className="highlights-heading">Architecture & Implementation:</span>
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
                      <span className="live-dot"></span>
                      <span>Live App</span>
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
                      <Server size={14} />
                      <span>API Docs</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
