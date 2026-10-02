import React, { useEffect } from 'react';
import { X, ArrowRight, ExternalLink, Play, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { projects } from '../../data/projects';

export default function ProjectModal({ project, onClose, onSelectProject, onPlayVideo }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 'auto' }}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: 'rgba(17, 17, 22, 0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.25rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-blue)',
                background: 'rgba(59, 130, 246, 0.1)',
                padding: '0.2rem 0.6rem',
                borderRadius: '0.35rem',
                border: '1px solid rgba(59, 130, 246, 0.25)'
              }}
            >
              {project.category}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)'
              }}
            >
              {project.year}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Project Modal"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '2.25rem',
              height: '2.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: '2rem' }}>
          {/* Main Title & Type Badge */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: '#e4e4e7',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '0.25rem 0.65rem',
                borderRadius: '0.35rem',
                border: '1px solid var(--border-medium)',
                marginBottom: '0.75rem'
              }}
            >
              {project.typeBadge}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: '800',
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}
            >
              {project.title}
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>
              {project.tagline}
            </p>
          </div>

          {/* Project Metadata Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              padding: '1.25rem',
              borderRadius: '0.85rem',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '2.5rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                ROLE
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#ffffff', marginTop: '0.25rem' }}>
                {project.role}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                YEAR
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#ffffff', marginTop: '0.25rem' }}>
                {project.year}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                TOOLS USED
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#ffffff', marginTop: '0.25rem' }}>
                {project.tools.join(' • ')}
              </div>
            </div>
          </div>

          {/* Primary Visual Showcase Gallery */}
          <div style={{ marginBottom: '3rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '1rem'
              }}
            >
              Project Visuals & Showcase
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {project.gallery.map((imgItem, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    border: '1px solid var(--border-subtle)',
                    background: '#09090c'
                  }}
                >
                  <img
                    src={imgItem.url}
                    alt={imgItem.caption}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div
                    style={{
                      padding: '0.85rem 1.25rem',
                      background: 'rgba(9, 9, 11, 0.9)',
                      borderTop: '1px solid var(--border-subtle)',
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {imgItem.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Dive: Overview, Challenge, Approach & Outcome */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>
                Project Overview
              </h4>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                {project.fullDescription}
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0.85rem',
                  padding: '1.5rem'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#f59e0b', marginBottom: '0.4rem' }}>
                  THE CHALLENGE
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {project.challenge}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0.85rem',
                  padding: '1.5rem'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#10b981', marginBottom: '0.4rem' }}>
                  THE APPROACH
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Design Process Steps */}
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
                Design Process
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {project.designProcess.map((proc, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', fontWeight: '700' }}>
                      0{idx + 1}
                    </span>
                    <span>{proc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Outcome */}
            <div
              style={{
                background: 'rgba(59, 130, 246, 0.05)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                borderRadius: '0.85rem',
                padding: '1.5rem'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#60a5fa', marginBottom: '0.4rem' }}>
                FINAL OUTCOME
              </div>
              <p style={{ fontSize: '0.95rem', color: '#ffffff', lineHeight: '1.6' }}>
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Next Project Footer Button */}
          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                NEXT PROJECT
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff' }}>
                {nextProject.title}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="btn-primary"
            >
              <span>View Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
