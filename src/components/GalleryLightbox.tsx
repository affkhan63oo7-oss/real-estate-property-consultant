import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string; caption: string; category: string }[];
  initialIndex?: number;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const next = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const current = images[currentIndex];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(7, 8, 9, 0.96)',
        backdropFilter: 'blur(20px)',
        zIndex: 2200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease'
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#FFFFFF',
          zIndex: 10
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A982', fontWeight: 600 }}>
            {current.category}
          </span>
          <span style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.5)' }}>
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
          >
            {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
          </button>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            title="Close Lightbox (Esc)"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Center Image Stage with Navigation Arrows */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <button
          onClick={prev}
          style={{
            position: 'absolute',
            left: '1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#FFFFFF',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background 0.2s'
          }}
          title="Previous Image (←)"
        >
          <ChevronLeft size={24} />
        </button>

        <img
          key={current.url}
          src={current.url}
          alt={current.caption}
          style={{
            maxWidth: '90%',
            maxHeight: '75vh',
            objectFit: 'contain',
            transform: isZoomed ? 'scale(1.4)' : 'scale(1)',
            cursor: isZoomed ? 'zoom-out' : 'zoom-in',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
          }}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        <button
          onClick={next}
          style={{
            position: 'absolute',
            right: '1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#FFFFFF',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background 0.2s'
          }}
          title="Next Image (→)"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Thumbnail Ribbon & Caption */}
      <div style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', textAlign: 'center' }}>
          {current.caption}
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', padding: '0.5rem 0', maxWidth: '100%' }}>
          {images.map((img, idx) => (
            <div
              key={img.url}
              onClick={() => {
                setIsZoomed(false);
                setCurrentIndex(idx);
              }}
              style={{
                width: '60px',
                height: '42px',
                borderRadius: '1px',
                overflow: 'hidden',
                cursor: 'pointer',
                opacity: currentIndex === idx ? 1 : 0.4,
                border: currentIndex === idx ? '2px solid #C9A982' : '1px solid transparent',
                transition: 'opacity 0.2s, border-color 0.2s',
                flexShrink: 0
              }}
            >
              <img src={img.url} alt={img.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
