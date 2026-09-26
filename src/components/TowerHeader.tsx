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
          padding: isScrolled ? '1.25rem 0' : '2.25rem 0',
          backgroundColor: isScrolled ? 'rgba(244, 241, 234, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--hairline-light)' : '1px solid transparent',
          transition: 'all 0.4s var(--ease-cinematic)'
        }}
      >
        <div
          className="container-editorial"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Brand Wordmark */}
          <a
            href="#"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.85rem'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.15rem',
                letterSpacing: '0.2em',
                color: isScrolled ? 'var(--text-espresso)' : '#FAF8F5',
                textTransform: 'uppercase',
                transition: 'color 0.3s'
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
                textTransform: 'uppercase'
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

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-trigger"
              style={{
                background: 'none',
                border: 'none',
                color: isScrolled ? 'var(--text-espresso)' : '#FAF8F5',
                cursor: 'pointer',
                padding: '0.25rem',
                display: 'none'
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
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2.5rem',
            animation: 'fadeIn 0.35s var(--ease-cinematic)'
          }}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'none',
              border: 'none',
              color: '#FAF8F5',
              cursor: 'pointer'
            }}
          >
            <X size={30} />
          </button>

          <span
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '0.8125rem',
              letterSpacing: '0.35em',
              color: 'var(--accent-gold)',
              marginBottom: '2rem',
              textTransform: 'uppercase'
            }}
          >
            NAMO PROPERTY CONSULTANT • DIRECTORY
          </span>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.75rem'
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
                  fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#FAF8F5',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF8F5')}
              >
                <span style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', marginRight: '0.75rem' }}>
                  0{idx + 1}.
                </span>
                {ch.label}
              </a>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenInquire();
              }}
              className="btn-111-primary"
              style={{
                backgroundColor: 'var(--accent-gold)',
                color: '#121110',
                borderColor: 'var(--accent-gold)',
                padding: '1rem 2.5rem'
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
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};
