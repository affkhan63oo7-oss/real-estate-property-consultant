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
                Personalised assistance built on local Mumbai insight.
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
          {/* Left: Slender Vertical Image Crop */}
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
                alt="Namo Property Consultant Kandivali East Mumbai"
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
                Namo Property Consultant • Kandivali East, Mumbai
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
                "Navigating Mumbai’s property market requires practical guidance, transparent communication, and dedicated assistance focused on your individual goals."
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} distance={12}>
              <p style={{ marginBottom: '1.5rem', lineHeight: 1.9 }}>
                Namo Property Consultant is a Mumbai-based real-estate consultancy associated with Dishank Asija, helping clients with residential and commercial property requirements.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240} distance={12}>
              <p style={{ marginBottom: '2.5rem', lineHeight: 1.9 }}>
                We guide clients through buying, selling, renting, commercial property, property management, and personalised real-estate consultation. Our approach centers on practical property assistance, local market understanding, and clear communication from your first inquiry to the final decision.
              </p>
            </ScrollReveal>

            {/* Qualitative Trust Metrics Table (No unverified numbers) */}
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
                    Guidance
                  </span>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.15rem', color: 'var(--text-espresso)', marginTop: '0.25rem' }}>
                    Personalised
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.2rem' }}>
                    Tailored to your requirements
                  </span>
                </div>

                <div>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Assistance
                  </span>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.15rem', color: 'var(--text-espresso)', marginTop: '0.25rem' }}>
                    End-to-End
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.2rem' }}>
                    Enquiry to decision
                  </span>
                </div>

                <div>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Location
                  </span>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.15rem', color: 'var(--text-espresso)', marginTop: '0.25rem' }}>
                    Mumbai
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.2rem' }}>
                    Kandivali East & Suburbs
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
