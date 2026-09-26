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
              Representative residential and commercial properties available for acquisition, lease, or consultation in Kandivali East and Mumbai.
            </p>
          </ScrollReveal>
        </div>

        {/* Minimalist Editorial Inventory Table */}
        <ScrollReveal delay={120} distance={12}>
          <div
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
                            padding: '0.35rem 0.75rem',
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
        </ScrollReveal>
      </div>
    </section>
  );
};
