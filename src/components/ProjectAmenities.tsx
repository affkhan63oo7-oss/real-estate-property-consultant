import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Car,
  TreePine,
  Baby,
  Dumbbell,
  Flame,
  BatteryCharging,
  Droplets,
  Gamepad2,
  PhoneCall,
  Eye,
  Check
} from 'lucide-react';

export const ProjectAmenities: React.FC = () => {
  const featuredPavilions = [
    {
      badge: 'WELLNESS & FITNESS',
      title: 'The High-Performance Gymnasium & Yoga Deck',
      desc: 'Air-conditioned fitness center equipped with modern cardiovascular equipment, resistance training zones, and an adjoining open-air deck for sunrise yoga and meditation.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85',
      highlights: ['Cardiovascular & strength stations', 'Dedicated yoga & stretching lawn', 'Air-conditioned workout floor', 'Full-height mirror wall & sound system']
    },
    {
      badge: 'COMMUNITY & LEISURE',
      title: 'The Grand Social Pavilion & Recreation Terrace',
      desc: 'An expansive community hall, indoor sports salon with table tennis and billiards, and landscaped shaded gazebos designed for family celebrations and quiet evening conversation.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
      highlights: ['Multi-purpose banquet & activity hall', 'Indoor games lounge with table tennis', 'Senior citizen landscaped alcoves', 'Covered veranda overlooking the gardens']
    }
  ];

  const amenitiesGrid = [
    {
      icon: <ShieldCheck size={20} color="var(--accent-gold)" />,
      title: '24/7 Guarded Security & CCTV',
      desc: 'Monitored perimeter surveillance and multi-tier gatehouse access control.'
    },
    {
      icon: <Zap size={20} color="var(--accent-gold)" />,
      title: 'High-Speed Elevators',
      desc: 'Automatic passenger lifts and dedicated stretcher/service elevators with rescue devices.'
    },
    {
      icon: <Car size={20} color="var(--accent-gold)" />,
      title: 'Covered & Visitor Parking',
      desc: 'Reserved covered bays, planned EV charging points, and dedicated guest parking.'
    },
    {
      icon: <TreePine size={20} color="var(--accent-gold)" />,
      title: 'Landscaped Garden & Track',
      desc: 'Manicured green lawns, floral borders, and perimeter walking/jogging path.'
    },
    {
      icon: <Baby size={20} color="var(--accent-gold)" />,
      title: 'Children’s Safe Play Enclave',
      desc: 'Impact-absorbent safety turf with modern swings, slides, and shaded benches.'
    },
    {
      icon: <Dumbbell size={20} color="var(--accent-gold)" />,
      title: 'Air-Conditioned Gymnasium',
      desc: 'Multi-station resistance equipment, free weights, and cardio machines.'
    },
    {
      icon: <Flame size={20} color="var(--accent-gold)" />,
      title: 'Piped Natural Gas (PNG)',
      desc: 'Direct piped gas infrastructure ensuring convenience and kitchen safety.'
    },
    {
      icon: <BatteryCharging size={20} color="var(--accent-gold)" />,
      title: '100% Emergency Power Backup',
      desc: 'Automatic DG backup for elevators, water pumps, and essential common areas.'
    },
    {
      icon: <Droplets size={20} color="var(--accent-gold)" />,
      title: 'Rainwater Harvesting',
      desc: 'Eco-conscious groundwater recharge and scientific society waste management.'
    },
    {
      icon: <Gamepad2 size={20} color="var(--accent-gold)" />,
      title: 'Indoor Recreation Salon',
      desc: 'Table tennis, carrom boards, chess tables, and social activity lounge.'
    },
    {
      icon: <PhoneCall size={20} color="var(--accent-gold)" />,
      title: 'Intercom & Smart Video Access',
      desc: 'Integrated video door security connecting each residence with entrance gates.'
    },
    {
      icon: <Eye size={20} color="var(--accent-gold)" />,
      title: 'Rooftop Panoramic Terrace',
      desc: 'Panoramic elevated viewing deck framing expansive vistas of the Ahmedabad skyline.'
    }
  ];

  return (
    <section
      id="amenities"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-dark-surface)',
        borderBottom: '1px solid var(--border-gold-subtle)',
        position: 'relative'
      }}
    >
      {/* Legacy navigation anchor */}
      <div id="services" style={{ position: 'absolute', top: '-60px' }} />

      <div className="container-editorial">
        {/* Part A Header: Lifestyle & Leisure */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '850px' }}>
          <ScrollReveal delay={0} distance={10}>
            <div className="eyebrow-pill">
              <Sparkles size={12} color="var(--accent-gold)" />
              <span>Lifestyle & Wellbeing</span>
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
              Where Everyday Living Feels{' '}
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--accent-gold)'
                }}
              >
                Extraordinary
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} distance={12}>
            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontStyle: 'italic',
                color: 'rgba(250, 248, 245, 0.85)',
                lineHeight: 1.6
              }}
            >
              Curated leisure environments engineered for vitality, quiet contemplation, and community living across premier residential communities in Ahmedabad.
            </p>
          </ScrollReveal>
        </div>

        {/* 2 Large Featured Lifestyle Pavilion Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: 'clamp(3.5rem, 7vw, 6rem)'
          }}
        >
          {featuredPavilions.map((pavilion, idx) => (
            <ScrollReveal key={pavilion.title} delay={idx * 100} distance={16} scale>
              <div
                className="card-editorial"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                {/* Image Stage */}
                <div style={{ position: 'relative', width: '100%', height: 'clamp(240px, 32vw, 360px)', overflow: 'hidden' }}>
                  <img
                    src={pavilion.image}
                    alt={pavilion.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s var(--ease-cinematic)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(18, 24, 21, 0.95) 0%, rgba(18, 24, 21, 0.2) 60%, transparent 100%)'
                    }}
                  />

                  {/* Floating Category Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      padding: '0.4rem 0.85rem',
                      backgroundColor: 'rgba(13, 19, 16, 0.88)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '9999px',
                      border: '1px solid rgba(201, 169, 130, 0.3)',
                      color: 'var(--accent-gold)',
                      fontSize: '0.625rem',
                      fontFamily: 'var(--font-title)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {pavilion.badge}
                  </div>
                </div>

                {/* Content Stage */}
                <div style={{ padding: 'clamp(1.5rem, 2.5vw, 2.25rem)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-title)',
                        fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
                        color: '#FAF8F5',
                        lineHeight: 1.25,
                        marginBottom: '0.75rem'
                      }}
                    >
                      {pavilion.title}
                    </h3>
                    <p style={{ color: 'rgba(250, 248, 245, 0.7)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                      {pavilion.desc}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem', borderTop: '1px solid rgba(201, 169, 130, 0.15)', paddingTop: '1.25rem' }}>
                    {pavilion.highlights.map((h) => (
                      <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#FAF8F5' }}>
                        <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: 'rgba(201, 169, 130, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Check size={10} color="var(--accent-gold)" />
                        </div>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Part B Header: Amenities Ecosystem */}
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', maxWidth: '850px', marginInline: 'auto' }}>
          <ScrollReveal delay={0} distance={10}>
            <div className="eyebrow-pill" style={{ marginInline: 'auto' }}>
              <ShieldCheck size={12} color="var(--accent-gold)" />
              <span>Residential Privileges & Infrastructure</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60} distance={12}>
            <h3
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
                color: '#FAF8F5',
                letterSpacing: '0.04em',
                marginBottom: '0.75rem'
              }}
            >
              A Complete Ecosystem for Modern Comfort
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                color: 'rgba(250, 248, 245, 0.72)',
                lineHeight: 1.6
              }}
            >
              Every utility, amenity, and security standard engineered for long-term reliability and effortless family living.
            </p>
          </ScrollReveal>
        </div>

        {/* 12 Curated Amenities Cards Grid */}
        <ScrollReveal delay={100} distance={14}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: 'clamp(0.85rem, 1.5vw, 1.25rem)'
            }}
          >
            {amenitiesGrid.map((item, idx) => (
              <div
                key={item.title}
                className="card-editorial"
                style={{
                  padding: '1.35rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(201, 169, 130, 0.08)',
                      border: '1px solid rgba(201, 169, 130, 0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-title)', color: 'rgba(201, 169, 130, 0.6)' }}>
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#FAF8F5',
                      letterSpacing: '0.04em',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(250, 248, 245, 0.65)', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
