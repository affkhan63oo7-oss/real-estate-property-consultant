import React, { useState } from 'react';
import { Award, Shield, Compass, CheckCircle } from 'lucide-react';

export const DeveloperHeritage: React.FC = () => {
  const [portfolioTab, setPortfolioTab] = useState<'All' | 'Completed' | 'Ongoing' | 'Upcoming'>('All');

  const portfolioProjects = [
    {
      title: 'Monolith House',
      location: 'Engadin, Switzerland',
      year: '2023',
      category: 'Residential',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      award: 'Prix Versailles Special Prize'
    },
    {
      title: 'The Obsidian Pavilion',
      location: 'Reykjavik, Iceland',
      year: '2024',
      category: 'Luxury',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      award: 'LEED Platinum Certified'
    },
    {
      title: 'The Sky Helix Atrium',
      location: 'Tokyo, Japan',
      year: '2026',
      category: 'Residential',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      award: 'AIA Global Design Honor'
    },
    {
      title: 'Capo Caccia Marine Reserve',
      location: 'Sardinia, Italy',
      year: '2027',
      category: 'Luxury',
      status: 'Upcoming',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      award: 'Coastal Preservation Accord'
    }
  ];

  const filtered = portfolioProjects.filter(
    (p) => portfolioTab === 'All' || p.status === portfolioTab
  );

  return (
    <section
      id="heritage"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container-luxury">
        {/* Heritage Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--accent-bronze)',
              display: 'block',
              marginBottom: '0.75rem'
            }}
          >
            09 / Professional Lineage
          </span>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: 'var(--text-primary)' }}>
            South Bopal Real Estate
          </h2>
          <p style={{ maxWidth: '650px', marginTop: '0.5rem' }}>
            South Bopal Real Estate is a premier real estate agency and property consultant led by Kishor Udhas, based at D 382, SOBO Centre, South Bopal, Ahmedabad, Gujarat – 380058. We specialize in Property Buying, Property Selling, Property Renting, Residential Properties, Bungalows / Villas, and Property Consultation across South Bopal, Ahmedabad.
          </p>
        </div>

        {/* Brand Pillars & Certifications */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid var(--border-light)'
          }}
        >
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Award size={28} color="var(--accent-bronze)" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Client-First Advisory
              </h4>
              <p style={{ fontSize: '0.875rem' }}>
                Objective, research-backed consultation designed to identify optimal residential and commercial real estate value.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Shield size={28} color="var(--accent-bronze)" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Verified Clear Titles
              </h4>
              <p style={{ fontSize: '0.875rem' }}>
                Rigorous legal documentation checks, municipal verification, and transparent paperwork for buyers and sellers.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Compass size={28} color="var(--accent-bronze)" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Ahmedabad Market Mastery
              </h4>
              <p style={{ fontSize: '0.875rem' }}>
                Comprehensive coverage of Bopal, South Bopal, Ghuma, Shela, Shantipura, Shilaj, and Maninagar corridors.
              </p>
            </div>
          </div>
        </div>

        {/* Project Archive & Status Filter */}
        <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>
                Architectural Portfolio Archive
              </h3>
              <p style={{ fontSize: '0.875rem' }}>Selected works across developmental stages.</p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {(['All', 'Completed', 'Ongoing', 'Upcoming'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setPortfolioTab(tab)}
                  style={{
                    padding: '0.4rem 1rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: portfolioTab === tab ? '1px solid var(--text-primary)' : '1px solid var(--border-light)',
                    backgroundColor: portfolioTab === tab ? 'var(--text-primary)' : 'transparent',
                    color: portfolioTab === tab ? '#FFFFFF' : 'var(--text-secondary)',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            {filtered.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(18, 19, 22, 0.85)',
                      color: '#FFFFFF',
                      fontSize: '0.625rem',
                      padding: '0.25rem 0.5rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {item.status} • {item.year}
                  </div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {item.title}
                  </h4>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.75rem' }}>
                    {item.location}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--accent-bronze)', fontWeight: 600 }}>
                    <CheckCircle size={13} />
                    <span>{item.award}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
