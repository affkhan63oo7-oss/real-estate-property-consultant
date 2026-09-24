import React from 'react';
import { ArrowUp } from 'lucide-react';

interface TowerFooterProps {
  onInquireClick: () => void;
}

export const TowerFooter: React.FC<TowerFooterProps> = ({ onInquireClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#121110',
        color: '#FAF8F5',
        paddingTop: 'clamp(5rem, 8vw, 8rem)',
        paddingBottom: '4rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container-editorial">
        {/* Massive Signature Editorial Typography */}
        <div
          style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            paddingBottom: '5rem',
            marginBottom: '4rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2.5rem'
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.6875rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              The Slender Silhouette
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                color: '#FAF8F5',
                lineHeight: 1.1,
                letterSpacing: '0.12em'
              }}
            >
              117 WEST 57
            </h2>
            <span
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: 'rgba(250, 248, 245, 0.75)',
                display: 'block',
                marginTop: '0.5rem'
              }}
            >
              Billionaires' Row • Central Park South • New York
            </span>
          </div>

          <div>
            <button
              onClick={onInquireClick}
              className="btn-111-primary"
              style={{
                backgroundColor: 'var(--accent-gold)',
                color: '#121110',
                borderColor: 'var(--accent-gold)',
                padding: '1.25rem 2.5rem'
              }}
            >
              Private Salon Inquiry
            </button>
          </div>
        </div>

        {/* 4-Column Directory */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4.5rem',
            fontSize: '0.8125rem',
            color: 'rgba(250, 248, 245, 0.7)'
          }}
        >
          {/* Sales Gallery */}
          <div>
            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
              Sales Gallery
            </span>
            <p style={{ color: 'rgba(250, 248, 245, 0.7)', lineHeight: 1.8 }}>
              117 West 57th Street<br />
              New York, NY 10019<br />
              +1 (212) 555-0157<br />
              concierge@117w57.com
            </p>
          </div>

          {/* Architecture & Team */}
          <div>
            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
              Architectural Pedigree
            </span>
            <p style={{ color: 'rgba(250, 248, 245, 0.7)', lineHeight: 1.8 }}>
              Design Architect: SHoP Architects<br />
              Interior Atelier: Studio Sofield<br />
              Structural Engineering: WSP Cantor Seinuk<br />
              Terra-Cotta Fabrication: NBK Keramik
            </p>
          </div>

          {/* Quick Chapters */}
          <div>
            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
              Chapters
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#landmark" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none' }}>I. The Landmark</a></li>
              <li><a href="#architecture" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none' }}>II. Architecture & Craft</a></li>
              <li><a href="#residences" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none' }}>III. The Residences</a></li>
              <li><a href="#views" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none' }}>V. The Panorama</a></li>
              <li><a href="#availability" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none' }}>VIII. Availability</a></li>
            </ul>
          </div>

          {/* Legal / Fair Housing */}
          <div>
            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
              Governance
            </span>
            <p style={{ fontSize: '0.75rem', color: 'rgba(250, 248, 245, 0.5)', lineHeight: 1.7 }}>
              Equal Housing Opportunity. The complete offering terms are in an offering plan available from Sponsor. File No. CD15-0146.
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: 'rgba(250, 248, 245, 0.45)'
          }}
        >
          <span>© 2026 117 West 57th Street Holding S.A. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'none',
              border: 'none',
              color: 'var(--accent-gold)',
              cursor: 'pointer',
              fontFamily: 'var(--font-title)',
              fontSize: '0.6875rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
