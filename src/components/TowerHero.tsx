import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

interface TowerHeroProps {
  onExploreClick: () => void;
  onInquireClick: () => void;
}

interface HeroSlide {
  url: string;
  alt: string;
  position?: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    url: '/images/hero/hero-1.jpg',
    alt: 'Mumbai Skyline and Residential Horizon',
    position: 'center center'
  },
  {
    url: '/images/hero/hero-2.jpg',
    alt: 'Curated Residential Enclave and Landscape',
    position: 'center 45%'
  },
  {
    url: '/images/hero/hero-3.jpg',
    alt: 'Contemporary Residential Courtyard and Architecture',
    position: 'center 45%'
  },
  {
    url: '/images/hero/hero-4.jpg',
    alt: 'Premium Living Salon and Balcony Vista',
    position: 'center center'
  },
  {
    url: '/images/hero/hero-5.jpg',
    alt: 'Manicured Grounds and Community Living',
    position: 'center 40%'
  }
];

export const TowerHero: React.FC<TowerHeroProps> = ({ onExploreClick, onInquireClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);

    // Preload all slides immediately and decode them for instant, flicker-free rendering
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.url;
      if (img.decode) {
        img.decode().catch(() => {});
      }
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Fast, smooth, dynamic slide progression (3.5s visibility + 0.75s crossfade)
    let transitionTimer: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        setPreviousSlide(prev);
        // Clear previous slide once incoming crossfade transition finishes (750ms)
        transitionTimer = setTimeout(() => {
          setPreviousSlide(null);
        }, 800);
        return (prev + 1) % HERO_SLIDES.length;
      });
    }, 3500);

    if (prefersReducedMotion) {
      return () => {
        clearInterval(interval);
        clearTimeout(transitionTimer);
      };
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Restrained, lag-free parallax strictly within the hero viewport
          if (window.scrollY < window.innerHeight) {
            setScrollY(window.scrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearInterval(interval);
      clearTimeout(transitionTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#121110',
        paddingTop: 'clamp(5rem, 11vh, 8rem)',
        paddingBottom: 'clamp(3.5rem, 8vh, 5.5rem)'
      }}
    >
      {/* Background Slideshow Canvas: completely locked, rock-solid positioning with zero layout shift */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
          transform: scrollY > 0 ? `translate3d(0, ${scrollY * 0.15}px, 0)` : 'translate3d(0, 0, 0)',
          willChange: 'transform'
        }}
      >
        {HERO_SLIDES.map((slide, index) => {
          const isCurrent = index === currentSlide;
          const isPrev = index === previousSlide;

          let opacity = 0;
          let zIndex = 0;

          if (isCurrent) {
            opacity = 1;
            zIndex = 2;
          } else if (isPrev) {
            opacity = 1;
            zIndex = 1;
          }

          return (
            <div
              key={slide.url}
              aria-hidden={!isCurrent}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity,
                zIndex,
                transition: isCurrent && previousSlide !== null
                  ? 'opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1)'
                  : 'none',
                overflow: 'hidden',
                pointerEvents: 'none',
                willChange: 'opacity',
                transform: 'translateZ(0)'
              }}
            >
              <img
                src={slide.url}
                alt={slide.alt}
                loading="eager"
                decoding="async"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: slide.position || 'center center',
                  display: 'block',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Cinematic Multi-Stop Dark Gradient Overlay for Crisp Contrast & Atmospheric Luxury */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(18, 17, 16, 0.52) 0%, rgba(18, 17, 16, 0.4) 40%, rgba(18, 17, 16, 0.94) 100%)',
          pointerEvents: 'none',
          zIndex: 3
        }}
      />

      {/* Atmospheric Radial Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 45%, transparent 35%, rgba(18, 17, 16, 0.78) 100%)',
          pointerEvents: 'none',
          zIndex: 4
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
          width: '100%'
        }}
      >
        {/* Roman Monogram Tag */}
        <span
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: 'clamp(0.625rem, 1.8vw, 0.6875rem)',
            fontWeight: 600,
            letterSpacing: 'clamp(0.25em, 1.5vw, 0.45em)',
            textTransform: 'uppercase',
            color: 'var(--accent-gold)',
            marginBottom: 'clamp(1rem, 2.5vh, 1.75rem)',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 15px, 0)',
            transition: 'all 1s var(--ease-cinematic) 0.2s',
            willChange: 'opacity, transform'
          }}
        >
          • HINJAWADI • PUNE •
        </span>

        {/* Monumental Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-title)',
            color: '#FAF8F5',
            lineHeight: 1.15,
            maxWidth: '1200px',
            fontSize: 'clamp(1.85rem, 5.5vw, 4.8rem)',
            letterSpacing: 'clamp(0.06em, 1.5vw, 0.15em)',
            marginBottom: 'clamp(1rem, 2.5vh, 1.75rem)',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)',
            transition: 'all 1.1s var(--ease-cinematic) 0.4s',
            willChange: 'opacity, transform'
          }}
        >
          FUTURE CONSTRUCTION
        </h1>

        {/* Elegant Supporting Subhead */}
        <p
          style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: 'clamp(0.95rem, 2.2vw, 1.55rem)',
            fontStyle: 'italic',
            color: 'rgba(250, 248, 245, 0.88)',
            maxWidth: '820px',
            letterSpacing: '0.03em',
            lineHeight: 1.6,
            marginBottom: 'clamp(1.75rem, 4vh, 3rem)',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)',
            transition: 'all 1.1s var(--ease-cinematic) 0.6s',
            willChange: 'opacity, transform'
          }}
        >
          Real Estate Developer & Property Developer in Hinjawadi, Pune. Residential land & plots, commercial plots, residential & commercial properties, and land development across Pune, Marunji, Hinjawadi, and Narhe.
        </p>

        {/* Direct Action-Focused CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(0.75rem, 1.5vw, 1.1rem)',
            width: '100%',
            maxWidth: '780px',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
            transition: 'all 1.1s var(--ease-cinematic) 0.8s',
            willChange: 'opacity, transform'
          }}
        >
          {/* Primary CTA */}
          <button
            onClick={onInquireClick}
            className="btn-111-primary"
            style={{
              backgroundColor: '#FAF8F5',
              color: '#1A1917',
              borderColor: '#FAF8F5',
              padding: 'clamp(0.85rem, 2vw, 1.1rem) clamp(1.6rem, 3vw, 2.25rem)',
              flex: '1 1 200px',
              maxWidth: '260px'
            }}
          >
            Enquire Now
          </button>

          {/* Secondary CTA: Call Now */}
          <a
            href="tel:+917210320001"
            className="btn-111-secondary"
            style={{
              color: '#FAF8F5',
              borderColor: 'rgba(250, 248, 245, 0.5)',
              backgroundColor: 'rgba(18, 17, 16, 0.4)',
              backdropFilter: 'blur(8px)',
              padding: 'clamp(0.85rem, 2vw, 1.1rem) clamp(1.4rem, 2.5vw, 2rem)',
              flex: '1 1 180px',
              maxWidth: '230px',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Call Now
          </a>

          {/* Direct CTA: WhatsApp Us */}
          <a
            href="https://wa.me/917210320001?text=Hello%20Future%20Construction%2C%20I%20am%20inquiring%20about%20your%20properties%20and%20plots."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-111-secondary"
            style={{
              color: 'var(--accent-gold)',
              borderColor: 'var(--accent-gold)',
              backgroundColor: 'rgba(197, 160, 89, 0.08)',
              backdropFilter: 'blur(8px)',
              padding: 'clamp(0.85rem, 2vw, 1.1rem) clamp(1.4rem, 2.5vw, 2rem)',
              flex: '1 1 180px',
              maxWidth: '230px',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Minimal Scroll Cue */}
      <div
        onClick={onExploreClick}
        style={{
          position: 'absolute',
          bottom: 'clamp(1rem, 2.5vh, 2.5rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
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

