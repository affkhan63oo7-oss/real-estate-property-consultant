import React, { useState } from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

interface FloatingConciergeProps {
  onOpenEnquiry: () => void;
  onOpenSchedule: () => void;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({
  onOpenEnquiry,
  onOpenSchedule
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.75rem'
      }}
    >
      {/* Expanded Quick Contact Actions */}
      {isExpanded && (
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            borderRadius: '2px',
            padding: '1rem',
            boxShadow: 'var(--shadow-floating)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            animation: 'fadeIn 0.2s ease',
            minWidth: '220px'
          }}
        >
          <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-bronze)' }}>
            VIP Private Concierge
          </span>

          <a
            href="https://wa.me/?text=I%20am%20inquiring%20regarding%20properties%20with%20Namo%20Property%20Consultant."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.6rem 0.85rem',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              borderRadius: '2px',
              textDecoration: 'none',
              fontSize: '0.8125rem',
              fontWeight: 600
            }}
          >
            <MessageCircle size={16} />
            <span>Direct WhatsApp Desk</span>
          </a>

          <button
            onClick={() => {
              setIsExpanded(false);
              onOpenEnquiry();
            }}
            className="btn-luxury-secondary"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.6rem 0.85rem',
              fontSize: '0.8125rem',
              textAlign: 'left'
            }}
          >
            <Sparkles size={15} color="var(--accent-bronze)" />
            <span>Confidential Inquiry</span>
          </button>

          <a
            href="tel:+41228199200"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.6rem 0.85rem',
              border: '1px solid var(--border-light)',
              borderRadius: '2px',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '0.8125rem',
              fontWeight: 500
            }}
          >
            <Phone size={14} />
            <span>+41 22 819 9200 (Geneva)</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Pill */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.85rem 1.4rem',
          backgroundColor: '#121316',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '100px',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--accent-bronze)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#121316';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <MessageCircle size={18} color="#C9A982" />
        <span style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Concierge
        </span>
      </button>
    </div>
  );
};
