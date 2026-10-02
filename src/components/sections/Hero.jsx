import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Play, Layers, Eye } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export default function Hero({ onOpenProject, onOpenVideo }) {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-radial-gradient bg-studio-grid"
      style={{
        position: 'relative',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container-custom" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Editorial Headline & Copy */}
          <div>
            {/* Tagline Badge */}
            <div
              className="section-tag"
              style={{
                marginBottom: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={14} className="text-blue-400" />
              <span>Brand • Motion • Video • Digital</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.08',
                letterSpacing: '-0.04em',
                color: '#ffffff',
                marginBottom: '1.5rem'
              }}
            >
              Designing Ideas Into{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                Visual Experiences.
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
                maxWidth: '38rem',
                marginBottom: '2.5rem',
                fontWeight: '400'
              }}
            >
              {personalInfo.heroSubtext}
            </p>

            {/* Call To Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '3rem'
              }}
            >
              <button
                type="button"
                onClick={() => scrollToSection('#work')}
                className="btn-primary"
                style={{ cursor: 'pointer' }}
              >
                <span>View My Work</span>
                <ArrowDown size={17} />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary"
                style={{ cursor: 'pointer' }}
              >
                <span>Let's Work Together</span>
                <ArrowUpRight size={17} />
              </button>
            </div>

            {/* Quick Credentials / Education Ticker */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Education:</span>
                <span>BCA Cloud Computing</span>
              </div>
              <span style={{ color: 'var(--border-medium)' }}>•</span>
              <div>
                <span>Mandsaur University</span>
              </div>
              <span style={{ color: 'var(--border-medium)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8' }}>
                <Layers size={14} />
                <span>Tech + Visual Systems</span>
              </div>
            </div>
          </div>

          {/* Right Column: Subtle Animated Visual Showcase Element */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Visual Glass Card showcasing Arjun's 3D Isometric & Brand Works */}
            <div
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '440px',
                borderRadius: '1.5rem',
                padding: '1.5rem',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(59, 130, 246, 0.1)',
                position: 'relative'
              }}
            >
              {/* Card Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      marginLeft: '0.5rem'
                    }}
                  >
                    folio_curation_2026
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#60a5fa',
                    background: 'rgba(59, 130, 246, 0.15)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px'
                  }}
                >
                  60 FPS
                </span>
              </div>

              {/* Showcase Visual Window: Floating Layer with Hover Micro-motion */}
              <div
                style={{
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, #121218 0%, #09090c 100%)',
                  border: '1px solid var(--border-subtle)',
                  position: 'relative',
                  aspectRatio: '4 / 3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => scrollToSection('#work')}
                className="group"
              >
                {/* Visual Art Layer */}
                <img
                  src="/assets/hero/hero-isometric.png"
                  alt="3D Layer Design by Arjun Rathod"
                  style={{
                    width: '65%',
                    maxHeight: '80%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 15px 25px rgba(59, 130, 246, 0.3))'
                  }}
                  className="animate-float"
                />

                {/* Overlaid Pill Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    padding: '0.65rem 0.9rem',
                    background: 'rgba(9, 9, 11, 0.85)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '0.65rem',
                    border: '1px solid var(--border-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#3b82f6'
                      }}
                    />
                    <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#ffffff' }}>
                      Selected Works 2026
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    Explore <Eye size={12} />
                  </span>
                </div>
              </div>

              {/* Micro Gallery Thumbnails below */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  marginTop: '1rem'
                }}
              >
                <div
                  onClick={() => scrollToSection('#videos')}
                  style={{
                    borderRadius: '0.6rem',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                  title="View Video Showcase"
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#ffffff' }}>Video</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Pacing & Reels</div>
                </div>

                <div
                  onClick={() => scrollToSection('#case-studies')}
                  style={{
                    borderRadius: '0.6rem',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                  title="View 10-Step Case Studies"
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#ffffff' }}>Branding</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Full Systems</div>
                </div>

                <div
                  onClick={() => scrollToSection('#motion')}
                  style={{
                    borderRadius: '0.6rem',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                  title="View Motion Graphics"
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#ffffff' }}>Motion</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Logo & Text</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
