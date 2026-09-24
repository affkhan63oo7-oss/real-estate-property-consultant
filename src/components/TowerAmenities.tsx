import React, { useState } from 'react';
import { AMENITIES_SUITE } from '../data/towerData';

export const TowerAmenities: React.FC = () => {
  const [activeAmenityIndex, setActiveAmenityIndex] = useState(0);
  const active = AMENITIES_SUITE[activeAmenityIndex];

  return (
    <section
      id="amenities"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-parchment)',
        borderBottom: '1px solid var(--hairline-light)'
      }}
    >
      <div className="container-editorial">
        {/* Chapter Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <span className="chapter-number">VI. Amenities & Wellness</span>
          <h2 style={{ maxWidth: '900px', color: 'var(--text-espresso)' }}>
            Sanctuaries of Quietude.
          </h2>
          <p style={{ maxWidth: '640px', marginTop: '0.75rem', fontSize: '1.05rem' }}>
            Over 20,000 square feet of private residential amenities designed to serve as personal extensions of the home.
          </p>
        </div>

        {/* Interactive Master Suite Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left: Amenity Titles Menu */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {AMENITIES_SUITE.map((item, idx) => {
              const isSelected = activeAmenityIndex === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveAmenityIndex(idx)}
                  onMouseEnter={() => setActiveAmenityIndex(idx)}
                  style={{
                    padding: '1.5rem',
                    backgroundColor: isSelected ? 'var(--bg-limestone)' : 'transparent',
                    borderLeft: `2px solid ${isSelected ? 'var(--accent-gold)' : 'transparent'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s var(--ease-cinematic)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-title)',
                        fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
                        color: isSelected ? 'var(--text-espresso)' : 'var(--text-muted)',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {item.title}
                    </h3>
                    <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', color: 'var(--accent-gold)', letterSpacing: '0.15em' }}>
                      0{idx + 1}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-title)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: isSelected ? 'var(--text-bronze)' : 'transparent',
                      display: 'block',
                      marginTop: '0.35rem'
                    }}
                  >
                    {item.dimensions}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Large Editorial Stage */}
          <div
            style={{
              position: 'relative',
              backgroundColor: 'var(--bg-sandstone)',
              boxShadow: 'var(--shadow-editorial)',
              overflow: 'hidden'
            }}
          >
            <div style={{ height: 'clamp(440px, 55vh, 620px)', position: 'relative' }}>
              <img
                key={active.id}
                src={active.image}
                alt={active.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  animation: 'fadeIn 0.7s var(--ease-cinematic)'
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(27, 25, 23, 0.9) 0%, rgba(27, 25, 23, 0.1) 60%, transparent 100%)'
                }}
              />

              {/* Bottom Caption Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  padding: '2.5rem',
                  color: '#FAF8F5'
                }}
              >
                <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  {active.material}
                </span>
                <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.65rem', margin: '0.25rem 0 0.5rem 0', color: '#FAF8F5' }}>
                  {active.title}
                </h4>
                <p style={{ color: 'rgba(250, 248, 245, 0.85)', fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '520px' }}>
                  {active.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
