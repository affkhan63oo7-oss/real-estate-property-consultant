import React from 'react';
import { TowerResidence, TOWER_RESIDENCES } from '../data/towerData';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TowerAvailabilityProps {
  onSelectResidence: (residence: TowerResidence) => void;
  onInquireResidence: (residence: TowerResidence) => void;
}

export const TowerAvailability: React.FC<TowerAvailabilityProps> = ({
  onSelectResidence,
  onInquireResidence
}) => {
  return (
    <section
      id="availability"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-parchment)',
        borderBottom: '1px solid var(--hairline-light)'
      }}
    >
      <div className="container-editorial">
        {/* Chapter Header */}
        <div style={{ marginBottom: '4rem' }}>
          <ScrollReveal delay={0} distance={10}>
            <span className="chapter-number">V. Availability Index</span>
          </ScrollReveal>
          <ScrollReveal delay={80} distance={14}>
            <h2 style={{ maxWidth: '900px', color: 'var(--text-espresso)' }}>
              Property Directory & Inquiries.
            </h2>
            <p style={{ maxWidth: '640px', marginTop: '0.75rem', fontSize: '1.05rem', color: 'var(--text-espresso)' }}>
              Representative residential and commercial properties available across Pune, Marunji, Hinjawadi, and Narhe.
            </p>
          </ScrollReveal>
        </div>

        {/* Minimalist Editorial Inventory: Table for Desktop / Cards for Mobile */}
        <ScrollReveal delay={120} distance={12}>
          {/* Desktop Table View */}
          <div
            className="desktop-availability-table"
            style={{
              borderTop: '1px solid var(--text-espresso)',
              overflowX: 'auto'
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem'
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: '1px solid var(--hairline-light)',
                    color: 'var(--text-muted)'
                  }}
                >
                  <th style={{ padding: '1.25rem 1rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', fontWeight: 500, fontSize: '0.6875rem' }}>Property</th>
                  <th style={{ padding: '1.25rem 1rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', fontWeight: 500, fontSize: '0.6875rem' }}>Floor</th>
                  <th style={{ padding: '1.25rem 1rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', fontWeight: 500, fontSize: '0.6875rem' }}>Category</th>
                  <th style={{ padding: '1.25rem 1rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', fontWeight: 500, fontSize: '0.6875rem' }}>Configuration</th>
                  <th style={{ padding: '1.25rem 1rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', fontWeight: 500, fontSize: '0.6875rem' }}>Carpet Area</th>
                  <th style={{ padding: '1.25rem 1rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', fontWeight: 500, fontSize: '0.6875rem' }}>Facing</th>
                  <th style={{ padding: '1.25rem 1rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', fontWeight: 500, fontSize: '0.6875rem' }}>Price / Terms</th>
                  <th style={{ padding: '1.25rem 1rem', textAlign: 'right', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', fontWeight: 500, fontSize: '0.6875rem' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {TOWER_RESIDENCES.map((res) => (
                  <tr
                    key={res.id}
                    style={{
                      borderBottom: '1px solid var(--hairline-light)',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-limestone)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <td style={{ padding: '1.5rem 1rem', fontFamily: 'var(--font-title)', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-espresso)' }}>
                      {res.residenceNumber}
                    </td>
                    <td style={{ padding: '1.5rem 1rem', color: 'var(--text-bronze)' }}>
                      Floor {res.floor}
                    </td>
                    <td style={{ padding: '1.5rem 1rem', color: 'var(--text-espresso)', fontWeight: 500 }}>
                      {res.type}
                    </td>
                    <td style={{ padding: '1.5rem 1rem', color: 'var(--text-bronze)' }}>
                      {res.bedrooms > 0 ? `${res.bedrooms} Beds / ${res.bathrooms} Baths` : 'Commercial Unit'}
                    </td>
                    <td style={{ padding: '1.5rem 1rem', color: 'var(--text-espresso)' }}>
                      {res.interiorSqFt.toLocaleString()} SQ FT
                    </td>
                    <td style={{ padding: '1.5rem 1rem', color: 'var(--text-bronze)', fontSize: '0.75rem' }}>
                      {res.exposure}
                    </td>
                    <td style={{ padding: '1.5rem 1rem', fontFamily: 'var(--font-title)', fontWeight: 600, color: 'var(--text-espresso)', fontSize: '1rem' }}>
                      {res.priceFormatted}
                    </td>
                    <td style={{ padding: '1.5rem 1rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <button
                          onClick={() => onSelectResidence(res)}
                          className="btn-111-ghost"
                        >
                          <span>Details</span>
                          <ArrowUpRight size={12} />
                        </button>

                        <button
                          onClick={() => onInquireResidence(res)}
                          style={{
                            padding: '0.45rem 0.85rem',
                            backgroundColor: 'var(--text-espresso)',
                            color: '#FAF8F5',
                            border: 'none',
                            fontFamily: 'var(--font-title)',
                            fontSize: '0.625rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            cursor: 'pointer'
                          }}
                        >
                          Inquire
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Directory (Clean, Touch-Friendly, No Horizontal Scrolling) */}
          <div className="mobile-availability-cards" style={{ display: 'none', flexDirection: 'column', gap: '1rem' }}>
            {TOWER_RESIDENCES.map((res) => (
              <div
                key={res.id}
                style={{
                  backgroundColor: 'var(--bg-limestone)',
                  border: '1px solid var(--hairline-light)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  boxShadow: '0 4px 15px rgba(27, 25, 23, 0.04)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block' }}>
                      {res.type} • Floor {res.floor}
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.15rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                      {res.residenceNumber}
                    </h4>
                  </div>
                  <span style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-espresso)' }}>
                    {res.priceFormatted}
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-bronze)' }}>
                  <span style={{ backgroundColor: 'rgba(27, 25, 23, 0.05)', padding: '0.25rem 0.5rem' }}>
                    {res.bedrooms > 0 ? `${res.bedrooms} BHK` : 'Commercial'}
                  </span>
                  <span style={{ backgroundColor: 'rgba(27, 25, 23, 0.05)', padding: '0.25rem 0.5rem' }}>
                    {res.interiorSqFt.toLocaleString()} SQ FT
                  </span>
                  <span style={{ backgroundColor: 'rgba(27, 25, 23, 0.05)', padding: '0.25rem 0.5rem' }}>
                    {res.exposure}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--hairline-light)' }}>
                  <button
                    onClick={() => onSelectResidence(res)}
                    className="btn-111-ghost"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={12} />
                  </button>

                  <button
                    onClick={() => onInquireResidence(res)}
                    className="btn-111-primary"
                    style={{
                      flex: 1,
                      padding: '0.65rem 1rem',
                      fontSize: '0.625rem',
                      minHeight: '40px'
                    }}
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .desktop-availability-table {
            display: none !important;
          }
          .mobile-availability-cards {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
};
