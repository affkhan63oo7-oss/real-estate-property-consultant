import React, { useState } from 'react';
import { AMENITIES_DATA } from '../data/mockData';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const AmenitiesStory: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAmenity = AMENITIES_DATA[activeIndex];

  return (
    <section
      id="amenities"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-luxury">
        {/* Section Label */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#C9A982',
              display: 'block',
              marginBottom: '0.75rem'
            }}
          >
            04 / Bespoke Living
          </span>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#FFFFFF' }}>
            Signature Amenities
          </h2>
          <p style={{ maxWidth: '600px', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.5rem' }}>
            Designed not as superfluous additions, but as transformative sanctuaries for somatic restoration and quiet contemplation.
          </p>
        </div>

        {/* Interactive Storytelling Layout: Left Selector, Right Immersive Canvas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginTop: '3.5rem'
          }}
        >
          {/* Left: Amenity Titles Menu */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {AMENITIES_DATA.map((amenity, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={amenity.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  style={{
                    padding: '1.5rem',
                    borderLeft: `2px solid ${isActive ? '#C9A982' : 'rgba(255, 255, 255, 0.12)'}`,
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                        color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.45)',
                        fontWeight: isActive ? 400 : 300,
                        transition: 'color 0.3s'
                      }}
                    >
                      {amenity.title}
                    </h3>
                    {isActive && <Sparkles size={16} color="#C9A982" />}
                  </div>
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      color: isActive ? '#C9A982' : 'rgba(255, 255, 255, 0.35)',
                      display: 'block',
                      marginTop: '0.25rem',
                      fontStyle: 'italic'
                    }}
                  >
                    {amenity.subtitle}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Large Atmospheric Visual & Specifications */}
          <div
            style={{
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              backgroundColor: '#151619',
              minHeight: '480px',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}
          >
            {/* Background Image with Fade Transition */}
            <img
              key={activeAmenity.id}
              src={activeAmenity.image}
              alt={activeAmenity.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                animation: 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />

            {/* Gradient Dark Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(13, 14, 16, 0.95) 0%, rgba(13, 14, 16, 0.4) 60%, transparent 100%)'
              }}
            />

            {/* Content Card Overlay */}
            <div
              key={`text-${activeAmenity.id}`}
              style={{
                position: 'relative',
                zIndex: 2,
                padding: 'clamp(2rem, 4vw, 3rem)',
                animation: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  color: '#FFFFFF',
                  marginBottom: '0.75rem'
                }}
              >
                {activeAmenity.title}
              </h3>
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.8,
                  marginBottom: '1.75rem',
                  maxWidth: '560px'
                }}
              >
                {activeAmenity.description}
              </p>

              {/* Technical Specifications Pills */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  paddingTop: '1.25rem'
                }}
              >
                {activeAmenity.specs.map((spec) => (
                  <div key={spec} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={14} color="#C9A982" />
                    <span style={{ fontSize: '0.8125rem', color: '#EDE8DF' }}>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
