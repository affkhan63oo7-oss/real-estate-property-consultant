import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
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

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Master Plan', href: '#master-plan' },
    { label: 'Configurations', href: '#configurations' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' }
  ];

  const services = [
    'Residential Property Buying',
    'Residential Property Selling',
    'Property Rentals & Leasing',
    'Commercial Office & Retail',
    'Property Title Due Diligence',
    'Bank Home Loan Assistance'
  ];

  const localities = [
    'Kandivali East Prime',
    'Thakur Village Enclave',
    'Lokhandwala Township',
    'Western Express Highway',
    'Metro Line 7 Corridor',
    'Western Mumbai Suburbs'
  ];

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#070B09',
        color: '#FAF8F5',
        paddingTop: 'clamp(4.5rem, 8vw, 7.5rem)',
        paddingBottom: '3.5rem',
        borderTop: '1px solid var(--border-gold-subtle)',
        position: 'relative'
      }}
    >
      <div className="container-editorial">
        {/* Top Signature Banner */}
        <ScrollReveal delay={0} distance={14}>
          <div
            style={{
              borderBottom: '1px solid rgba(201, 169, 130, 0.2)',
              paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
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
                  marginBottom: '0.65rem'
                }}
              >
                Real Estate Consultant • Mumbai
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: 'clamp(1.75rem, 4.5vw, 3.8rem)',
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
                Associated with Dishank Asija • Kandivali East, Mumbai, Maharashtra
              </span>
            </div>

            <div style={{ width: '100%', maxWidth: '340px' }}>
              <button
                onClick={onInquireClick}
                className="btn-gold-primary"
                style={{ width: '100%', padding: '1rem 2rem' }}
              >
                <span>Talk to Property Consultant</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Column Structured Directory */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: 'clamp(3rem, 5vw, 5rem)'
          }}
        >
          {/* Column 1: Contact Details */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '1.25rem'
              }}
            >
              Consultant Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.85rem', color: 'rgba(250, 248, 245, 0.75)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>Kandivali East, Mumbai, Maharashtra 400101, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <a href="tel:+919820112345" style={{ color: 'inherit', textDecoration: 'none' }}>
                  +91 98201 12345
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <a href="mailto:consult@namoproperty.in" style={{ color: 'inherit', textDecoration: 'none' }}>
                  consult@namoproperty.in
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Clock size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>Mon – Sat: 10:00 AM – 7:30 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '1.25rem'
              }}
            >
              Site Chapters
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: 'rgba(250, 248, 245, 0.72)',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 248, 245, 0.72)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Advisory Scope */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '1.25rem'
              }}
            >
              Advisory Scope
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {services.map((item) => (
                <li key={item} style={{ fontSize: '0.85rem', color: 'rgba(250, 248, 245, 0.72)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Focus Localities */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '1.25rem'
              }}
            >
              Focus Territories
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {localities.map((item) => (
                <li key={item} style={{ fontSize: '0.85rem', color: 'rgba(250, 248, 245, 0.72)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Legal Accord */}
        <div
          style={{
            borderTop: '1px solid rgba(201, 169, 130, 0.15)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            fontSize: '0.75rem',
            color: 'rgba(250, 248, 245, 0.5)'
          }}
        >
          <div style={{ maxWidth: '780px', lineHeight: 1.6 }}>
            <p style={{ fontSize: '0.72rem', color: 'rgba(250, 248, 245, 0.55)', marginBottom: '0.35rem' }}>
              <strong style={{ color: 'var(--accent-gold)' }}>Disclaimer:</strong> Namo Property Consultant is an independent property advisory service associated with Dishank Asija, providing consultation and property facilitation in Kandivali East and Mumbai. All property details, dimensions, layouts, and specifications are indicative and subject to verification with respective builders, owners, and statutory authorities under applicable RERA provisions.
            </p>
            <p style={{ fontSize: '0.72rem', color: 'rgba(250, 248, 245, 0.45)' }}>
              © {new Date().getFullYear()} Namo Property Consultant • Dishank Asija. All rights reserved.
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--accent-gold)',
              fontFamily: 'var(--font-title)',
              fontSize: '0.6875rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              padding: '0.5rem 0'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
