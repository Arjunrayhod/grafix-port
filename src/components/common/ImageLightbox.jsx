import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

export default function ImageLightbox({ image, caption, onClose }) {
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

  if (!image) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 120,
        background: 'rgba(5, 5, 8, 0.96)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Lightbox Controls */}
      <div
        style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          zIndex: 130
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Fullscreen View"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '2.75rem',
            height: '2.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Fullscreen Image Container */}
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={caption || 'Fullscreen Preview'}
          style={{
            maxWidth: '94vw',
            maxHeight: '85vh',
            objectFit: 'contain',
            borderRadius: '0.75rem',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />

        {caption && (
          <div
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1.25rem',
              background: 'rgba(15, 15, 20, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '9999px',
              color: '#f4f4f6',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              textAlign: 'center',
              maxWidth: '90vw'
            }}
          >
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
