import React, { useState } from 'react';
import { Mail, Send, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/Icons';
import { personalInfo } from '../../data/personal';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Brand & Visual Design',
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
    // Pre-fill a mailto link so Arjun gets real emails instantly
    const subject = encodeURIComponent(`Project Inquiry: ${formState.service} - from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Arjun,\n\nMy name is ${formState.name} (${formState.email}).\n\nI am interested in: ${formState.service}\n\nProject details:\n${formState.message}\n\nBest,\n${formState.name}`
    );
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Headline, Copy & Direct Channels */}
          <div>
            <div className="section-tag">
              <MessageSquare size={13} />
              <span>Let's Collaborate</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                color: '#ffffff',
                marginBottom: '1.25rem'
              }}
            >
              Have a project in mind?
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem'
              }}
            >
              I'm available for freelance creative work, digital design projects, branding, video editing, and visual content.
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
                      Direct Email
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#ffffff' }}>
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
                    <span>Email Me</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* External Profile Links */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
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
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>LinkedIn</span>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-500" />
                </a>

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
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>GitHub Repo</span>
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
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}
            >
              Start a Conversation
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Fill in your details below to compose a direct message to Arjun.
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
                  placeholder="e.g. John Doe"
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
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
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
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="Brand & Visual Design">Brand & Visual Design</option>
                  <option value="Graphic Design & Socials">Graphic Design & Socials</option>
                  <option value="Video Editing & Reels">Video Editing & Reels</option>
                  <option value="Motion Graphics">Motion Graphics</option>
                  <option value="UI & Digital Product">UI & Digital Product</option>
                  <option value="Other Creative Work">Other Creative Work</option>
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
                  MESSAGE / PROJECT OVERVIEW
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your goals, timeline, or deliverables..."
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
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                <span>Send Inquiry</span>
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
