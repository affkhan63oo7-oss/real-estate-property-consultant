import React, { useState } from 'react';
import { ArrowUpRight, ArrowUp, Send } from 'lucide-react';

interface FooterProps {
  onScheduleClick: () => void;
  onEnquiryClick: () => void;
  onToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScheduleClick,
  onEnquiryClick,
  onToast
}) => {
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes('@')) {
      onToast('Please enter a valid email address.');
      return;
    }
    onToast('Subscribed to Private Off-Market Quarterly Gazettes.');
    setEmailInput('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#090A0C',
        color: '#FFFFFF',
        paddingTop: 'clamp(5rem, 8vw, 8rem)',
        paddingBottom: '4rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container-luxury">
        {/* Massive Signature Editorial CTA */}
        <div
          style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            paddingBottom: '5rem',
            marginBottom: '5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2.5rem'
          }}
        >
          <div style={{ maxWidth: '800px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#C9A982',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              The Next Chapter
            </span>
            <h2
              style={{
                fontSize: 'clamp(2.8rem, 6.5vw, 6rem)',
                color: '#FFFFFF',
                lineHeight: 1.05,
                fontWeight: 300,
                textTransform: 'uppercase'
              }}
            >
              Find Your
              <br />
              <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: '#EDE8DF' }}>
                Next Address.
              </span>
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onScheduleClick}
              className="btn-luxury-primary"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#121316',
                borderColor: '#FFFFFF',
                padding: '1.25rem 2.5rem'
              }}
            >
              <span>Schedule Private Tour</span>
              <ArrowUpRight size={16} />
            </button>

            <button
              onClick={onEnquiryClick}
              className="btn-luxury-secondary"
              style={{
                color: '#FFFFFF',
                borderColor: 'rgba(255, 255, 255, 0.35)',
                padding: '1.25rem 2.5rem'
              }}
            >
              <span>Confidential Inquiry</span>
            </button>
          </div>
        </div>

        {/* 4-Column Editorial Links & Directory */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3.5rem',
            marginBottom: '5rem'
          }}
        >
          {/* Brand & Manifesto */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                display: 'block',
                marginBottom: '0.5rem'
              }}
            >
              South Bopal Real Estate
            </span>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', lineHeight: 1.8 }}>
              Real Estate Agency / Property Consultant led by Kishor Udhas. D 382, SOBO Centre, South Bopal, Ahmedabad, Gujarat – 380058. Phone: +91 99986 33795.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A982', marginBottom: '1.25rem' }}>
              Core Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Property Buying</span></li>
              <li><span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Property Selling</span></li>
              <li><span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Property Renting</span></li>
              <li><span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Residential Properties</span></li>
              <li><span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Bungalows / Villas</span></li>
              <li><span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Property Consultation</span></li>
            </ul>
          </div>

          {/* Private Offices */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A982', marginBottom: '1.25rem' }}>
              Consultancy Office
            </h4>
            <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div><strong>Business:</strong> South Bopal Real Estate</div>
              <div><strong>Owner / Consultant:</strong> Kishor Udhas</div>
              <div><strong>Type:</strong> Real Estate Agency / Property Consultant</div>
              <div><strong>Phone:</strong> <a href="tel:+919998633795" style={{ color: 'inherit', textDecoration: 'none' }}>+91 99986 33795</a></div>
              <div><strong>Address:</strong> D 382, SOBO Centre, South Bopal, Ahmedabad, Gujarat – 380058</div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A982', marginBottom: '1.25rem' }}>
              Primary Location
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '1rem', lineHeight: 1.7 }}>
              South Bopal, Ahmedabad, Gujarat.
            </p>
            <div style={{ fontSize: '0.8125rem', color: '#C9A982' }}>
              Services: Residential Properties, Bungalows, Villas & Expert Property Consultation.
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.45)'
          }}
        >
          <div>
            © {new Date().getFullYear()} South Bopal Real Estate. All rights reserved. D 382, SOBO Centre, South Bopal, Ahmedabad, Gujarat – 380058.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Privacy Charter</span>
            <span>Security Governance</span>
            <span>Terms of Discretion</span>

            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'none',
                border: 'none',
                color: '#C9A982',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
