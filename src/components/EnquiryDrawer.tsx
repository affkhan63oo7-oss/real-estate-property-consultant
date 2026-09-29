import React, { useState } from 'react';
import { saveLeadToStore } from '../lib/supabase';
import { X, Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onToast: (msg: string) => void;
}

export const EnquiryDrawer: React.FC<EnquiryDrawerProps> = ({
  isOpen,
  onClose,
  onToast
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredContact, setPreferredContact] = useState<'Email' | 'Phone' | 'WhatsApp'>('WhatsApp');
  const [budgetRange, setBudgetRange] = useState('$20M – $50M');
  const [propertyInterest, setPropertyInterest] = useState('All Sovereign Estates');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      onToast('Please enter your name and email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      await saveLeadToStore({
        name,
        email,
        phone,
        preferred_contact: preferredContact,
        budget_range: budgetRange,
        property_interest: propertyInterest,
        message,
        status: 'New'
      });
      setIsSubmitted(true);
      onToast('Inquiry dispatched directly to the Executive Concierge Desk.');
    } catch (err) {
      onToast('Error transmitting inquiry. Please retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 11, 13, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 2100,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '500px',
          height: '100%',
          backgroundColor: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-floating)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2.25rem',
          overflowY: 'auto'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-bronze)' }}>
              Direct Concierge
            </span>
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={22} />
            </button>
          </div>

          <h3 style={{ fontSize: '1.85rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Property Consultation Enquiry
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Connect with South Bopal Real Estate and Kishor Udhas regarding Property Buying, Property Selling, Property Renting, Residential Properties, Bungalows / Villas, and Property Consultation in South Bopal, Ahmedabad.
          </p>

          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Inquiry Dispatched
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Your private dossier request has been securely delivered. You will receive contact via your preferred channel ({preferredContact}) within 2 hours.
              </p>
              <button onClick={handleReset} className="btn-luxury-primary" style={{ width: '100%' }}>
                Close Drawer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Jonathan Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    fontSize: '0.875rem',
                    borderRadius: '2px',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-primary)',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. j.vance@holdings.ch"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      fontSize: '0.875rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'var(--bg-primary)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    Telephone / Signal
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +41 22 819 9200"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      fontSize: '0.875rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'var(--bg-primary)',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Target Acquisition Budget
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    fontSize: '0.875rem',
                    borderRadius: '2px',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-primary)',
                    outline: 'none'
                  }}
                >
                  <option value="$15M – $30M">$15M – $30M USD</option>
                  <option value="$30M – $60M">$30M – $60M USD</option>
                  <option value="$60M+">$60M+ Sovereign Level</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Preferred Communication Channel
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {(['WhatsApp', 'Phone', 'Email'] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPreferredContact(method)}
                      style={{
                        padding: '0.6rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        border: preferredContact === method ? '1px solid var(--text-primary)' : '1px solid var(--border-light)',
                        backgroundColor: preferredContact === method ? 'var(--text-primary)' : 'var(--bg-primary)',
                        color: preferredContact === method ? '#FFFFFF' : 'var(--text-secondary)',
                        borderRadius: '2px',
                        cursor: 'pointer'
                      }}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Confidential Message / Scope
                </label>
                <textarea
                  rows={3}
                  placeholder="Detail your architectural requirements, privacy protocols, or geographic preferences..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    fontSize: '0.875rem',
                    borderRadius: '2px',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-primary)',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-luxury-primary"
                style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
              >
                <Send size={15} />
                <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Confidential Inquiry'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
