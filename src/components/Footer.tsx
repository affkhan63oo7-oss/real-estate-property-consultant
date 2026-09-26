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
              Namo Property Consultant
            </span>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', lineHeight: 1.8 }}>
              Professional real-estate consultancy associated with Dishank Asija. Kandivali East, Mumbai, Maharashtra, India.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A982', marginBottom: '1.25rem' }}>
              The Portfolio
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="#collection" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Alpine Cantilevers</a></li>
              <li><a href="#collection" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Sky Penthouse Sanctuaries</a></li>
              <li><a href="#collection" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Mediterranean Cliff Havens</a></li>
              <li><a href="#collection" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Arctic Glass Observatories</a></li>
            </ul>
          </div>

          {/* Private Offices */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A982', marginBottom: '1.25rem' }}>
              Consultancy Office
            </h4>
            <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div><strong>Business:</strong> Namo Property Consultant</div>
              <div><strong>Consultant:</strong> Dishank Asija</div>
              <div><strong>Location:</strong> Kandivali East, Mumbai, Maharashtra</div>
            </div>
          </div>

          {/* Newsletter Gazette */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A982', marginBottom: '1.25rem' }}>
              The Architectural Gazette
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '1rem' }}>
              Receive discreet notifications of off-market private commissions before public release.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Enter private email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.65rem 0.85rem',
                  fontSize: '0.8125rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  borderRadius: '2px',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.65rem 1rem',
                  backgroundColor: '#FFFFFF',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Send size={14} color="#121316" />
              </button>
            </form>
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
            © 2026 Namo Property Consultant. Associated with Dishank Asija. All rights reserved. Kandivali East, Mumbai.
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
