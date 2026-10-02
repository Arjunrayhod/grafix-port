import React, { useState, useRef } from 'react';
import { ArrowUpRight, Sparkles, Layers, Play, Volume2, VolumeX, Maximize2, Check } from 'lucide-react';
import { projects, projectCategories } from '../../data/projects';

// Video Half-Screen Autoplay Player Component
function AutoplayHalfScreenVideo({ videoUrl, videoTitle, posterImage, onOpenLightbox }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
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
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '440px',
        background: '#040407',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterImage}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '620px',
          objectFit: 'contain',
          backgroundColor: '#040407'
        }}
      >
        Your browser does not support video.
      </video>

      {/* Top Overlay Badge Bar */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          right: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10
        }}
      >
        <div
          style={{
            background: 'rgba(9, 9, 11, 0.85)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '0.45rem',
            padding: '0.3rem 0.65rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: '#ffffff'
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 8px #10b981'
            }}
          />
          <span>MOTION AUTOPLAY REEL</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Mute / Unmute Button */}
          <button
            type="button"
            onClick={toggleMute}
            title={isMuted ? "Click to Unmute" : "Mute Audio"}
            style={{
              background: 'rgba(9, 9, 11, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '2.4rem',
              height: '2.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-blue-400" />}
          </button>

          {/* Fullscreen Video Button */}
          <button
            type="button"
            onClick={handleFullscreen}
            title="Expand to Fullscreen Monitor"
            style={{
              background: 'rgba(9, 9, 11, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '2.4rem',
              height: '2.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <Maximize2 size={15} />
          </button>
        </div>
      </div>

      {/* Bottom Subtitle Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          right: '1rem',
          background: 'rgba(9, 9, 11, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '0.5rem',
          padding: '0.45rem 0.85rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.78rem',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)'
        }}
      >
        <span>{videoTitle || 'Production Video Cut'}</span>
        <span style={{ color: '#93c5fd' }}>Tap to Pause / Play</span>
      </div>
    </div>
  );
}

export default function FeaturedWork({ onSelectProject, onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return (
      project.category === activeCategory ||
      project.secondaryCategory === activeCategory
    );
  });

  return (
    <section id="work" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)' }}>
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
            <Sparkles size={13} />
            <span>Featured Showcase: Split View</span>
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
                Selected Work & Split Cinema Showcase
              </h2>
              <p className="section-desc">
                Har project ki unique original image aur details ek taraf, aur doosri taraf half-screen par real video autoplay system!
              </p>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '0.4rem 0.85rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-subtle)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
              <span>Zero Duplicate Images • Side-by-Side Video Autoplay</span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '3.5rem',
            scrollbarWidth: 'none'
          }}
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`filter-tab-pill ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
              {category !== 'All' && (
                <span
                  style={{
                    marginLeft: '0.35rem',
                    fontSize: '0.75rem',
                    opacity: 0.7
                  }}
                >
                  ({projects.filter(p => p.category === category || p.secondaryCategory === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ============================================================== */}
        {/* SPLIT-SCREEN CARDS: Image + Details on Left | Video on Right   */}
        {/* ============================================================== */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem'
          }}
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                borderRadius: '1.75rem',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                background: '#0e0e14',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7)'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '0'
                }}
                className="split-showcase-grid"
              >
                {/* -------------------------------------------------------- */}
                {/* SIDE A: PROJECT IMAGE (Full Size) + COMPLETE DETAILS     */}
                {/* -------------------------------------------------------- */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2.5rem',
                    borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                    background: 'rgba(15, 15, 22, 0.95)'
                  }}
                >
                  {/* Top Badges */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          background: 'rgba(59, 130, 246, 0.15)',
                          color: '#93c5fd',
                          border: '1px solid rgba(59, 130, 246, 0.3)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '0.4rem',
                          fontWeight: '600'
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#e4e4e7',
                          border: '1px solid var(--border-medium)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '0.4rem'
                        }}
                      >
                        {project.typeBadge}
                      </span>
                    </div>

                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)',
                      fontWeight: '800',
                      color: '#ffffff',
                      marginBottom: '0.4rem',
                      lineHeight: '1.15'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-blue)',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.tagline}
                  </p>

                  {/* The Unique Project Image in its Proper Size */}
                  <div
                    style={{
                      borderRadius: '1rem',
                      overflow: 'hidden',
                      border: '1px solid var(--border-subtle)',
                      background: '#040407',
                      position: 'relative',
                      marginBottom: '1.75rem',
                      cursor: 'pointer'
                    }}
                    onClick={() => onOpenLightbox(project.coverImage, `${project.title} — ${project.tagline}`)}
                    className="group"
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        maxHeight: '360px',
                        objectFit: 'contain',
                        backgroundColor: '#040407',
                        display: 'block',
                        transition: 'transform 0.4s ease'
                      }}
                      className="group-hover:scale-102"
                    />

                    {/* Fullscreen Zoom Hint */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        right: '0.75rem',
                        background: 'rgba(9, 9, 11, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '0.35rem',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <Maximize2 size={11} />
                      <span>Click to Zoom</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.65',
                      marginBottom: '1.75rem',
                      flexGrow: 1
                    }}
                  >
                    {project.fullDescription}
                  </p>

                  {/* Tools & Role Info */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--border-subtle)',
                      gap: '1rem',
                      marginTop: 'auto'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        ROLE:
                      </div>
                      <div style={{ fontSize: '0.88rem', fontWeight: '600', color: '#ffffff' }}>
                        {project.role}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {project.tools.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-muted)',
                            background: 'rgba(255, 255, 255, 0.04)',
                            padding: '0.2rem 0.5rem',
                            borderRadius: '4px',
                            border: '1px solid rgba(255, 255, 255, 0.06)'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="btn-primary"
                      style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem' }}
                    >
                      <span>Deep Dive Case</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* -------------------------------------------------------- */}
                {/* SIDE B: HALF-SCREEN VIDEO AUTOPLAY SYSTEM               */}
                {/* -------------------------------------------------------- */}
                <AutoplayHalfScreenVideo
                  videoUrl={project.videoUrl}
                  videoTitle={project.videoTitle || `${project.title} Reel`}
                  posterImage={project.coverImage}
                  onOpenLightbox={onOpenLightbox}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .split-showcase-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
