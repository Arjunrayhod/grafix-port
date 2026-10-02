import React, { useState } from 'react';
import { Film, Play, Clock, Sparkles, Monitor, Smartphone, Maximize2 } from 'lucide-react';
import { videos, videoCategories } from '../../data/videos';

export default function VideoPortfolio({ onPlayVideo }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos = videos.filter((vid) => {
    if (activeCategory === 'All') return true;
    return vid.category === activeCategory;
  });

  return (
    <section id="videos" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)' }}>
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
            <span>Dedicated Video Portfolio</span>
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
                Cinematic Video Editing & Showreels
              </h2>
              <p className="section-desc">
                High-octane commercial cuts, rhythm-synced transitions, and retention-optimized pacing presented in expansive cinema view.
              </p>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '0.4rem 0.85rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Maximize2 size={13} className="text-emerald-400" />
              <span>Full-Screen Theater Playback</span>
            </div>
          </div>
        </div>

        {/* Video Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '3rem',
            scrollbarWidth: 'none'
          }}
        >
          {videoCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`filter-tab-pill ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Large Prominent Cinema Video Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
            gap: '2.5rem'
          }}
          className="cinema-video-grid"
        >
          {filteredVideos.map((video) => {
            const isVertical = video.aspectRatio === '9:16';
            return (
              <div
                key={video.id}
                className="glass-card group"
                style={{
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={() => onPlayVideo(video)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onPlayVideo(video);
                }}
              >
                {/* Large Video Preview Window */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: isVertical ? '16 / 10' : '16 / 9',
                    minHeight: '340px',
                    background: '#040406',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={video.poster}
                    alt={video.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      backgroundColor: '#040406',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    className="group-hover:scale-104"
                  />

                  {/* Play Overlay Button */}
                  <div className="play-badge-overlay">
                    <div
                      style={{
                        width: '4.75rem',
                        height: '4.75rem',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        color: '#09090b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7), 0 0 40px rgba(59, 130, 246, 0.4)',
                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      className="group-hover:scale-110"
                    >
                      <Play size={28} fill="#09090b" className="ml-1" />
                    </div>
                  </div>

                  {/* Top Left: Category & Aspect Ratio */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      zIndex: 5
                    }}
                  >
                    <span
                      style={{
                        background: 'rgba(9, 9, 11, 0.9)',
                        backdropFilter: 'blur(8px)',
                        padding: '0.35rem 0.65rem',
                        borderRadius: '0.4rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#ffffff',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {isVertical ? <Smartphone size={13} className="text-amber-400" /> : <Monitor size={13} className="text-blue-400" />}
                      <span>{video.aspectRatio}</span>
                    </span>

                    <span
                      style={{
                        background: 'rgba(9, 9, 11, 0.9)',
                        backdropFilter: 'blur(8px)',
                        padding: '0.35rem 0.65rem',
                        borderRadius: '0.4rem',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-blue)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {video.category}
                    </span>
                  </div>

                  {/* Top Right: Fullscreen Action Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                      background: 'rgba(9, 9, 11, 0.9)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '0.4rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#ffffff',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <Maximize2 size={12} />
                    <span>Click to Play</span>
                  </div>

                  {/* Bottom Right: Duration Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      right: '1.25rem',
                      background: 'rgba(9, 9, 11, 0.9)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '0.4rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#ffffff',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <Clock size={12} />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Video Info Strip */}
                <div style={{ padding: '1.75rem 2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.45rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {video.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem',
                      flexGrow: 1
                    }}
                  >
                    {video.description}
                  </p>

                  {/* Technique Highlights Bar */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-subtle)',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {video.highlights.map((h) => (
                        <span
                          key={h}
                          style={{
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-muted)',
                            background: 'rgba(255, 255, 255, 0.04)',
                            padding: '0.2rem 0.5rem',
                            borderRadius: '4px',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: 'var(--accent-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                    >
                      Watch Reel →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cinema-video-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
