import React from 'react';
import { ArrowUp, MapPin, Phone, Clock, Star, ArrowUpRight, MessageCircle, Send } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TowerFooterProps {
  onInquireClick: () => void;
  onToast?: (msg: string) => void;
}

export const TowerFooter: React.FC<TowerFooterProps> = ({ onInquireClick, onToast }) => {
  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -40, duration: 1.35 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
    'Residential Property Buying & Selling',
    'Commercial Property Buying & Selling',
    'Property Rentals',
    'Property Consultation',
    'Property Dealing / Agency Services'
  ];

  const localities = [
    'Bopal',
    'South Bopal',
    'Ghuma',
    'Shela',
    'Shantipura',
    'Shilaj',
    'Maninagar',
    'Ahmedabad'
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
                Property Consultant & Real Estate Agency • Born to Consult
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
                THE REAL REALTY
              </h2>
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                  fontStyle: 'italic',
                  color: 'rgba(250, 248, 245, 0.75)',
                  display: 'block',
                  marginTop: '0.4rem',
                  maxWidth: '750px'
                }}
              >
                Shop No. 208, SBTS (South Bopal Trade Centre), Near Aaryan Gloria, South Bopal Road, Bopal, Ahmedabad, Gujarat – 380058
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', width: '100%', maxWidth: '480px' }}>
              <button
                onClick={onInquireClick}
                className="btn-gold-primary"
                style={{ flex: '1 1 160px', padding: '0.9rem 1.4rem', minHeight: '44px' }}
              >
                <span>Enquire Now</span>
                <ArrowUpRight size={16} />
              </button>

              <a
                href="tel:+917210320001"
                className="btn-gold-outline"
                style={{
                  flex: '1 1 140px',
                  padding: '0.9rem 1.2rem',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  textDecoration: 'none'
                }}
              >
                <Phone size={14} color="var(--accent-gold)" />
                <span>Call Us</span>
              </a>

              <a
                href="https://wa.me/917210320001?text=Hello%20The%20Real%20Realty%2C%20I%20am%20inquiring%20about%20your%20property%20consultation%20and%20real%20estate%20services%20in%20Ahmedabad."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline"
                style={{
                  flex: '1 1 140px',
                  padding: '0.9rem 1.2rem',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  textDecoration: 'none',
                  borderColor: 'var(--accent-gold)',
                  color: 'var(--accent-gold)'
                }}
              >
                <MessageCircle size={14} />
                <span>WhatsApp Us</span>
              </a>
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
              Office & Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.85rem', color: 'rgba(250, 248, 245, 0.75)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>Shop No. 208, SBTS (South Bopal Trade Centre), Near Aaryan Gloria, South Bopal Road, Bopal, Ahmedabad, Gujarat – 380058, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <a href="tel:+917210320001" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Call Property Advisory Desk
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Star size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>Born to Consult • Established 2022</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Clock size={15} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div>Monday – Sunday: 9:00 AM – 8:00 PM</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(250, 248, 245, 0.5)' }}>Consultations by Appointment & Walk-in</div>
                </div>
              </div>
              <div style={{ marginTop: '0.35rem' }}>
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
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    minHeight: '34px'
                  }}
                >
                  <Send size={12} />
                  <span>Send Property Enquiry</span>
                </button>
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
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: 'rgba(250, 248, 245, 0.72)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      display: 'inline-block',
                      padding: '2px 0'
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

          {/* Column 3: Services / Property Categories */}
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
              Services & Categories
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {services.map((item) => (
                <li key={item} style={{ fontSize: '0.85rem', color: 'rgba(250, 248, 245, 0.72)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Areas of Operation */}
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
              Areas of Operation
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

        {/* Bottom Disclaimer & Copyright */}
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
              <strong style={{ color: 'var(--accent-gold)' }}>Disclaimer:</strong> The Real Realty is a property consultant and real estate agency operating in Bopal, South Bopal, Ghuma, Shela, Shantipura, Shilaj, Maninagar, and Ahmedabad. All property dimensions, layout plans, and specifications are indicative and subject to verification with respective developers, owners, and authorities.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', fontSize: '0.72rem', color: 'rgba(250, 248, 245, 0.55)', marginTop: '0.5rem' }}>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Discretion</span>
              <span>•</span>
              <span>RERA Compliance</span>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'rgba(250, 248, 245, 0.45)', marginTop: '0.35rem' }}>
              © {new Date().getFullYear()} The Real Realty. All rights reserved. Shop No. 208, SBTS, South Bopal Road, Bopal, Ahmedabad.
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            style={{
              background: 'none',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--accent-gold)',
              fontFamily: 'var(--font-title)',
              fontSize: '0.6875rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              padding: '0.5rem 0',
              minHeight: '40px'
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
