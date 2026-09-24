import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const TowerManifesto: React.FC = () => {
  return (
    <section
      id="landmark"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-parchment)',
        borderBottom: '1px solid var(--hairline-light)'
      }}
    >
      <div className="container-editorial">
        {/* Chapter Header with Staggered Reveal */}
        <div style={{ marginBottom: '4rem' }}>
          <ScrollReveal delay={0} distance={10}>
            <span className="chapter-number">I. The Landmark</span>
          </ScrollReveal>
          <ScrollReveal delay={80} distance={14}>
            <h2 style={{ maxWidth: '900px', color: 'var(--text-espresso)' }}>
              The Golden Age Reimagined.
              <br />
              <span style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontWeight: 300, color: 'var(--text-bronze)' }}>
                A silhouette born of proportion and discipline.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Asymmetrical Editorial Composition: Tall Portrait Image Left, Single Column Text Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 6rem)',
            alignItems: 'center'
          }}
        >
          {/* Left: Slender Vertical Tower Crop with Soft Scale Settle */}
          <ScrollReveal delay={120} distance={16} scale>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(480px, 65vh, 760px)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-sandstone)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85"
                alt="117 West 57th Street Slender Elevation"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.05)'
                }}
              />
              {/* Caption */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  backgroundColor: 'rgba(27, 25, 23, 0.85)',
                  color: '#FAF8F5',
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.625rem',
                  fontFamily: 'var(--font-title)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase'
                }}
              >
                Elevation • 1,428 FT • Billionaires' Row
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Generous Whitespace & Staggered Editorial Narrative */}
          <div style={{ maxWidth: '540px' }}>
            <ScrollReveal delay={160} distance={12}>
              <p
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                  lineHeight: 1.6,
                  color: 'var(--text-espresso)',
                  fontStyle: 'italic',
                  marginBottom: '2rem'
                }}
              >
                "We sought not merely to construct another glass monolith, but to craft a timeless architectural sculpture that honors the lyricism of Manhattan’s greatest pre-war masterpieces."
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} distance={12}>
              <p style={{ marginBottom: '1.5rem', lineHeight: 1.9 }}>
                Rising on the fabled corridor of West 57th Street, 117 West 57th Street achieves a dramatic aspect ratio of 1:24. Its stepped eastern and western profiles taper gracefully toward a soaring feathered crown, creating an ethereal presence that changes character with every hour of the day.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240} distance={12}>
              <p style={{ marginBottom: '2.5rem', lineHeight: 1.9 }}>
                Every structural decision—from the 800-ton tuned mass damper suspended invisibly at the crown to the massive shear walls enveloped in custom-glazed terra-cotta—was calculated to grant residents an unprecedented sanctuary of complete acoustic stillness directly above the beating heart of Manhattan.
              </p>
            </ScrollReveal>

            {/* Architectural Vital Statistics Table */}
            <ScrollReveal delay={280} distance={10}>
              <div
                style={{
                  borderTop: '1px solid var(--hairline-light)',
                  paddingTop: '1.75rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1.5rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Height
                  </span>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--text-espresso)', marginTop: '0.25rem' }}>
                    1,428 FT
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Storeys
                  </span>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--text-espresso)', marginTop: '0.25rem' }}>
                    84 Levels
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Aspect Ratio
                  </span>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--text-espresso)', marginTop: '0.25rem' }}>
                    1 : 24
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
