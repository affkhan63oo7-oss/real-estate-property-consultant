import React from 'react';
import { Layers, ShieldCheck, Sun } from 'lucide-react';

export const VisionSection: React.FC = () => {
  return (
    <section
      id="vision"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative'
      }}
    >
      <div className="container-luxury">
        {/* Subtle Section Label */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--accent-bronze)'
            }}
          >
            01 / The Architectural Manifesto
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div style={{ maxWidth: '1100px', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 4.8rem)',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              fontWeight: 300,
              letterSpacing: '-0.02em'
            }}
          >
            Space. Light. Life.
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              Built for the way you truly live.
            </span>
          </h2>
        </div>

        {/* Asymmetric 3-Column Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start'
          }}
        >
          {/* Principle 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '1px',
                backgroundColor: 'var(--accent-bronze-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-bronze)'
              }}
            >
              <Layers size={22} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 400, color: 'var(--text-primary)' }}>
              Mineral Authenticity
            </h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>
              We reject synthetic veneers and decorative illusions. Every surface in our portfolio is cast from monolithic volcanic concrete, hand-quarried alpine granite, or hand-planed Nordic timber that matures with dignified grace.
            </p>
          </div>

          {/* Principle 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '1px',
                backgroundColor: 'var(--accent-bronze-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-bronze)'
              }}
            >
              <Sun size={22} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 400, color: 'var(--text-primary)' }}>
              Heliotropic Precision
            </h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>
              Each residence is positioned according to solar azimuth geometry. Mornings begin with soft ambient diffusion in the primary suites; evenings culminate in golden-hour drama framing primary living salons and outdoor water mirrors.
            </p>
          </div>

          {/* Principle 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '1px',
                backgroundColor: 'var(--accent-bronze-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-bronze)'
              }}
            >
              <ShieldCheck size={22} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 400, color: 'var(--text-primary)' }}>
              Sovereign Privacy
            </h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>
              Engineered with subterranean security envelopes, private helipad connectivity, acoustic perimeter isolation, and sovereign smart infrastructure designed to safeguard your family’s sanctuary without compromise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
