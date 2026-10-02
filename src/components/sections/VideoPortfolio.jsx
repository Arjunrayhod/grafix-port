import React, { useState, useRef } from 'react';
import { Film, Play, Clock, Sparkles, Monitor, Smartphone, Maximize2, Volume2, Check } from 'lucide-react';
import { videos } from '../../data/videos';

export default function VideoPortfolio({ onPlayVideo }) {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const activeVideo = videos[selectedVideoIndex];
  const cinemaVideoRef = useRef(null);

  const handleTriggerFullscreen = () => {
    if (cinemaVideoRef.current) {
      if (cinemaVideoRef.current.requestFullscreen) {
        cinemaVideoRef.current.requestFullscreen();
      } else if (cinemaVideoRef.current.webkitRequestFullscreen) {
        cinemaVideoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const isVertical = activeVideo.aspectRatio === '9:16';

  return (
    <section
      id="videos"
      className="section-wrapper"
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'linear-gradient(180deg, #09090b 0%, #050508 100%)',
        paddingTop: '6rem',
        paddingBottom: '7rem'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          <div className="section-tag">
            <Film size={13} />
            <span>Full-Screen Cinema Theater</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <h2 className="section-title">
                Video Production, Pacing & Showreels
              </h2>
              <p className="section-desc">
                High-octane commercial cuts, rhythm-synced transitions, and sound design. Watch directly in the full-width cinema player below or expand to 100% monitor fullscreen.
              </p>
            </div>

            {/* Quick Fullscreen Button */}
            <button
              type="button"
              onClick={handleTriggerFullscreen}
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.4rem',
                fontSize: '0.9rem'
              }}
            >
              <Maximize2 size={16} />
              <span>Full Screen Monitor View</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MASSIVE FULL-SCREEN CINEMA STAGE PLAYER (Hero Viewport) */}
        {/* ============================================================== */}
        <div
          style={{
            borderRadius: '1.75rem',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            background: '#020204',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 50px rgba(59, 130, 246, 0.12)',
            marginBottom: '2.5rem',
            position: 'relative'
          }}
        >
          {/* Top Cinema Player Bar */}
          <div
            style={{
              padding: '1.25rem 2rem',
              background: 'rgba(12, 12, 17, 0.95)',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#ef4444',
                  boxShadow: '0 0 10px #ef4444'
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  letterSpacing: '0.04em'
                }}
              >
                CINEMA REEL 0{selectedVideoIndex + 1}: {activeVideo.title}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-blue)',
                  background: 'rgba(59, 130, 246, 0.15)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '0.35rem',
                  border: '1px solid rgba(59, 130, 246, 0.3)'
                }}
              >
                {activeVideo.category}
              </span>

              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)'
                }}
              >
                Duration: {activeVideo.duration}
              </span>

              <button
                type="button"
                onClick={handleTriggerFullscreen}
                title="Expand to Full Screen"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0.4rem',
                  padding: '0.35rem 0.65rem',
                  color: '#ffffff',
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Maximize2 size={13} />
                <span>Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Giant Video Playback Window */}
          <div
            style={{
              background: '#000000',
              position: 'relative',
              width: '100%',
              minHeight: isVertical ? '540px' : '520px',
              maxHeight: '78vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <video
              key={activeVideo.videoUrl}
              ref={cinemaVideoRef}
              src={activeVideo.videoUrl}
              poster={activeVideo.poster}
              controls
              playsInline
              preload="metadata"
              style={{
                width: '100%',
                maxHeight: '76vh',
                height: 'auto',
                objectFit: 'contain',
                backgroundColor: '#000000'
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Bottom Information Strip */}
          <div
            style={{
              padding: '1.75rem 2rem',
              background: 'rgba(12, 12, 18, 0.98)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div style={{ maxWidth: '48rem' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-blue)',
                  marginBottom: '0.25rem'
                }}
              >
                NOW PLAYING
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '0.4rem'
                }}
              >
                {activeVideo.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {activeVideo.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {activeVideo.highlights && activeVideo.highlights.map((h) => (
                <span
                  key={h}
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#e4e4e7',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '0.35rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  ✓ {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* REEL SELECTOR DECK (Switch between videos with 1 click) */}
        {/* ============================================================== */}
        <div style={{ marginTop: '2rem' }}>
          <div
            style={{
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Film size={14} />
            <span>Select Video Reel to Play Full Screen:</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {videos.map((vid, idx) => {
              const isSelected = selectedVideoIndex === idx;
              return (
                <div
                  key={vid.id}
                  onClick={() => {
                    setSelectedVideoIndex(idx);
                    // scroll smoothly to player
                    const el = document.querySelector('#videos');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="glass-card group"
                  style={{
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    border: isSelected ? '2px solid #3b82f6' : '1px solid var(--border-subtle)',
                    background: isSelected ? 'rgba(59, 130, 246, 0.08)' : 'rgba(22, 22, 29, 0.7)',
                    padding: '1.25rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 8px 25px rgba(59, 130, 246, 0.25)' : 'none'
                  }}
                >
                  <div
                    style={{
                      aspectRatio: '16 / 9',
                      borderRadius: '0.65rem',
                      overflow: 'hidden',
                      marginBottom: '0.85rem',
                      position: 'relative',
                      background: '#050508'
                    }}
                  >
                    <img
                      src={vid.poster}
                      alt={vid.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: isSelected ? 'rgba(59, 130, 246, 0.3)' : 'rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <div
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '50%',
                          background: isSelected ? '#3b82f6' : 'rgba(255,255,255,0.9)',
                          color: isSelected ? '#ffffff' : '#09090b',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Play size={14} fill={isSelected ? '#ffffff' : '#09090b'} className="ml-0.5" />
                      </div>
                    </div>

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0.4rem',
                        right: '0.4rem',
                        background: 'rgba(0,0,0,0.8)',
                        padding: '0.15rem 0.4rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#ffffff'
                      }}
                    >
                      {vid.duration}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: isSelected ? '#60a5fa' : 'var(--text-muted)' }}>
                      Reel 0{idx + 1}
                    </span>
                    {isSelected && (
                      <span style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.2rem', fontFamily: 'var(--font-mono)' }}>
                        <Check size={12} /> Active In Cinema
                      </span>
                    )}
                  </div>

                  <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.25rem' }}>
                    {vid.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
