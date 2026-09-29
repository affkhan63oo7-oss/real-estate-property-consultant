import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const TowerManifesto: React.FC = () => {
  return (
    <section
      id="about"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-parchment)',
        borderBottom: '1px solid var(--hairline-light)'
      }}
    >
      {/* Anchor fallback for legacy chapter navigation */}
      <div id="landmark" style={{ position: 'absolute', top: '-60px' }} />

      <div className="container-editorial">
        {/* Chapter Header with Staggered Reveal */}
        <div style={{ marginBottom: '4rem' }}>
          <ScrollReveal delay={0} distance={10}>
            <span className="chapter-number">I. About The Consultancy</span>
          </ScrollReveal>
          <ScrollReveal delay={80} distance={14}>
            <h2 style={{ maxWidth: '900px', color: 'var(--text-espresso)' }}>
              Practical Property Guidance.
              <br />
              <span style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontWeight: 300, color: 'var(--text-bronze)' }}>
                Personalised property consultation built on local Ahmedabad market insight.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Asymmetrical Editorial Composition: Tall Portrait Image Left, Single Column Text Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left: Slender Vertical Image Crop */}
          <ScrollReveal delay={120} distance={16} scale>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(280px, 48vw, 680px)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-sandstone)',
                boxShadow: 'var(--shadow-editorial)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85"
                alt="South Bopal Real Estate Kishor Udhas South Bopal Ahmedabad"
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
                  bottom: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(27, 25, 23, 0.88)',
                  color: '#FAF8F5',
                  padding: '0.4rem 0.75rem',
                  fontSize: '0.625rem',
                  fontFamily: 'var(--font-title)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  maxWidth: 'calc(100% - 2rem)'
                }}
              >
                South Bopal Real Estate • South Bopal, Ahmedabad
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Generous Whitespace & Staggered Editorial Narrative */}
          <div style={{ maxWidth: '540px' }}>
            <ScrollReveal delay={160} distance={12}>
              <p
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                  lineHeight: 1.55,
                  color: 'var(--text-espresso)',
                  fontStyle: 'italic',
                  marginBottom: '1.5rem'
                }}
              >
                "Navigating South Bopal and Ahmedabad’s property market requires practical guidance, transparent communication, and dedicated consultation led by Kishor Udhas."
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} distance={12}>
              <p style={{ marginBottom: '1.25rem', lineHeight: 1.85 }}>
                South Bopal Real Estate is a premier real estate agency and property consultant led by Kishor Udhas, based at D 382, SOBO Centre, South Bopal, Ahmedabad, Gujarat – 380058. We specialize in Property Buying, Property Selling, Property Renting, Residential Properties, Bungalows / Villas, and Property Consultation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240} distance={12}>
              <p style={{ marginBottom: '2rem', lineHeight: 1.85 }}>
                We guide clients through Property Buying, Property Selling, Property Renting, Residential Properties, Bungalows / Villas, and Property Consultation. Our approach centers on practical property assistance, local market understanding, and clear communication from your first inquiry to the final transaction.
              </p>
            </ScrollReveal>

            {/* Qualitative Trust Metrics Table (No unverified numbers) */}
            <ScrollReveal delay={280} distance={10}>
              <div
                style={{
                  borderTop: '1px solid var(--hairline-light)',
                  paddingTop: '1.5rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 130px), 1fr))',
                  gap: 'clamp(1rem, 2.5vw, 1.5rem)'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.18em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Guidance
                  </span>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                    Personalised
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.15rem' }}>
                    Tailored to your goals
                  </span>
                </div>

                <div>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.18em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Assistance
                  </span>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                    End-to-End
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.15rem' }}>
                    Enquiry to decision
                  </span>
                </div>

                <div>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.18em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Location
                  </span>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                    Ahmedabad
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.15rem' }}>
                    Bopal, South Bopal & Shela
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
