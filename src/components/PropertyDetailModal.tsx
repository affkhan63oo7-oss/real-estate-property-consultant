import React from 'react';
import { Property } from '../types';
import { X, Bed, Bath, Maximize2, MapPin, Calendar, Heart, Shield, Check, Compass, Download, ArrowUpRight, Share2 } from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onSchedule: (property: Property) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenGallery: (startIndex: number) => void;
  onToast: (msg: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onSchedule,
  isFavorite,
  onToggleFavorite,
  onOpenGallery,
  onToast
}) => {
  if (!property) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.tagline,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      onToast('Dossier link copied to clipboard.');
    }
  };

  const handleDownloadBrochure = () => {
    onToast(`Preparing Architectural PDF Dossier for ${property.title}...`);
    setTimeout(() => {
      onToast(`PDF Dossier (${property.title}) downloaded.`);
    }, 1500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 11, 13, 0.85)',
        backdropFilter: 'blur(16px)',
        zIndex: 1900,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.5rem, 2vw, 2rem)',
        animation: 'fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
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
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          borderRadius: '2px',
          boxShadow: 'var(--shadow-floating)',
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
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <X size={20} color="#121316" />
        </button>

        {/* Hero Image Section */}
        <div style={{ position: 'relative', width: '100%', height: '480px', overflow: 'hidden' }}>
          <img
            src={property.heroImage}
            alt={property.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(12, 13, 16, 0.9) 0%, rgba(12, 13, 16, 0.2) 60%, rgba(12, 13, 16, 0.4) 100%)'
            }}
          />

          {/* Top Actions */}
          <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', display: 'flex', gap: '0.75rem' }}>
            <span
              style={{
                backgroundColor: 'rgba(18, 19, 22, 0.85)',
                color: '#FFFFFF',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '0.4rem 0.85rem',
                borderRadius: '1px'
              }}
            >
              {property.category} • {property.status}
            </span>
          </div>

          {/* Bottom Title & Value */}
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
              gap: '1.5rem',
              color: '#FFFFFF'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <MapPin size={15} color="#C9A982" />
                <span style={{ fontSize: '0.875rem', color: '#EDE8DF' }}>
                  {property.location.address}, {property.location.city}, {property.location.country}
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', color: '#FFFFFF' }}>
                {property.title}
              </h2>
              <span style={{ fontSize: '1rem', fontStyle: 'italic', color: '#C9A982', display: 'block', marginTop: '0.2rem' }}>
                {property.subtitle}
              </span>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255, 255, 255, 0.7)' }}>
                Acquisition Value
              </span>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: '#FFFFFF', fontWeight: 400 }}>
                {property.priceFormatted}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
          {/* Quick Action Ribbon */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingBottom: '2rem',
              marginBottom: '2.5rem',
              borderBottom: '1px solid var(--border-light)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => onSchedule(property)}
                className="btn-luxury-primary"
              >
                <Calendar size={15} />
                <span>Schedule Private Viewing</span>
              </button>

              <button
                onClick={handleDownloadBrochure}
                className="btn-luxury-secondary"
              >
                <Download size={15} />
                <span>Download PDF Dossier</span>
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={handleShare}
                className="btn-luxury-secondary"
                style={{ padding: '0.75rem' }}
                title="Share Dossier"
              >
                <Share2 size={16} />
              </button>

              <button
                onClick={() => onToggleFavorite(property.id)}
                className="btn-luxury-secondary"
                style={{ padding: '0.75rem' }}
                title="Save Property"
              >
                <Heart size={16} fill={isFavorite ? '#B38E5D' : 'none'} color={isFavorite ? '#B38E5D' : 'var(--text-primary)'} />
              </button>
            </div>
          </div>

          {/* 4 Architectural Specs Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              marginBottom: '3rem'
            }}
          >
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Bedrooms</span>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{property.specs.bedrooms} Suites</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Bathrooms</span>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{property.specs.bathrooms} Baths</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Interior</span>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{property.specs.interiorSqFt.toLocaleString()} sq ft</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1.25rem', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Grounds</span>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{property.specs.exteriorSqFt.toLocaleString()} sq ft</div>
            </div>
          </div>

          {/* Architectural Narrative */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.65rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Architectural Concept & Narrative
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              {property.description}
            </p>
            {property.story.map((para, idx) => (
              <p key={idx} style={{ fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                {para}
              </p>
            ))}
          </div>

          {/* Architect Credit Callout */}
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderLeft: '3px solid var(--accent-bronze)',
              padding: '1.5rem',
              marginBottom: '3rem',
              borderRadius: '1px'
            }}
          >
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-bronze)' }}>
              Architectural Lineage
            </span>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
              {property.architect.name} ({property.architect.firm})
            </div>
            <p style={{ fontStyle: 'italic', fontSize: '0.875rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
              "{property.architect.philosophy}"
            </p>
          </div>

          {/* Gallery Ribbon */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                Visual Documentation
              </h3>
              <button
                onClick={() => onOpenGallery(0)}
                className="btn-luxury-ghost"
              >
                Expand Gallery Lightbox
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem'
              }}
            >
              {property.gallery.map((img, idx) => (
                <div
                  key={img.url}
                  onClick={() => onOpenGallery(idx)}
                  style={{
                    height: '160px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.5rem',
                      left: '0.5rem',
                      backgroundColor: 'rgba(18, 19, 22, 0.8)',
                      color: '#FFFFFF',
                      fontSize: '0.625rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '1px'
                    }}
                  >
                    {img.category}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Checklist */}
          <div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
              Technical Features & Sovereign Security
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem'
              }}
            >
              {property.features.map((feat) => (
                <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Check size={16} color="var(--accent-bronze)" />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
