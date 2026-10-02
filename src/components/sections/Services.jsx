import React from 'react';
import { Layers, Layout, Film, Zap, Check, ArrowRight } from 'lucide-react';
import { services } from '../../data/services';

export default function Services({ onSelectService }) {
  const getIcon = (name) => {
    switch (name) {
      case 'Layers': return <Layers size={24} className="text-blue-400" />;
      case 'Layout': return <Layout size={24} className="text-amber-400" />;
      case 'Film': return <Film size={24} className="text-emerald-400" />;
      case 'Zap': return <Zap size={24} className="text-violet-400" />;
      default: return <Layers size={24} />;
    }
  };

  const getAccentColor = (id) => {
    switch (id) {
      case 'brand-visual-design': return '#3b82f6';
      case 'graphic-design': return '#f59e0b';
      case 'video-editing': return '#10b981';
      case 'motion-graphics': return '#a855f7';
      default: return '#3b82f6';
    }
  };

  return (
    <section id="services" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-custom">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="section-title">
            Services & Creative Solutions
          </h2>
          <p className="section-desc">
            Focused creative execution tailored for modern tech startups, digital products, content creators, and growing brands.
          </p>
        </div>

        {/* 4 Primary Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {services.map((service) => {
            const accent = getAccentColor(service.id);
            return (
              <div
                key={service.id}
                className="service-card group"
              >
                {/* Top Row: Service Number and Icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.75rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: accent,
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '0.5rem'
                    }}
                  >
                    {service.number}
                  </span>

                  <div
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: accent
                    }}
                  >
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: accent,
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '1rem'
                  }}
                >
                  {service.tagline}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    flexGrow: 1
                  }}
                >
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em',
                      marginBottom: '0.75rem'
                    }}
                  >
                    Deliverables:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <Check size={14} style={{ color: accent, marginTop: '0.2rem', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
