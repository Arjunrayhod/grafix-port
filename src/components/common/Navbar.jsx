import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, ShieldCheck, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export default function Navbar({ onOpenContact, theme = 'dark', onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Power Projects', href: '#power-projects' },
    { name: 'All Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Video Reels', href: '#videos' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo & Availability Status */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-decoration-none group"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <div
            style={{
              width: '2.4rem',
              height: '2.4rem',
              borderRadius: '0.55rem',
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              color: '#ffffff',
              fontSize: '0.95rem',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.02em',
              boxShadow: '0 2px 10px rgba(37, 99, 235, 0.4)'
            }}
          >
            AR
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: '800',
                fontSize: '1.05rem',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span>ARJUN RATHOD</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.7rem',
                color: '#10b981',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  display: 'inline-block',
                  boxShadow: '0 0 8px #10b981'
                }}
              />
              <span>Full-Stack Dev • App Maker • 24h Prototype</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden-mobile"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs, Theme Toggle & Mobile Menu Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* Dark / Light (White) Mode Switcher */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light / White' : 'Dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'Light / White' : 'Dark'} mode`}
            style={{
              background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.06)',
              border: '1px solid var(--border-medium)',
              borderRadius: '0.55rem',
              padding: '0.45rem 0.75rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.2s ease'
            }}
          >
            {theme === 'dark' ? (
              <>
                <Sun size={15} className="text-amber-400" />
                <span className="hidden-mobile">Light</span>
              </>
            ) : (
              <>
                <Moon size={15} className="text-blue-600" />
                <span className="hidden-mobile">Dark</span>
              </>
            )}
          </button>

          {/* Direct WhatsApp CTA */}
          <a
            href={personalInfo.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden-mobile btn-primary"
            style={{
              padding: '0.55rem 1.15rem',
              fontSize: '0.85rem',
              display: 'none',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#ffffff',
              border: 'none',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
            }}
          >
            <MessageCircle size={15} />
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(15, 23, 42, 0.06)',
              border: '1px solid var(--border-medium)',
              borderRadius: '0.5rem',
              padding: '0.5rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '4.5rem',
            background: theme === 'dark' ? 'rgba(9, 9, 11, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 49
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Theme Toggle Item */}
            <div
              onClick={onToggleTheme}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 0',
                cursor: 'pointer',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                Theme Mode
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '0.5rem',
                  background: 'var(--border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)'
                }}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={14} className="text-amber-400" />
                    <span>Dark (Switch to Light)</span>
                  </>
                ) : (
                  <>
                    <Moon size={14} className="text-blue-600" />
                    <span>Light (Switch to Dark)</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a
              href={personalInfo.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                width: '100%',
                boxSizing: 'border-box',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                justifyContent: 'center',
                border: 'none'
              }}
            >
              <MessageCircle size={16} />
              <span>Hire Me (WhatsApp)</span>
            </a>
            <div
              style={{
                marginTop: '1.25rem',
                textAlign: 'center',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              BCA Cloud Computing • Mandsaur University
            </div>
          </div>
        </div>
      )}

      {/* Responsive media query helper styles */}
      <style>{`
        @media (min-width: 900px) {
          .hidden-mobile {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
