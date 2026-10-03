import React, { useState } from 'react';
import { Mail, Send, ArrowUpRight, Copy, Check, MessageSquare, MessageCircle, Clock, Zap, ShieldCheck } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/Icons';
import { personalInfo } from '../../data/personal';

export default function Contact({ theme = 'dark' }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    emailOrPhone: '',
    service: 'Full-Stack Web & Security',
    timeline: '24-Hour Rapid Prototype',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`24h Prototype Inquiry: ${formState.service} - ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Arjun,\n\nMy name is ${formState.name} (${formState.emailOrPhone}).\n\nI need: ${formState.service}\nDesired Timeline: ${formState.timeline}\n\nProject details:\n${formState.message}\n\nBest,\n${formState.name}`
    );
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-dark)' }}>
      <div className="container-custom">
        {/* ============================================================== */}
        {/* SECTION C: TRANSPARENT CONTACT ANCHOR & 24H PROTOTYPE BANNER   */}
        {/* ============================================================== */}
        <div
          style={{
            borderRadius: '2rem',
            background: theme === 'dark' ? 'radial-gradient(ellipse at top, rgba(37, 99, 235, 0.25) 0%, rgba(9, 9, 15, 0.95) 70%)' : 'radial-gradient(ellipse at top, rgba(37, 99, 235, 0.12) 0%, rgba(241, 245, 249, 0.98) 70%)',
            border: '1px solid var(--border-medium)',
            padding: '3rem 2.5rem',
            marginBottom: '4rem',
            boxShadow: theme === 'dark' ? '0 25px 70px rgba(0, 0, 0, 0.8), 0 0 60px rgba(37, 99, 235, 0.15)' : '0 20px 50px rgba(0, 0, 0, 0.08), 0 0 40px rgba(37, 99, 235, 0.08)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top 24-Hour Guarantee Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              color: '#34d399',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: '700',
              marginBottom: '1.5rem'
            }}
          >
            <Clock size={15} />
            <span>24-HOUR RAPID PROTOTYPE GUARANTEE</span>
          </div>

          {/* Requested Bold Anchor Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.1rem, 5vw, 3.8rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
              maxWidth: '52rem',
              margin: '0 auto 1.25rem auto'
            }}
          >
            Let's build something together.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Get your prototype in 24 hours.
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'var(--text-secondary)',
              maxWidth: '42rem',
              margin: '0 auto 2.5rem auto',
              lineHeight: '1.6'
            }}
          >
            Whether you need a secured full-stack web tool, a functional mobile app proof-of-concept, or viral video edits — kickstart your build today with zero friction.
          </p>

          {/* Direct Highlighted Call-To-Action Channels */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem'
            }}
          >
            {/* Primary WhatsApp Direct CTA */}
            <a
              href={personalInfo.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                padding: '0.9rem 2rem',
                fontSize: '1.05rem',
                fontWeight: '700',
                boxShadow: '0 8px 30px rgba(16, 185, 129, 0.4)',
                border: 'none'
              }}
            >
              <MessageCircle size={20} />
              <span>Hire Me on WhatsApp (Instant Chat)</span>
            </a>

            {/* Direct Email Hire CTA */}
            <a
              href={`mailto:${personalInfo.contact.email}?subject=Project%20Inquiry%20-%2024h%20Prototype`}
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                padding: '0.9rem 1.8rem',
                fontSize: '1.05rem',
                fontWeight: '700',
                boxShadow: '0 8px 30px rgba(37, 99, 235, 0.4)'
              }}
            >
              <Mail size={19} />
              <span>Send Email Directly</span>
            </a>
          </div>
        </div>

        {/* ============================================================== */}
        {/* LOWER SECTION: DETAILED CONTACT CARDS & STRUCTURED FORM        */}
        {/* ============================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Credentials & Links */}
          <div>
            <div className="section-tag">
              <MessageSquare size={13} />
              <span>Direct Channels</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                fontWeight: '800',
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}
            >
              Direct Access to Arjun Rathod
            </h3>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}
            >
              Skip the agency middleman. Work directly with a developer and creator who handles architecture, coding, and production end-to-end.
            </p>

            {/* Direct Connect Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {/* Primary Email Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '0.5rem',
                      background: 'rgba(59, 130, 246, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#60a5fa'
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      Direct Developer Email
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {personalInfo.contact.email}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0.4rem',
                      padding: '0.45rem 0.75rem',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>

                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="btn-primary"
                    style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
                  >
                    <span>Write Email</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* External Profile Links */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    color: '#ffffff'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <GithubIcon size={18} className="text-zinc-300" />
                    <div>
                      <span style={{ fontSize: '0.9rem', fontWeight: '600', display: 'block' }}>GitHub</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Repositories & Code</span>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-500" />
                </a>

                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    color: '#ffffff'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <LinkedinIcon size={18} className="text-blue-400" />
                    <div>
                      <span style={{ fontSize: '0.9rem', fontWeight: '600', display: 'block' }}>LinkedIn</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Professional Profile</span>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Project Inquiry Form */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem',
              borderRadius: '1.25rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              border: '1px solid var(--border-medium)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  margin: 0
                }}
              >
                Start Your Project
              </h3>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#34d399',
                  background: 'rgba(16, 185, 129, 0.12)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px'
                }}
              >
                24h Response
              </span>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Describe your project goals or ask for a prototype estimate.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.4rem'
                  }}
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Sharma"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-medium)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.4rem'
                  }}
                >
                  EMAIL OR WHATSAPP NUMBER
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. alex@company.com or +91 9876543210"
                  value={formState.emailOrPhone}
                  onChange={(e) => setFormState({ ...formState, emailOrPhone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-medium)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    PROJECT DISCIPLINE
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      background: '#16161d',
                      border: '1px solid var(--border-medium)',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="Full-Stack Web & Security">Full-Stack Web & Security</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Video Editing & Content">Video Editing & Content</option>
                    <option value="Motion Graphics & Brand">Motion Graphics & Brand</option>
                    <option value="Cloud Security Pipeline">Cloud Security Pipeline</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    DELIVERY TARGET
                  </label>
                  <select
                    value={formState.timeline}
                    onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      background: '#16161d',
                      border: '1px solid var(--border-medium)',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="24-Hour Rapid Prototype">24-Hour Rapid Prototype</option>
                    <option value="1 Week MVP Build">1 Week MVP Build</option>
                    <option value="Monthly Retainer / Creator">Monthly Retainer</option>
                    <option value="Flexible Timeline">Flexible Timeline</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.4rem'
                  }}
                >
                  MESSAGE / PROJECT OVERVIEW
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me what you want to automate, build, or edit..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-medium)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  marginTop: '0.5rem',
                  padding: '0.85rem',
                  fontSize: '0.95rem',
                  fontWeight: '700'
                }}
              >
                <span>Submit Inquiry (Get 24h Prototype)</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
