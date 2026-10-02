import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter, Layers, Play, Image as ImageIcon } from 'lucide-react';
import { projects, projectCategories } from '../../data/projects';

export default function FeaturedWork({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return (
      project.category === activeCategory ||
      project.secondaryCategory === activeCategory
    );
  });

  return (
    <section id="work" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          <div className="section-tag">
            <Sparkles size={13} />
            <span>Featured Portfolio</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <h2 className="section-title">
                Selected Work & Case Studies
              </h2>
              <p className="section-desc">
                High-fidelity brand systems, digital interfaces, video edits, and editorial graphics. Built with conceptual clarity and visual precision.
              </p>
            </div>

            {/* Honest Portfolio Transparency Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '0.4rem 0.85rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-subtle)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6' }} />
              Honest Labeling: Concept & Personal Works
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '2.5rem',
            scrollbarWidth: 'none'
          }}
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`filter-tab-pill ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
              {category !== 'All' && (
                <span
                  style={{
                    marginLeft: '0.35rem',
                    fontSize: '0.75rem',
                    opacity: 0.7
                  }}
                >
                  ({projects.filter(p => p.category === category || p.secondaryCategory === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Visual Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2rem'
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group cursor-pointer"
              onClick={() => onSelectProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectProject(project);
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              {/* Card Cover Visual Container */}
              <div className="card-img-container">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                />

                {/* Top Corner Honest Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(9, 9, 11, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-medium)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '0.4rem',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#e4e4e7',
                    fontWeight: '500'
                  }}
                >
                  {project.typeBadge}
                </div>

                {/* Media Indicator Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    background: 'rgba(9, 9, 11, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.25rem 0.55rem',
                    borderRadius: '0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {project.videoUrl ? <Play size={11} className="text-emerald-400" /> : <ImageIcon size={11} />}
                  <span>{project.gallery.length} visual{project.gallery.length > 1 ? 's' : ''}</span>
                </div>
              </div>

              {/* Card Body Details */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}
              >
                {/* Meta Row: Category & Year */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-blue)'
                  }}
                >
                  <span>{project.category}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{project.year}</span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '0.45rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{project.title}</span>
                  <ArrowUpRight
                    size={18}
                    className="text-zinc-500 group-hover:text-white transition-colors"
                    style={{ transition: 'color 0.2s ease, transform 0.2s ease' }}
                  />
                </h3>

                {/* Tagline / Subtitle */}
                <p
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    marginBottom: '0.85rem'
                  }}
                >
                  {project.tagline}
                </p>

                {/* Short Description */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.55',
                    marginBottom: '1.5rem',
                    flexGrow: 1
                  }}
                >
                  {project.shortDescription}
                </p>

                {/* Tools Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)',
                          background: 'rgba(255, 255, 255, 0.03)',
                          padding: '0.2rem 0.45rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 255, 255, 0.04)'
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '600',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.2rem'
                    }}
                  >
                    View Project →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
