import React, { useState, useRef } from 'react';
import { ShieldCheck, Terminal, Film, ExternalLink, Play, Pause, Volume2, VolumeX, Maximize2, CheckCircle, AlertTriangle, Lock, RefreshCw, Zap, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { personalInfo } from '../../data/personal';
import { powerProjects } from '../../data/projects';

export default function PowerProjects({ onOpenLightbox, onPlayVideo, theme = 'dark' }) {
  // Vault Guard Security Interactive Terminal State
  const [vaultStatus, setVaultStatus] = useState('protected');
  const [vaultLogs, setVaultLogs] = useState([
    'STATUS: 2FA Authentication Daemon active.',
    'PROTOCOL: AES-256 encrypted handshake established.',
    'FIREWALL: SQL injection parameterized proofing online.',
    'LOCKDOWN: Site safety score calibrated to 90%.'
  ]);

  // Cloud Data Guard Pipeline Simulation State
  const [cloudStreamActive, setCloudStreamActive] = useState(false);
  const [cloudLogs, setCloudLogs] = useState([
    'PIPELINE: Cloud streaming ingestion initialized.',
    'DEDUPLICATION: SHA-256 idempotency cache operational.',
    'SENTINEL: Active session monitor watching for anomaly token reuse.'
  ]);

  // Reel Video State
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Vault Guard Simulation trigger
  const handleTestVaultSecurity = () => {
    setVaultLogs((prev) => [
      `[${new Date().toLocaleTimeString()}] INTRUSION TEST: Simulating ' OR '1'='1 SQL injection attack...`,
      `[${new Date().toLocaleTimeString()}] DEFENSE: Parameterized query barrier blocked injection. Payload sanitized.`,
      `[${new Date().toLocaleTimeString()}] 2FA VERIFY: OTP challenge issued. Attack isolated.`,
      `[${new Date().toLocaleTimeString()}] RESULT: Site safety verified at 90%. System secure.`,
      ...prev.slice(0, 3)
    ]);
  };

  // Cloud Data Guard Simulation trigger
  const handleTestCloudPipeline = () => {
    setCloudStreamActive(true);
    setCloudLogs((prev) => [
      `[${new Date().toLocaleTimeString()}] INGESTION: Received 5 concurrent cloud records.`,
      `[${new Date().toLocaleTimeString()}] DEDUP CHECK: Duplicate key #4902 detected -> Dropped automatically.`,
      `[${new Date().toLocaleTimeString()}] ANOMALY DETECTED: Suspicious concurrent token reuse from untrusted host.`,
      `[${new Date().toLocaleTimeString()}] AUTO-KILL: Malicious session immediately terminated and banned.`,
      ...prev.slice(0, 3)
    ]);
    setTimeout(() => setCloudStreamActive(false), 2000);
  };

  const handleTogglePlayReel = () => {
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

  const handleToggleMuteReel = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="power-projects" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-dark)' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
            <Sparkles size={13} className="text-blue-400" />
            <span style={{ color: '#93c5fd', fontWeight: '600' }}>Section B • Show Your Power</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div>
              <h2 className="section-title">
                Core Engineering & Content Power Projects
              </h2>
              <p className="section-desc" style={{ maxWidth: '42rem' }}>
                Tested full-stack systems, automated cybersecurity pipelines, and high-retention video production. Directly inspect live code repos, interactive attack defenses, and playable video reels.
              </p>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                color: '#10b981',
                background: 'rgba(16, 185, 129, 0.08)',
                padding: '0.45rem 0.9rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <CheckCircle size={14} />
              <span>Live Code • Operational Demos • Direct Repos</span>
            </div>
          </div>
        </div>

        {/* 3-Column Power Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
          className="power-projects-grid"
        >
          {/* ======================================================== */}
          {/* PROJECT 1: VAULT GUARD SYSTEM                            */}
          {/* ======================================================== */}
          <div
            className="glass-card"
            style={{
              borderRadius: '1.5rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--bg-card)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              boxShadow: '0 15px 45px rgba(0, 0, 0, 0.6), 0 0 35px rgba(59, 130, 246, 0.08)',
              position: 'relative'
            }}
          >
            {/* Top Badges */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    background: 'rgba(59, 130, 246, 0.15)',
                    color: '#93c5fd',
                    border: '1px solid rgba(59, 130, 246, 0.35)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '0.35rem',
                    fontWeight: '700'
                  }}
                >
                  CodeAlpha Security Project
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    background: 'rgba(16, 185, 129, 0.12)',
                    color: '#34d399',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    padding: '0.25rem 0.55rem',
                    borderRadius: '0.35rem',
                    fontWeight: '600'
                  }}
                >
                  90% Site Safety
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>2026</span>
            </div>

            {/* Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '0.65rem',
                  background: 'rgba(59, 130, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#60a5fa'
                }}
              >
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: '800',
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  Vault Guard System
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#60a5fa', fontFamily: 'var(--font-mono)' }}>
                  Encryption-Based Web Protection Layer
                </span>
              </div>
            </div>

            {/* Exactly Specified Write-up */}
            <div
              style={{
                background: 'rgba(59, 130, 246, 0.06)',
                borderLeft: '3px solid #3b82f6',
                padding: '0.9rem 1rem',
                borderRadius: '0 0.5rem 0.5rem 0',
                margin: '1rem 0 1.25rem 0'
              }}
            >
              <p
                style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.55',
                  color: '#e4e4e7',
                  margin: 0,
                  fontWeight: '500'
                }}
              >
                "Designed an encryption-based web protection layer with 2FA and SQL injection proofing, locking site safety to 90%."
              </p>
            </div>

            {/* Interactive Live Defense Console */}
            <div
              style={{
                background: 'var(--bg-card-elevated)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '0.75rem',
                padding: '1rem',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.73rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                <span style={{ color: '#60a5fa', fontWeight: '600' }}>[LIVE SECURITY AUDIT LOG]</span>
                <button
                  type="button"
                  onClick={handleTestVaultSecurity}
                  style={{
                    background: 'rgba(59, 130, 246, 0.2)',
                    border: '1px solid rgba(59, 130, 246, 0.4)',
                    color: 'var(--text-primary)',
                    borderRadius: '0.35rem',
                    padding: '0.2rem 0.55rem',
                    fontSize: '0.7rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <RefreshCw size={11} />
                  <span>Simulate Attack Test</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', color: '#a1a1aa' }}>
                {vaultLogs.map((log, i) => (
                  <div key={i} style={{ color: i === 0 ? '#34d399' : '#a1a1aa' }}>
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Specs */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#d4d4d8' }}>
                <Lock size={13} className="text-blue-400" />
                <span>AES-256 payload encryption on network handshake</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#d4d4d8' }}>
                <ShieldCheck size={13} className="text-blue-400" />
                <span>Zero SQL Injection vulnerability via prepared statements</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#d4d4d8' }}>
                <CheckCircle size={13} className="text-emerald-400" />
                <span>Automated 2FA token expiration & IP session jail</span>
              </li>
            </ul>

            {/* Stack Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem', marginTop: 'auto' }}>
              {['React', 'Node.js', 'AES-256', '2FA / TOTP', 'SQLi Barrier', 'Cybersecurity'].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#93c5fd',
                    background: 'rgba(59, 130, 246, 0.08)',
                    padding: '0.2rem 0.45rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Direct Action Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, padding: '0.65rem 0.9rem', fontSize: '0.82rem', justifyContent: 'center' }}
              >
                <GithubIcon size={15} />
                <span>GitHub Repo</span>
              </a>
              <button
                type="button"
                onClick={handleTestVaultSecurity}
                className="btn-secondary"
                style={{ padding: '0.65rem 0.9rem', fontSize: '0.82rem', cursor: 'pointer' }}
              >
                <span>Verify Spec</span>
              </button>
            </div>
          </div>

          {/* ======================================================== */}
          {/* PROJECT 2: CLOUD DATA GUARD                              */}
          {/* ======================================================== */}
          <div
            className="glass-card"
            style={{
              borderRadius: '1.5rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--bg-card)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              boxShadow: '0 15px 45px rgba(0, 0, 0, 0.6), 0 0 35px rgba(16, 185, 129, 0.08)',
              position: 'relative'
            }}
          >
            {/* Top Badges */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#6ee7b7',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '0.35rem',
                    fontWeight: '700'
                  }}
                >
                  Automated Cloud Pipeline
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    background: 'rgba(239, 68, 68, 0.12)',
                    color: '#fca5a5',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    padding: '0.25rem 0.55rem',
                    borderRadius: '0.35rem',
                    fontWeight: '600'
                  }}
                >
                  Active Session Banning
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>2026</span>
            </div>

            {/* Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '0.65rem',
                  background: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#34d399'
                }}
              >
                <Terminal size={20} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: '800',
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  Cloud Data Guard
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                  Automated Secure Ingestion Pipeline
                </span>
              </div>
            </div>

            {/* Exactly Specified Write-up */}
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.06)',
                borderLeft: '3px solid #10b981',
                padding: '0.9rem 1rem',
                borderRadius: '0 0.5rem 0.5rem 0',
                margin: '1rem 0 1.25rem 0'
              }}
            >
              <p
                style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.55',
                  color: '#e4e4e7',
                  margin: 0,
                  fontWeight: '500'
                }}
              >
                "Built an automated secure pipeline preventing duplicate cloud entries with automated active session banning."
              </p>
            </div>

            {/* Interactive Live Stream Console */}
            <div
              style={{
                background: 'var(--bg-card-elevated)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '0.75rem',
                padding: '1rem',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.73rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                <span style={{ color: '#34d399', fontWeight: '600' }}>[STREAM DEDUPLICATION MONITOR]</span>
                <button
                  type="button"
                  onClick={handleTestCloudPipeline}
                  style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    color: 'var(--text-primary)',
                    borderRadius: '0.35rem',
                    padding: '0.2rem 0.55rem',
                    fontSize: '0.7rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <RefreshCw size={11} className={cloudStreamActive ? 'animate-spin' : ''} />
                  <span>Push Stream Batch</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', color: '#a1a1aa' }}>
                {cloudLogs.map((log, i) => (
                  <div key={i} style={{ color: i === 0 ? '#38bdf8' : '#a1a1aa' }}>
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Specs */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#d4d4d8' }}>
                <Zap size={13} className="text-emerald-400" />
                <span>Zero duplicate entries with SHA-256 idempotency cache</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#d4d4d8' }}>
                <AlertTriangle size={13} className="text-amber-400" />
                <span>Automated instant session termination on concurrent abuse</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#d4d4d8' }}>
                <CheckCircle size={13} className="text-emerald-400" />
                <span>Cloud Computing architecture (BCA Cloud Specialization)</span>
              </li>
            </ul>

            {/* Stack Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem', marginTop: 'auto' }}>
              {['Cloud Pipeline', 'Node.js', 'Python', 'Redis', 'Session Banning', 'REST API'].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#6ee7b7',
                    background: 'rgba(16, 185, 129, 0.08)',
                    padding: '0.2rem 0.45rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Direct Action Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, padding: '0.65rem 0.9rem', fontSize: '0.82rem', justifyContent: 'center' }}
              >
                <GithubIcon size={15} />
                <span>GitHub Pipeline</span>
              </a>
              <button
                type="button"
                onClick={handleTestCloudPipeline}
                className="btn-secondary"
                style={{ padding: '0.65rem 0.9rem', fontSize: '0.82rem', cursor: 'pointer' }}
              >
                <span>Trigger Ingest</span>
              </button>
            </div>
          </div>

          {/* ======================================================== */}
          {/* PROJECT 3: VIDEO EDITING & MOTION GRAPHICS REEL           */}
          {/* ======================================================== */}
          <div
            className="glass-card"
            style={{
              borderRadius: '1.5rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--bg-card)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              boxShadow: '0 15px 45px rgba(0, 0, 0, 0.6), 0 0 35px rgba(245, 158, 11, 0.08)',
              position: 'relative'
            }}
          >
            {/* Top Badges */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    background: 'rgba(245, 158, 11, 0.15)',
                    color: '#fde68a',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '0.35rem',
                    fontWeight: '700'
                  }}
                >
                  Direct Video & Motion Reel
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    background: 'rgba(239, 68, 68, 0.12)',
                    color: '#f87171',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    padding: '0.25rem 0.55rem',
                    borderRadius: '0.35rem',
                    fontWeight: '600'
                  }}
                >
                  Playable In-Browser
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>4K 60FPS</span>
            </div>

            {/* Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '0.65rem',
                  background: 'rgba(245, 158, 11, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24'
                }}
              >
                <Film size={20} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: '800',
                    color: '#ffffff',
                    margin: 0
                  }}
                >
                  Motion Graphics Reel
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#fbbf24', fontFamily: 'var(--font-mono)' }}>
                  Video Editing & Retention Pacing
                </span>
              </div>
            </div>

            {/* Write-up */}
            <div
              style={{
                background: 'rgba(245, 158, 11, 0.06)',
                borderLeft: '3px solid #f59e0b',
                padding: '0.9rem 1rem',
                borderRadius: '0 0.5rem 0.5rem 0',
                margin: '1rem 0 1.25rem 0'
              }}
            >
              <p
                style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.55',
                  color: '#e4e4e7',
                  margin: 0,
                  fontWeight: '500'
                }}
              >
                "Direct embedded motion design and high-retention video reel: Engineered with kinetic typography, sound design, and viral pacing."
              </p>
            </div>

            {/* DIRECT OPERATIONAL EMBEDDED VIDEO PLAYER */}
            <div
              style={{
                position: 'relative',
                borderRadius: '0.85rem',
                overflow: 'hidden',
                background: '#000000',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                aspectRatio: '16 / 10',
                marginBottom: '1.25rem',
                cursor: 'pointer'
              }}
              onClick={handleTogglePlayReel}
            >
              <video
                ref={videoRef}
                src="./assets/videos/arjun-video-1.mp4"
                poster="./assets/hero/hero-isometric.png"
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  backgroundColor: '#000000'
                }}
              />

              {/* Play/Pause Center Indicator */}
              {!isPlaying && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(2px)'
                  }}
                >
                  <div
                    style={{
                      width: '3.75rem',
                      height: '3.75rem',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      boxShadow: '0 0 30px rgba(245, 158, 11, 0.6)'
                    }}
                  >
                    <Play size={24} style={{ marginLeft: '3px' }} />
                  </div>
                </div>
              )}

              {/* Top Controls Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '0.5rem',
                  left: '0.5rem',
                  right: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  zIndex: 2
                }}
              >
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#ffffff',
                    background: 'rgba(9, 9, 11, 0.8)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  {isPlaying ? 'PLAYING: MOTION REEL' : 'CLICK TO PLAY'}
                </span>

                <button
                  type="button"
                  onClick={handleToggleMuteReel}
                  style={{
                    background: 'rgba(9, 9, 11, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '2rem',
                    height: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} className="text-amber-400" />}
                </button>
              </div>

              {/* Bottom Label Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.5rem',
                  left: '0.5rem',
                  right: '0.5rem',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#e4e4e7',
                  background: 'rgba(9, 9, 11, 0.8)',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>Arjun Motion Reel 2026</span>
                <span style={{ color: '#fbbf24' }}>Interactive Stream</span>
              </div>
            </div>

            {/* Key Deliverables */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#d4d4d8' }}>
                <Sparkles size={13} className="text-amber-400" />
                <span>Kinetic vector title cards & logo reveals in After Effects</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#d4d4d8' }}>
                <Film size={13} className="text-amber-400" />
                <span>Retention-optimized pacing with rhythmic audio drops</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#d4d4d8' }}>
                <CheckCircle size={13} className="text-emerald-400" />
                <span>High-CTR visual hooks for digital creators & brands</span>
              </li>
            </ul>

            {/* Stack Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem', marginTop: 'auto' }}>
              {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Kinetic Motion', 'Sound Design'].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#fde68a',
                    background: 'rgba(245, 158, 11, 0.08)',
                    padding: '0.2rem 0.45rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(245, 158, 11, 0.2)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Direct Action Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <button
                type="button"
                onClick={handleTogglePlayReel}
                className="btn-primary"
                style={{
                  flex: 1,
                  padding: '0.65rem 0.9rem',
                  fontSize: '0.82rem',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)'
                }}
              >
                {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                <span>{isPlaying ? 'Pause Reel' : 'Play Motion Reel'}</span>
              </button>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '0.65rem 0.9rem', fontSize: '0.82rem' }}
                title="View Creator Profiles"
              >
                <ExternalLink size={14} />
                <span>Channel</span>
              </a>
            </div>
          </div>
        </div>

        {/* Companion App Showcase Banner: CloudBus Transit App Maker */}
        <div
          style={{
            marginTop: '3rem',
            padding: '2rem 2.5rem',
            borderRadius: '1.5rem',
            background: theme === 'dark' ? 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(15, 15, 25, 0.9) 100%)' : 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(241, 245, 249, 0.95) 100%)',
            border: '1px solid var(--border-medium)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.75rem'
          }}
        >
          <div style={{ maxWidth: '36rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#2563eb',
                  background: 'rgba(37, 99, 235, 0.12)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px'
                }}
              >
                App Maker Showcase
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '700' }}>CloudBus Transit Network</span>
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              Full Mobile App Architecture & Live Screen Walkthrough
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.55' }}>
              Designed and built for transit convenience: Digital e-pass issuance, concession verification, and passenger live chat helpdesk.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
            >
              <span>Explore CloudBus App Split View</span>
            </a>
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.65rem 1.15rem', fontSize: '0.85rem' }}
            >
              <GithubIcon size={15} />
              <span>Inspect Source</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
