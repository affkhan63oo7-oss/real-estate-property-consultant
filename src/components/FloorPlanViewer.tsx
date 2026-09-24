import React, { useState } from 'react';
import { PROPERTIES } from '../data/mockData';
import { Layers, Maximize, Check } from 'lucide-react';

export const FloorPlanViewer: React.FC = () => {
  const property = PROPERTIES[0]; // Villa Solaria
  const [activeLevelIndex, setActiveLevelIndex] = useState(1); // Default to Grand Living
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number | null>(0);

  const activeLevel = property.floorPlans[activeLevelIndex];
  const selectedRoom = selectedRoomIndex !== null ? activeLevel.rooms[selectedRoomIndex] : null;

  return (
    <section
      id="floorplans"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--bg-surface)',
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
            06 / Spatial Blueprint
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
                Interactive Floor Plans
              </h2>
              <p style={{ maxWidth: '600px', marginTop: '0.5rem' }}>
                Examine the spatial choreography of {property.title}. Switch between elevation tiers to inspect room dimensions, sightlines, and circulation paths.
              </p>
            </div>

            {/* Level Tabs */}
            <div
              style={{
                display: 'flex',
                backgroundColor: 'var(--bg-primary)',
                padding: '4px',
                borderRadius: '2px',
                border: '1px solid var(--border-light)'
              }}
            >
              {property.floorPlans.map((plan, idx) => (
                <button
                  key={plan.level}
                  onClick={() => {
                    setActiveLevelIndex(idx);
                    setSelectedRoomIndex(0);
                  }}
                  style={{
                    padding: '0.5rem 1.25rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: 'none',
                    borderRadius: '2px',
                    backgroundColor: activeLevelIndex === idx ? 'var(--text-primary)' : 'transparent',
                    color: activeLevelIndex === idx ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {plan.level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blueprint Viewer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-light)',
            padding: 'clamp(1.5rem, 3.5vw, 3rem)',
            borderRadius: '2px'
          }}
        >
          {/* Left: Interactive Architectural SVG Diagram */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-medium)',
              borderRadius: '2px',
              padding: '2rem',
              boxShadow: 'var(--shadow-subtle)',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {activeLevel.level} Blueprint
                </span>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {activeLevel.title}
                </h4>
              </div>
              <div className="badge-luxury">
                {activeLevel.sqFt.toLocaleString()} sq ft Total
              </div>
            </div>

            {/* Architectural SVG Floor Diagram with Interactive Zones */}
            <svg
              viewBox="0 0 600 360"
              style={{
                width: '100%',
                height: 'auto',
                border: '1px dashed #D1CEC6',
                backgroundColor: '#FAF9F6'
              }}
            >
              {/* Outer Boundary Wall */}
              <rect x="30" y="30" width="540" height="300" fill="none" stroke="#121316" strokeWidth="3" />
              
              {/* Room A (Grand Salon / Main Chamber) */}
              <g
                onClick={() => setSelectedRoomIndex(0)}
                style={{ cursor: 'pointer' }}
              >
                <rect
                  x="30"
                  y="30"
                  width="320"
                  height="180"
                  fill={selectedRoomIndex === 0 ? 'rgba(179, 142, 93, 0.25)' : '#FFFFFF'}
                  stroke="#121316"
                  strokeWidth="1.5"
                  style={{ transition: 'all 0.3s' }}
                />
                <text x="190" y="115" textAnchor="middle" fontSize="13" fontFamily="Plus Jakarta Sans" fontWeight="600" fill="#121316">
                  {activeLevel.rooms[0]?.name || 'Primary Living'}
                </text>
                <text x="190" y="135" textAnchor="middle" fontSize="11" fontFamily="Plus Jakarta Sans" fill="#6A6D75">
                  {activeLevel.rooms[0]?.size || '1,800 sq ft'}
                </text>
              </g>

              {/* Room B (Dining / Secondary) */}
              <g
                onClick={() => setSelectedRoomIndex(1)}
                style={{ cursor: 'pointer' }}
              >
                <rect
                  x="350"
                  y="30"
                  width="220"
                  height="180"
                  fill={selectedRoomIndex === 1 ? 'rgba(179, 142, 93, 0.25)' : '#FAF9F6'}
                  stroke="#121316"
                  strokeWidth="1.5"
                  style={{ transition: 'all 0.3s' }}
                />
                <text x="460" y="115" textAnchor="middle" fontSize="13" fontFamily="Plus Jakarta Sans" fontWeight="600" fill="#121316">
                  {activeLevel.rooms[1]?.name || 'Secondary Chamber'}
                </text>
                <text x="460" y="135" textAnchor="middle" fontSize="11" fontFamily="Plus Jakarta Sans" fill="#6A6D75">
                  {activeLevel.rooms[1]?.size || '750 sq ft'}
                </text>
              </g>

              {/* Room C (Kitchen / Study) */}
              <g
                onClick={() => setSelectedRoomIndex(2)}
                style={{ cursor: 'pointer' }}
              >
                <rect
                  x="30"
                  y="210"
                  width="260"
                  height="120"
                  fill={selectedRoomIndex === 2 ? 'rgba(179, 142, 93, 0.25)' : '#FAF9F6'}
                  stroke="#121316"
                  strokeWidth="1.5"
                  style={{ transition: 'all 0.3s' }}
                />
                <text x="160" y="265" textAnchor="middle" fontSize="13" fontFamily="Plus Jakarta Sans" fontWeight="600" fill="#121316">
                  {activeLevel.rooms[2]?.name || 'Atelier'}
                </text>
                <text x="160" y="285" textAnchor="middle" fontSize="11" fontFamily="Plus Jakarta Sans" fill="#6A6D75">
                  {activeLevel.rooms[2]?.size || '600 sq ft'}
                </text>
              </g>

              {/* Room D (Terrace / Outdoor Deck) */}
              <g
                onClick={() => setSelectedRoomIndex(3)}
                style={{ cursor: 'pointer' }}
              >
                <rect
                  x="290"
                  y="210"
                  width="280"
                  height="120"
                  fill={selectedRoomIndex === 3 ? 'rgba(179, 142, 93, 0.25)' : '#FFFFFF'}
                  stroke="#121316"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  style={{ transition: 'all 0.3s' }}
                />
                <text x="430" y="265" textAnchor="middle" fontSize="13" fontFamily="Plus Jakarta Sans" fontWeight="600" fill="#121316">
                  {activeLevel.rooms[3]?.name || 'Cantilever Deck'}
                </text>
                <text x="430" y="285" textAnchor="middle" fontSize="11" fontFamily="Plus Jakarta Sans" fill="#6A6D75">
                  {activeLevel.rooms[3]?.size || '1,000 sq ft'}
                </text>
              </g>

              {/* Compass Needle */}
              <g transform="translate(540, 60)">
                <circle cx="0" cy="0" r="14" fill="none" stroke="#D1CEC6" />
                <path d="M0 -12 L4 0 L-4 0 Z" fill="#B38E5D" />
                <text x="0" y="-15" textAnchor="middle" fontSize="9" fontWeight="700" fill="#121316">N</text>
              </g>
            </svg>

            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem' }}>
              Click any spatial zone to inspect dimensions and bespoke specifications.
            </span>
          </div>

          {/* Right: Room Inspector & Elevation Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-bronze)'
                }}
              >
                Elevation Profile
              </span>
              <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                {activeLevel.title}
              </h3>
              <p style={{ marginTop: '0.5rem', lineHeight: 1.8 }}>
                {activeLevel.description}
              </p>
            </div>

            {/* Room Breakdown Clickable List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {activeLevel.rooms.map((room, idx) => {
                const isSelected = selectedRoomIndex === idx;
                return (
                  <div
                    key={room.name}
                    onClick={() => setSelectedRoomIndex(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1rem 1.25rem',
                      backgroundColor: isSelected ? 'var(--text-primary)' : 'var(--bg-surface)',
                      color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                      border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--border-light)',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: isSelected ? 'var(--accent-bronze)' : '#D1CEC6'
                        }}
                      />
                      <span style={{ fontSize: '0.9375rem', fontWeight: 600 }}>{room.name}</span>
                    </div>
                    <span style={{ fontSize: '0.8125rem', color: isSelected ? '#C9A982' : 'var(--text-secondary)' }}>
                      {room.size}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Selected Room Details Callout */}
            {selectedRoom && (
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  padding: '1.25rem',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div style={{ color: 'var(--accent-bronze)' }}>
                  <Maximize size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Active Spatial Focus
                  </span>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {selectedRoom.name} — {selectedRoom.size}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
