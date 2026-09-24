import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

interface TowerHeroProps {
  onExploreClick: () => void;
  onInquireClick: () => void;
}

export const TowerHero: React.FC<TowerHeroProps> = ({ onExploreClick, onInquireClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Subtle, restrained parallax (only within the hero viewport)
          if (window.scrollY < window.innerHeight) {
            setScrollY(window.scrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#121110'
      }}
    >
      {/* Background Architectural Canvas with Subtle Scroll-Linked Parallax */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(18, 17, 16, 0.35) 0%, rgba(18, 17, 16, 0.45) 50%, rgba(18, 17, 16, 0.9) 100%), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2600&q=90')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          transform: isLoaded
            ? `translate3d(0, ${scrollY * 0.18}px, 0) scale(1)`
            : 'translate3d(0, 0, 0) scale(1.06)',
          transition: isLoaded ? 'transform 0.15s ease-out' : 'transform 2.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s ease',
          opacity: isLoaded ? 1 : 0,
          willChange: 'transform, opacity'
        }}
      />

      {/* Atmospheric Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(18, 17, 16, 0.8) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Hero Typography & Content */}
      <div
        className="container-editorial"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '4rem'
        }}
      >
        {/* Roman Monogram Tag */}
        <span
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            color: 'var(--accent-gold)',
            marginBottom: '1.75rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 15px, 0)',
            transition: 'all 1s var(--ease-cinematic) 0.2s',
            willChange: 'opacity, transform'
          }}
        >
          • CXVII • NEW YORK •
        </span>

        {/* Monumental Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-title)',
            color: '#FAF8F5',
            lineHeight: 1.15,
            maxWidth: '1200px',
            marginBottom: '1.75rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)',
            transition: 'all 1.1s var(--ease-cinematic) 0.4s',
            willChange: 'opacity, transform'
          }}
        >
          117 WEST 57
        </h1>

        {/* Elegant Supporting Subhead */}
        <p
          style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: 'clamp(1.15rem, 2.2vw, 1.65rem)',
            fontStyle: 'italic',
            color: 'rgba(250, 248, 245, 0.85)',
            maxWidth: '720px',
            letterSpacing: '0.04em',
            lineHeight: 1.6,
            marginBottom: '3rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)',
            transition: 'all 1.1s var(--ease-cinematic) 0.6s',
            willChange: 'opacity, transform'
          }}
        >
          A soaring silhouette of fluted terra-cotta, cast bronze, and classical grandeur rising 1,428 feet above Central Park.
        </p>

        {/* Minimal CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
            transition: 'all 1.1s var(--ease-cinematic) 0.8s',
            willChange: 'opacity, transform'
          }}
        >
          <button
            onClick={onExploreClick}
            className="btn-111-primary"
            style={{
              backgroundColor: '#FAF8F5',
              color: '#1A1917',
              borderColor: '#FAF8F5',
              padding: '1.15rem 2.5rem'
            }}
          >
            Explore The Residences
          </button>

          <button
            onClick={onInquireClick}
            className="btn-111-secondary"
            style={{
              color: '#FAF8F5',
              borderColor: 'rgba(250, 248, 245, 0.35)',
              padding: '1.15rem 2.5rem'
            }}
          >
            Private Viewing Salon
          </button>
        </div>
      </div>

      {/* Minimal Scroll Cue */}
      <div
        onClick={onExploreClick}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          opacity: isLoaded ? 0.75 : 0,
          transition: 'opacity 1s ease 1s'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
      >
        <span
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '0.625rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#FAF8F5'
          }}
        >
          Scroll to Enter
        </span>
        <ArrowDown size={14} color="var(--accent-gold)" />
      </div>
    </section>
  );
};
