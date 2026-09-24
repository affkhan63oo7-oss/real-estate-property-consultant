import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onScheduleClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onScheduleClick }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Subtle parallax movement based on normalized cursor position (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#0A0B0D'
      }}
    >
      {/* Background Architectural Canvas with Subtle Mouse Shift */}
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          left: '-5%',
          width: '110%',
          height: '110%',
          backgroundImage: `linear-gradient(to bottom, rgba(10, 11, 13, 0.45) 0%, rgba(10, 11, 13, 0.6) 60%, rgba(10, 11, 13, 0.95) 100%), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=90')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0) scale(${isLoaded ? 1 : 1.05})`,
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.4s ease-out',
          opacity: isLoaded ? 1 : 0
        }}
      />

      {/* Atmospheric Vignette & Grid Texture Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(10, 11, 13, 0.75) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Hero Content Container */}
      <div
        className="container-luxury"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: '6rem',
          paddingBottom: '5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        {/* Curated Subtitle / Category Label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '100px',
            marginBottom: '2rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
          }}
        >
          <Compass size={14} color="#C9A982" />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#EDE8DF'
            }}
          >
            Monumental Living • 2026 Portfolio
          </span>
        </div>

        {/* Master Line-By-Line Cinematic Headline */}
        <h1
          style={{
            color: '#FFFFFF',
            lineHeight: 1.05,
            maxWidth: '1200px',
            marginBottom: '1.75rem',
            fontWeight: 300,
            letterSpacing: '0.02em',
            overflow: 'hidden'
          }}
        >
          <span
            style={{
              display: 'block',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
            }}
          >
            WHERE
          </span>
          <span
            style={{
              display: 'block',
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              color: '#F4ECE1',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s'
            }}
          >
            ARCHITECTURE
          </span>
          <span
            style={{
              display: 'block',
              transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
            }}
          >
            MEETS LIFE.
          </span>
        </h1>

        {/* Supporting Editorial Statement */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            fontWeight: 300,
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '680px',
            lineHeight: 1.8,
            marginBottom: '3rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(25px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.75s'
          }}
        >
          Discover limited-edition residential sanctuaries sculpted in dialogue with raw topography, crystalline alpine light, and ocean depths.
        </p>

        {/* Hero Magnetic CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(25px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.9s'
          }}
        >
          <button
            onClick={onExploreClick}
            className="btn-luxury-primary"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#121316',
              borderColor: '#FFFFFF',
              padding: '1.15rem 2.5rem',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)'
            }}
          >
            <span>Explore Properties</span>
            <ArrowUpRight size={16} />
          </button>

          <button
            onClick={onScheduleClick}
            className="btn-luxury-secondary"
            style={{
              color: '#FFFFFF',
              borderColor: 'rgba(255, 255, 255, 0.35)',
              padding: '1.15rem 2.5rem'
            }}
          >
            <span>Schedule A Visit</span>
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div
        onClick={onExploreClick}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          opacity: isLoaded ? 0.75 : 0,
          transition: 'opacity 1s ease 1.1s'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
      >
        <span
          style={{
            fontSize: '0.625rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#FFFFFF'
          }}
        >
          Scroll To Discover
        </span>
        <div
          style={{
            animation: 'pulseSubtle 2s infinite ease-in-out',
            color: '#C9A982'
          }}
        >
          <ArrowDown size={18} />
        </div>
      </div>
    </section>
  );
};
