import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const TowerArchitecture: React.FC = () => {
  return (
    <section
      id="consultant"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-limestone)',
        borderBottom: '1px solid var(--hairline-light)'
      }}
    >
      {/* Legacy anchor fallback */}
      <div id="architecture" style={{ position: 'absolute', top: '-60px' }} />

      <div className="container-editorial">
        {/* Chapter Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <ScrollReveal delay={0} distance={10}>
            <span className="chapter-number">II. Consultant & Philosophy</span>
          </ScrollReveal>
          <ScrollReveal delay={80} distance={14}>
            <h2 style={{ maxWidth: '950px', color: 'var(--text-espresso)' }}>
              Dishank Asija • Property Consultant
            </h2>
            <p style={{ maxWidth: '680px', marginTop: '0.75rem', fontSize: '1.05rem', color: 'var(--text-bronze)' }}>
              Associated with Namo Property Consultant in Kandivali East, Mumbai. Providing dedicated property guidance and personalised assistance.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-Column Asymmetric Profile & Value Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'start',
            marginBottom: '6rem'
          }}
        >
          {/* Card 1: Dishank Asija Profile */}
          <ScrollReveal delay={100} distance={16} scale>
            <div>
              <div style={{ height: '460px', overflow: 'hidden', marginBottom: '1.75rem', backgroundColor: 'var(--bg-sandstone)' }}>
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Dishank Asija Property Consultant Namo Property Consultant"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                Associated Person • Property Consultant
              </span>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-espresso)', marginTop: '0.35rem', marginBottom: '0.75rem' }}>
                Dishank Asija
              </h3>
              <p style={{ lineHeight: 1.85, color: 'var(--text-espresso)' }}>
                Helping clients navigate Mumbai’s property market with practical guidance and personalised assistance. Associated with Namo Property Consultant, Dishank Asija works directly with buyers, sellers, tenants, and business owners to understand their unique property goals and deliver clear, responsive support at every stage.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: Why Choose Us */}
          <div style={{ marginTop: 'clamp(0rem, 4vw, 4rem)' }}>
            <ScrollReveal delay={180} distance={16} scale>
              <div>
                <div style={{ height: '460px', overflow: 'hidden', marginBottom: '1.75rem', backgroundColor: 'var(--bg-sandstone)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
                    alt="Professional Real Estate Guidance in Mumbai"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  Why Choose Us • Genuine Customer Value
                </span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-espresso)', marginTop: '0.35rem', marginBottom: '0.75rem' }}>
                  Clear Communication & Local Insight
                </h3>
                <p style={{ lineHeight: 1.85, color: 'var(--text-espresso)' }}>
                  Our advisory is anchored on clear communication, local property understanding, and property-focused consultation. Whether you are exploring residential buying or selling, securing a rental, seeking commercial spaces, or managing existing real-estate assets, we ensure you receive objective and transparent assistance.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Full-Bleed Architectural Detail Quote Banner */}
        <ScrollReveal delay={120} distance={12}>
          <div
            style={{
              borderTop: '1px solid var(--hairline-light)',
              borderBottom: '1px solid var(--hairline-light)',
              padding: '4rem 0',
              textAlign: 'center'
            }}
          >
            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '1rem' }}>
              Consulting Principle
            </span>
            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.5rem, 3vw, 2.3rem)',
                color: 'var(--text-espresso)',
                fontStyle: 'italic',
                maxWidth: '900px',
                margin: '0 auto',
                lineHeight: 1.45
              }}
            >
              "Helping clients navigate Mumbai’s property market with practical guidance and personalised assistance."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
