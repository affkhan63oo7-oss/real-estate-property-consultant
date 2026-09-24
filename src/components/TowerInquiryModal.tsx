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
  const [dateOfBirth, setDateOfBirth] = useState('1985-05-18');
  const [dobError, setDobError] = useState('');

  const [preferredDate, setPreferredDate] = useState('2026-10-20');
  const [preferredTime, setPreferredTime] = useState('11:00 AM (Morning Central Park Light)');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmedRecord, setConfirmedRecord] = useState<Appointment | null>(null);

  if (!isOpen) return null;

  const currentResidence = TOWER_RESIDENCES.find((r) => r.id === selectedId) || TOWER_RESIDENCES[0];

  const validateDob = (val: string): boolean => {
    if (!val) {
      setDobError('Date of birth is required for security clearance.');
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
      setDobError('Guests must be 18 years of age or older.');
      return false;
    }
    setDobError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage('Please provide your full legal name.');
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
        property_title: `117 W 57 — ${currentResidence.residenceNumber}`,
        full_name: fullName,
        email: email,
        phone: phone,
        date_of_birth: dateOfBirth,
        preferred_date: preferredDate,
        preferred_time: preferredTime,
        inquiry_type: 'Private Viewing',
        notes: notes,
        status: 'Pending'
      });

      setConfirmedRecord(saved);
      onSuccessToast(`Private Viewing confirmed for ${currentResidence.residenceNumber}. Reference #${saved.id}`);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Error transmitting viewing request. Information preserved.');
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
        padding: '1.5rem',
        animation: 'fadeIn 0.3s var(--ease-cinematic)'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '640px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-parchment)',
          border: '1px solid var(--hairline-light)',
          padding: 'clamp(2rem, 4vw, 3rem)',
          position: 'relative',
          boxShadow: 'var(--shadow-elevated)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-espresso)'
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
              Clearance Confirmed
            </span>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-espresso)', margin: '0.35rem 0 1rem 0' }}>
              Private Viewing Scheduled
            </h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Your private appointment has been registered with the 117 West 57th Street residential sales gallery. An associate director will coordinate direct chauffeur arrival and security clearance.
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
                <span style={{ color: 'var(--text-muted)' }}>Residence:</span>
                <span style={{ fontWeight: 600 }}>{confirmedRecord.property_title}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Date & Light Window:</span>
                <span style={{ fontWeight: 600 }}>{confirmedRecord.preferred_date} • {confirmedRecord.preferred_time}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Guest:</span>
                <span style={{ fontWeight: 600 }}>{confirmedRecord.full_name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>DOB Security Verified:</span>
                <span style={{ fontWeight: 600 }}>{confirmedRecord.date_of_birth}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-111-primary"
              style={{ width: '100%' }}
            >
              Return to The Tower
            </button>
          </div>
        ) : (
          <div>
            <span className="chapter-number">IX. Private Salon</span>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--text-espresso)', marginBottom: '0.5rem' }}>
              Schedule A Private Viewing
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Private tours of completed residences and the full-floor sales gallery are conducted exclusively by appointment.
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
                  Target Residence
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
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Julian Sterling"
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Private Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. j.sterling@sterling.ch"
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
                    Telephone / Signal *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +1 (212) 555-0190"
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
                    Date of Birth (Security Clearance Verification) *
                  </label>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                    Pre-2026 Birth Dates Permitted
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

              {/* Preferred Date & Light Window */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Preferred Date
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
                    Lighting Window
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
                    <option value="10:00 AM (Crisp Morning Park Sun)">10:00 AM (Crisp Morning Park Sun)</option>
                    <option value="11:30 AM (Solar Zenith)">11:30 AM (Solar Zenith)</option>
                    <option value="02:30 PM (Afternoon Light)">02:30 PM (Afternoon Light)</option>
                    <option value="05:45 PM (Sunset & Golden Hour)">05:45 PM (Sunset & Golden Hour)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-title)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Confidential Notes & Arrival Coordination (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Arriving via private car, requiring NDA clearance..."
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
                style={{ width: '100%', marginTop: '0.75rem' }}
              >
                {isSubmitting ? 'Transmitting Request...' : 'Confirm Private Salon Appointment'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
