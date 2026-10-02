import React from 'react';
import { GitBranch, CheckCircle2, ArrowRight } from 'lucide-react';
import { workProcess } from '../../data/process';

export default function WorkProcess() {
  return (
    <section id="process" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-custom">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <GitBranch size={13} />
            <span>Workflow & Methodology</span>
          </div>
          <h2 className="section-title">
            The 5-Stage Creative Process
          </h2>
          <p className="section-desc">
            A structured, repeatable methodology ensuring creative vision aligns with practical execution and measurable impact.
          </p>
        </div>

        {/* 5-Stage Process Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            position: 'relative'
          }}
        >
          {workProcess.map((step, idx) => (
            <div
              key={step.step}
              className="glass-card group"
              style={{
                borderRadius: '1rem',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                position: 'relative'
              }}
            >
              {/* Top Step Number */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    color: '#3b82f6',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {step.step}
                </span>

                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#3b82f6',
                    opacity: 0.6
                  }}
                />
              </div>

              {/* Step Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '0.65rem'
                }}
              >
                {step.name}
              </h3>

              {/* Summary */}
              <div
                style={{
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#60a5fa',
                  marginBottom: '0.85rem'
                }}
              >
                {step.summary}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  flexGrow: 1
                }}
              >
                {step.description}
              </p>

              {/* Deliverables snippet */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)'
                }}
              >
                <span style={{ color: 'var(--text-secondary)', fontWeight: '600' }}>Output: </span>
                <span>{step.deliverables}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
