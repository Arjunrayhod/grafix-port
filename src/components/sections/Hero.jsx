import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, ShieldCheck, Terminal, Smartphone, Film, CheckCircle2, MessageCircle, Mail } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
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
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-radial-gradient bg-studio-grid"
      style={{
        position: 'relative',
        paddingTop: '7.5rem',
        paddingBottom: '5rem',
        minHeight: '92vh',
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
          {/* Left Column: Direct High-Impact Editorial Copy */}
          <div>
            {/* Direct Verification Badge */}
            <div
              className="section-tag"
              style={{
                marginBottom: '1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}
            >
              <ShieldCheck size={14} className="text-blue-400" />
              <span style={{ color: '#93c5fd', fontWeight: '600' }}>
                CodeAlpha Security Projects • Cloud Computing • Video Engineering
              </span>
            </div>

            {/* Main Headline Exactly as Requested */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.3rem, 4.6vw, 4.1rem)',
                fontWeight: '800',
                lineHeight: '1.12',
                letterSpacing: '-0.035em',
                color: 'var(--text-primary)',
                marginBottom: '1.35rem'
              }}
            >
              Arjun Rathod |{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                Full-Stack Web Developer,
              </span>{' '}
              App Maker & Video Editor
            </h1>

            {/* Sub-headline / Value Proposition Exactly as Requested */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                maxWidth: '42rem',
                marginBottom: '2rem',
                fontWeight: '400'
              }}
            >
              Helping businesses and creators automate their operations and scale their content with zero-hardware friction.
            </p>

            {/* Achievement Highlights Checklist */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.75rem',
                marginBottom: '2.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={16} className="text-emerald-400" style={{ flexShrink: 0 }} />
                <span><strong>Vault Guard:</strong> 2FA & SQLi Proofing (90% Safe)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={16} className="text-emerald-400" style={{ flexShrink: 0 }} />
                <span><strong>Cloud Data Guard:</strong> Active Session Banning</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={16} className="text-emerald-400" style={{ flexShrink: 0 }} />
                <span><strong>App Making:</strong> CloudBus Transit Platform</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={16} className="text-emerald-400" style={{ flexShrink: 0 }} />
                <span><strong>Video & Motion:</strong> 4K / 60 FPS High-Retention Reels</span>
              </div>
            </div>

            {/* High-Converting Call To Action Buttons (Instant WhatsApp + Email + Projects) */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              {/* Primary Direct Hire Me Button */}
              <a
                href={personalInfo.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  padding: '0.8rem 1.6rem',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)'
                }}
              >
                <MessageCircle size={18} />
                <span>Hire Me (WhatsApp)</span>
              </a>

              {/* Direct Email Hire Button */}
              <a
                href={`mailto:${personalInfo.contact.email}?subject=Project%20Inquiry%20-%20Full-Stack%20Web%20%2F%20App%20%2F%20Video`}
                className="btn-secondary"
                style={{
                  padding: '0.8rem 1.4rem',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <Mail size={17} />
                <span>Direct Email</span>
              </a>

              {/* View Projects Grid */}
              <button
                type="button"
                onClick={() => scrollToSection('#power-projects')}
                className="btn-secondary"
                style={{
                  padding: '0.8rem 1.25rem',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                <span>View Power Projects</span>
                <ArrowDown size={16} />
              </button>

              {/* GitHub Repos Button */}
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.8rem 1.15rem',
                  borderRadius: '0.55rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, border-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <GithubIcon size={16} />
                <span>GitHub Repos</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Quick Credentials / Education Ticker */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ color: '#ffffff', fontWeight: '600' }}>Academic Focus:</span>
                <span>BCA Cloud Computing • Mandsaur University</span>
              </div>
              <span style={{ color: 'var(--border-medium)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10b981' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                <span>24h Prototype Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Security & Engineering Showcase Card */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '470px',
                borderRadius: '1.5rem',
                padding: '1.75rem',
                boxShadow: theme === 'dark' ? '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 70px rgba(59, 130, 246, 0.12)' : '0 20px 45px rgba(0, 0, 0, 0.08), 0 0 50px rgba(59, 130, 246, 0.08)',
                border: '1px solid var(--border-medium)',
                background: theme === 'dark' ? 'linear-gradient(180deg, #101018 0%, #09090d 100%)' : 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
              }}
            >
              {/* Terminal Title Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.85rem',
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
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      marginLeft: '0.4rem'
                    }}
                  >
                    arjun@system-console:~$
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#10b981',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px'
                  }}
                >
                  SYSTEMS ONLINE
                </span>
              </div>

              {/* Live Project Feats Terminal Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {/* Feat 1: Vault Guard */}
                <div
                  onClick={() => scrollToSection('#power-projects')}
                  style={{
                    background: theme === 'dark' ? 'rgba(59, 130, 246, 0.06)' : 'rgba(59, 130, 246, 0.05)',
                    border: '1px solid rgba(59, 130, 246, 0.25)',
                    borderRadius: '0.85rem',
                    padding: '1rem 1.15rem',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.6)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <ShieldCheck size={16} className="text-blue-400" />
                      <span style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                        Vault Guard System
                      </span>
                    </div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#2563eb', fontWeight: '600' }}>
                      90% SITE SAFETY
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.45' }}>
                    2FA encryption-based web protection layer & SQL injection proofing.
                  </p>
                </div>

                {/* Feat 2: Cloud Data Guard */}
                <div
                  onClick={() => scrollToSection('#power-projects')}
                  style={{
                    background: theme === 'dark' ? 'rgba(16, 185, 129, 0.06)' : 'rgba(16, 185, 129, 0.05)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    borderRadius: '0.85rem',
                    padding: '1rem 1.15rem',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.6)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.25)')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Terminal size={16} className="text-emerald-500" />
                      <span style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                        Cloud Data Guard
                      </span>
                    </div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#059669', fontWeight: '600' }}>
                      AUTO-BAN ACTIVE
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.45' }}>
                    Automated secure pipeline preventing duplicate cloud entries with session banning.
                  </p>
                </div>

                {/* Feat 3: Motion & App Capabilities */}
                <div
                  onClick={() => scrollToSection('#power-projects')}
                  style={{
                    background: theme === 'dark' ? 'rgba(245, 158, 11, 0.06)' : 'rgba(245, 158, 11, 0.05)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    borderRadius: '0.85rem',
                    padding: '1rem 1.15rem',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.6)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.25)')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Film size={16} className="text-amber-500" />
                      <span style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                        Video Editing & App Maker
                      </span>
                    </div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#d97706', fontWeight: '600' }}>
                      4K / 60 FPS REEL
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.45' }}>
                    CloudBus mobile app UI + High-retention motion design reels with instant playback.
                  </p>
                </div>
              </div>

              {/* Bottom Console Status & Action Button */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.8rem'
                }}
              >
                <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Status: Ready for deployment
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection('#power-projects')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#60a5fa',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    cursor: 'pointer',
                    fontSize: '0.82rem'
                  }}
                >
                  <span>Inspect Live Projects</span>
                  <ArrowDown size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
