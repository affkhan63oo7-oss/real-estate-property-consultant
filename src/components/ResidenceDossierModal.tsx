import React from 'react';
import { TowerResidence } from '../data/towerData';
import { X, ArrowUpRight, Check, Phone } from 'lucide-react';

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
          aria-label="Close dossier"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(250, 248, 245, 0.92)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          <X size={18} color="#1A1917" />
        </button>

        {/* Hero Image */}
        <div style={{ position: 'relative', width: '100%', height: 'clamp(240px, 45vw, 440px)', overflow: 'hidden' }}>
          <img
            src={residence.imageHero}
            alt={residence.residenceNumber}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(27, 25, 23, 0.92) 0%, rgba(27, 25, 23, 0.3) 60%, transparent 100%)'
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
              color: '#FAF8F5',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div style={{ flex: '1 1 240px' }}>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                {residence.type} • Floor {residence.floor} • {residence.location || 'Hinjawadi, Pune'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#FAF8F5', marginTop: '0.25rem', lineHeight: 1.15 }}>
                {residence.residenceNumber}
              </h2>
              <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-editorial)', fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', color: '#FAF8F5' }}>
                {residence.tagline}
              </span>
            </div>

            <div>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250, 248, 245, 0.7)' }}>
                Price / Terms
              </span>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.75rem, 4vw, 2.4rem)', color: '#FAF8F5', fontWeight: 500 }}>
                {residence.priceFormatted}
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: 'clamp(1.25rem, 3.5vw, 3rem)' }}>
          {/* Quick Specifications Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 120px), 1fr))',
              gap: '1rem',
              borderBottom: '1px solid var(--hairline-light)',
              paddingBottom: '1.75rem',
              marginBottom: '2rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Configuration
              </span>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                {residence.bedrooms > 0 ? `${residence.bedrooms} BHK` : 'Commercial Unit'}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Bathrooms
              </span>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                {residence.bathrooms} Baths
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Carpet Area
              </span>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                {residence.interiorSqFt.toLocaleString()} SQ FT
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Location
              </span>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                {residence.location || 'Hinjawadi, Pune'}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Facing / View
              </span>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'var(--text-espresso)', marginTop: '0.2rem' }}>
                {residence.exposure}
              </div>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-espresso)', marginBottom: '0.75rem' }}>
              Property Overview
            </h3>
            <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', lineHeight: 1.8, color: 'var(--text-espresso)' }}>
              {residence.description}
            </p>
          </div>

          {/* Key Features */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'var(--text-espresso)', marginBottom: '1rem', letterSpacing: '0.08em' }}>
              Key Highlights & Amenities
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '0.85rem' }}>
              {residence.keyFeatures.map((feat) => (
                <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Check size={14} color="var(--accent-gold)" />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-bronze)' }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Ribbon */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--hairline-light)', paddingTop: '1.75rem' }}>
            <button
              onClick={onClose}
              className="btn-111-secondary"
              style={{ flex: '1 1 120px', minHeight: '44px' }}
            >
              Close
            </button>

            <a
              href="tel:+917210320001"
              className="btn-111-secondary"
              style={{
                flex: '1 1 140px',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                textDecoration: 'none',
                color: 'var(--text-espresso)'
              }}
            >
              <Phone size={14} color="var(--accent-gold)" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/917210320001?text=Hello%20Future%20Construction%2C%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(residence.residenceNumber)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-111-secondary"
              style={{
                flex: '1 1 140px',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                textDecoration: 'none',
                borderColor: 'var(--accent-gold)',
                color: 'var(--accent-gold)'
              }}
            >
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onInquire(residence);
              }}
              className="btn-111-primary"
              style={{ flex: '2 1 180px', minHeight: '44px' }}
            >
              <span>Enquire Now</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
