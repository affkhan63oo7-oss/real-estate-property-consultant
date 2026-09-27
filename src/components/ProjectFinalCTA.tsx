import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ArrowUpRight, Phone, MessageSquare, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

interface ProjectFinalCTAProps {
  onInquireClick: () => void;
}

export const ProjectFinalCTA: React.FC<ProjectFinalCTAProps> = ({ onInquireClick }) => {
  return (
    <section
      id="cta"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-dark-obsidian)',
        borderBottom: '1px solid var(--border-gold-subtle)',
        position: 'relative',
        paddingTop: 'clamp(4rem, 7vw, 7rem)',
        paddingBottom: 'clamp(4rem, 7vw, 7rem)'
      }}
    >
      <div className="container-editorial">
        <ScrollReveal delay={0} distance={16} scale>
          <div
            className="card-editorial"
            style={{
              padding: 'clamp(1.75rem, 4vw, 3.5rem)',
              position: 'relative',
              overflow: 'hidden',
              background: 'radial-gradient(ellipse at 85% 50%, rgba(30, 42, 35, 0.7) 0%, rgba(18, 24, 21, 0.95) 70%, #0D1310 100%)',
              border: '1px solid rgba(201, 169, 130, 0.35)',
              boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(201, 169, 130, 0.15)'
            }}
          >
            {/* Top gold accent line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '20%',
                right: '20%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)'
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
                gap: 'clamp(2rem, 4vw, 4rem)',
                alignItems: 'center'
              }}
            >
              {/* Left Column: Editorial CTA Message */}
              <div>
                <div className="eyebrow-pill">
                  <Sparkles size={12} color="var(--accent-gold)" />
                  <span>Direct Consultant Advisory</span>
                </div>

                <h2
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: 'clamp(2rem, 4.2vw, 3.8rem)',
                    lineHeight: 1.15,
                    letterSpacing: 'clamp(0.04em, 1.2vw, 0.08em)',
                    color: '#FAF8F5',
                    marginBottom: '1rem'
                  }}
                >
                  Begin Your Next Chapter with{' '}
                  <span
                    style={{
                      fontFamily: 'var(--font-editorial)',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      color: 'var(--accent-gold)'
                    }}
                  >
                    Confidence
                  </span>
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                    fontStyle: 'italic',
                    color: 'rgba(250, 248, 245, 0.85)',
                    lineHeight: 1.55,
                    marginBottom: '1.25rem'
                  }}
                >
                  "Strategic property development, verified residential & commercial plots, and attentive client service."
                </p>

                <p style={{ color: 'rgba(250, 248, 245, 0.72)', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '540px' }}>
                  Whether you are looking for residential land & plots, commercial plots, residential property, commercial spaces, or property development in Pune, Marunji, Hinjawadi, or Narhe, connect directly with Future Construction.
                </p>

                {/* CTAs */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                  <button
                    onClick={onInquireClick}
                    className="btn-gold-primary"
                    style={{ padding: '0.9rem 1.75rem', minHeight: '44px' }}
                  >
                    <span>Enquire Now</span>
                    <ArrowUpRight size={16} />
                  </button>

                  <a
                    href="tel:+917210320001"
                    className="btn-gold-outline"
                    style={{ padding: '0.9rem 1.5rem', minHeight: '44px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                  >
                    <Phone size={15} color="var(--accent-gold)" />
                    <span>Call: +91 72103 20001</span>
                  </a>

                  <a
                    href="https://wa.me/917210320001?text=Hello%20Future%20Construction%2C%20I%20am%20inquiring%20about%20your%20properties%20and%20plots."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-outline"
                    style={{
                      padding: '0.9rem 1.5rem',
                      minHeight: '44px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                      borderColor: 'var(--accent-gold)',
                      color: 'var(--accent-gold)'
                    }}
                  >
                    <MessageSquare size={15} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                {/* Bottom Trust Indicators */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '1.5rem',
                    borderTop: '1px solid rgba(201, 169, 130, 0.2)',
                    paddingTop: '1.25rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FAF8F5', fontSize: '0.78rem', fontFamily: 'var(--font-sans)' }}>
                    <ShieldCheck size={15} color="var(--accent-gold)" />
                    <span>Verified Developer</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FAF8F5', fontSize: '0.78rem', fontFamily: 'var(--font-sans)' }}>
                    <MapPin size={15} color="var(--accent-gold)" />
                    <span>Hinjawadi, Pune</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FAF8F5', fontSize: '0.78rem', fontFamily: 'var(--font-sans)' }}>
                    <Sparkles size={15} color="var(--accent-gold)" />
                    <span>4.0/5 Rating (42 Reviews)</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Image Box */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(280px, 38vw, 460px)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid rgba(201, 169, 130, 0.3)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                  alt="Future Construction Hinjawadi Pune"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
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
                    backgroundColor: 'rgba(13, 19, 16, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(201, 169, 130, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-title)', color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Future Construction • Property Developer
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#FAF8F5' }}>
                    Hinjawadi, Pune
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
