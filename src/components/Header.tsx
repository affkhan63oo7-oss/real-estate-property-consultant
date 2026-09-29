import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Shield, Menu, X } from 'lucide-react';
import { isSupabaseConfigured } from '../lib/supabase';

interface HeaderProps {
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenSchedule: () => void;
  onToggleAdmin: () => void;
  isAdminOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  favoritesCount,
  onOpenFavorites,
  onOpenSchedule,
  onToggleAdmin,
  isAdminOpen
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'Featured', href: '#featured' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Progress', href: '#progress' },
    { label: 'Floor Plans', href: '#floorplans' },
    { label: '3D Spatial', href: '#spatial' },
    { label: 'Heritage', href: '#heritage' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
          padding: isScrolled ? '1rem 0' : '1.75rem 0',
          backgroundColor: isScrolled ? 'rgba(250, 249, 246, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="container-luxury" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <a
            href="#"
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                fontWeight: 400,
                letterSpacing: '0.15em',
                color: isScrolled ? 'var(--text-primary)' : '#FFFFFF',
                textTransform: 'uppercase',
                transition: 'color 0.3s'
              }}
            >
              The Real Realty
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.25em',
                color: isScrolled ? 'var(--accent-bronze)' : '#C9A982',
                textTransform: 'uppercase'
              }}
            >
              • Bopal, Ahmedabad
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isScrolled ? 'var(--text-secondary)' : 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  position: 'relative',
                  padding: '0.25rem 0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = isScrolled ? 'var(--text-primary)' : '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isScrolled ? 'var(--text-secondary)' : 'rgba(255, 255, 255, 0.85)';
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Admin Portal Toggle */}
            <button
              onClick={onToggleAdmin}
              title="Admin & Database Portal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 0.85rem',
                background: isAdminOpen ? 'var(--accent-bronze)' : (isScrolled ? 'rgba(18, 19, 22, 0.05)' : 'rgba(255, 255, 255, 0.15)'),
                color: isAdminOpen ? '#FFFFFF' : (isScrolled ? 'var(--text-primary)' : '#FFFFFF'),
                border: '1px solid ' + (isScrolled ? 'var(--border-light)' : 'rgba(255, 255, 255, 0.25)'),
                borderRadius: '2px',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                transition: 'all 0.2s'
              }}
            >
              <Shield size={14} />
              <span className="hidden-mobile">Admin</span>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: isSupabaseConfigured ? '#10B981' : '#F59E0B'
                }}
                title={isSupabaseConfigured ? 'Connected to Supabase' : 'Local Vault Mode (Add Supabase Credentials)'}
              />
            </button>

            {/* Favorites Wishlist */}
            <button
              onClick={onOpenFavorites}
              title="Saved Properties"
              style={{
                position: 'relative',
                background: 'none',
                border: 'none',
                color: isScrolled ? 'var(--text-primary)' : '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem'
              }}
            >
              <Heart size={20} strokeWidth={1.75} fill={favoritesCount > 0 ? 'var(--accent-bronze)' : 'none'} color={favoritesCount > 0 ? 'var(--accent-bronze)' : (isScrolled ? 'var(--text-primary)' : '#FFFFFF')} />
              {favoritesCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    backgroundColor: 'var(--accent-bronze)',
                    color: '#FFFFFF',
                    fontSize: '10px',
                    fontWeight: 700,
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Schedule Visit Primary Button */}
            <button
              onClick={onOpenSchedule}
              className="btn-luxury-primary hidden-mobile"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '0.75rem',
                backgroundColor: isScrolled ? 'var(--text-primary)' : '#FFFFFF',
                color: isScrolled ? '#FFFFFF' : 'var(--text-primary)',
                borderColor: isScrolled ? 'var(--text-primary)' : '#FFFFFF'
              }}
            >
              <Calendar size={14} />
              <span>Schedule Visit</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                background: 'none',
                border: 'none',
                color: isScrolled ? 'var(--text-primary)' : '#FFFFFF',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'none'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'var(--bg-primary)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            padding: '2rem'
          }}
        >
          <div style={{ position: 'absolute', top: '2rem', right: '2rem' }}>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
            >
              <X size={28} />
            </button>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', textTransform: 'uppercase' }}>
              The Real Realty
            </span>
          </div>

          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                color: 'var(--text-primary)',
                textDecoration: 'none'
              }}
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSchedule();
            }}
            className="btn-luxury-primary"
            style={{ marginTop: '1rem', width: '100%', maxWidth: '300px' }}
          >
            <Calendar size={16} />
            <span>Schedule Private Visit</span>
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 991px) {
          .hidden-mobile {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};
