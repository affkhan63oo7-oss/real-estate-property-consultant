import React from 'react';
import { NEIGHBORHOOD_DESTINATIONS } from '../data/towerData';
import { ScrollReveal } from './ScrollReveal';
import { Navigation, MapPin, Compass, Train, Car, ShoppingBag, TreePine, Clock } from 'lucide-react';

export const ProjectLocation: React.FC = () => {
  const getCategoryIcon = (cat: string) => {
    if (cat.includes('Highway') || cat.includes('Car')) return <Car size={16} color="var(--accent-gold)" />;
    if (cat.includes('Metro') || cat.includes('Rail')) return <Train size={16} color="var(--accent-gold)" />;
    if (cat.includes('Retail') || cat.includes('Mall')) return <ShoppingBag size={16} color="var(--accent-gold)" />;
    if (cat.includes('Green') || cat.includes('Park')) return <TreePine size={16} color="var(--accent-gold)" />;
    return <Navigation size={16} color="var(--accent-gold)" />;
  };

  return (
    <section
      id="location"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-dark-obsidian)',
        borderBottom: '1px solid var(--border-gold-subtle)',
        position: 'relative'
      }}
    >
      <div className="container-editorial">
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)', maxWidth: '850px' }}>
          <ScrollReveal delay={0} distance={10}>
            <div className="eyebrow-pill">
              <Compass size={12} color="var(--accent-gold)" />
              <span>Location & Connectivity</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80} distance={14}>
            <h2
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: 'clamp(2rem, 4.2vw, 3.8rem)',
                lineHeight: 1.16,
                letterSpacing: 'clamp(0.04em, 1.2vw, 0.08em)',
                color: '#FAF8F5',
                marginBottom: '1rem'
              }}
            >
              Everything You Need,{' '}
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--accent-gold)'
                }}
              >
                Effortlessly Within Reach
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} distance={12}>
            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontStyle: 'italic',
                color: 'rgba(250, 248, 245, 0.85)',
                lineHeight: 1.6
              }}
            >
              Positioned in Kandivali East, Mumbai—seamlessly linked to the Western Express Highway, elevated metro networks, and protected green reserves.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-Column Location Spread */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Clean Verified Destinations List */}
          <ScrollReveal delay={100} distance={14}>
            <div
              className="card-editorial"
              style={{
                padding: 'clamp(1rem, 2.5vw, 2rem)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid rgba(201, 169, 130, 0.2)', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.18em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  Nearby Destination
                </span>
                <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.18em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  Transit Time
                </span>
              </div>

              {NEIGHBORHOOD_DESTINATIONS.map((dest, idx) => (
                <div
                  key={dest.name}
                  style={{
                    padding: '1.15rem 0',
                    borderBottom: idx !== NEIGHBORHOOD_DESTINATIONS.length - 1 ? '1px solid rgba(255, 255, 255, 0.07)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(201, 169, 130, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        {getCategoryIcon(dest.category)}
                      </div>
                      <h4
                        style={{
                          fontFamily: 'var(--font-title)',
                          fontSize: 'clamp(0.875rem, 1.4vw, 1.05rem)',
                          fontWeight: 600,
                          color: '#FAF8F5',
                          letterSpacing: '0.03em'
                        }}
                      >
                        {dest.name}
                      </h4>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(201, 169, 130, 0.12)',
                        border: '1px solid rgba(201, 169, 130, 0.3)',
                        color: 'var(--accent-gold)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        flexShrink: 0
                      }}
                    >
                      <Clock size={11} />
                      <span>{dest.distance}</span>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: 'rgba(250, 248, 245, 0.62)',
                      lineHeight: 1.5,
                      paddingLeft: '2.4rem'
                    }}
                  >
                    {dest.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Stylized Cartographic Transit Blueprint */}
          <ScrollReveal delay={160} distance={16} scale>
            <div
              className="card-editorial"
              style={{
                position: 'relative',
                padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(320px, 45vw, 520px)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#0F1612',
                  border: '1px solid rgba(201, 169, 130, 0.25)'
                }}
              >
                <svg
                  viewBox="0 0 500 420"
                  style={{ width: '100%', height: '100%', backgroundColor: '#0F1612' }}
                >
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(201, 169, 130, 0.05)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="500" height="420" fill="url(#grid)" />

                  {/* Sanjay Gandhi National Park Green Reserve East Flank */}
                  <rect x="370" y="0" width="130" height="420" fill="rgba(42, 64, 50, 0.35)" />
                  <line x1="370" y1="0" x2="370" y2="420" stroke="rgba(201, 169, 130, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="435" y="210" textAnchor="middle" fontSize="10" fontFamily="Cinzel" letterSpacing="3" fill="var(--accent-gold)" transform="rotate(-90 435 210)">
                    NATIONAL PARK GREEN RESERVE
                  </text>

                  {/* Western Express Highway (WEH) Main North-South Artery */}
                  <line x1="280" y1="0" x2="280" y2="420" stroke="#FAF8F5" strokeWidth="3" />
                  <text x="288" y="45" fontSize="9" fontFamily="Cinzel" fontWeight="600" letterSpacing="1" fill="#FAF8F5">
                    WESTERN EXPRESS HIGHWAY (WEH)
                  </text>

                  {/* Metro Line 7 Elevated Corridor */}
                  <line x1="300" y1="0" x2="300" y2="420" stroke="var(--accent-gold)" strokeWidth="2.5" strokeDasharray="6 3" />
                  <text x="308" y="110" fontSize="8" fontFamily="Plus Jakarta Sans" letterSpacing="1" fill="var(--accent-gold)">
                    METRO LINE 7 (ELEVATED)
                  </text>

                  {/* Suburban Railway Line (Western Line) */}
                  <line x1="100" y1="0" x2="100" y2="420" stroke="rgba(250, 248, 245, 0.45)" strokeWidth="2" strokeDasharray="8 4" />
                  <text x="108" y="380" fontSize="9" fontFamily="Cinzel" letterSpacing="1" fill="rgba(250, 248, 245, 0.7)">
                    WESTERN RAILWAY LINE
                  </text>

                  {/* East-West Cross Roads */}
                  <line x1="100" y1="210" x2="370" y2="210" stroke="rgba(250, 248, 245, 0.5)" strokeWidth="2" />
                  <text x="190" y="202" fontSize="9" fontFamily="Plus Jakarta Sans" letterSpacing="1" fill="#FAF8F5">
                    AKURLI ROAD CORRIDOR
                  </text>

                  <line x1="100" y1="120" x2="370" y2="120" stroke="rgba(201, 169, 130, 0.35)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="175" y="112" fontSize="8" fontFamily="Plus Jakarta Sans" fill="rgba(250, 248, 245, 0.75)">
                    THAKUR VILLAGE ROAD
                  </text>

                  <line x1="100" y1="300" x2="370" y2="300" stroke="rgba(201, 169, 130, 0.35)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="175" y="292" fontSize="8" fontFamily="Plus Jakarta Sans" fill="rgba(250, 248, 245, 0.75)">
                    LOKHANDWALA COMPLEX ROAD
                  </text>

                  {/* Kandivali Railway Station Marker */}
                  <g transform="translate(100, 210)">
                    <circle cx="0" cy="0" r="6" fill="var(--accent-gold)" />
                    <text x="-10" y="-12" textAnchor="end" fontSize="9" fontFamily="Cinzel" fontWeight="600" fill="#FAF8F5">
                      KANDIVALI STATION
                    </text>
                  </g>

                  {/* WEH Junction Marker */}
                  <g transform="translate(280, 210)">
                    <circle cx="0" cy="0" r="5" fill="#FAF8F5" />
                    <text x="10" y="-10" fontSize="8" fontFamily="Plus Jakarta Sans" fill="var(--accent-gold)">
                      WEH FLYOVER JUNCTION
                    </text>
                  </g>

                  {/* Growel's 101 Mall Marker */}
                  <g transform="translate(250, 260)">
                    <rect x="-4" y="-4" width="8" height="8" fill="var(--accent-gold)" />
                    <text x="12" y="3" fontSize="8" fontFamily="Cinzel" fill="#FAF8F5">
                      GROWEL'S 101 MALL
                    </text>
                  </g>

                  {/* Subject Property Beacon Pulse */}
                  <g transform="translate(240, 165)">
                    <circle cx="0" cy="0" r="24" fill="none" stroke="var(--accent-gold)" strokeWidth="1" opacity="0.25">
                      <animate attributeName="r" values="10;32" dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="8" fill="var(--accent-gold)" />
                    <circle cx="0" cy="0" r="3" fill="#0D1310" />

                    <rect x="14" y="-16" width="165" height="32" rx="4" fill="rgba(13, 19, 16, 0.95)" stroke="var(--accent-gold)" strokeWidth="1" />
                    <text x="22" y="-3" fontSize="8" fontFamily="Cinzel" fontWeight="600" letterSpacing="0.5" fill="#FAF8F5">
                      NAMO PROPERTY CONSULTANT
                    </text>
                    <text x="22" y="10" fontSize="7" fontFamily="Plus Jakarta Sans" fill="var(--accent-gold)">
                      Kandivali East, Mumbai
                    </text>
                  </g>
                </svg>

                {/* Floating Map Legend */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    padding: '0.65rem 1rem',
                    backgroundColor: 'rgba(13, 19, 16, 0.92)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '8px',
                    border: '1px solid rgba(201, 169, 130, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(250, 248, 245, 0.75)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
                    <span>Project Location</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <div style={{ width: '12px', height: '2px', backgroundColor: '#FAF8F5' }} />
                    <span>Arterial WEH</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <div style={{ width: '12px', height: '2px', backgroundColor: 'var(--accent-gold)' }} />
                    <span>Metro Line 7</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
