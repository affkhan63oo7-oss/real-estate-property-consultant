import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const TowerInteriors: React.FC = () => {
  return (
    <section
      id="interiors"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-limestone)',
        borderBottom: '1px solid var(--hairline-light)'
      }}
    >
      <div className="container-editorial">
        {/* Chapter Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <ScrollReveal delay={0} distance={10}>
            <span className="chapter-number">VI. Property Evaluation</span>
          </ScrollReveal>
          <ScrollReveal delay={80} distance={14}>
            <h2 style={{ maxWidth: '950px', color: 'var(--text-espresso)' }}>
              Practical Property Assessment.
            </h2>
            <p style={{ maxWidth: '650px', marginTop: '0.75rem', fontSize: '1.05rem', color: 'var(--text-bronze)' }}>
              Objective criteria guiding every residential selection, commercial evaluation, and rental recommendation in Mumbai.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-Column Editorial Material Collage with Staggered Fluidity */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)'
          }}
        >
          {/* Feature 1: Residential Quality */}
          <ScrollReveal delay={60} distance={16} scale>
            <div>
              <div style={{ height: 'clamp(220px, 40vw, 400px)', overflow: 'hidden', marginBottom: '1.25rem', backgroundColor: 'var(--bg-sandstone)', boxShadow: 'var(--shadow-editorial)' }}>
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85"
                  alt="Residential Living Quality Hinjawadi Pune"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.22em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                Residential Focus
              </span>
              <h3 style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)', color: 'var(--text-espresso)', margin: '0.25rem 0 0.45rem 0' }}>
                Layout Quality & Ventilation
              </h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--text-espresso)' }}>
                We inspect room proportions, cross-ventilation, natural sunlight, building construction standards, and society amenities to ensure families find homes that genuinely fit daily life.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature 2: Commercial Utility */}
          <ScrollReveal delay={140} distance={16} scale>
            <div>
              <div style={{ height: 'clamp(220px, 40vw, 400px)', overflow: 'hidden', marginBottom: '1.25rem', backgroundColor: 'var(--bg-sandstone)', boxShadow: 'var(--shadow-editorial)' }}>
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
                  alt="Commercial Office and Retail Assessment"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.22em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                Commercial Utility
              </span>
              <h3 style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)', color: 'var(--text-espresso)', margin: '0.25rem 0 0.45rem 0' }}>
                Visibility & Infrastructure
              </h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--text-espresso)' }}>
                For commercial spaces, we analyze road frontage, passenger elevator capacity, power backup, parking availability, and transit accessibility for employees and visiting clients.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature 3: Documentation & Verification */}
          <ScrollReveal delay={220} distance={16} scale>
            <div>
              <div style={{ height: 'clamp(220px, 40vw, 400px)', overflow: 'hidden', marginBottom: '1.25rem', backgroundColor: 'var(--bg-sandstone)', boxShadow: 'var(--shadow-editorial)' }}>
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                  alt="Property Documentation Clarity"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.22em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                Clear Paperwork
              </span>
              <h3 style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)', color: 'var(--text-espresso)', margin: '0.25rem 0 0.45rem 0' }}>
                Transparent Documentation
              </h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--text-espresso)' }}>
                Clear communication and verified paperwork from the start. We assist clients in reviewing property title records, society documentation, and agreement terms for complete peace of mind.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
