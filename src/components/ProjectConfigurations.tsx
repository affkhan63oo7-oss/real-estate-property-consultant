import React, { useState } from 'react';
import { TowerResidence, TOWER_RESIDENCES } from '../data/towerData';
import { ScrollReveal } from './ScrollReveal';
import { ArrowUpRight, Compass, Maximize2, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';

interface ProjectConfigurationsProps {
  onSelectResidence: (residence: TowerResidence) => void;
  onInquireResidence: (residence: TowerResidence) => void;
}

export const ProjectConfigurations: React.FC<ProjectConfigurationsProps> = ({
  onSelectResidence,
  onInquireResidence
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedResidenceId, setSelectedResidenceId] = useState<string>(TOWER_RESIDENCES[0].id);

  const filterTabs = [
    { id: 'all', label: 'All Categories' },
    { id: 'plots', label: 'Land & Plots' },
    { id: 'residential', label: 'Residential Property' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'development', label: 'Property Development' }
  ];

  const filteredResidences = TOWER_RESIDENCES.filter((r) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'plots') return r.type.includes('Plots') || r.type.includes('Land');
    if (activeTab === 'residential') return r.category === 'Residential' && !r.type.includes('Development');
    if (activeTab === 'commercial') return r.category === 'Commercial';
    if (activeTab === 'development') return r.type.includes('Development');
    return true;
  });

  const currentResidence =
    filteredResidences.find((r) => r.id === selectedResidenceId) ||
    filteredResidences[0] ||
    TOWER_RESIDENCES[0];

  return (
    <section
      id="configurations"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-dark-obsidian)',
        borderBottom: '1px solid var(--border-gold-subtle)',
        position: 'relative'
      }}
    >
      {/* Anchor fallback for legacy navigation */}
      <div id="properties" style={{ position: 'absolute', top: '-60px' }} />
      <div id="residences" style={{ position: 'absolute', top: '-60px' }} />
      <div id="availability" style={{ position: 'absolute', top: '-60px' }} />

      <div className="container-editorial">
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center', maxWidth: '850px', marginInline: 'auto' }}>
          <ScrollReveal delay={0} distance={10}>
            <div className="eyebrow-pill" style={{ marginInline: 'auto' }}>
              <Compass size={12} color="var(--accent-gold)" />
              <span>Properties & Plots • Pune</span>
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
              Explore Properties &{' '}
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--accent-gold)'
                }}
              >
                Development Land
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} distance={12}>
            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                fontStyle: 'italic',
                color: 'rgba(250, 248, 245, 0.78)',
                lineHeight: 1.6
              }}
            >
              Residential land & plots, commercial plots, and curated residential & commercial properties across Pune, Marunji, Hinjawadi, and Narhe.
            </p>
          </ScrollReveal>

          {/* Configuration Filter Tabs */}
          <ScrollReveal delay={180} distance={10}>
            <div
              style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '2rem',
                padding: '0.4rem',
                backgroundColor: 'rgba(22, 29, 25, 0.65)',
                border: '1px solid var(--border-gold-subtle)',
                borderRadius: '9999px'
              }}
            >
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      const matching = TOWER_RESIDENCES.filter((r) => {
                        if (tab.id === 'all') return true;
                        if (tab.id === 'plots') return r.type.includes('Plots') || r.type.includes('Land');
                        if (tab.id === 'residential') return r.category === 'Residential' && !r.type.includes('Development');
                        if (tab.id === 'commercial') return r.category === 'Commercial';
                        if (tab.id === 'development') return r.type.includes('Development');
                        return true;
                      });
                      if (matching.length > 0) {
                        setSelectedResidenceId(matching[0].id);
                      }
                    }}
                    style={{
                      padding: '0.55rem 1.25rem',
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: isActive ? '#0D1310' : 'rgba(250, 248, 245, 0.75)',
                      backgroundColor: isActive ? 'var(--accent-gold)' : 'transparent',
                      border: 'none',
                      borderRadius: '9999px',
                      cursor: 'pointer',
                      transition: 'all 0.25s var(--ease-cinematic)'
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Selected Configuration Showcase Box */}
        <ScrollReveal delay={120} distance={16}>
          <div
            className="card-editorial"
            style={{
              padding: 'clamp(1.25rem, 3vw, 2.5rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'center'
            }}
          >
            {/* Left: 2D Architectural Floor Plan Blueprint */}
            <div>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(280px, 42vw, 460px)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#0A0F0D',
                  border: '1px solid rgba(201, 169, 130, 0.25)',
                  cursor: 'pointer'
                }}
                onClick={() => onSelectResidence(currentResidence)}
                data-cursor="explore"
              >
                <img
                  src="/images/floor-plan.jpg"
                  alt={`${currentResidence.residenceNumber} Floor Plan`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Top Corner Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(13, 19, 16, 0.88)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(201, 169, 130, 0.25)',
                    color: 'var(--accent-gold)',
                    fontFamily: 'var(--font-title)',
                    fontSize: '0.625rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase'
                  }}
                >
                  Verified CAD Blueprint
                </div>

                {/* Bottom Overlay Trigger */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(13, 19, 16, 0.9)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(201, 169, 130, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: '#FAF8F5', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                    Click to view complete architectural dossier
                  </span>
                  <Maximize2 size={16} color="var(--accent-gold)" />
                </div>
              </div>

              {/* Sub-selector pills if multiple matching residences */}
              {filteredResidences.length > 1 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  {filteredResidences.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setSelectedResidenceId(r.id)}
                      style={{
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.6875rem',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 500,
                        borderRadius: '6px',
                        backgroundColor: selectedResidenceId === r.id ? 'rgba(201, 169, 130, 0.2)' : 'rgba(22, 29, 25, 0.5)',
                        border: `1px solid ${selectedResidenceId === r.id ? 'var(--accent-gold)' : 'rgba(201, 169, 130, 0.15)'}`,
                        color: selectedResidenceId === r.id ? 'var(--accent-gold)' : '#FAF8F5',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {r.residenceNumber}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Detailed Configuration Specs & CTAs */}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  display: 'block',
                  marginBottom: '0.45rem'
                }}
              >
                Floor {currentResidence.floor} • {currentResidence.exposure}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                  color: '#FAF8F5',
                  lineHeight: 1.2,
                  marginBottom: '0.75rem'
                }}
              >
                {currentResidence.residenceNumber}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  color: 'rgba(250, 248, 245, 0.85)',
                  lineHeight: 1.55,
                  marginBottom: '1rem'
                }}
              >
                "{currentResidence.tagline}"
              </p>

              <p style={{ color: 'rgba(250, 248, 245, 0.7)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                {currentResidence.description}
              </p>

              {/* 6-Grid Key Specs Pills */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 115px), 1fr))',
                  gap: '0.65rem',
                  marginBottom: '1.75rem'
                }}
              >
                <div style={{ padding: '0.75rem', backgroundColor: 'rgba(22, 29, 25, 0.55)', borderRadius: '8px', border: '1px solid rgba(201, 169, 130, 0.15)' }}>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', color: 'var(--accent-gold)', letterSpacing: '0.1em', display: 'block', textTransform: 'uppercase' }}>
                    Carpet Area
                  </span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#FAF8F5' }}>
                    {currentResidence.interiorSqFt.toLocaleString()} Sq.Ft
                  </span>
                </div>

                <div style={{ padding: '0.75rem', backgroundColor: 'rgba(22, 29, 25, 0.55)', borderRadius: '8px', border: '1px solid rgba(201, 169, 130, 0.15)' }}>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', color: 'var(--accent-gold)', letterSpacing: '0.1em', display: 'block', textTransform: 'uppercase' }}>
                    Orientation
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FAF8F5', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>
                    {currentResidence.exposure}
                  </span>
                </div>

                <div style={{ padding: '0.75rem', backgroundColor: 'rgba(22, 29, 25, 0.55)', borderRadius: '8px', border: '1px solid rgba(201, 169, 130, 0.15)' }}>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', color: 'var(--accent-gold)', letterSpacing: '0.1em', display: 'block', textTransform: 'uppercase' }}>
                    Ceiling
                  </span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#FAF8F5' }}>
                    {currentResidence.ceilingHeight}
                  </span>
                </div>

                <div style={{ padding: '0.75rem', backgroundColor: 'rgba(22, 29, 25, 0.55)', borderRadius: '8px', border: '1px solid rgba(201, 169, 130, 0.15)' }}>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', color: 'var(--accent-gold)', letterSpacing: '0.1em', display: 'block', textTransform: 'uppercase' }}>
                    Level
                  </span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#FAF8F5' }}>
                    Floor {currentResidence.floor}
                  </span>
                </div>

                <div style={{ padding: '0.75rem', backgroundColor: 'rgba(22, 29, 25, 0.55)', borderRadius: '8px', border: '1px solid rgba(201, 169, 130, 0.15)' }}>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', color: 'var(--accent-gold)', letterSpacing: '0.1em', display: 'block', textTransform: 'uppercase' }}>
                    Rooms
                  </span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#FAF8F5' }}>
                    {currentResidence.bedrooms > 0 ? `${currentResidence.bedrooms}B / ${currentResidence.bathrooms}B` : 'Commercial'}
                  </span>
                </div>

                <div style={{ padding: '0.75rem', backgroundColor: 'rgba(22, 29, 25, 0.55)', borderRadius: '8px', border: '1px solid rgba(201, 169, 130, 0.15)' }}>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', color: 'var(--accent-gold)', letterSpacing: '0.1em', display: 'block', textTransform: 'uppercase' }}>
                    Guidance
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-gold)', whiteSpace: 'nowrap' }}>
                    {currentResidence.priceFormatted}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
                <button
                  onClick={() => onInquireResidence(currentResidence)}
                  className="btn-gold-primary"
                  style={{ minHeight: '44px' }}
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight size={16} />
                </button>

                <button
                  onClick={() => onSelectResidence(currentResidence)}
                  className="btn-gold-outline"
                  style={{ minHeight: '44px' }}
                >
                  <FileText size={15} />
                  <span>Get Property Details</span>
                </button>

                <a
                  href={`https://wa.me/917210320001?text=Hello%20Future%20Construction%2C%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(currentResidence.residenceNumber)}%20at%20${encodeURIComponent(currentResidence.location || 'Pune')}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-outline"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    borderColor: 'var(--accent-gold)',
                    color: 'var(--accent-gold)',
                    minHeight: '44px'
                  }}
                >
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
