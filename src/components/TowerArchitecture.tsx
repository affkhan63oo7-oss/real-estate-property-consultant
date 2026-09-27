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
              Future Construction • Property Developer
            </h2>
            <p style={{ maxWidth: '680px', marginTop: '0.75rem', fontSize: '1.05rem', color: 'var(--text-bronze)' }}>
              Real Estate Developer and Property Developer based in Hinjawadi, Pune. Providing dedicated property guidance across Pune, Marunji, Hinjawadi, and Narhe.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-Column Asymmetric Profile & Value Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start',
            marginBottom: 'clamp(3rem, 6vw, 5.5rem)'
          }}
        >
          {/* Card 1: Future Construction Profile */}
          <ScrollReveal delay={100} distance={16} scale>
            <div>
              <div style={{ height: 'clamp(240px, 45vw, 440px)', overflow: 'hidden', marginBottom: '1.5rem', backgroundColor: 'var(--bg-sandstone)', boxShadow: 'var(--shadow-editorial)' }}>
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Future Construction Real Estate Developer Hinjawadi Pune"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.22em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                Real Estate Developer • Property Developer
              </span>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', color: 'var(--text-espresso)', marginTop: '0.35rem', marginBottom: '0.65rem' }}>
                Future Construction
              </h3>
              <p style={{ lineHeight: 1.85, color: 'var(--text-espresso)' }}>
                Helping clients navigate Pune’s property and land market with practical guidance and dedicated development solutions. Future Construction works directly with buyers, investors, and landowners to understand their unique property goals and deliver clear, responsive support at every stage.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: Why Choose Us */}
          <div style={{ marginTop: 'clamp(0rem, 3vw, 3rem)' }}>
            <ScrollReveal delay={180} distance={16} scale>
              <div>
                <div style={{ height: 'clamp(240px, 45vw, 440px)', overflow: 'hidden', marginBottom: '1.5rem', backgroundColor: 'var(--bg-sandstone)', boxShadow: 'var(--shadow-editorial)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
                    alt="Professional Real Estate Guidance in Mumbai"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.22em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  Why Choose Us • Genuine Customer Value
                </span>
                <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', color: 'var(--text-espresso)', marginTop: '0.35rem', marginBottom: '0.65rem' }}>
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
              padding: 'clamp(2.5rem, 5vw, 4rem) 0',
              textAlign: 'center'
            }}
          >
            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.85rem' }}>
              Consulting Principle
            </span>
            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.25rem, 3.2vw, 2.2rem)',
                color: 'var(--text-espresso)',
                fontStyle: 'italic',
                maxWidth: '900px',
                margin: '0 auto',
                lineHeight: 1.5
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
