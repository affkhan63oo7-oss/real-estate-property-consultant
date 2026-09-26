import React, { useState } from 'react';
import { PANORAMA_VIEWS } from '../data/towerData';
import { Sun, Sunset, Moon } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const TowerPanorama: React.FC = () => {
  const [activeViewId, setActiveViewId] = useState<'day' | 'dusk' | 'night'>('day');
  const activeView = PANORAMA_VIEWS.find((v) => v.id === activeViewId) || PANORAMA_VIEWS[0];

  return (
    <section
      id="views"
      style={{
        backgroundColor: '#121110',
        color: '#FAF8F5',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Full-Bleed Panorama Canvas */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(550px, 75vh, 850px)',
          overflow: 'hidden'
        }}
      >
        <img
          key={activeView.imageUrl}
          src={activeView.imageUrl}
          alt={activeView.headline}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />

        {/* Cinematic Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(18, 17, 16, 0.95) 0%, rgba(18, 17, 16, 0.25) 50%, rgba(18, 17, 16, 0.6) 100%)'
          }}
        />

        {/* Top Header Overlay with ScrollReveal */}
        <div
          className="container-editorial"
          style={{
            position: 'absolute',
            top: '3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            zIndex: 10
          }}
        >
          <ScrollReveal delay={0} distance={10}>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.35em',
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  display: 'block'
                }}
              >
                VII. Cityscape & Panorama
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.15em',
                  color: '#FAF8F5',
                  textTransform: 'uppercase'
                }}
              >
                Kandivali East • Mumbai Horizon
              </span>
            </div>
          </ScrollReveal>

          {/* Time of Day Toggles */}
          <ScrollReveal delay={80} distance={10}>
            <div
              style={{
                display: 'flex',
                backgroundColor: 'rgba(27, 25, 23, 0.8)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(250, 248, 245, 0.2)',
                padding: '4px'
              }}
            >
              {[
                { id: 'day', label: 'Morning Light', icon: <Sun size={13} /> },
                { id: 'dusk', label: 'Golden Hour', icon: <Sunset size={13} /> },
                { id: 'night', label: 'Starlight', icon: <Moon size={13} /> }
              ].map((tab) => {
                const isSelected = activeViewId === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveViewId(tab.id as any)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.5rem 1rem',
                      border: 'none',
                      backgroundColor: isSelected ? 'var(--accent-gold)' : 'transparent',
                      color: isSelected ? '#121110' : '#FAF8F5',
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.625rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.25s var(--ease-cinematic)'
                    }}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Editorial Caption */}
        <div
          className="container-editorial"
          style={{
            position: 'absolute',
            bottom: '3.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            zIndex: 10
          }}
        >
          <ScrollReveal delay={120} distance={14}>
            <div style={{ maxWidth: '680px' }}>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                {activeView.time} • Mumbai Western Suburbs Perspective
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  color: '#FAF8F5',
                  marginTop: '0.25rem',
                  marginBottom: '0.5rem'
                }}
              >
                {activeView.headline}
              </h3>
              <p style={{ color: 'rgba(250, 248, 245, 0.85)', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                {activeView.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
