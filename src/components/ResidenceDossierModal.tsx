import React from 'react';
import { TowerResidence } from '../data/towerData';
import { X, ArrowUpRight, Check, Compass } from 'lucide-react';

interface ResidenceDossierModalProps {
  residence: TowerResidence | null;
  onClose: () => void;
  onInquire: (residence: TowerResidence) => void;
}

export const ResidenceDossierModal: React.FC<ResidenceDossierModalProps> = ({
  residence,
  onClose,
  onInquire
}) => {
  if (!residence) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(18, 17, 16, 0.88)',
        backdropFilter: 'blur(16px)',
        zIndex: 2200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.5rem, 2vw, 2rem)',
        animation: 'fadeIn 0.3s var(--ease-cinematic)'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1100px',
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-parchment)',
          border: '1px solid var(--hairline-light)',
          boxShadow: 'var(--shadow-elevated)',
          position: 'relative'
        }}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(250, 248, 245, 0.9)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} color="#1A1917" />
        </button>

        {/* Hero Image */}
        <div style={{ position: 'relative', width: '100%', height: '460px', overflow: 'hidden' }}>
          <img
            src={residence.imageHero}
            alt={residence.residenceNumber}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(27, 25, 23, 0.9) 0%, rgba(27, 25, 23, 0.2) 60%, transparent 100%)'
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              color: '#FAF8F5',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                {residence.type} • Floor {residence.floor}
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', color: '#FAF8F5', marginTop: '0.25rem' }}>
                {residence.residenceNumber}
              </h2>
              <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', color: '#FAF8F5' }}>
                {residence.tagline}
              </span>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250, 248, 245, 0.7)' }}>
                Acquisition Value
              </span>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.4rem', color: '#FAF8F5', fontWeight: 500 }}>
                {residence.priceFormatted}
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: 'clamp(1.5rem, 4vw, 3.5rem)' }}>
          {/* Quick Specifications Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
              borderBottom: '1px solid var(--hairline-light)',
              paddingBottom: '2rem',
              marginBottom: '2.5rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Bedrooms
              </span>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                {residence.bedrooms} Suites
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Bathrooms
              </span>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                {residence.bathrooms}.{residence.powderRooms} Baths
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Interior Living
              </span>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                {residence.interiorSqFt.toLocaleString()} SQ FT
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Ceiling Height
              </span>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                {residence.ceilingHeight}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Exposures
              </span>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                {residence.exposure}
              </div>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-espresso)', marginBottom: '0.75rem' }}>
              Architectural Dossier
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.85 }}>
              {residence.description}
            </p>
          </div>

          {/* Key Features */}
          <div style={{ marginBottom: '3rem' }}>
            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.15rem', color: 'var(--text-espresso)', marginBottom: '1rem', letterSpacing: '0.08em' }}>
              Distinctive Finishes & Specifications
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
              {residence.keyFeatures.map((feat) => (
                <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Check size={14} color="var(--accent-gold)" />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-bronze)' }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Ribbon */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', borderTop: '1px solid var(--hairline-light)', paddingTop: '2rem' }}>
            <button
              onClick={onClose}
              className="btn-111-secondary"
            >
              Close Dossier
            </button>

            <button
              onClick={() => {
                onClose();
                onInquire(residence);
              }}
              className="btn-111-primary"
            >
              <span>Schedule Private Salon Viewing</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
