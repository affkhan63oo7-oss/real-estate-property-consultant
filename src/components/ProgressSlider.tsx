import React, { useState, useRef, useCallback } from 'react';
import { CONSTRUCTION_PROGRESS } from '../data/mockData';
import { ChevronsLeftRight } from 'lucide-react';

export const ProgressSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section
      id="progress"
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
            05 / Engineering Timeline
          </span>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: 'var(--text-primary)' }}>
            {CONSTRUCTION_PROGRESS.title}
          </h2>
          <p style={{ maxWidth: '640px', marginTop: '0.5rem' }}>
            {CONSTRUCTION_PROGRESS.subtitle}
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          data-cursor="drag"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(380px, 55vh, 680px)',
            borderRadius: '2px',
            overflow: 'hidden',
            cursor: 'ew-resize',
            userSelect: 'none',
            boxShadow: 'var(--shadow-floating)',
            backgroundColor: '#0F1012'
          }}
        >
          {/* Base Image (Completed Phase) */}
          <img
            src={CONSTRUCTION_PROGRESS.currentImage}
            alt="Completed Residence"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />

          {/* Earlier Image Clipped by Slider */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${sliderPosition}%`,
              height: '100%',
              overflow: 'hidden',
              borderRight: '2px solid #FFFFFF'
            }}
          >
            <img
              src={CONSTRUCTION_PROGRESS.earlierImage}
              alt="Structural Foundation"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
                height: '100%',
                objectFit: 'cover'
              }}
            />

            {/* Left Label */}
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                backgroundColor: 'rgba(18, 19, 22, 0.85)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                padding: '0.4rem 0.85rem',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                borderRadius: '1px'
              }}
            >
              {CONSTRUCTION_PROGRESS.earlierLabel}
            </div>
          </div>

          {/* Right Label */}
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              backgroundColor: 'rgba(18, 19, 22, 0.85)',
              backdropFilter: 'blur(8px)',
              color: '#FFFFFF',
              padding: '0.4rem 0.85rem',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              borderRadius: '1px'
            }}
          >
            {CONSTRUCTION_PROGRESS.currentLabel}
          </div>

          {/* Center Draggable Dividing Handle */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: `${sliderPosition}%`,
              transform: 'translate(-50%, -50%)',
              width: '46px',
              height: '46px',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)',
              pointerEvents: 'none'
            }}
          >
            <ChevronsLeftRight size={20} color="#121316" />
          </div>
        </div>

        {/* Drag Instruction Cue */}
        <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            ← Drag slider left or right to inspect structural transformation →
          </span>
        </div>
      </div>
    </section>
  );
};
