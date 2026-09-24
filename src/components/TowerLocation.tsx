import React from 'react';
import { NEIGHBORHOOD_DESTINATIONS } from '../data/towerData';

export const TowerLocation: React.FC = () => {
  return (
    <section
      id="location"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-limestone)',
        borderBottom: '1px solid var(--hairline-light)'
      }}
    >
      <div className="container-editorial">
        {/* Chapter Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <span className="chapter-number">VII. The Enclave</span>
          <h2 style={{ maxWidth: '900px', color: 'var(--text-espresso)' }}>
            The Cultural Epicenter of Manhattan.
          </h2>
          <p style={{ maxWidth: '640px', marginTop: '0.75rem', fontSize: '1.05rem' }}>
            Anchored on Billionaires’ Row between Sixth and Seventh Avenues, positioned precisely at the crossroads of Central Park, high fashion, and international performing arts.
          </p>
        </div>

        {/* Directory List & Architectural Map */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left: Minimalist Cartography Illustration */}
          <div
            style={{
              position: 'relative',
              height: '460px',
              backgroundColor: '#EDE8DF',
              border: '1px solid var(--hairline-light)',
              overflow: 'hidden'
            }}
          >
            <svg
              viewBox="0 0 500 420"
              style={{ width: '100%', height: '100%', backgroundColor: '#ECE7DE' }}
            >
              {/* Central Park Green Grid */}
              <rect x="0" y="0" width="500" height="150" fill="#DDD8CE" />
              <text x="250" y="80" textAnchor="middle" fontSize="14" fontFamily="Cinzel" letterSpacing="5" fill="#726A5F">
                CENTRAL PARK
              </text>

              {/* 59th Street Border Line */}
              <line x1="0" y1="150" x2="500" y2="150" stroke="#726A5F" strokeWidth="2" />
              <text x="50" y="142" fontSize="9" fontFamily="Plus Jakarta Sans" letterSpacing="1" fill="#726A5F">
                CENTRAL PARK SOUTH (59TH ST)
              </text>

              {/* 58th Street */}
              <line x1="0" y1="210" x2="500" y2="210" stroke="#C4BCAC" strokeWidth="1" strokeDasharray="3 3" />

              {/* 57th Street (Billionaires' Row) */}
              <line x1="0" y1="270" x2="500" y2="270" stroke="#1B1917" strokeWidth="2.5" />
              <text x="50" y="262" fontSize="10" fontFamily="Cinzel" fontWeight="600" letterSpacing="2" fill="#1B1917">
                WEST 57TH STREET • BILLIONAIRES' ROW
              </text>

              {/* 56th Street */}
              <line x1="0" y1="330" x2="500" y2="330" stroke="#C4BCAC" strokeWidth="1" strokeDasharray="3 3" />

              {/* Avenues (Vertical lines) */}
              {/* 7th Ave */}
              <line x1="120" y1="150" x2="120" y2="420" stroke="#726A5F" strokeWidth="1.5" />
              <text x="120" y="405" textAnchor="middle" fontSize="9" fontFamily="Cinzel" letterSpacing="1" fill="#726A5F">
                7TH AVE
              </text>

              {/* 6th Ave */}
              <line x1="380" y1="150" x2="380" y2="420" stroke="#726A5F" strokeWidth="1.5" />
              <text x="380" y="405" textAnchor="middle" fontSize="9" fontFamily="Cinzel" letterSpacing="1" fill="#726A5F">
                6TH AVE
              </text>

              {/* 117 West 57th Street Marker (The Tower) */}
              <g transform="translate(250, 270)">
                <circle cx="0" cy="0" r="16" fill="rgba(188, 160, 107, 0.3)" />
                <circle cx="0" cy="0" r="8" fill="#BCA06B" />
                <circle cx="0" cy="0" r="3" fill="#1B1917" />
                <text x="0" y="-22" textAnchor="middle" fontSize="11" fontFamily="Cinzel" fontWeight="700" letterSpacing="2" fill="#1B1917">
                  117 WEST 57
                </text>
              </g>

              {/* Carnegie Hall Marker */}
              <g transform="translate(145, 270)">
                <circle cx="0" cy="0" r="4" fill="#726A5F" />
                <text x="0" y="16" textAnchor="middle" fontSize="8" fontFamily="Plus Jakarta Sans" fill="#726A5F">Carnegie Hall</text>
              </g>

              {/* Bergdorf Goodman Marker */}
              <g transform="translate(440, 230)">
                <circle cx="0" cy="0" r="4" fill="#726A5F" />
                <text x="0" y="16" textAnchor="middle" fontSize="8" fontFamily="Plus Jakarta Sans" fill="#726A5F">Bergdorf Goodman</text>
              </g>
            </svg>

            {/* Geographical Coordinates Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(27, 25, 23, 0.85)',
                color: '#FAF8F5',
                padding: '0.4rem 0.85rem',
                fontFamily: 'var(--font-title)',
                fontSize: '0.625rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}
            >
              40°45'54"N 73°58'39"W • Central Park South
            </div>
          </div>

          {/* Right: Cultural Directory */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {NEIGHBORHOOD_DESTINATIONS.map((dest) => (
              <div
                key={dest.name}
                style={{
                  borderBottom: '1px solid var(--hairline-light)',
                  paddingBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.15rem', color: 'var(--text-espresso)', letterSpacing: '0.08em' }}>
                    {dest.name}
                  </h4>
                  <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                    {dest.distance}
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-title)', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                  {dest.category}
                </span>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {dest.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
