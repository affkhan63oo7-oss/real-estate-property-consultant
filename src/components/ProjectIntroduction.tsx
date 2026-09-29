import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ArrowUpRight, CheckCircle2, Shield, Sparkles, Phone } from 'lucide-react';

interface ProjectIntroductionProps {
  onInquireClick: () => void;
}

export const ProjectIntroduction: React.FC<ProjectIntroductionProps> = ({ onInquireClick }) => {
  return (
    <section
      id="overview"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-dark-obsidian)',
        borderBottom: '1px solid var(--border-gold-subtle)',
        position: 'relative'
      }}
    >
      {/* Anchor fallbacks for legacy navigation */}
      <div id="about" style={{ position: 'absolute', top: '-60px' }} />
      <div id="landmark" style={{ position: 'absolute', top: '-60px' }} />

      <div className="container-editorial">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 6rem)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Editorial Heading & Story */}
          <div>
            <ScrollReveal delay={0} distance={10}>
              <div className="eyebrow-pill">
                <Sparkles size={12} color="var(--accent-gold)" />
                <span>South Bopal • Ahmedabad</span>
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
                  marginBottom: '1.25rem'
                }}
              >
                Where Trusted Advisory Meets{' '}
                <span
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    color: 'var(--accent-gold)'
                  }}
                >
                  Ahmedabad’s Growth
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={140} distance={12}>
              <p
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                  fontStyle: 'italic',
                  color: 'rgba(250, 248, 245, 0.88)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  maxWidth: '580px'
                }}
              >
                "Dedicated property consultation, verified residential properties & bungalows in South Bopal, Ahmedabad."
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', maxWidth: '600px' }}>
                <p style={{ color: 'rgba(250, 248, 245, 0.72)', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                  Located at D 382, SOBO Centre, South Bopal, Ahmedabad, Gujarat – 380058, South Bopal Real Estate is a premier real estate agency and property consultant led by Kishor Udhas.
                </p>
                <p style={{ color: 'rgba(250, 248, 245, 0.72)', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                  We deliver seamless client solutions across Property Buying, Property Selling, Property Renting, Residential Properties, Bungalows / Villas, and Property Consultation throughout South Bopal, Ahmedabad.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature Pills */}
            <ScrollReveal delay={200} distance={12}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.65rem',
                  marginBottom: '2.5rem'
                }}
              >
                {[
                  'Property Buying',
                  'Property Selling',
                  'Property Renting',
                  'Residential Properties',
                  'Bungalows / Villas',
                  'Property Consultation'
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(201, 169, 130, 0.08)',
                      border: '1px solid rgba(201, 169, 130, 0.25)',
                      color: '#FAF8F5',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      letterSpacing: '0.04em'
                    }}
                  >
                    <CheckCircle2 size={13} color="var(--accent-gold)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
                <button
                  onClick={onInquireClick}
                  className="btn-gold-primary"
                  style={{ minHeight: '44px' }}
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight size={16} />
                </button>

                <a
                  href="tel:+919998633795"
                  className="btn-gold-outline"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    minHeight: '44px'
                  }}
                >
                  <Phone size={14} color="var(--accent-gold)" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/919998633795?text=Hello%20South%20Bopal%20Real%20Estate%2C%20I%20am%20inquiring%20about%20your%20property%20consultation%20and%20real%20estate%20services%20in%20South%20Bopal%2C%20Ahmedabad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-outline"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    borderColor: 'var(--accent-gold)',
                    color: 'var(--accent-gold)',
                    minHeight: '44px'
                  }}
                >
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Architectural Visual Presentation */}
          <ScrollReveal delay={120} distance={18} scale>
            <div
              className="card-editorial"
              style={{
                position: 'relative',
                padding: 'clamp(0.6rem, 1.2vw, 1rem)',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(320px, 45vw, 560px)',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85"
                  alt="South Bopal Real Estate Kishor Udhas Property Consultant Ahmedabad"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.05)'
                  }}
                />

                {/* Atmospheric gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13, 19, 16, 0.85) 0%, rgba(13, 19, 16, 0.15) 50%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Floating Architectural Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    padding: '1rem 1.25rem',
                    backgroundColor: 'rgba(13, 19, 16, 0.88)',
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
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-gold)',
                        display: 'block'
                      }}
                    >
                      South Bopal Real Estate • Kishor Udhas
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-title)',
                        fontSize: '0.875rem',
                        color: '#FAF8F5',
                        fontWeight: 600,
                        letterSpacing: '0.05em'
                      }}
                    >
                      South Bopal, Ahmedabad
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--accent-gold)',
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-sans)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}
                  >
                    <Shield size={14} />
                    <span>Verified Project</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
