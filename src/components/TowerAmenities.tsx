import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/towerData';
import { ScrollReveal } from './ScrollReveal';
import { Check } from 'lucide-react';

export const TowerAmenities: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const active = SERVICES_DATA[activeServiceIndex] || SERVICES_DATA[0];

  return (
    <section
      id="services"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-parchment)',
        borderBottom: '1px solid var(--hairline-light)'
      }}
    >
      {/* Legacy anchor fallback */}
      <div id="amenities" style={{ position: 'absolute', top: '-60px' }} />

      <div className="container-editorial">
        {/* Chapter Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <ScrollReveal delay={0} distance={10}>
            <span className="chapter-number">III. Services & Expertise</span>
          </ScrollReveal>
          <ScrollReveal delay={80} distance={14}>
            <h2 style={{ maxWidth: '900px', color: 'var(--text-espresso)' }}>
              Comprehensive Property Services.
            </h2>
            <p style={{ maxWidth: '640px', marginTop: '0.75rem', fontSize: '1.05rem', color: 'var(--text-bronze)' }}>
              Personalised real-estate assistance and professional property guidance across residential and commercial sectors in Mumbai.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Master Services Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left: Service Titles Menu */}
          <ScrollReveal delay={100} distance={12}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {SERVICES_DATA.map((item, idx) => {
                const isSelected = activeServiceIndex === idx;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveServiceIndex(idx)}
                    onMouseEnter={() => setActiveServiceIndex(idx)}
                    role="button"
                    tabIndex={0}
                    style={{
                      padding: 'clamp(0.85rem, 2vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)',
                      backgroundColor: isSelected ? 'var(--bg-limestone)' : 'transparent',
                      borderLeft: `2px solid ${isSelected ? 'var(--accent-gold)' : 'transparent'}`,
                      cursor: 'pointer',
                      transition: 'all 0.35s var(--ease-cinematic)',
                      minHeight: '44px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.5rem' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-title)',
                          fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)',
                          color: isSelected ? 'var(--text-espresso)' : 'var(--text-muted)',
                          letterSpacing: '0.06em'
                        }}
                      >
                        {item.title}
                      </h3>
                      <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', color: 'var(--accent-gold)', letterSpacing: '0.15em', flexShrink: 0 }}>
                        0{idx + 1}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-title)',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: isSelected ? 'var(--text-bronze)' : 'transparent',
                        display: 'block',
                        marginTop: '0.2rem'
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right: Large Editorial Stage */}
          <ScrollReveal delay={160} distance={16} scale>
            <div
              style={{
                position: 'relative',
                backgroundColor: 'var(--bg-sandstone)',
                boxShadow: 'var(--shadow-editorial)',
                overflow: 'hidden'
              }}
            >
              <div style={{ height: 'clamp(340px, 48vw, 640px)', position: 'relative' }}>
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
                    background: 'linear-gradient(to top, rgba(27, 25, 23, 0.94) 0%, rgba(27, 25, 23, 0.3) 55%, transparent 100%)'
                  }}
                />

                {/* Bottom Caption Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: 'clamp(1.25rem, 4vw, 2.25rem)',
                    color: '#FAF8F5'
                  }}
                >
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.22em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                    {active.subtitle}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', margin: '0.2rem 0 0.45rem 0', color: '#FAF8F5' }}>
                    {active.title}
                  </h4>
                  <p style={{ color: 'rgba(250, 248, 245, 0.9)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '540px', marginBottom: '0.85rem' }}>
                    {active.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {active.featurePoints.slice(0, 3).map((fp, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'rgba(250, 248, 245, 0.8)' }}>
                        <Check size={12} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                        <span>{fp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
