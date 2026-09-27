import React from 'react';
import { NEIGHBORHOOD_DESTINATIONS } from '../data/towerData';
import { ScrollReveal } from './ScrollReveal';
import { MapPin, Navigation } from 'lucide-react';

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
          <ScrollReveal delay={0} distance={10}>
            <span className="chapter-number">VII. Location & Connectivity</span>
          </ScrollReveal>
          <ScrollReveal delay={80} distance={14}>
            <h2 style={{ maxWidth: '900px', color: 'var(--text-espresso)' }}>
              Hinjawadi, Pune.
            </h2>
            <p style={{ maxWidth: '640px', marginTop: '0.75rem', fontSize: '1.05rem', color: 'var(--text-bronze)' }}>
              Conveniently located at Sakhare Complex on Marunji Road near Hotel Mezza9, offering seamless connectivity across Pune, Marunji, Hinjawadi, and Narhe.
            </p>
          </ScrollReveal>
        </div>

        {/* Directory List & Architectural Map */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left: Minimalist Cartography Illustration */}
          <ScrollReveal delay={100} distance={16} scale>
            <div
              style={{
                position: 'relative',
                height: 'clamp(260px, 46vw, 460px)',
                backgroundColor: '#EDE8DF',
                border: '1px solid var(--hairline-light)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-editorial)'
              }}
            >
              <svg
                viewBox="0 0 500 420"
                style={{ width: '100%', height: '100%', backgroundColor: '#ECE7DE' }}
              >
                {/* Sanjay Gandhi National Park Green Reserve East Flank */}
                <rect x="370" y="0" width="130" height="420" fill="#DDD8CE" />
                <text x="435" y="210" textAnchor="middle" fontSize="10" fontFamily="Cinzel" letterSpacing="3" fill="#726A5F" transform="rotate(-90 435 210)">
                  NATIONAL PARK GREEN BELT
                </text>

                {/* Western Express Highway (WEH) Main North-South Artery */}
                <line x1="280" y1="0" x2="280" y2="420" stroke="#1B1917" strokeWidth="3" />
                <text x="288" y="45" fontSize="9" fontFamily="Cinzel" fontWeight="600" letterSpacing="1" fill="#1B1917">
                  WESTERN EXPRESS HIGHWAY (WEH)
                </text>

                {/* Metro Line 7 Elevated Corridor */}
                <line x1="295" y1="0" x2="295" y2="420" stroke="#BCA06B" strokeWidth="2" strokeDasharray="6 3" />
                <text x="303" y="110" fontSize="8" fontFamily="Plus Jakarta Sans" letterSpacing="1" fill="#726A5F">
                  METRO LINE 7
                </text>

                {/* Suburban Railway Line (Western Line) */}
                <line x1="100" y1="0" x2="100" y2="420" stroke="#726A5F" strokeWidth="2" strokeDasharray="8 4" />
                <text x="108" y="380" fontSize="9" fontFamily="Cinzel" letterSpacing="1" fill="#726A5F">
                  WESTERN RAILWAY LINE
                </text>

                {/* East-West Cross Roads: Akurli Road / Lokhandwala Township Road */}
                <line x1="100" y1="210" x2="370" y2="210" stroke="#726A5F" strokeWidth="2" />
                <text x="190" y="202" fontSize="9" fontFamily="Plus Jakarta Sans" letterSpacing="1" fill="#726A5F">
                  AKURLI ROAD
                </text>

                <line x1="100" y1="120" x2="370" y2="120" stroke="#C4BCAC" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="175" y="112" fontSize="8" fontFamily="Plus Jakarta Sans" fill="#726A5F">
                  THAKUR VILLAGE ROAD
                </text>

                <line x1="100" y1="300" x2="370" y2="300" stroke="#C4BCAC" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="175" y="292" fontSize="8" fontFamily="Plus Jakarta Sans" fill="#726A5F">
                  LOKHANDWALA COMPLEX
                </text>

                {/* Hinjawadi IT Park Marker */}
                <g transform="translate(100, 210)">
                  <circle cx="0" cy="0" r="5" fill="#726A5F" />
                  <text x="-8" y="-12" textAnchor="end" fontSize="9" fontFamily="Cinzel" fontWeight="600" fill="#1B1917">
                    Hinjawadi IT Park
                  </text>
                </g>

                {/* Hotel Mezza9 Marker */}
                <g transform="translate(280, 160)">
                  <circle cx="0" cy="0" r="4" fill="#726A5F" />
                  <text x="-12" y="4" textAnchor="end" fontSize="8" fontFamily="Plus Jakarta Sans" fill="#726A5F">
                    Near Hotel Mezza9
                  </text>
                </g>

                {/* Future Construction Marker */}
                <g transform="translate(240, 210)">
                  <circle cx="0" cy="0" r="16" fill="rgba(188, 160, 107, 0.3)" />
                  <circle cx="0" cy="0" r="8" fill="#BCA06B" />
                  <circle cx="0" cy="0" r="3" fill="#1B1917" />
                  <text x="0" y="-22" textAnchor="middle" fontSize="10" fontFamily="Cinzel" fontWeight="700" letterSpacing="1" fill="#1B1917">
                    FUTURE CONSTRUCTION
                  </text>
                  <text x="0" y="26" textAnchor="middle" fontSize="8" fontFamily="Plus Jakarta Sans" fontWeight="600" fill="#726A5F">
                    Hinjawadi, Pune
                  </text>
                </g>
              </svg>

              {/* Location Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '0.75rem',
                  backgroundColor: 'rgba(27, 25, 23, 0.88)',
                  color: '#FAF8F5',
                  padding: '0.35rem 0.65rem',
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  maxWidth: 'calc(100% - 1.5rem)'
                }}
              >
                <MapPin size={11} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  Hinjawadi, Pune
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Connectivity Directory */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {NEIGHBORHOOD_DESTINATIONS.map((dest, idx) => (
              <ScrollReveal key={dest.name} delay={120 + idx * 50} distance={10}>
                <div
                  style={{
                    borderBottom: '1px solid var(--hairline-light)',
                    paddingBottom: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--text-espresso)', letterSpacing: '0.06em' }}>
                      {dest.name}
                    </h4>
                    <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.12em', color: 'var(--accent-gold)', textTransform: 'uppercase', flexShrink: 0 }}>
                      {dest.distance}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-title)', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                    {dest.category}
                  </span>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--text-espresso)' }}>
                    {dest.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}

            <div style={{ marginTop: '0.5rem' }}>
              <a
                href="https://maps.google.com/?q=Sakhare+Complex+Marunji+Road+Hinjawadi+Pune+411057"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--text-espresso)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--accent-gold)',
                  paddingBottom: '0.35rem',
                  minHeight: '44px'
                }}
              >
                <Navigation size={13} color="var(--accent-gold)" />
                <span>Get Directions to Future Construction (Hinjawadi)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
