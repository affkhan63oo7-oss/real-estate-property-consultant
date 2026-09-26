import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Volume2, VolumeX } from 'lucide-react';
import { isSupabaseConfigured } from '../lib/supabase';

interface TowerHeaderProps {
  onOpenInquire: () => void;
  onToggleAdmin: () => void;
  isAdminOpen: boolean;
}

export const TowerHeader: React.FC<TowerHeaderProps> = ({
  onOpenInquire,
  onToggleAdmin,
  isAdminOpen
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navChapters = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Properties', href: '#properties' },
    { label: 'Dishank Asija', href: '#consultant' },
    { label: 'Location', href: '#location' },
    { label: 'Availability', href: '#availability' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -40, duration: 1.35 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          padding: isScrolled ? '0.75rem 0' : 'clamp(1rem, 2.8vw, 2.25rem) 0',
          backgroundColor: isScrolled ? 'rgba(244, 241, 234, 0.96)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--hairline-light)' : '1px solid transparent',
          transition: 'padding 0.3s var(--ease-cinematic), background-color 0.3s, border-color 0.3s'
        }}
      >
        <div
          className="container-editorial"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem'
          }}
        >
          {/* Brand Wordmark */}
          <a
            href="#"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.65rem',
              minWidth: 0,
              flexShrink: 1
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: 'clamp(0.78rem, 3.4vw, 1.15rem)',
                letterSpacing: 'clamp(0.06em, 1.4vw, 0.2em)',
                color: isScrolled ? 'var(--text-espresso)' : '#FAF8F5',
                textTransform: 'uppercase',
                transition: 'color 0.3s',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              NAMO PROPERTY CONSULTANT
            </span>
            <span
              className="hidden-mobile"
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.625rem',
                letterSpacing: '0.25em',
                color: isScrolled ? 'var(--text-bronze)' : 'rgba(250, 248, 245, 0.7)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}
            >
              • KANDIVALI EAST, MUMBAI
            </span>
          </a>

          {/* Desktop Minimal Chapter Links */}
          <nav
            className="hidden-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.25rem'
            }}
          >
            {navChapters.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(ch.href);
                }}
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: isScrolled ? 'var(--text-espresso)' : '#FAF8F5',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '0.25rem 0',
                  opacity: 0.85,
                  transition: 'opacity 0.2s, color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.color = 'var(--accent-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.85';
                  e.currentTarget.style.color = isScrolled ? 'var(--text-espresso)' : '#FAF8F5';
                }}
              >
                {ch.label}
              </a>
            ))}
          </nav>

          {/* Right Header Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* Audio Toggle (Aesthetic touch from 111W57) */}
            <button
              onClick={() => setIsSoundOn(!isSoundOn)}
              title={isSoundOn ? 'Sound On' : 'Sound Off'}
              className="hidden-mobile"
              style={{
                background: 'none',
                border: 'none',
                color: isScrolled ? 'var(--text-bronze)' : '#FAF8F5',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.625rem',
                fontFamily: 'var(--font-title)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase'
              }}
            >
              {isSoundOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
              <span>{isSoundOn ? 'Sound' : 'Mute'}</span>
            </button>

            {/* Admin Database Portal Toggle */}
            <button
              onClick={onToggleAdmin}
              title="Admin Registry & Supabase Connection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                background: isAdminOpen ? 'var(--text-espresso)' : (isScrolled ? 'rgba(27, 25, 23, 0.05)' : 'rgba(255, 255, 255, 0.15)'),
                color: isAdminOpen ? '#FAF8F5' : (isScrolled ? 'var(--text-espresso)' : '#FAF8F5'),
                border: '1px solid ' + (isScrolled ? 'var(--hairline-light)' : 'rgba(255, 255, 255, 0.25)'),
                borderRadius: '0px',
                cursor: 'pointer',
                fontFamily: 'var(--font-title)',
                fontSize: '0.625rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}
            >
              <Shield size={12} />
              <span className="hidden-mobile">Registry</span>
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: isSupabaseConfigured ? '#10B981' : '#F59E0B'
                }}
              />
            </button>

            {/* Inquire Primary CTA */}
            <button
              onClick={onOpenInquire}
              className="btn-111-primary hidden-mobile"
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: '0.625rem',
                backgroundColor: isScrolled ? 'var(--text-espresso)' : '#FAF8F5',
                color: isScrolled ? '#FAF8F5' : 'var(--text-espresso)',
                borderColor: isScrolled ? 'var(--text-espresso)' : '#FAF8F5'
              }}
            >
              Inquire
            </button>

            {/* Mobile Menu Trigger with accessible touch target */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-trigger"
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              style={{
                background: 'none',
                border: 'none',
                color: isScrolled ? 'var(--text-espresso)' : '#FAF8F5',
                cursor: 'pointer',
                padding: '0.5rem',
                minWidth: '44px',
                minHeight: '44px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Editorial Menu Overlay (111W57 Style) */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'var(--bg-dark)',
            color: '#FAF8F5',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 'clamp(2rem, 6vh, 4rem) 1.5rem',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            maxHeight: '100dvh',
            animation: 'fadeIn 0.25s var(--ease-cinematic)'
          }}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            style={{
              position: 'fixed',
              top: '1.25rem',
              right: '1.25rem',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              color: '#FAF8F5',
              cursor: 'pointer',
              zIndex: 10000
            }}
          >
            <X size={22} />
          </button>

          <span
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(0.6875rem, 2.2vw, 0.8125rem)',
              letterSpacing: '0.28em',
              color: 'var(--accent-gold)',
              marginTop: '1.5rem',
              marginBottom: '2rem',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}
          >
            NAMO PROPERTY CONSULTANT • DIRECTORY
          </span>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'clamp(1rem, 2.5vh, 1.75rem)',
              width: '100%',
              maxWidth: '360px'
            }}
          >
            {navChapters.map((ch, idx) => (
              <a
                key={ch.label}
                href={ch.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(ch.href);
                }}
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: 'clamp(1.15rem, 4vw, 1.85rem)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#FAF8F5',
                  textDecoration: 'none',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '0.25rem 0',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF8F5')}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', marginRight: '0.65rem' }}>
                  0{idx + 1}.
                </span>
                {ch.label}
              </a>
            ))}
          </div>

          <div style={{ marginTop: 'clamp(2rem, 4vh, 3rem)', width: '100%', maxWidth: '340px', paddingBottom: '2rem' }}>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenInquire();
              }}
              className="btn-111-primary"
              style={{
                width: '100%',
                backgroundColor: 'var(--accent-gold)',
                color: '#121110',
                borderColor: 'var(--accent-gold)',
                padding: '1rem 1.5rem',
                fontSize: '0.6875rem'
              }}
            >
              Talk to a Property Consultant
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .hidden-mobile {
            display: none !important;
          }
          .mobile-trigger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
