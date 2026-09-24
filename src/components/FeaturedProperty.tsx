import React, { useState } from 'react';
import { Property } from '../types';
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, Calendar, Heart } from 'lucide-react';

interface FeaturedPropertyProps {
  property: Property;
  onExplore: (property: Property) => void;
  onSchedule: (property: Property) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const FeaturedProperty: React.FC<FeaturedPropertyProps> = ({
  property,
  onExplore,
  onSchedule,
  isFavorite,
  onToggleFavorite
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="featured"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container-luxury">
        {/* Header Header & Location */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          <div>
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
              02 / Landmark Feature
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', color: 'var(--text-primary)' }}>
              {property.title}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <MapPin size={16} color="var(--accent-bronze)" />
              <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                {property.location.address}, {property.location.city}, {property.location.country}
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                display: 'block',
                marginBottom: '0.25rem'
              }}
            >
              Acquisition Value
            </span>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                color: 'var(--text-primary)',
                fontWeight: 400
              }}
            >
              {property.priceFormatted}
            </div>
          </div>
        </div>

        {/* Cinematic Master Image Box with Hover Scale & Cursor Flag */}
        <div
          data-cursor="explore"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => onExplore(property)}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(420px, 60vh, 750px)',
            borderRadius: '2px',
            overflow: 'hidden',
            cursor: 'pointer',
            backgroundColor: '#0F1012',
            boxShadow: 'var(--shadow-floating)'
          }}
        >
          <img
            src={property.heroImage}
            alt={property.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />

          {/* Subtle Gradient Veil */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(12, 13, 16, 0.85) 0%, rgba(12, 13, 16, 0.2) 50%, rgba(12, 13, 16, 0.3) 100%)',
              transition: 'opacity 0.4s'
            }}
          />

          {/* Top Right Wishlist Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(property.id);
            }}
            title={isFavorite ? 'Remove from Wishlist' : 'Add to Wishlist'}
            style={{
              position: 'absolute',
              top: '1.75rem',
              right: '1.75rem',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(8px)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-subtle)',
              transition: 'transform 0.2s, background-color 0.2s',
              zIndex: 2
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Heart
              size={20}
              fill={isFavorite ? '#B38E5D' : 'none'}
              color={isFavorite ? '#B38E5D' : '#121316'}
            />
          </button>

          {/* Architectural Badge */}
          <div
            style={{
              position: 'absolute',
              top: '1.75rem',
              left: '1.75rem',
              backgroundColor: 'rgba(18, 19, 22, 0.85)',
              backdropFilter: 'blur(10px)',
              padding: '0.5rem 1rem',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '1px',
              color: '#FFFFFF',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}
          >
            {property.subtitle}
          </div>

          {/* Bottom Specifications Bar Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '2rem',
              color: '#FFFFFF'
            }}
          >
            {/* Tagline & Firm */}
            <div style={{ maxWidth: '600px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
                  fontStyle: 'italic',
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  marginBottom: '0.75rem'
                }}
              >
                "{property.tagline}"
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.08em',
                  color: 'rgba(255, 255, 255, 0.75)'
                }}
              >
                Architecture by {property.architect.name}
              </span>
            </div>

            {/* Quick Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSchedule(property);
                }}
                className="btn-luxury-secondary"
                style={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(6px)',
                  padding: '0.85rem 1.75rem',
                  fontSize: '0.75rem'
                }}
              >
                <Calendar size={14} />
                <span>Private Viewing</span>
              </button>

              <button
                onClick={() => onExplore(property)}
                className="btn-luxury-primary"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#121316',
                  borderColor: '#FFFFFF',
                  padding: '0.85rem 1.75rem',
                  fontSize: '0.75rem'
                }}
              >
                <span>Dossier</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Four Key Specs Ribbon */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            paddingTop: '2.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-bronze)' }}>
              <Bed size={22} strokeWidth={1.5} />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Bedrooms</span>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {property.specs.bedrooms} Suite Chambers
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-bronze)' }}>
              <Bath size={22} strokeWidth={1.5} />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Bathrooms</span>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {property.specs.bathrooms} Travertine Baths
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-bronze)' }}>
              <Maximize2 size={22} strokeWidth={1.5} />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Interior Living</span>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {property.specs.interiorSqFt.toLocaleString()} sq ft
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-bronze)' }}>
              <Maximize2 size={22} strokeWidth={1.5} />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Private Grounds</span>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {property.specs.exteriorSqFt.toLocaleString()} sq ft
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
