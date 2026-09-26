import React from 'react';
import { TowerResidence, TOWER_RESIDENCES } from '../data/towerData';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TowerResidencesProps {
  onSelectResidence: (residence: TowerResidence) => void;
  onInquireResidence: (residence: TowerResidence) => void;
}

export const TowerResidences: React.FC<TowerResidencesProps> = ({
  onSelectResidence,
  onInquireResidence
}) => {
  return (
    <section
      id="properties"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-parchment)',
        borderBottom: '1px solid var(--hairline-light)'
      }}
    >
      {/* Legacy anchor fallback */}
      <div id="residences" style={{ position: 'absolute', top: '-60px' }} />

      <div className="container-editorial">
        {/* Chapter Header */}
        <div style={{ marginBottom: '5rem' }}>
          <ScrollReveal delay={0} distance={10}>
            <span className="chapter-number">IV. Featured Properties</span>
          </ScrollReveal>
          <ScrollReveal delay={80} distance={14}>
            <h2 style={{ maxWidth: '900px', color: 'var(--text-espresso)' }}>
              Residential & Commercial Properties.
              <br />
              <span style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontWeight: 300, color: 'var(--text-bronze)' }}>
                Carefully evaluated properties in Kandivali East and Mumbai.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160} distance={12}>
            <p style={{ maxWidth: '640px', marginTop: '1rem', fontSize: '1.05rem', color: 'var(--text-espresso)' }}>
              Assistance for buyers, sellers, and tenants seeking residential homes, rental spaces, and commercial real-estate opportunities.
            </p>
          </ScrollReveal>
        </div>

        {/* Large Editorial Features (Progressive Scroll Revealing) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3.5rem, 8vw, 7.5rem)' }}>
          {TOWER_RESIDENCES.map((res, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={res.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                  gap: 'clamp(2rem, 5vw, 5rem)',
                  alignItems: 'center'
                }}
              >
                {/* Image Stage with Soft Scale Settle */}
                <div style={{ order: isReversed ? 2 : 1 }}>
                  <ScrollReveal delay={60} distance={16} scale>
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: 'clamp(240px, 46vw, 640px)',
                        overflow: 'hidden',
                        backgroundColor: 'var(--bg-sandstone)',
                        boxShadow: 'var(--shadow-editorial)',
                        cursor: 'pointer'
                      }}
                      onClick={() => onSelectResidence(res)}
                      data-cursor="explore"
                    >
                      <img
                        src={res.imageHero}
                        alt={res.residenceNumber}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 1.2s var(--ease-cinematic)'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      />

                      {/* Location Badge */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '1rem',
                          left: '1rem',
                          backgroundColor: 'rgba(27, 25, 23, 0.9)',
                          color: '#FAF8F5',
                          padding: '0.4rem 0.75rem',
                          fontFamily: 'var(--font-title)',
                          fontSize: '0.625rem',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          maxWidth: 'calc(100% - 2rem)'
                        }}
                      >
                        {res.location || 'Kandivali East, Mumbai'}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Editorial Narrative & Specs */}
                <div style={{ order: isReversed ? 1 : 2, maxWidth: '540px' }}>
                  <ScrollReveal delay={100} distance={10}>
                    <span
                      style={{
                        fontFamily: 'var(--font-title)',
                        fontSize: '0.6875rem',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-gold)',
                        display: 'block',
                        marginBottom: '0.35rem'
                      }}
                    >
                      {res.type}
                    </span>

                    <h3
                      style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
                        color: 'var(--text-espresso)',
                        marginBottom: '0.65rem',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {res.residenceNumber}
                    </h3>
                  </ScrollReveal>

                  <ScrollReveal delay={160} distance={12}>
                    <p
                      style={{
                        fontFamily: 'var(--font-editorial)',
                        fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                        fontStyle: 'italic',
                        color: 'var(--text-espresso)',
                        lineHeight: 1.5,
                        marginBottom: '1.25rem'
                      }}
                    >
                      "{res.tagline}"
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={200} distance={12}>
                    <p style={{ lineHeight: 1.85, marginBottom: '1.5rem', color: 'var(--text-espresso)' }}>
                      {res.description}
                    </p>
                  </ScrollReveal>

                  {/* Specifications Grid */}
                  <ScrollReveal delay={240} distance={10}>
                    <div
                      style={{
                        borderTop: '1px solid var(--hairline-light)',
                        borderBottom: '1px solid var(--hairline-light)',
                        padding: '1rem 0',
                        marginBottom: '1.75rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 110px), 1fr))',
                        gap: '0.85rem'
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                          Configuration
                        </span>
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.95rem', color: 'var(--text-espresso)', marginTop: '0.15rem' }}>
                          {res.bedrooms > 0 ? `${res.bedrooms} BHK` : 'Commercial'}
                        </div>
                      </div>

                      <div>
                        <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                          Carpet Area
                        </span>
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.95rem', color: 'var(--text-espresso)', marginTop: '0.15rem' }}>
                          {res.interiorSqFt.toLocaleString()} SQ FT
                        </div>
                      </div>

                      <div>
                        <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                          Price / Terms
                        </span>
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.95rem', color: 'var(--text-espresso)', marginTop: '0.15rem', fontWeight: 600 }}>
                          {res.priceFormatted}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Action CTAs */}
                  <ScrollReveal delay={280} distance={8}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => onSelectResidence(res)}
                        className="btn-111-primary"
                        style={{ flex: '1 1 180px' }}
                      >
                        <span>Explore Property</span>
                        <ArrowUpRight size={14} />
                      </button>

                      <button
                        onClick={() => onInquireResidence(res)}
                        className="btn-111-secondary"
                        style={{ flex: '1 1 180px' }}
                      >
                        Inquire With Consultant
                      </button>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
