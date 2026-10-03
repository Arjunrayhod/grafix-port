import React from 'react';
import { User, GraduationCap, ShieldCheck, Code, Smartphone, Film, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export default function About() {
  const coreCompetencies = [
    {
      title: 'Full-Stack Web & Cybersecurity',
      desc: 'Building hardened web applications with React, Node.js, AES-256 payload encryption, 2FA, and parameterized SQL injection proofing (CodeAlpha certified projects).'
    },
    {
      title: 'Mobile App Making & Prototyping',
      desc: 'Architecting end-to-end mobile products like CloudBus — featuring 3-tap ticketing flows, concession cards, and conversational support desks.'
    },
    {
      title: 'Cloud Architecture & Pipelines',
      desc: 'BCA in Cloud Computing at Mandsaur University. Implementing automated cloud ingestion pipelines with session banning and zero-duplicate guarantees.'
    },
    {
      title: 'Video Editing & Retention Motion',
      desc: 'High-energy 4K/60FPS video reels, retention-optimized pacing, kinetic typography in After Effects, and sound design that converts viewers into fans.'
    }
  ];

  return (
    <section id="about" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-custom">
        <div className="section-tag">
          <User size={13} />
          <span>Engineering & Creative Background</span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Left Column: Personal Introduction & Background */}
          <div>
            <h2 className="section-title">
              Bridging engineering precision with high-converting digital media.
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }}
            >
              {personalInfo.shortBio}
            </p>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                color: 'var(--text-muted)',
                marginBottom: '2rem'
              }}
            >
              Clients and creators need results fast without operational headaches. By uniting full-stack software development, cloud security pipelines, and modern video editing, I deliver complete end-to-end solutions — from secure web platforms to high-retention social content.
            </p>

            {/* Education Highlight Card */}
            <div
              className="glass-card"
              style={{
                borderRadius: '1rem',
                padding: '1.75rem',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                borderLeft: '4px solid var(--accent-blue)'
              }}
            >
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(59, 130, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#60a5fa',
                  flexShrink: 0
                }}
              >
                <GraduationCap size={24} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#60a5fa',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.25rem'
                  }}
                >
                  Academic Background
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '0.25rem'
                  }}
                >
                  {personalInfo.education.degree}
                </h3>
                <div
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {personalInfo.education.institution}
                </div>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.5'
                  }}
                >
                  {personalInfo.education.note}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Core Disciplines & Strengths */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <ShieldCheck size={18} className="text-blue-400" />
              <span>Core Technical & Creative Pillars</span>
            </div>

            {coreCompetencies.map((comp, idx) => (
              <div
                key={comp.title}
                className="glass-card"
                style={{
                  borderRadius: '0.85rem',
                  padding: '1.25rem 1.5rem',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-blue)',
                      fontWeight: '600'
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#ffffff' }}>
                    {comp.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
