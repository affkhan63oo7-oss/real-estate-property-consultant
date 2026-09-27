import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { GalleryLightbox } from './GalleryLightbox';
import { Eye, Sparkles, Maximize2 } from 'lucide-react';

interface GalleryItem {
  url: string;
  caption: string;
  category: string;
  span?: string;
  aspect?: string;
}

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'exterior', label: 'Architectural Elevations' },
    { id: 'interior', label: 'Living Salons' },
    { id: 'amenity', label: 'Amenities & Grounds' }
  ];

  const galleryItems: GalleryItem[] = [
    {
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
      caption: 'Contemporary Architectural Elevation Framing Western Skies',
      category: 'exterior',
      span: 'featured'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      caption: 'Double-Height Living Salon with Natural Daylight Azimuth',
      category: 'interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
      caption: 'Clubhouse Recreative Deck & Landscaped Sit-out',
      category: 'amenity'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
      caption: 'Panoramic Deck Overlooking Pune Landscapes',
      category: 'interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85',
      caption: 'Fully Equipped Air-Conditioned Gymnasium & Fitness Center',
      category: 'amenity'
    },
    {
      url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      caption: 'Culinary Studio with Modular Finishes & Service Utility',
      category: 'interior'
    }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section
      id="gallery"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-dark-surface)',
        borderBottom: '1px solid var(--border-gold-subtle)',
        position: 'relative'
      }}
    >
      <div className="container-editorial">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center', maxWidth: '850px', marginInline: 'auto' }}>
          <ScrollReveal delay={0} distance={10}>
            <div className="eyebrow-pill" style={{ marginInline: 'auto' }}>
              <Eye size={12} color="var(--accent-gold)" />
              <span>Architectural Perspectives</span>
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
              A Glimpse of{' '}
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--accent-gold)'
                }}
              >
                What Awaits
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
              An asymmetric visual journey through form, spatial choreography, and refined residential living.
            </p>
          </ScrollReveal>

          {/* Filter Pills */}
          <ScrollReveal delay={180} distance={10}>
            <div
              style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '1.75rem',
                padding: '0.4rem',
                backgroundColor: 'rgba(22, 29, 25, 0.65)',
                border: '1px solid var(--border-gold-subtle)',
                borderRadius: '9999px'
              }}
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      padding: '0.5rem 1.15rem',
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
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Asymmetrical Editorial Collage */}
        <ScrollReveal delay={120} distance={16}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'clamp(1rem, 2vw, 1.5rem)'
            }}
          >
            {/* Featured Large Hero Photo (Left Spanning 7 Cols) */}
            {filteredItems[0] && (
              <div
                style={{
                  gridColumn: 'span 12',
                  position: 'relative'
                }}
                className="desktop-span-7"
              >
                <div
                  className="card-editorial"
                  style={{
                    position: 'relative',
                    height: 'clamp(300px, 45vw, 560px)',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => setLightboxIndex(0)}
                  data-cursor="explore"
                >
                  <img
                    src={filteredItems[0].url}
                    alt={filteredItems[0].caption}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s var(--ease-cinematic)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(13, 19, 16, 0.9) 0%, transparent 60%)'
                    }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      left: '1.25rem',
                      right: '1.25rem',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      gap: '1rem'
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '0.625rem',
                          fontFamily: 'var(--font-title)',
                          color: 'var(--accent-gold)',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '0.25rem'
                        }}
                      >
                        Featured Perspective
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', color: '#FAF8F5' }}>
                        {filteredItems[0].caption}
                      </h4>
                    </div>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(13, 19, 16, 0.85)',
                        border: '1px solid var(--accent-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-gold)',
                        flexShrink: 0
                      }}
                    >
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Stacked 2 Photos (Right Spanning 5 Cols) */}
            <div
              style={{
                gridColumn: 'span 12',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(1rem, 2vw, 1.5rem)'
              }}
              className="desktop-span-5"
            >
              {filteredItems.slice(1, 3).map((item, idx) => (
                <div
                  key={item.caption}
                  className="card-editorial"
                  style={{
                    position: 'relative',
                    height: 'clamp(200px, 22vw, 268px)',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => setLightboxIndex(idx + 1)}
                  data-cursor="explore"
                >
                  <img
                    src={item.url}
                    alt={item.caption}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s var(--ease-cinematic)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(13, 19, 16, 0.85) 0%, transparent 60%)'
                    }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem'
                    }}
                  >
                    <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-title)', color: '#FAF8F5', fontWeight: 500 }}>
                      {item.caption}
                    </span>
                    <Maximize2 size={14} color="var(--accent-gold)" />
                  </div>
                </div>
              ))}
            </div>

            {/* Remaining 3 Balanced Photos */}
            {filteredItems.slice(3, 6).map((item, idx) => (
              <div
                key={item.caption}
                style={{
                  gridColumn: 'span 12'
                }}
                className="desktop-span-4"
              >
                <div
                  className="card-editorial"
                  style={{
                    position: 'relative',
                    height: 'clamp(200px, 24vw, 300px)',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => setLightboxIndex(idx + 3)}
                  data-cursor="explore"
                >
                  <img
                    src={item.url}
                    alt={item.caption}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s var(--ease-cinematic)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(13, 19, 16, 0.85) 0%, transparent 60%)'
                    }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem'
                    }}
                  >
                    <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-title)', color: '#FAF8F5', fontWeight: 500 }}>
                      {item.caption}
                    </span>
                    <Maximize2 size={14} color="var(--accent-gold)" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <GalleryLightbox
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        images={filteredItems}
        initialIndex={lightboxIndex ?? 0}
      />

      <style>{`
        @media (min-width: 900px) {
          .desktop-span-7 { grid-column: span 7 !important; }
          .desktop-span-5 { grid-column: span 5 !important; }
          .desktop-span-4 { grid-column: span 4 !important; }
        }
      `}</style>
    </section>
  );
};
