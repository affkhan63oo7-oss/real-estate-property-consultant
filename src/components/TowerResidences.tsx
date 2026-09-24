import React from 'react';
import { TowerResidence, TOWER_RESIDENCES } from '../data/towerData';
import { ArrowUpRight } from 'lucide-react';

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
      id="residences"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-parchment)',
        borderBottom: '1px solid var(--hairline-light)'
      }}
    >
      <div className="container-editorial">
        {/* Chapter Header */}
        <div style={{ marginBottom: '5rem' }}>
          <span className="chapter-number">III. The Residences</span>
          <h2 style={{ maxWidth: '900px', color: 'var(--text-espresso)' }}>
            Full-Floor Grandeur.
            <br />
            <span style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontWeight: 300, color: 'var(--text-bronze)' }}>
              Centuries of decorative mastery, suspended in the sky.
            </span>
          </h2>
          <p style={{ maxWidth: '640px', marginTop: '1rem', fontSize: '1.05rem' }}>
            A limited collection of sovereign residences, each occupying a full or multi-level floor plate with private high-speed elevator vestibules and perfectly centered Central Park vistas.
          </p>
        </div>

        {/* Large Editorial Features (No generic cards!) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {TOWER_RESIDENCES.map((res, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={res.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  gap: 'clamp(2.5rem, 6vw, 6rem)',
                  alignItems: 'center'
                }}
              >
                {/* Image Stage */}
                <div
                  style={{
                    order: isReversed ? 2 : 1,
                    position: 'relative',
                    width: '100%',
                    height: 'clamp(440px, 58vh, 680px)',
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
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Minimal Floor Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      left: '1.5rem',
                      backgroundColor: 'rgba(27, 25, 23, 0.9)',
                      color: '#FAF8F5',
                      padding: '0.4rem 0.85rem',
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.625rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Floor {res.floor} • {res.ceilingHeight} Ceilings
                  </div>
                </div>

                {/* Editorial Narrative & Specs */}
                <div style={{ order: isReversed ? 1 : 2, maxWidth: '540px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {res.type}
                  </span>

                  <h3
                    style={{
                      fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                      color: 'var(--text-espresso)',
                      marginBottom: '0.75rem',
                      letterSpacing: '0.08em'
                    }}
                  >
                    {res.residenceNumber}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-editorial)',
                      fontSize: '1.25rem',
                      fontStyle: 'italic',
                      color: 'var(--text-espresso)',
                      lineHeight: 1.5,
                      marginBottom: '1.5rem'
                    }}
                  >
                    "{res.tagline}"
                  </p>

                  <p style={{ lineHeight: 1.9, marginBottom: '2rem' }}>
                    {res.description}
                  </p>

                  {/* Specifications Grid */}
                  <div
                    style={{
                      borderTop: '1px solid var(--hairline-light)',
                      borderBottom: '1px solid var(--hairline-light)',
                      padding: '1.25rem 0',
                      marginBottom: '2rem',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '1rem'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                        Bedrooms
                      </span>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                        {res.bedrooms} Ensuite
                      </div>
                    </div>

                    <div>
                      <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                        Interior
                      </span>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                        {res.interiorSqFt.toLocaleString()} SQ FT
                      </div>
                    </div>

                    <div>
                      <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                        Acquisition
                      </span>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', color: 'var(--text-espresso)', marginTop: '0.2rem', fontWeight: 600 }}>
                        {res.priceFormatted}
                      </div>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => onSelectResidence(res)}
                      className="btn-111-primary"
                    >
                      <span>Explore Dossier</span>
                      <ArrowUpRight size={14} />
                    </button>

                    <button
                      onClick={() => onInquireResidence(res)}
                      className="btn-111-secondary"
                    >
                      Private Viewing
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
