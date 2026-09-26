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
              paddingBottom: '5rem',
              marginBottom: '4rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '2.5rem'
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  display: 'block',
                  marginBottom: '1rem'
                }}
              >
                Real Estate Consultant • Mumbai
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                  color: '#FAF8F5',
                  lineHeight: 1.15,
                  letterSpacing: '0.08em'
                }}
              >
                NAMO PROPERTY CONSULTANT
              </h2>
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '1.25rem',
                  fontStyle: 'italic',
                  color: 'rgba(250, 248, 245, 0.75)',
                  display: 'block',
                  marginTop: '0.5rem'
                }}
              >
                Dishank Asija • Kandivali East, Mumbai, Maharashtra, India
              </span>
            </div>

            <div>
              <button
                onClick={onInquireClick}
                className="btn-111-primary"
                style={{
                  backgroundColor: 'var(--accent-gold)',
                  color: '#121110',
                  borderColor: 'var(--accent-gold)',
                  padding: '1.25rem 2.5rem'
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '3rem',
              marginBottom: '4.5rem',
              fontSize: '0.8125rem',
              color: 'rgba(250, 248, 245, 0.7)'
            }}
          >
            {/* Consultancy Office */}
            <div>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
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
                    gap: '0.35rem'
                  }}
                >
                  <Send size={12} />
                  <span>Send Property Enquiry</span>
                </button>
              </div>
            </div>

            {/* Services */}
            <div>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                Our Services
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', padding: 0 }}>
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
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                Navigation
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
                <li><a href="#about" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none' }}>About Us</a></li>
                <li><a href="#consultant" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none' }}>Dishank Asija</a></li>
                <li><a href="#services" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none' }}>Services</a></li>
                <li><a href="#properties" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none' }}>Properties</a></li>
                <li><a href="#location" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none' }}>Location</a></li>
                <li><a href="#availability" style={{ color: 'rgba(250, 248, 245, 0.7)', textDecoration: 'none' }}>Availability Index</a></li>
              </ul>
            </div>

            {/* Governance & Privacy */}
            <div>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                Privacy & Professional Standards
              </span>
              <p style={{ fontSize: '0.75rem', color: 'rgba(250, 248, 245, 0.5)', lineHeight: 1.7 }}>
                Professional real-estate consultancy based in Kandivali East, Mumbai. Client information, enquiries, and property transactions are treated with complete confidentiality and professional standards.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '1rem', fontSize: '0.6875rem', color: 'rgba(250, 248, 245, 0.6)' }}>
                <span>Privacy Policy</span>
                <span>•</span>
                <span>Terms</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Back to Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: 'rgba(250, 248, 245, 0.45)'
          }}
        >
          <span>© 2026 Namo Property Consultant. Associated with Dishank Asija. All rights reserved.</span>

          <button
            onClick={scrollToTop}
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
              letterSpacing: '0.2em',
              textTransform: 'uppercase'
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
