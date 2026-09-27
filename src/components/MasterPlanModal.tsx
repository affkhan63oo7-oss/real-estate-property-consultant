import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2, ShieldCheck, Compass } from 'lucide-react';

interface MasterPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MasterPlanModal: React.FC<MasterPlanModalProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 15, 13, 0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 2500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(1rem, 2vw, 2rem)',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#FAF8F5',
          borderBottom: '1px solid rgba(201, 169, 130, 0.2)',
          paddingBottom: '1rem',
          zIndex: 10
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Compass size={18} color="var(--accent-gold)" />
          <div>
            <span
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.625rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block'
              }}
            >
              Architectural Site Planning
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
                color: '#FAF8F5',
                letterSpacing: '0.06em'
              }}
            >
              Master Site Layout • Hinjawadi, Pune
            </h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => setZoomLevel((prev) => Math.max(0.75, prev - 0.25))}
            aria-label="Zoom out"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(201, 169, 130, 0.25)',
              borderRadius: '6px',
              color: '#FAF8F5',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ZoomOut size={18} />
          </button>

          <button
            onClick={() => setZoomLevel((prev) => Math.min(2.5, prev + 0.25))}
            aria-label="Zoom in"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(201, 169, 130, 0.25)',
              borderRadius: '6px',
              color: '#FAF8F5',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ZoomIn size={18} />
          </button>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'rgba(201, 169, 130, 0.15)',
              border: '1px solid var(--accent-gold)',
              borderRadius: '6px',
              color: '#FAF8F5',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main Blueprint Canvas */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto',
          padding: '1.5rem 0',
          position: 'relative'
        }}
      >
        <div
          style={{
            maxWidth: '92vw',
            maxHeight: '75vh',
            transform: `scale(${zoomLevel})`,
            transition: 'transform 0.25s ease',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(201, 169, 130, 0.3)'
          }}
        >
          <img
            src="/images/master-plan.jpg"
            alt="Master Site Plan Blueprint Hinjawadi Pune Future Construction"
            style={{
              display: 'block',
              maxWidth: '100%',
              maxHeight: '75vh',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      {/* Bottom Information Footer */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          borderTop: '1px solid rgba(201, 169, 130, 0.2)',
          paddingTop: '0.85rem',
          color: 'rgba(250, 248, 245, 0.7)',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-sans)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <span>• 70%+ Open Setback Buffers</span>
          <span>• Segregated Vehicular & Pedestrian Arteries</span>
          <span>• North-South Wind Azimuth</span>
          <span>• 24/7 Guarded Checkpoints</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)' }}>
          <ShieldCheck size={14} />
          <span>Verified Master Architectural Plan</span>
        </div>
      </div>
    </div>
  );
};
