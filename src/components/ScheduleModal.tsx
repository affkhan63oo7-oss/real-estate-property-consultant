import React, { useState } from 'react';
import { Property, Appointment } from '../types';
import { PROPERTIES } from '../data/mockData';
import { saveAppointmentToStore } from '../lib/supabase';
import { X, Calendar, Clock, CheckCircle2, AlertCircle, Shield, ArrowRight, User, Mail, Phone } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProperty?: Property | null;
  onSuccessToast: (msg: string) => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  initialProperty,
  onSuccessToast
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>(
    initialProperty ? initialProperty.id : PROPERTIES[0].id
  );
  
  // Date & Time
  const [preferredDate, setPreferredDate] = useState<string>('2026-10-15');
  const [preferredTime, setPreferredTime] = useState<string>('11:00 (Morning Light)');
  const [inquiryType, setInquiryType] = useState<Appointment['inquiry_type']>('Private Viewing');

  // Personal Info
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  
  // CRITICAL REQUIREMENT: Date of Birth validation
  // Allows legitimate historical birth years (e.g. 1960, 1985, 1995, 2002) - NOT restricted to >= 2026!
  // Rejects future dates or empty input.
  const [dateOfBirth, setDateOfBirth] = useState<string>('1988-06-15');
  const [dobError, setDobError] = useState<string>('');

  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);

  if (!isOpen) return null;

  const currentProperty = PROPERTIES.find((p) => p.id === selectedPropertyId) || PROPERTIES[0];

  const validateDob = (val: string): boolean => {
    if (!val) {
      setDobError('Date of birth is required.');
      return false;
    }

    const birthDate = new Date(val);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
      setDobError('Please enter a valid calendar date.');
      return false;
    }

    // Must be in the past (before today)
    if (birthDate >= today) {
      setDobError('Date of birth must be a past date.');
      return false;
    }

    // Realistic age validation (between 18 and 120 years old)
    const ageDiffMs = today.getTime() - birthDate.getTime();
    const ageYears = ageDiffMs / (1000 * 60 * 60 * 24 * 365.25);

    if (ageYears < 18) {
      setDobError('Private viewing appointment holders must be at least 18 years of age.');
      return false;
    }

    if (ageYears > 120) {
      setDobError('Please enter a legitimate birth date.');
      return false;
    }

    setDobError('');
    return true;
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      const isDobValid = validateDob(dateOfBirth);
      if (!fullName.trim()) {
        setErrorMessage('Please enter your full legal name.');
        return;
      }
      if (!email.trim() || !email.includes('@')) {
        setErrorMessage('Please provide a valid private email address.');
        return;
      }
      if (!phone.trim()) {
        setErrorMessage('Please provide a contact phone number.');
        return;
      }
      if (!isDobValid) {
        return;
      }
      setErrorMessage('');
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const saved = await saveAppointmentToStore({
        property_id: currentProperty.id,
        property_title: currentProperty.title,
        full_name: fullName,
        email: email,
        phone: phone,
        date_of_birth: dateOfBirth,
        preferred_date: preferredDate,
        preferred_time: preferredTime,
        inquiry_type: inquiryType,
        notes: notes,
        status: 'Pending'
      });

      setConfirmedAppointment(saved);
      setStep(3);
      onSuccessToast(`Viewing confirmed for ${currentProperty.title}. Reference #${saved.id}`);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Unable to register appointment. Your details have been preserved. Please retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    setConfirmedAppointment(null);
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
        backgroundColor: 'rgba(10, 11, 13, 0.75)',
        backdropFilter: 'blur(10px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          borderRadius: '2px',
          boxShadow: 'var(--shadow-floating)',
          position: 'relative',
          padding: 'clamp(1.75rem, 3.5vw, 2.75rem)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
        >
          <X size={22} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '2rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent-bronze)',
              display: 'block',
              marginBottom: '0.35rem'
            }}
          >
            Sovereign Concierge
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', color: 'var(--text-primary)' }}>
            Schedule A Private Viewing
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            Personalized architectural dossiers, ground security clearances, and private transit coordination.
          </p>
        </div>

        {/* Multi-step progress bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: '1rem'
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: step >= 1 ? 'var(--text-primary)' : 'var(--text-muted)',
              borderBottom: step === 1 ? '2px solid var(--accent-bronze)' : 'none',
              paddingBottom: '0.25rem'
            }}
          >
            1. Residence & Timing
          </div>
          <span style={{ color: 'var(--text-muted)' }}>•</span>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: step >= 2 ? 'var(--text-primary)' : 'var(--text-muted)',
              borderBottom: step === 2 ? '2px solid var(--accent-bronze)' : 'none',
              paddingBottom: '0.25rem'
            }}
          >
            2. Guest Credentials
          </div>
          <span style={{ color: 'var(--text-muted)' }}>•</span>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: step === 3 ? 'var(--text-primary)' : 'var(--text-muted)',
              borderBottom: step === 3 ? '2px solid var(--accent-bronze)' : 'none',
              paddingBottom: '0.25rem'
            }}
          >
            3. Confirmation
          </div>
        </div>

        {/* STEP 1: Select Property, Date, Time & Inquiry Type */}
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Property Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Select Residence
              </label>
              <select
                value={selectedPropertyId}
                onChange={(e) => setSelectedPropertyId(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  fontSize: '0.9375rem',
                  borderRadius: '2px',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              >
                {PROPERTIES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} — {p.location.city}, {p.location.country} ({p.priceFormatted})
                  </option>
                ))}
              </select>
            </div>

            {/* Inquiry Type */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Viewing Mode
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                {(['Private Viewing', 'Architectural Tour', 'Virtual Video Walkthrough', 'Financial & Portfolio Consultation'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setInquiryType(t)}
                    style={{
                      padding: '0.65rem 0.75rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      borderRadius: '2px',
                      border: inquiryType === t ? '1px solid var(--text-primary)' : '1px solid var(--border-light)',
                      backgroundColor: inquiryType === t ? 'var(--text-primary)' : 'var(--bg-primary)',
                      color: inquiryType === t ? '#FFFFFF' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Slot */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Preferred Date
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="date"
                    value={preferredDate}
                    min="2026-09-25"
                    onChange={(e) => setPreferredDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      fontSize: '0.875rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Lighting Window / Time
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    fontSize: '0.875rem',
                    borderRadius: '2px',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }}
                >
                  <option value="10:00 (Crisp Morning Sun)">10:00 (Crisp Morning Sun)</option>
                  <option value="11:00 (Morning Light)">11:00 (Morning Light)</option>
                  <option value="14:00 (Afternoon Solar Peak)">14:00 (Afternoon Solar Peak)</option>
                  <option value="17:30 (Sunset & Golden Hour)">17:30 (Sunset & Golden Hour)</option>
                </select>
              </div>
            </div>

            {/* Next Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button
                onClick={handleNextStep}
                className="btn-luxury-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Continue to Guest Details</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Guest Details with DOB Bug Fix */}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {errorMessage && (
              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#FEF2F2',
                  border: '1px solid #F87171',
                  borderRadius: '2px',
                  color: '#991B1B',
                  fontSize: '0.8125rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Full Name */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                Full Legal Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Eleanor Vance"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  fontSize: '0.875rem',
                  borderRadius: '2px',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              />
            </div>

            {/* Email & Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Private Email *
                </label>
                <input
                  type="email"
                  placeholder="e.g. e.vance@familyoffice.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    fontSize: '0.875rem',
                    borderRadius: '2px',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Mobile / Signal / WhatsApp *
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
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* CRITICAL: DATE OF BIRTH WITH FIX */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Date of Birth (Security Clearance Verification) *
                </label>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Any legitimate birth year (e.g. 1970–2006)
                </span>
              </div>
              <input
                type="date"
                value={dateOfBirth}
                max="2008-01-01" // Ensures adult, does NOT use 2026 as minimum!
                min="1910-01-01"
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                  validateDob(e.target.value);
                }}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  fontSize: '0.875rem',
                  borderRadius: '2px',
                  border: dobError ? '1px solid #EF4444' : '1px solid var(--border-medium)',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              />
              {dobError && (
                <span style={{ fontSize: '0.75rem', color: '#DC2626', display: 'block', marginTop: '0.25rem' }}>
                  {dobError}
                </span>
              )}
            </div>

            {/* Concierge Notes */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                Special Requirements & Transit Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Arriving via helicopter, requiring NDA protocol, dietary preferences..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  fontSize: '0.875rem',
                  borderRadius: '2px',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  resize: 'none'
                }}
              />
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-luxury-secondary"
                style={{ flex: 1 }}
                disabled={isSubmitting}
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="btn-luxury-primary"
                style={{ flex: 2 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Securing Clearance...' : 'Confirm Private Viewing'}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Confirmation Screen */}
        {step === 3 && confirmedAppointment && (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Clearance & Appointment Confirmed
            </h3>
            <p style={{ maxWidth: '480px', margin: '0 auto 1.75rem auto', fontSize: '0.9375rem' }}>
              Your consultation appointment has been registered with Future Construction and dispatched to our advisory team in Hinjawadi, Pune.
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-light)',
                borderRadius: '2px',
                padding: '1.5rem',
                textAlign: 'left',
                marginBottom: '2rem',
                fontSize: '0.875rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Dossier Reference:</span>
                <span style={{ fontWeight: 600, fontFamily: 'monospace' }}>#{confirmedAppointment.id}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Residence:</span>
                <span style={{ fontWeight: 600 }}>{confirmedAppointment.property_title}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Scheduled Time:</span>
                <span style={{ fontWeight: 600 }}>{confirmedAppointment.preferred_date} • {confirmedAppointment.preferred_time}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Registered Guest:</span>
                <span style={{ fontWeight: 600 }}>{confirmedAppointment.full_name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Security DOB Verified:</span>
                <span style={{ fontWeight: 600 }}>{confirmedAppointment.date_of_birth}</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="btn-luxury-primary"
              style={{ width: '100%' }}
            >
              Return to Residence Catalog
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
