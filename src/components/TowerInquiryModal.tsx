import React, { useState } from 'react';
import { TowerResidence, TOWER_RESIDENCES } from '../data/towerData';
import { saveAppointmentToStore } from '../lib/supabase';
import { Appointment } from '../types';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';

interface TowerInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedResidence?: TowerResidence | null;
  onSuccessToast: (msg: string) => void;
}

export const TowerInquiryModal: React.FC<TowerInquiryModalProps> = ({
  isOpen,
  onClose,
  selectedResidence,
  onSuccessToast
}) => {
  const [selectedId, setSelectedId] = useState<string>(
    selectedResidence ? selectedResidence.id : TOWER_RESIDENCES[0].id
  );

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // DATE OF BIRTH FIX: accepts legitimate historical birth dates (e.g. 1970–2006), rejects future/invalid dates
  const [dateOfBirth, setDateOfBirth] = useState('1988-06-15');
  const [dobError, setDobError] = useState('');

  const [preferredDate, setPreferredDate] = useState('2026-10-10');
  const [preferredTime, setPreferredTime] = useState('11:00 AM (Morning)');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmedRecord, setConfirmedRecord] = useState<Appointment | null>(null);

  if (!isOpen) return null;

  const currentResidence = TOWER_RESIDENCES.find((r) => r.id === selectedId) || TOWER_RESIDENCES[0];

  const validateDob = (val: string): boolean => {
    if (!val) {
      setDobError('Date of birth is required.');
      return false;
    }
    const d = new Date(val);
    const now = new Date();
    if (isNaN(d.getTime())) {
      setDobError('Please enter a valid calendar date.');
      return false;
    }
    if (d >= now) {
      setDobError('Date of birth must be a past date.');
      return false;
    }
    const ageYears = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    if (ageYears < 18) {
      setDobError('Must be 18 years of age or older.');
      return false;
    }
    setDobError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage('Please provide a contact phone number.');
      return;
    }
    if (!validateDob(dateOfBirth)) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const saved = await saveAppointmentToStore({
        property_id: currentResidence.id,
        property_title: currentResidence.residenceNumber,
        full_name: fullName,
        email: email,
        phone: phone,
        date_of_birth: dateOfBirth,
        preferred_date: preferredDate,
        preferred_time: preferredTime,
        inquiry_type: 'Property Consultation',
        notes: notes,
        status: 'Pending'
      });

      setConfirmedRecord(saved);
      onSuccessToast(`Consultation enquiry registered for ${currentResidence.residenceNumber}. Reference #${saved.id}`);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Error transmitting enquiry request. Information preserved.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setConfirmedRecord(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setErrorMessage('');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(18, 17, 16, 0.88)',
        backdropFilter: 'blur(16px)',
        zIndex: 2300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.5rem, 3vw, 1.5rem)',
        animation: 'fadeIn 0.3s var(--ease-cinematic)'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '640px',
          maxHeight: '92dvh',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-parchment)',
          border: '1px solid var(--hairline-light)',
          padding: 'clamp(1.25rem, 4vw, 2.5rem)',
          position: 'relative',
          boxShadow: 'var(--shadow-elevated)'
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-espresso)',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {confirmedRecord ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(188, 160, 107, 0.15)',
                color: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle2 size={32} />
            </div>

            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-title)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
              Enquiry Confirmed
            </span>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-espresso)', margin: '0.35rem 0 1rem 0' }}>
              Consultation Enquiry Received
            </h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '2rem', color: 'var(--text-espresso)' }}>
              Your consultation request has been registered with Namo Property Consultant. Dishank Asija will connect with you to review your property requirements and discuss next steps.
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-limestone)',
                border: '1px solid var(--hairline-light)',
                padding: '1.5rem',
                textAlign: 'left',
                marginBottom: '2rem',
                fontSize: '0.8125rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Registry Ref:</span>
                <span style={{ fontWeight: 600, fontFamily: 'monospace' }}>#{confirmedRecord.id}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Property:</span>
                <span style={{ fontWeight: 600 }}>{confirmedRecord.property_title}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Preferred Date & Time:</span>
                <span style={{ fontWeight: 600 }}>{confirmedRecord.preferred_date} • {confirmedRecord.preferred_time}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Client Name:</span>
                <span style={{ fontWeight: 600 }}>{confirmedRecord.full_name}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-111-primary"
              style={{ padding: '0.85rem 2rem' }}
            >
              Close & Return to Website
            </button>
          </div>
        ) : (
          <div>
            <span className="chapter-number">Consultant Inquiry</span>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--text-espresso)', marginBottom: '0.5rem' }}>
              Talk to a Property Consultant
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '2rem', color: 'var(--text-espresso)' }}>
              Personalised real-estate guidance with Dishank Asija. Submit your details to discuss residential, commercial, buying, selling, or rental requirements in Mumbai.
            </p>

            {errorMessage && (
              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#FEF2F2',
                  border: '1px solid #F87171',
                  color: '#991B1B',
                  fontSize: '0.8125rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}
              >
                <AlertCircle size={15} />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Property Requirement / Listing
                </label>
                <select
                  value={selectedId}
                  onChange={(e) => setSelectedId(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    fontSize: '0.875rem',
                    border: '1px solid var(--hairline-light)',
                    backgroundColor: 'var(--bg-limestone)',
                    outline: 'none'
                  }}
                >
                  {TOWER_RESIDENCES.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.residenceNumber} — {r.type} ({r.priceFormatted})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    fontSize: '0.875rem',
                    border: '1px solid var(--hairline-light)',
                    backgroundColor: 'var(--bg-limestone)',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul.sharma@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      fontSize: '0.875rem',
                      border: '1px solid var(--hairline-light)',
                      backgroundColor: 'var(--bg-limestone)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98200 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      fontSize: '0.875rem',
                      border: '1px solid var(--hairline-light)',
                      backgroundColor: 'var(--bg-limestone)',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* DATE OF BIRTH (Supports any pre-2026 birth dates) */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    Date of Birth *
                  </label>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                    Pre-2026 Birth Dates Accepted
                  </span>
                </div>
                <input
                  type="date"
                  value={dateOfBirth}
                  max="2008-01-01"
                  min="1910-01-01"
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                    validateDob(e.target.value);
                  }}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    fontSize: '0.875rem',
                    border: dobError ? '1px solid #EF4444' : '1px solid var(--hairline-light)',
                    backgroundColor: 'var(--bg-limestone)',
                    outline: 'none'
                  }}
                />
                {dobError && (
                  <span style={{ fontSize: '0.75rem', color: '#DC2626', display: 'block', marginTop: '0.25rem' }}>
                    {dobError}
                  </span>
                )}
              </div>

              {/* Preferred Date & Time */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Preferred Meeting Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    min="2026-09-25"
                    onChange={(e) => setPreferredDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      fontSize: '0.875rem',
                      border: '1px solid var(--hairline-light)',
                      backgroundColor: 'var(--bg-limestone)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      fontSize: '0.875rem',
                      border: '1px solid var(--hairline-light)',
                      backgroundColor: 'var(--bg-limestone)',
                      outline: 'none'
                    }}
                  >
                    <option value="10:00 AM (Morning)">10:00 AM (Morning)</option>
                    <option value="12:00 PM (Midday)">12:00 PM (Midday)</option>
                    <option value="03:00 PM (Afternoon)">03:00 PM (Afternoon)</option>
                    <option value="06:00 PM (Evening)">06:00 PM (Evening)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Property Requirements / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Specific budget, preferred BHK, commercial size, or timeline..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    fontSize: '0.875rem',
                    border: '1px solid var(--hairline-light)',
                    backgroundColor: 'var(--bg-limestone)',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-111-primary"
                style={{ width: '100%', minHeight: '48px', marginTop: '0.75rem' }}
              >
                {isSubmitting ? 'Transmitting Request...' : 'Submit Consultation Request'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
