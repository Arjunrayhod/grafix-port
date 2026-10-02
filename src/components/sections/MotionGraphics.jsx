import React, { useState } from 'react';
import { Zap, Play, Activity, Layers, Sparkles } from 'lucide-react';
import { motionItems, motionCategories } from '../../data/motion';

export default function MotionGraphics({ onPlayVideo }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMotion = motionItems.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="motion" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-custom">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          <div className="section-tag">
            <Zap size={13} />
            <span>Kinetic Systems & Animation</span>
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
                Motion Graphics & Kinetic Typography
              </h2>
              <p className="section-desc">
                Dynamic identity reveals, kinetic type, UI micro-interactions, and 3D camera passes engineered for brand impact.
              </p>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: '#a855f7',
                background: 'rgba(168, 85, 247, 0.1)',
                padding: '0.4rem 0.85rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(168, 85, 247, 0.25)'
              }}
            >
              Custom Bezier Curves • 60 FPS Fluid Transitions
            </div>
          </div>
        </div>

        {/* Motion Category Filters */}
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
          {motionCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`filter-tab-pill ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Motion Items Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredMotion.map((item) => (
            <div
              key={item.id}
              className="glass-card group"
              style={{
                borderRadius: '1rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}
              onClick={() => {
                if (item.videoUrl) {
                  onPlayVideo({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    videoUrl: item.videoUrl,
                    aspectRatio: item.aspectRatio || '16:9',
                    category: item.category,
                    duration: item.duration,
                    tools: item.tools,
                    highlights: item.techniques
                  });
                }
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  if (item.videoUrl) {
                    onPlayVideo({
                      id: item.id,
                      title: item.title,
                      description: item.description,
                      videoUrl: item.videoUrl,
                      aspectRatio: item.aspectRatio || '16:9',
                      category: item.category,
                      duration: item.duration,
                      tools: item.tools,
                      highlights: item.techniques
                    });
                  }
                }
              }}
            >
              {/* Preview Window */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 10',
                  overflow: 'hidden',
                  background: '#09090d'
                }}
              >
                <img
                  src={item.previewImage}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="group-hover:scale-105"
                />

                {/* Overlaid Play Trigger */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  className="group-hover:bg-black/20"
                >
                  <div
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.95)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#09090b',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                      transition: 'transform 0.3s ease'
                    }}
                    className="group-hover:scale-110"
                  >
                    <Play size={18} fill="#09090b" className="ml-0.5" />
                  </div>
                </div>

                {/* Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    background: 'rgba(9, 9, 11, 0.85)',
                    backdropFilter: 'blur(6px)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#a855f7',
                    border: '1px solid rgba(168, 85, 247, 0.3)'
                  }}
                >
                  {item.fps}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    background: 'rgba(9, 9, 11, 0.85)',
                    backdropFilter: 'blur(6px)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {item.duration}
                </div>
              </div>

              {/* Details */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-blue)',
                    marginBottom: '0.4rem'
                  }}
                >
                  {item.category}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                    marginBottom: '1.25rem',
                    flexGrow: 1
                  }}
                >
                  {item.description}
                </p>

                {/* Technique Chips */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  {item.techniques.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '3px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
