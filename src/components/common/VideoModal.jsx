import React, { useEffect, useRef } from 'react';
import { X, Maximize2, Film, Clock, Sparkles } from 'lucide-react';

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

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      style={{
        padding: '1rem',
        background: 'rgba(5, 5, 8, 0.95)'
      }}
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '95vw',
          maxWidth: isVertical ? '480px' : '1100px',
          maxHeight: '92vh',
          borderRadius: '1.25rem',
          margin: 'auto',
          background: '#0c0c10',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)'
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '1.25rem 2rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(15, 15, 22, 0.98)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '0.4rem',
                background: 'rgba(59, 130, 246, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#60a5fa'
              }}
            >
              <Film size={16} />
            </div>
            <div>
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
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {video.category} • Duration: {video.duration}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Direct Fullscreen Button */}
            <button
              type="button"
              onClick={handleFullscreen}
              aria-label="Toggle Fullscreen"
              title="Fullscreen Video"
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
              <Maximize2 size={16} />
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close Video Viewer"
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
        </div>

        {/* Cinematic Video Player Window */}
        <div
          style={{
            background: '#000000',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0.5rem',
            minHeight: isVertical ? '500px' : '480px'
          }}
        >
          <video
            ref={videoRef}
            src={video.videoUrl}
            poster={video.poster}
            controls
            playsInline
            autoPlay
            preload="auto"
            style={{
              width: '100%',
              maxHeight: isVertical ? '72vh' : '68vh',
              borderRadius: '0.75rem',
              objectFit: 'contain',
              backgroundColor: '#000000',
              outline: 'none'
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Info Strip */}
        <div style={{ padding: '1.5rem 2rem', background: '#0e0e14' }}>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '1rem'
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
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
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
