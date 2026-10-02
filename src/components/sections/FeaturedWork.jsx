import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Layers, Play, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { projects, projectCategories } from '../../data/projects';

export default function FeaturedWork({ onSelectProject, onOpenLightbox }) {
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
            <span>Featured Portfolio & Visuals</span>
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
                Selected Work & Visual Systems
              </h2>
              <p className="section-desc">
                High-impact brand systems, mobile application UI, editorial graphic posters, and video edits presented in large editorial format.
              </p>
            </div>

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
              <Maximize2 size={13} className="text-blue-400" />
              <span>Full-Screen Immersive Previews Enabled</span>
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
            marginBottom: '3rem',
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

        {/* Large Immersive Editorial Showcase Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3.5rem'
          }}
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card group featured-item-card"
              style={{
                borderRadius: '1.5rem',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                background: 'var(--bg-card)'
              }}
            >
              {/* Massive Visual Display Window (Hero preview size) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  minHeight: '420px',
                  maxHeight: '620px',
                  background: '#07070a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '620px',
                    objectFit: 'contain',
                    backgroundColor: '#07070a',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="group-hover:scale-102"
                />

                {/* Overlaid Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    zIndex: 5
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(9, 9, 11, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--border-medium)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#ffffff',
                      fontWeight: '600'
                    }}
                  >
                    {project.typeBadge}
                  </span>

                  <span
                    style={{
                      background: 'rgba(37, 99, 235, 0.2)',
                      border: '1px solid rgba(37, 99, 235, 0.4)',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#93c5fd'
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Action Buttons Top Right: Fullscreen Lightbox Button */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    zIndex: 5
                  }}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenLightbox(project.coverImage, `${project.title} — ${project.tagline}`);
                    }}
                    title="Open Fullscreen View"
                    style={{
                      background: 'rgba(9, 9, 11, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      borderRadius: '0.5rem',
                      padding: '0.45rem 0.75rem',
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <Maximize2 size={13} />
                    <span>Fullscreen</span>
                  </button>
                </div>

                {/* Bottom Visual Overlay Prompt */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    right: '1.25rem',
                    background: 'rgba(9, 9, 11, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {project.videoUrl ? <Play size={12} className="text-emerald-400" /> : <ImageIcon size={12} />}
                  <span>{project.gallery.length} visual asset{project.gallery.length > 1 ? 's' : ''}</span>
                </div>
              </div>

              {/* Informative Details Strip Below The Big Visual */}
              <div
                style={{
                  padding: '2rem 2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  background: 'rgba(17, 17, 23, 0.95)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)',
                        fontWeight: '800',
                        color: '#ffffff',
                        marginBottom: '0.25rem'
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-blue)'
                      }}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  {/* Open Deep Dive Button */}
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="btn-primary"
                    style={{ padding: '0.75rem 1.4rem' }}
                  >
                    <span>View Project Case</span>
                    <ArrowUpRight size={17} />
                  </button>
                </div>

                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.65',
                    maxWidth: '56rem'
                  }}
                >
                  {project.shortDescription}
                </p>

                {/* Bottom Tools & Role Bar */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-subtle)',
                    gap: '1rem',
                    fontSize: '0.85rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                      ROLE:
                    </span>
                    <span style={{ color: '#ffffff', fontWeight: '500' }}>{project.role}</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 255, 255, 0.06)'
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
