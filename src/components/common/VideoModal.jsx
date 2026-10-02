import React, { useEffect, useRef } from 'react';
import { X, Play, Volume2, VolumeX, Maximize2, RotateCcw, Clock, Film } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  const videoRef = useRef(null);

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

  if (!video) return null;

  const isVertical = video.aspectRatio === '9:16';

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
        style={{
          maxWidth: isVertical ? '440px' : '900px',
          margin: 'auto'
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(17, 17, 22, 0.95)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Film size={18} className="text-blue-400" />
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                fontWeight: '700',
                color: '#ffffff'
              }}
            >
              {video.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Video Viewer"
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

        {/* Video Player Box */}
        <div
          style={{
            background: '#000000',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0.5rem'
          }}
        >
          <video
            ref={videoRef}
            src={video.videoUrl}
            poster={video.poster}
            controls
            playsInline
            preload="metadata"
            style={{
              width: '100%',
              maxHeight: isVertical ? '70vh' : '65vh',
              borderRadius: '0.5rem',
              objectFit: 'contain',
              backgroundColor: '#000000'
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Information & Highlights */}
        <div style={{ padding: '1.75rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <span style={{ color: 'var(--accent-blue)' }}>{video.category}</span>
            <span style={{ color: 'var(--text-muted)' }}>Duration: {video.duration}</span>
          </div>

          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '1.25rem'
            }}
          >
            {video.description}
          </p>

          {video.highlights && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {video.highlights.map((h) => (
                <span
                  key={h}
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.04)'
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
