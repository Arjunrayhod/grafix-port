import React, { useState } from 'react';
import { Layers, Copy, Check, ChevronLeft, ChevronRight, Sparkles, Compass, Type, Palette, Monitor, Smartphone, Award, GitBranch } from 'lucide-react';
import { brandCaseStudies } from '../../data/caseStudies';

export default function CaseStudies({ onOpenImageLightbox }) {
  const [activeStudyIndex, setActiveStudyIndex] = useState(0);
  const [activeStep, setActiveStep] = useState('s01_overview');
  const [copiedHex, setCopiedHex] = useState(null);

  const currentStudy = brandCaseStudies[activeStudyIndex];
  const s = currentStudy.sections;

  const stepList = [
    { id: 's01_overview', num: '01', label: 'Brand Overview', icon: Compass },
    { id: 's02_logo', num: '02', label: 'Logo Mark', icon: Sparkles },
    { id: 's03_variations', num: '03', label: 'Variations', icon: Layers },
    { id: 's04_colors', num: '04', label: 'Color Palette', icon: Palette },
    { id: 's05_typography', num: '05', label: 'Typography', icon: Type },
    { id: 's06_social', num: '06', label: 'Social Media', icon: Smartphone },
    { id: 's07_website', num: '07', label: 'Website / UI', icon: Monitor },
    { id: 's08_mockups', num: '08', label: 'Mockups', icon: Layers },
    { id: 's09_final_result', num: '09', label: 'Final Result', icon: Award },
    { id: 's10_process', num: '10', label: 'Design Process', icon: GitBranch }
  ];

  const currentStepIndex = stepList.findIndex(item => item.id === activeStep);

  const handleNextStep = () => {
    if (currentStepIndex < stepList.length - 1) {
      setActiveStep(stepList[currentStepIndex + 1].id);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setActiveStep(stepList[currentStepIndex - 1].id);
    }
  };

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="case-studies" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <Layers size={13} />
            <span>Complete Brand Systems</span>
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
                Brand Identity Case Study: 10-Step Architecture
              </h2>
              <p className="section-desc">
                Demonstrating that I understand complete brand ecosystems — from strategic positioning to logo engineering, typography scales, color palettes, and real-world implementation.
              </p>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--accent-blue)',
                background: 'rgba(59, 130, 246, 0.1)',
                padding: '0.4rem 0.85rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(59, 130, 246, 0.25)'
              }}
            >
              Case Study: {currentStudy.brandName}
            </div>
          </div>
        </div>

        {/* 10-Step Navigation Ribbon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.85rem',
            marginBottom: '2rem',
            scrollbarWidth: 'none'
          }}
        >
          {stepList.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(step.id)}
                className={`case-step-btn ${isActive ? 'active' : ''}`}
              >
                <span style={{ fontWeight: '700' }}>{step.num}</span>
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Case Study Viewer Box */}
        <div
          className="glass-card"
          style={{
            borderRadius: '1.25rem',
            padding: '2.5rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top Step Breadcrumb & Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.5rem',
              marginBottom: '2rem',
              borderBottom: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-blue)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                Step {stepList[currentStepIndex].num} of 10
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginTop: '0.25rem'
                }}
              >
                {stepList[currentStepIndex].num} — {stepList[currentStepIndex].label}
              </h3>
            </div>

            {/* Step Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={currentStepIndex === 0}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0.85rem',
                  color: currentStepIndex === 0 ? 'var(--text-muted)' : '#ffffff',
                  cursor: currentStepIndex === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <ChevronLeft size={16} /> Prev
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                disabled={currentStepIndex === stepList.length - 1}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0.85rem',
                  color: currentStepIndex === stepList.length - 1 ? 'var(--text-muted)' : '#ffffff',
                  cursor: currentStepIndex === stepList.length - 1 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* STEP 01 — OVERVIEW */}
          {activeStep === 's01_overview' && (
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.75rem' }}>
                {s.s01_overview.summary}
              </h4>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                {s.s01_overview.content}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                {s.s01_overview.corePillars.map((pillar) => (
                  <div
                    key={pillar.name}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0.75rem',
                      padding: '1.25rem'
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-blue)', marginBottom: '0.35rem' }}>
                      Pillar
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.35rem' }}>
                      {pillar.name}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {pillar.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 02 — LOGO MARK */}
          {activeStep === 's02_logo' && (
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.75rem' }}>
                {s.s02_logo.summary}
              </h4>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                {s.s02_logo.content}
              </p>

              <div
                style={{
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle)',
                  background: '#040407',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                onClick={() => onOpenImageLightbox && onOpenImageLightbox(s.s02_logo.logoImage, 'Master Brand Logomark Matrix')}
              >
                <img
                  src={s.s02_logo.logoImage}
                  alt="DukaanPilot & Folio Logo Construction"
                  style={{ maxHeight: '520px', width: '100%', objectFit: 'contain' }}
                />
                <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#93c5fd', fontFamily: 'var(--font-mono)' }}>
                  🔍 Click image to view in Full-Screen Lightbox
                </div>
              </div>

              <div
                style={{
                  padding: '1rem 1.25rem',
                  background: 'rgba(59, 130, 246, 0.05)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '0.5rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <strong style={{ color: '#ffffff' }}>Construction Rationale: </strong>
                {s.s02_logo.constructionNotes}
              </div>
            </div>
          )}

          {/* STEP 03 — LOGO VARIATIONS */}
          {activeStep === 's03_variations' && (
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.75rem' }}>
                {s.s03_variations.summary}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
                {s.s03_variations.variations.map((v, i) => (
                  <div
                    key={v.type}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0.75rem',
                      padding: '1.5rem'
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
                      Config 0{i + 1}
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem' }}>
                      {v.type}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {v.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 04 — COLOR PALETTE */}
          {activeStep === 's04_colors' && (
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem' }}>
                {s.s04_colors.summary}
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                {s.s04_colors.rationale}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {s.s04_colors.palette.map((color) => (
                  <div
                    key={color.name}
                    style={{
                      borderRadius: '0.75rem',
                      overflow: 'hidden',
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--bg-card)'
                    }}
                  >
                    <div
                      style={{
                        height: '100px',
                        backgroundColor: color.hex,
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                    <div style={{ padding: '0.85rem' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#ffffff' }}>
                        {color.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                        {color.role}
                      </div>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(color.hex)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '0.35rem',
                          padding: '0.35rem 0.5rem',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          cursor: 'pointer'
                        }}
                      >
                        <span>{color.hex}</span>
                        {copiedHex === color.hex ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 05 — TYPOGRAPHY */}
          {activeStep === 's05_typography' && (
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '1.5rem' }}>
                {s.s05_typography.summary}
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '0.85rem',
                    padding: '1.75rem'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
                    Primary Display Typeface
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                    Plus Jakarta Sans
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
                    Weights: {s.s05_typography.primaryFont.weights}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {s.s05_typography.primaryFont.characteristics}
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
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
                    Technical & UI Body Typeface
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem' }}>
                    Inter / Mono
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
                    Weights: {s.s05_typography.secondaryFont.weights}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {s.s05_typography.secondaryFont.characteristics}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 06 — SOCIAL MEDIA */}
          {activeStep === 's06_social' && (
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.75rem' }}>
                {s.s06_social.summary}
              </h4>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {s.s06_social.content}
              </p>
              <div
                style={{
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle)',
                  background: '#040407',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  cursor: 'pointer'
                }}
                onClick={() => onOpenImageLightbox && onOpenImageLightbox(s.s06_social.previewImage, 'Social Media Identity System')}
              >
                <img
                  src={s.s06_social.previewImage}
                  alt="Social Media Branding"
                  style={{ maxHeight: '550px', width: '100%', objectFit: 'contain' }}
                />
                <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#93c5fd', fontFamily: 'var(--font-mono)' }}>
                  🔍 Click image to view in Full-Screen Lightbox
                </div>
              </div>
            </div>
          )}

          {/* STEP 07 — WEBSITE / UI */}
          {activeStep === 's07_website' && (
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.75rem' }}>
                {s.s07_website.summary}
              </h4>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {s.s07_website.content}
              </p>
              <div
                style={{
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle)',
                  background: '#040407',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  cursor: 'pointer'
                }}
                onClick={() => onOpenImageLightbox && onOpenImageLightbox(s.s07_website.previewImage, 'Digital Product & Transit UI Showcase')}
              >
                <img
                  src={s.s07_website.previewImage}
                  alt="Product UI and Web Interface"
                  style={{ maxHeight: '550px', width: '100%', objectFit: 'contain' }}
                />
                <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#93c5fd', fontFamily: 'var(--font-mono)' }}>
                  🔍 Click image to view in Full-Screen Lightbox
                </div>
              </div>
            </div>
          )}

          {/* STEP 08 — MOCKUPS */}
          {activeStep === 's08_mockups' && (
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '1.25rem' }}>
                {s.s08_mockups.summary}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                {s.s08_mockups.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0.75rem',
                      padding: '1.25rem'
                    }}
                  >
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.35rem' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle)',
                  background: '#040407',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  cursor: 'pointer'
                }}
                onClick={() => onOpenImageLightbox && onOpenImageLightbox(s.s08_mockups.previewImage, 'Real World Transit App & Posters')}
              >
                <img
                  src={s.s08_mockups.previewImage}
                  alt="Real World Transit & Brand Mockups"
                  style={{ maxHeight: '550px', width: '100%', objectFit: 'contain' }}
                />
                <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#93c5fd', fontFamily: 'var(--font-mono)' }}>
                  🔍 Click image to view in Full-Screen Lightbox
                </div>
              </div>
            </div>
          )}

          {/* STEP 09 — FINAL RESULT */}
          {activeStep === 's09_final_result' && (
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '1.25rem' }}>
                {s.s09_final_result.summary}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {s.s09_final_result.achievements.map((ach, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0.65rem',
                      padding: '1.15rem'
                    }}
                  >
                    <Award size={18} className="text-blue-400" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {ach}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 10 — DESIGN PROCESS */}
          {activeStep === 's10_process' && (
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '1.5rem' }}>
                {s.s10_process.summary}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {s.s10_process.steps.map((st) => (
                  <div
                    key={st.phase}
                    style={{
                      borderLeft: '2px solid var(--accent-blue)',
                      paddingLeft: '1.25rem',
                      paddingTop: '0.25rem',
                      paddingBottom: '0.25rem'
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.25rem' }}>
                      {st.phase}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {st.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
