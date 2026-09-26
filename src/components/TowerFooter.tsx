import React from 'react';
import { ArrowUp, MapPin, Send } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TowerFooterProps {
  onInquireClick: () => void;
}

export const TowerFooter: React.FC<TowerFooterProps> = ({ onInquireClick }) => {
  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#121110',
        color: '#FAF8F5',
        paddingTop: 'clamp(5rem, 8vw, 8rem)',
        paddingBottom: '4rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container-editorial">
        {/* Massive Signature Editorial Typography with ScrollReveal */}
        <ScrollReveal delay={0} distance={14}>
          <div
            style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
              paddingBottom: 'clamp(2.5rem, 5vw, 5rem)',
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)'
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  display: 'block',
                  marginBottom: '0.75rem'
                }}
              >
                Real Estate Consultant • Mumbai
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: 'clamp(1.65rem, 5.5vw, 4.2rem)',
                  color: '#FAF8F5',
                  lineHeight: 1.15,
                  letterSpacing: 'clamp(0.04em, 1.2vw, 0.08em)'
                }}
              >
                NAMO PROPERTY CONSULTANT
              </h2>
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                  fontStyle: 'italic',
                  color: 'rgba(250, 248, 245, 0.75)',
                  display: 'block',
                  marginTop: '0.4rem'
                }}
              >
                Dishank Asija • Kandivali East, Mumbai, Maharashtra, India
              </span>
            </div>

            <div style={{ width: '100%', maxWidth: '340px' }}>
              <button
                onClick={onInquireClick}
                className="btn-111-primary"
                style={{
                  backgroundColor: 'var(--accent-gold)',
                  color: '#121110',
                  borderColor: 'var(--accent-gold)',
                  padding: '1rem 2rem',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                Talk to a Property Consultant
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Column Directory with Staggered Entry */}
        <ScrollReveal delay={120} distance={10}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontSize: '0.8125rem',
              color: 'rgba(250, 248, 245, 0.7)'
            }}
          >
            {/* Consultancy Office */}
            <div>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.22em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '0.85rem' }}>
                Consultancy Office
              </span>
              <p style={{ color: 'rgba(250, 248, 245, 0.7)', lineHeight: 1.8 }}>
                <strong style={{ color: '#FAF8F5' }}>Namo Property Consultant</strong><br />
                Dishank Asija, Property Consultant<br />
                Kandivali East, Mumbai<br />
                Maharashtra, India
              </p>
              <div style={{ marginTop: '1rem' }}>
                <button
                  onClick={onInquireClick}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-gold)',
                    cursor: 'pointer',
                    padding: 0,
                    fontFamily: 'var(--font-title)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    minHeight: '38px'
                  }}
                >
                  <Send size={12} />
                  <span>Send Property Enquiry</span>
                </button>
              </div>
            </div>

            {/* Services */}
            <div>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.22em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '0.85rem' }}>
                Our Services
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
                <li>Residential Property Buying</li>
                <li>Residential Property Selling</li>
                <li>Property Rentals & Leasing</li>
                <li>Commercial Real Estate</li>
                <li>Property Management</li>
                <li>Real Estate Marketing</li>
                <li>Property Consultation</li>
              </ul>
            </div>

            {/* Quick Navigation */}
            <div>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.22em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '0.85rem' }}>
                Navigation
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: 0 }}>
                <li><a href="#about" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none', display: 'inline-block', padding: '2px 0' }}>About Us</a></li>
                <li><a href="#consultant" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none', display: 'inline-block', padding: '2px 0' }}>Dishank Asija</a></li>
                <li><a href="#services" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none', display: 'inline-block', padding: '2px 0' }}>Services</a></li>
                <li><a href="#properties" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none', display: 'inline-block', padding: '2px 0' }}>Properties</a></li>
                <li><a href="#location" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none', display: 'inline-block', padding: '2px 0' }}>Location</a></li>
                <li><a href="#availability" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none', display: 'inline-block', padding: '2px 0' }}>Availability Index</a></li>
              </ul>
            </div>

            {/* Governance & Privacy */}
            <div>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.22em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '0.85rem' }}>
                Privacy & Standards
              </span>
              <p style={{ fontSize: '0.75rem', color: 'rgba(250, 248, 245, 0.55)', lineHeight: 1.7 }}>
                Professional real-estate consultancy based in Kandivali East, Mumbai. Client information, enquiries, and property transactions are treated with complete confidentiality and professional standards.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.75rem', fontSize: '0.6875rem', color: 'rgba(250, 248, 245, 0.6)' }}>
                <span>Privacy Policy</span>
                <span>•</span>
                <span>Terms</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Back to Top & Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.75rem',
            color: 'rgba(250, 248, 245, 0.45)'
          }}
        >
          <span>© 2026 Namo Property Consultant. Associated with Dishank Asija. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'none',
              border: 'none',
              color: 'var(--accent-gold)',
              cursor: 'pointer',
              fontFamily: 'var(--font-title)',
              fontSize: '0.6875rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              minHeight: '38px'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
