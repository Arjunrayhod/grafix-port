import React, { useEffect } from 'react';
import { X, ArrowRight, ExternalLink, Play, CheckCircle2, ChevronRight, Layers, Maximize2 } from 'lucide-react';
import { projects } from '../../data/projects';

export default function ProjectModal({ project, onClose, onSelectProject, onPlayVideo, onOpenLightbox }) {
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
      style={{ padding: '1rem', background: 'rgba(5, 5, 8, 0.95)' }}
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '95vw',
          maxWidth: '1100px',
          maxHeight: '94vh',
          borderRadius: '1.25rem',
          margin: 'auto',
          background: '#0d0d12',
          border: '1px solid rgba(255, 255, 255, 0.12)'
        }}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: 'rgba(15, 15, 20, 0.98)',
            backdropFilter: 'blur(16px)',
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
                padding: '0.25rem 0.65rem',
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
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
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
        <div style={{ padding: '2.25rem' }}>
          {/* Main Title & Type Badge */}
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: '#e4e4e7',
                background: 'rgba(255, 255, 255, 0.06)',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.4rem',
                border: '1px solid var(--border-medium)',
                marginBottom: '0.75rem'
              }}
            >
              {project.typeBadge}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontWeight: '800',
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}
            >
              {project.title}
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>
              {project.tagline}
            </p>
          </div>

          {/* Project Metadata Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              padding: '1.5rem',
              borderRadius: '0.85rem',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '2.5rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                ROLE
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#ffffff', marginTop: '0.25rem' }}>
                {project.role}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                YEAR
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#ffffff', marginTop: '0.25rem' }}>
                {project.year}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                TOOLS USED
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#ffffff', marginTop: '0.25rem' }}>
                {project.tools.join(' • ')}
              </div>
            </div>
          </div>

          {/* Primary Visual Showcase Gallery (Expansive Full Size) */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '1.25rem'
              }}
            >
              High-Resolution Visual Showcase
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {project.gallery.map((imgItem, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    border: '1px solid var(--border-subtle)',
                    background: '#040407',
                    position: 'relative'
                  }}
                  className="group"
                >
                  <img
                    src={imgItem.url}
                    alt={imgItem.caption}
                    style={{
                      width: '100%',
                      maxHeight: '75vh',
                      objectFit: 'contain',
                      display: 'block',
                      backgroundColor: '#040407',
                      margin: 'auto'
                    }}
                  />

                  {/* Top-Right Fullscreen Lightbox Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenLightbox) {
                        onOpenLightbox(imgItem.url, imgItem.caption);
                      }
                    }}
                    title="Open Fullscreen Lightbox"
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(9, 9, 11, 0.85)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '0.4rem',
                      padding: '0.4rem 0.65rem',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <Maximize2 size={13} />
                    <span>Fullscreen</span>
                  </button>

                  <div
                    style={{
                      padding: '1rem 1.5rem',
                      background: 'rgba(12, 12, 16, 0.95)',
                      borderTop: '1px solid var(--border-subtle)',
                      fontSize: '0.85rem',
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
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.65rem' }}>
                Project Overview
              </h4>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                {project.fullDescription}
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0.85rem',
                  padding: '1.75rem'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#f59e0b', marginBottom: '0.5rem' }}>
                  THE CHALLENGE
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                  {project.challenge}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0.85rem',
                  padding: '1.75rem'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#10b981', marginBottom: '0.5rem' }}>
                  THE APPROACH
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Design Process Steps */}
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
                Design Process
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {project.designProcess.map((proc, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      padding: '1rem 1.25rem',
                      borderRadius: '0.65rem',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.92rem',
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
                padding: '1.75rem'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#60a5fa', marginBottom: '0.5rem' }}>
                FINAL OUTCOME
              </div>
              <p style={{ fontSize: '1rem', color: '#ffffff', lineHeight: '1.65' }}>
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Next Project Footer Button */}
          <div
            style={{
              paddingTop: '2.5rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                NEXT PROJECT
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff' }}>
                {nextProject.title}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="btn-primary"
            >
              <span>View Next</span>
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
