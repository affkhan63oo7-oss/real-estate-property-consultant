import React from 'react';

export const TowerArchitecture: React.FC = () => {
  return (
    <section
      id="architecture"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-limestone)',
        borderBottom: '1px solid var(--hairline-light)'
      }}
    >
      <div className="container-editorial">
        {/* Chapter Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <span className="chapter-number">II. Architecture & Craft</span>
          <h2 style={{ maxWidth: '950px', color: 'var(--text-espresso)' }}>
            The Material Truth of Terra-Cotta & Bronze.
          </h2>
          <p style={{ maxWidth: '650px', marginTop: '0.75rem', fontSize: '1.05rem' }}>
            A triumph of decorative handcraft and robotic fabrication, marrying 26 distinct terra-cotta profiles with filigreed architectural bronze.
          </p>
        </div>

        {/* 2-Column Asymmetric Craft Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'start',
            marginBottom: '6rem'
          }}
        >
          {/* Material 1: Fluted Glazed Terra-Cotta */}
          <div>
            <div style={{ height: '460px', overflow: 'hidden', marginBottom: '1.75rem', backgroundColor: 'var(--bg-sandstone)' }}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Undulating Terra-Cotta Facade"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
              Material 01 • The Ceramic Envelope
            </span>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-espresso)', marginTop: '0.35rem', marginBottom: '0.75rem' }}>
              Fluted Terra-Cotta Pilasters
            </h3>
            <p style={{ lineHeight: 1.85 }}>
              Manufactured in Germany by artisanal ceramicists using centuries-old clay slip casting, each tile is glazed in warm alabaster with subtle golden undertones. As the sun traverses the southern sky, the facade ripples with dynamic play of light and deep shadow.
            </p>
          </div>

          {/* Material 2: Pierced Cast Bronze Filigree */}
          <div style={{ marginTop: 'clamp(0rem, 4vw, 4rem)' }}>
            <div style={{ height: '460px', overflow: 'hidden', marginBottom: '1.75rem', backgroundColor: 'var(--bg-sandstone)' }}>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
                alt="Pierced Cast Bronze Filigree"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
              Material 02 • Metallurgic Lyricism
            </span>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-espresso)', marginTop: '0.35rem', marginBottom: '0.75rem' }}>
              Cast Architectural Bronze
            </h3>
            <p style={{ lineHeight: 1.85 }}>
              Hand-chased cast bronze mullions and decorative filigree panels frame the acoustic curtain walls. Finished with an organic living patina, the metal deepens with exposure to the coastal air, gaining richness and nobility over generations.
            </p>
          </div>
        </div>

        {/* Full-Bleed Architectural Detail Quote Banner */}
        <div
          style={{
            borderTop: '1px solid var(--hairline-light)',
            borderBottom: '1px solid var(--hairline-light)',
            padding: '4rem 0',
            textAlign: 'center'
          }}
        >
          <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '1rem' }}>
            Engineering Feat
          </span>
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
              color: 'var(--text-espresso)',
              fontStyle: 'italic',
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: 1.4
            }}
          >
            "A structural monument crafted with the delicacy of a musical instrument—soaring toward the clouds in absolute proportion."
          </p>
        </div>
      </div>
    </section>
  );
};
