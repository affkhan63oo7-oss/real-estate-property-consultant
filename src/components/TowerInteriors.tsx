import React from 'react';

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
          <span className="chapter-number">IV. Interior Craft</span>
          <h2 style={{ maxWidth: '950px', color: 'var(--text-espresso)' }}>
            Materials Conceived in Conversation.
          </h2>
          <p style={{ maxWidth: '650px', marginTop: '0.75rem', fontSize: '1.05rem' }}>
            Curated by master ateliers with unyielding devotion to authenticity: smoke-gray French herringbone oak, Cristallo gold quartzite, and hand-chased bronze hardware.
          </p>
        </div>

        {/* 3-Column Editorial Material Collage */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            marginBottom: '5rem'
          }}
        >
          {/* Feature 1: Culinary Studio */}
          <div>
            <div style={{ height: '420px', overflow: 'hidden', marginBottom: '1.5rem', backgroundColor: 'var(--bg-sandstone)' }}>
              <img
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85"
                alt="Custom Culinary Studio"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
              The Kitchen
            </span>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-espresso)', margin: '0.25rem 0 0.5rem 0' }}>
              Cristallo Quartzite & Boffi Joinery
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
              Monolithic kitchen islands carved from book-matched Cristallo gold quartzite slabs, complemented by custom fluted cabinetry in hand-rubbed smoked oak and integrated Gaggenau 400 series suites.
            </p>
          </div>

          {/* Feature 2: Primary Bathing Suite */}
          <div>
            <div style={{ height: '420px', overflow: 'hidden', marginBottom: '1.5rem', backgroundColor: 'var(--bg-sandstone)' }}>
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
                alt="Primary Bathing Suite"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
              The Bath
            </span>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-espresso)', margin: '0.25rem 0 0.5rem 0' }}>
              Statuario Marble & White Onyx
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
              Walls and heated radiant floors completely lined in book-matched Italian Statuario marble slabs, anchored by custom bronze-chased freestanding soaking tubs positioned before panoramic glass.
            </p>
          </div>

          {/* Feature 3: Great Hall Finishes */}
          <div>
            <div style={{ height: '420px', overflow: 'hidden', marginBottom: '1.5rem', backgroundColor: 'var(--bg-sandstone)' }}>
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="Great Hall Finishes"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
              The Great Hall
            </span>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-espresso)', margin: '0.25rem 0 0.5rem 0' }}>
              Quarter-Sawn French Oak Herringbone
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
              Oversized American white oak parquet custom-milled in smoke-gray hues, framed by solid nickel-and-bronze door hardware hand-cast by Parisian foundries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
