import React, { useState } from 'react';
import { PROPERTIES } from '../data/mockData';
import { Plane, Utensils, Anchor, BookOpen, Clock, Navigation } from 'lucide-react';

export const LocationExplorer: React.FC = () => {
  const property = PROPERTIES[0]; // Villa Solaria
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoryIcons = {
    Aviation: <Plane size={16} />,
    Dining: <Utensils size={16} />,
    Yachting: <Anchor size={16} />,
    Education: <BookOpen size={16} />,
    Culture: <BookOpen size={16} />
  };

  const filteredPlaces = property.nearbyPlaces.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section
      id="location"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
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
            08 / Sovereign Geography
          </span>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: 'var(--text-primary)' }}>
                Neighborhood & Connectivity
              </h2>
              <p style={{ maxWidth: '600px', marginTop: '0.5rem' }}>
                Curated transit connectivity for {property.title}. Seamless private aviation, Michelin gastronomy, and Alpine cultural destinations.
              </p>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['All', 'Aviation', 'Dining', 'Yachting', 'Culture'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.45rem 1rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRadius: '2px',
                    border: activeCategory === cat ? '1px solid var(--text-primary)' : '1px solid var(--border-light)',
                    backgroundColor: activeCategory === cat ? 'var(--text-primary)' : 'var(--bg-surface)',
                    color: activeCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map & Directory Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left: Minimalist Architectural Cartography Map Simulation */}
          <div
            style={{
              position: 'relative',
              height: '440px',
              backgroundColor: '#EDEAE4',
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            {/* Styled Map Background Grid with Alpine Topography Contours */}
            <svg
              viewBox="0 0 500 400"
              style={{ width: '100%', height: '100%', backgroundColor: '#EFECE6' }}
            >
              {/* Mountain Contour Curves */}
              <path d="M 0 120 Q 150 70 300 130 T 500 80" fill="none" stroke="#DFDBD2" strokeWidth="2" />
              <path d="M 0 180 Q 200 130 350 210 T 500 160" fill="none" stroke="#DFDBD2" strokeWidth="2" />
              <path d="M 0 260 Q 120 220 280 290 T 500 240" fill="none" stroke="#DFDBD2" strokeWidth="2" />
              
              {/* River / Lake Waterway */}
              <path
                d="M 50 400 Q 180 320 240 220 T 420 0"
                fill="none"
                stroke="#C6D3D9"
                strokeWidth="18"
                strokeLinecap="round"
              />

              {/* Highway / Access Route */}
              <path
                d="M 0 350 Q 220 330 320 210 T 500 140"
                fill="none"
                stroke="#D1CEC4"
                strokeWidth="3"
                strokeDasharray="6 4"
              />

              {/* Main Estate Marker (Villa Solaria) */}
              <g transform="translate(250, 180)">
                <circle cx="0" cy="0" r="28" fill="rgba(179, 142, 93, 0.2)" />
                <circle cx="0" cy="0" r="14" fill="#B38E5D" />
                <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
                <text x="0" y="-22" textAnchor="middle" fontSize="12" fontFamily="Plus Jakarta Sans" fontWeight="700" fill="#121316">
                  VILLA SOLARIA
                </text>
              </g>

              {/* Nearby Waypoints */}
              <g transform="translate(120, 110)">
                <circle cx="0" cy="0" r="6" fill="#121316" />
                <text x="12" y="4" fontSize="10" fontFamily="Plus Jakarta Sans" fill="#5F6368">Samedan Jetport (8 min)</text>
              </g>

              <g transform="translate(380, 260)">
                <circle cx="0" cy="0" r="6" fill="#121316" />
                <text x="12" y="4" fontSize="10" fontFamily="Plus Jakarta Sans" fill="#5F6368">Badrutt’s Palace (4 min)</text>
              </g>

              <g transform="translate(290, 80)">
                <circle cx="0" cy="0" r="6" fill="#121316" />
                <text x="12" y="4" fontSize="10" fontFamily="Plus Jakarta Sans" fill="#5F6368">Corviglia Slopes (Direct)</text>
              </g>
            </svg>

            {/* Coordinates Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '0.4rem 0.85rem',
                borderRadius: '1px',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: 'var(--text-primary)'
              }}
            >
              GPS: 46°29'53.9"N 9°50'21.1"E • ALT: 1,822M
            </div>
          </div>

          {/* Right: Curated Proximity List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredPlaces.map((place) => (
              <div
                key={place.name}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-bronze-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-bronze)'
                    }}
                  >
                    {categoryIcons[place.category] || <Navigation size={16} />}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {place.name}
                    </h4>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                      {place.category}
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', justifyContent: 'flex-end', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                    <Clock size={13} color="var(--accent-bronze)" />
                    <span>{place.travelTime}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {place.distance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
