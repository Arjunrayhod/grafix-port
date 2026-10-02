import React, { useState } from 'react';
import { Film, Play, Clock, Sparkles, Monitor, Smartphone } from 'lucide-react';
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
                Video Editing, Pacing & Showreels
              </h2>
              <p className="section-desc">
                Engaging short-form reels, rhythm-matched cuts, commercial teasers, and sound design. Click any card to launch the clean video player.
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
                border: '1px solid var(--border-subtle)'
              }}
            >
              Native MP4 Video Playback • Zero Unwanted Autoplay
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
            marginBottom: '2.5rem',
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

        {/* Video Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredVideos.map((video) => {
            const isVertical = video.aspectRatio === '9:16';
            return (
              <div
                key={video.id}
                className="video-card group"
                onClick={() => onPlayVideo(video)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onPlayVideo(video);
                }}
              >
                {/* Poster / Video Preview Area */}
                <div
                  className="video-preview-wrapper"
                  style={{
                    aspectRatio: isVertical ? '16 / 10' : '16 / 9',
                    position: 'relative'
                  }}
                >
                  <img
                    src={video.poster}
                    alt={video.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="group-hover:scale-105"
                  />

                  {/* Play Overlay Button */}
                  <div className="play-badge-overlay">
                    <div className="play-icon-circle">
                      <Play size={20} fill="#09090b" className="ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.85rem',
                      right: '0.85rem',
                      background: 'rgba(9, 9, 11, 0.85)',
                      backdropFilter: 'blur(6px)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '0.35rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#ffffff'
                    }}
                  >
                    <Clock size={11} />
                    <span>{video.duration}</span>
                  </div>

                  {/* Aspect Ratio Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      background: 'rgba(9, 9, 11, 0.85)',
                      backdropFilter: 'blur(6px)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '0.35rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    {isVertical ? <Smartphone size={12} className="text-amber-400" /> : <Monitor size={12} className="text-blue-400" />}
                    <span>{video.aspectRatio}</span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div style={{ padding: '1.5rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-blue)'
                    }}
                  >
                    <span>{video.category}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{video.year}</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {video.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.5',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {video.description}
                  </p>

                  {/* Highlights Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.35rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-subtle)'
                    }}
                  >
                    {video.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)',
                          background: 'rgba(255, 255, 255, 0.03)',
                          padding: '0.2rem 0.45rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 255, 255, 0.04)'
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
