import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Compass, Maximize2, ShieldCheck, TreePine, Car, Wind, Shield } from 'lucide-react';
import { MasterPlanModal } from './MasterPlanModal';

export const ProjectMasterPlan: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const highlights = [
    {
      icon: <TreePine size={18} color="var(--accent-gold)" />,
      title: '70%+ Open Landscape Setbacks',
      desc: 'Extensive perimeter gardens shielding residences from street noise and creating a green microclimate.'
    },
    {
      icon: <Car size={18} color="var(--accent-gold)" />,
      title: 'Vehicle-Free Podium Deck',
      desc: 'Segregated vehicular drop-offs keeping internal pedestrian courtyards peaceful, safe, and family-friendly.'
    },
    {
      icon: <Wind size={18} color="var(--accent-gold)" />,
      title: 'Unobstructed Wind Corridors',
      desc: 'Calculated layout orientation maximizing natural cross-ventilation, fresh breeze airflow, and daylong interior illumination.'
    },
    {
      icon: <Shield size={18} color="var(--accent-gold)" />,
      title: 'Guarded Multi-Tier Access',
      desc: '24/7 security gatehouses, automatic boom barriers, and monitored perimeter surveillance.'
    }
  ];

  return (
    <section
      id="master-plan"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-dark-surface)',
        borderBottom: '1px solid var(--border-gold-subtle)',
        position: 'relative'
      }}
    >
      <div className="container-editorial">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 6rem)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Master Plan Blueprint Card */}
          <ScrollReveal delay={0} distance={16} scale>
            <div
              className="card-editorial"
              style={{
                position: 'relative',
                padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
                cursor: 'pointer'
              }}
              onClick={() => setIsModalOpen(true)}
              data-cursor="explore"
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(320px, 45vw, 540px)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#0D1310'
                }}
              >
                <img
                  src="/images/master-plan.jpg"
                  alt="Future Construction Property Development Site Plan Hinjawadi Pune"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.6s var(--ease-cinematic)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Top Corner Legend Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.75rem',
                    backgroundColor: 'rgba(13, 19, 16, 0.88)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '6px',
                    border: '1px solid rgba(201, 169, 130, 0.25)',
                    color: '#FAF8F5',
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-title)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase'
                  }}
                >
                  <Compass size={13} color="var(--accent-gold)" />
                  <span>North-Facing Master Grid</span>
                </div>

                {/* Bottom Overlay Trigger */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    padding: '0.85rem 1.25rem',
                    backgroundColor: 'rgba(13, 19, 16, 0.92)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(201, 169, 130, 0.3)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-title)',
                        fontSize: '0.625rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-gold)',
                        display: 'block'
                      }}
                    >
                      Interactive Architectural Plan
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.78rem',
                        color: '#FAF8F5',
                        fontWeight: 500
                      }}
                    >
                      Click to inspect site blueprint in high resolution
                    </span>
                  </div>

                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(201, 169, 130, 0.15)',
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
          </ScrollReveal>

          {/* Right Column: Editorial Master Layout Narrative */}
          <div>
            <ScrollReveal delay={60} distance={10}>
              <div className="eyebrow-pill">
                <Compass size={12} color="var(--accent-gold)" />
                <span>Site Architecture & Layout</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} distance={14}>
              <h2
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: 'clamp(2rem, 4.2vw, 3.8rem)',
                  lineHeight: 1.16,
                  letterSpacing: 'clamp(0.04em, 1.2vw, 0.08em)',
                  color: '#FAF8F5',
                  marginBottom: '1.25rem'
                }}
              >
                Balanced Proportions from{' '}
                <span
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    color: 'var(--accent-gold)'
                  }}
                >
                  Foundation to Sky
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={180} distance={12}>
              <p
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                  fontStyle: 'italic',
                  color: 'rgba(250, 248, 245, 0.88)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  maxWidth: '580px'
                }}
              >
                "An intelligently master-planned footprint designed for privacy, wind circulation, and quietude."
              </p>

              <p style={{ color: 'rgba(250, 248, 245, 0.72)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '600px' }}>
                The master layout prioritizes generous peripheral setbacks and wide spacing between tower footprints. By carefully orienting living balconies away from dense vehicle traffic, every home enjoys uninterrupted sunlight, sweeping western vistas, and refreshing cross-breezes flowing across Pune's natural contours.
              </p>
            </ScrollReveal>

            {/* 4 Feature Highlights Grid */}
            <ScrollReveal delay={240} distance={12}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                  gap: '1rem',
                  marginBottom: '2.5rem'
                }}
              >
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: '1.15rem 1rem',
                      backgroundColor: 'rgba(22, 29, 25, 0.55)',
                      borderRadius: '10px',
                      border: '1px solid rgba(201, 169, 130, 0.18)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.45rem' }}>
                      {item.icon}
                      <h4
                        style={{
                          fontFamily: 'var(--font-title)',
                          fontSize: '0.8125rem',
                          color: '#FAF8F5',
                          letterSpacing: '0.04em',
                          fontWeight: 600
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(250, 248, 245, 0.65)', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-gold-primary"
                >
                  <Maximize2 size={16} />
                  <span>Inspect Master Plan Blueprint</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <MasterPlanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
