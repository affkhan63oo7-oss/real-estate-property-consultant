import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { MapPin, Home, Layers, Building2, Star, Clock } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  caption: string;
}

export const ProjectStatsBar: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: <MapPin size={18} color="var(--accent-gold)" />,
      value: 'South Bopal',
      label: 'Office Location',
      caption: 'D 382, SOBO Centre'
    },
    {
      icon: <Home size={18} color="var(--accent-gold)" />,
      value: 'Curated',
      label: 'Properties',
      caption: 'Residential & Bungalows'
    },
    {
      icon: <Layers size={18} color="var(--accent-gold)" />,
      value: 'Ahmedabad',
      label: 'Primary Location',
      caption: 'South Bopal, Gujarat'
    },
    {
      icon: <Star size={18} color="var(--accent-gold)" />,
      value: 'Kishor Udhas',
      label: 'Property Consultant',
      caption: 'Owner & Advisory Lead'
    },
    {
      icon: <Building2 size={18} color="var(--accent-gold)" />,
      value: '6 Services',
      label: 'Agency Solutions',
      caption: 'Buy, Sell, Rent & Consult'
    },
    {
      icon: <Clock size={18} color="var(--accent-gold)" />,
      value: 'Direct Call',
      label: 'Phone Consultation',
      caption: '+91 99986 33795'
    }
  ];

  return (
    <section
      id="quick-stats"
      style={{
        backgroundColor: 'var(--bg-dark-obsidian)',
        position: 'relative',
        zIndex: 20,
        paddingTop: 'clamp(2rem, 4vw, 3.5rem)',
        paddingBottom: 'clamp(2rem, 4vw, 3.5rem)',
        borderBottom: '1px solid var(--border-gold-subtle)'
      }}
    >
      <div className="container-editorial">
        <ScrollReveal delay={0} distance={12}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
              gap: 'clamp(0.6rem, 1.4vw, 1.25rem)'
            }}
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="card-editorial"
                style={{
                  padding: 'clamp(1.25rem, 2vw, 1.65rem) clamp(1rem, 1.5vw, 1.25rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '140px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle top golden light line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '15%',
                    right: '15%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(201, 169, 130, 0.4), transparent)'
                  }}
                />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.625rem',
                      letterSpacing: '0.15em',
                      color: 'var(--accent-gold)',
                      opacity: 0.8
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(201, 169, 130, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(201, 169, 130, 0.18)'
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: 'clamp(1.15rem, 2vw, 1.55rem)',
                      fontWeight: 600,
                      color: '#FAF8F5',
                      lineHeight: 1.15,
                      letterSpacing: '0.04em',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)',
                      marginBottom: '0.2rem'
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.6875rem',
                      color: 'rgba(250, 248, 245, 0.55)',
                      lineHeight: 1.3
                    }}
                  >
                    {stat.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
