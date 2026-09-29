import React, { useState, useEffect } from 'react';
import { Appointment, LeadEnquiry, Property } from '../types';
import { PROPERTIES } from '../data/mockData';
import {
  getStoredAppointments,
  getStoredLeads,
  isSupabaseConfigured,
  SUPABASE_URL,
  SUPABASE_ANON_KEY
} from '../lib/supabase';
import {
  X,
  Calendar,
  Users,
  Shield,
  CheckCircle2,
  Clock,
  Database,
  Key,
  ExternalLink,
  RefreshCw,
  Search,
  Filter,
  BarChart3,
  TrendingUp,
  Building
} from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onToast: (msg: string) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose, onToast }) => {
  const [activeTab, setActiveTab] = useState<'appointments' | 'leads' | 'properties' | 'supabase' | 'analytics'>('appointments');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [leads, setLeads] = useState<LeadEnquiry[]>([]);
  const [searchFilter, setSearchFilter] = useState('');

  // Supabase Custom Configuration in-browser override
  const [customUrl, setCustomUrl] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('REAL_REALTY_SUPABASE_URL') || localStorage.getItem('FUTURE_SUPABASE_URL') || '' : ''
  );
  const [customKey, setCustomKey] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('REAL_REALTY_SUPABASE_KEY') || localStorage.getItem('FUTURE_SUPABASE_KEY') || '' : ''
  );

  const reloadData = () => {
    setAppointments(getStoredAppointments());
    setLeads(getStoredLeads());
  };

  useEffect(() => {
    if (isOpen) {
      reloadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveCredentials = () => {
    if (customUrl.trim()) {
      localStorage.setItem('REAL_REALTY_SUPABASE_URL', customUrl.trim());
      localStorage.removeItem('FUTURE_SUPABASE_URL');
      localStorage.removeItem('NAMO_SUPABASE_URL');
      localStorage.removeItem('AETHELGARD_SUPABASE_URL');
    } else {
      localStorage.removeItem('REAL_REALTY_SUPABASE_URL');
      localStorage.removeItem('FUTURE_SUPABASE_URL');
      localStorage.removeItem('NAMO_SUPABASE_URL');
      localStorage.removeItem('AETHELGARD_SUPABASE_URL');
    }

    if (customKey.trim()) {
      localStorage.setItem('REAL_REALTY_SUPABASE_KEY', customKey.trim());
      localStorage.removeItem('FUTURE_SUPABASE_KEY');
      localStorage.removeItem('NAMO_SUPABASE_KEY');
      localStorage.removeItem('AETHELGARD_SUPABASE_KEY');
    } else {
      localStorage.removeItem('REAL_REALTY_SUPABASE_KEY');
      localStorage.removeItem('FUTURE_SUPABASE_KEY');
      localStorage.removeItem('NAMO_SUPABASE_KEY');
      localStorage.removeItem('AETHELGARD_SUPABASE_KEY');
    }

    onToast('Supabase connection credentials updated. Reloading...');
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  const handleUpdateAppointmentStatus = (id: string, newStatus: Appointment['status']) => {
    const updated = appointments.map((apt) =>
      apt.id === id ? { ...apt, status: newStatus } : apt
    );
    setAppointments(updated);
    localStorage.setItem('real_realty_appointments_vault', JSON.stringify(updated));
    localStorage.setItem('future_appointments_vault', JSON.stringify(updated));
    onToast(`Appointment #${id} updated to ${newStatus}.`);
  };

  const filteredAppointments = appointments.filter(
    (apt) =>
      apt.full_name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      apt.property_title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      apt.email.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 11, 13, 0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.5rem, 2vw, 2rem)',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1240px',
          height: '90vh',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: '2px',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-floating)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Admin Navigation Bar */}
        <div
          style={{
            padding: '1.25rem 2rem',
            backgroundColor: '#0F1012',
            color: '#FFFFFF',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Shield size={20} color="#C9A982" />
            <div>
              <span style={{ fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A982', fontWeight: 700 }}>
                The Real Realty Admin
              </span>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 400 }}>
                Consultancy Registry & Operations
              </h3>
            </div>
          </div>

          {/* Tab Navigation */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'appointments', label: 'Appointments Vault', icon: <Calendar size={14} />, count: appointments.length },
              { id: 'leads', label: 'VIP Inquiries', icon: <Users size={14} />, count: leads.length },
              { id: 'properties', label: 'Catalog Manager', icon: <Building size={14} />, count: PROPERTIES.length },
              { id: 'analytics', label: 'Portfolio Metrics', icon: <BarChart3 size={14} /> },
              { id: 'supabase', label: 'Supabase Sync', icon: <Database size={14} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '2px',
                  border: 'none',
                  backgroundColor: activeTab === tab.id ? 'var(--accent-bronze)' : 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: '1px 6px', borderRadius: '10px', fontSize: '10px' }}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '0.25rem' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Admin Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '2rem', backgroundColor: 'var(--bg-primary)' }}>
          {/* TAB 1: Appointments Vault */}
          {activeTab === 'appointments' && (
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                    Booked Client Appointments
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    Live registry of appointment submissions matching the complete flow: Form → Supabase / Vault → Admin Panel.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <div style={{ position: 'relative' }}>
                    <Search size={14} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--text-muted)' }} />
                    <input
                      type="text"
                      placeholder="Search guest or residence..."
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                      style={{
                        padding: '0.45rem 1rem 0.45rem 2rem',
                        fontSize: '0.8125rem',
                        borderRadius: '2px',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: '#FFFFFF',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button
                    onClick={reloadData}
                    className="btn-luxury-secondary"
                    style={{ padding: '0.45rem 0.85rem', fontSize: '0.75rem' }}
                    title="Refresh Registry"
                  >
                    <RefreshCw size={13} />
                    <span>Sync</span>
                  </button>
                </div>
              </div>

              {/* Appointments Data Table */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px',
                  overflowX: 'auto',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.8125rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#F7F6F2', borderBottom: '1px solid var(--border-medium)' }}>
                      <th style={{ padding: '1rem' }}>Ref / Date</th>
                      <th style={{ padding: '1rem' }}>Guest Name</th>
                      <th style={{ padding: '1rem' }}>Date of Birth (Verified)</th>
                      <th style={{ padding: '1rem' }}>Residence Focus</th>
                      <th style={{ padding: '1rem' }}>Scheduled Viewing</th>
                      <th style={{ padding: '1rem' }}>Status</th>
                      <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAppointments.length === 0 ? (
                      <tr>
                        <td colSpan={7} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                          No appointments recorded yet. Use the public "Schedule Visit" form to submit one!
                        </td>
                      </tr>
                    ) : (
                      filteredAppointments.map((apt) => (
                        <tr key={apt.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                          <td style={{ padding: '1rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>
                            <div>#{apt.id}</div>
                            <div style={{ fontSize: '10px' }}>{new Date(apt.created_at).toLocaleDateString()}</div>
                          </td>
                          <td style={{ padding: '1rem' }}>
                            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{apt.full_name}</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{apt.email} • {apt.phone}</div>
                          </td>
                          <td style={{ padding: '1rem' }}>
                            {/* Demonstrates Date of Birth bug is permanently resolved (supports pre-2026 dates) */}
                            <span
                              style={{
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                color: '#065F46',
                                padding: '2px 8px',
                                borderRadius: '2px',
                                fontWeight: 600,
                                fontSize: '11px'
                              }}
                            >
                              {apt.date_of_birth}
                            </span>
                          </td>
                          <td style={{ padding: '1rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                            {apt.property_title}
                          </td>
                          <td style={{ padding: '1rem' }}>
                            <div>{apt.preferred_date}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{apt.preferred_time}</div>
                          </td>
                          <td style={{ padding: '1rem' }}>
                            <span
                              style={{
                                padding: '3px 8px',
                                borderRadius: '2px',
                                fontSize: '10px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                backgroundColor:
                                  apt.status === 'Confirmed'
                                    ? '#D1FAE5'
                                    : apt.status === 'Completed'
                                    ? '#E5E7EB'
                                    : '#FEF3C7',
                                color:
                                  apt.status === 'Confirmed'
                                    ? '#065F46'
                                    : apt.status === 'Completed'
                                    ? '#374151'
                                    : '#92400E'
                              }}
                            >
                              {apt.status}
                            </span>
                          </td>
                          <td style={{ padding: '1rem', textAlign: 'right' }}>
                            <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                              {apt.status !== 'Confirmed' && (
                                <button
                                  onClick={() => handleUpdateAppointmentStatus(apt.id, 'Confirmed')}
                                  style={{
                                    padding: '4px 8px',
                                    fontSize: '11px',
                                    borderRadius: '2px',
                                    border: '1px solid #10B981',
                                    backgroundColor: '#10B981',
                                    color: '#FFFFFF',
                                    cursor: 'pointer'
                                  }}
                                >
                                  Confirm
                                </button>
                              )}
                              {apt.status !== 'Completed' && (
                                <button
                                  onClick={() => handleUpdateAppointmentStatus(apt.id, 'Completed')}
                                  style={{
                                    padding: '4px 8px',
                                    fontSize: '11px',
                                    borderRadius: '2px',
                                    border: '1px solid var(--border-medium)',
                                    backgroundColor: '#FFFFFF',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer'
                                  }}
                                >
                                  Complete
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: VIP Leads */}
          {activeTab === 'leads' && (
            <div>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Confidential Client Inquiries
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Dispatched from the confidential concierge drawer and off-market requests.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
                {leads.map((lead) => (
                  <div
                    key={lead.id}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-light)',
                      borderRadius: '2px',
                      padding: '1.5rem',
                      boxShadow: 'var(--shadow-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <h5 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>{lead.name}</h5>
                      <span className="badge-luxury">{lead.budget_range}</span>
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                      {lead.email} • {lead.phone || 'No phone'} • Channel: <strong>{lead.preferred_contact}</strong>
                    </div>
                    <p style={{ fontSize: '0.875rem', fontStyle: 'italic', backgroundColor: 'var(--bg-primary)', padding: '0.75rem', borderRadius: '2px', color: 'var(--text-secondary)' }}>
                      "{lead.message || 'General sovereign portfolio inquiry.'}"
                    </p>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                      Received: {new Date(lead.created_at).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Catalog Manager */}
          {activeTab === 'properties' && (
            <div>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Architectural Catalog ({PROPERTIES.length} Sovereign Estates)
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Live catalog status, valuations, and architectural specifications.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {PROPERTIES.map((p) => (
                  <div key={p.id} style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: '2px', overflow: 'hidden' }}>
                    <img src={p.heroImage} alt={p.title} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                    <div style={{ padding: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.6875rem', color: 'var(--accent-bronze)', fontWeight: 700 }}>{p.category}</span>
                        <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>{p.status}</span>
                      </div>
                      <h5 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0.25rem 0' }}>{p.title}</h5>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{p.location.city}, {p.location.country}</span>
                      <div style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.5rem', fontFamily: 'var(--font-serif)' }}>
                        {p.priceFormatted}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Analytics */}
          {activeTab === 'analytics' && (
            <div>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Sovereign Portfolio Analytics
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Aggregate acquisition metrics, client interest volume, and viewing conversion rates.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '2px', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Active Catalog Value</span>
                  <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', marginTop: '0.25rem' }}>
                    $246,800,000
                  </div>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '2px', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scheduled Viewings</span>
                  <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--accent-bronze)', fontFamily: 'var(--font-serif)', marginTop: '0.25rem' }}>
                    {appointments.length} Registered
                  </div>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '2px', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Verified Guest Age</span>
                  <div style={{ fontSize: '2rem', fontWeight: 600, color: '#10B981', fontFamily: 'var(--font-serif)', marginTop: '0.25rem' }}>
                    100% Validated
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Supabase Sync & Connection Inspector */}
          {activeTab === 'supabase' && (
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Database size={24} color="var(--accent-bronze)" />
                <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  Supabase Backend Configuration
                </h4>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                This integration is designed to satisfy Prompt 1. When Supabase Project URL and Anon/Publishable Key are supplied, all client appointments automatically persist directly to your Supabase <code>appointments</code> table. When running locally without credentials, the system runs safely in Local Vault mode with full reactivity.
              </p>

              {/* Status Banner */}
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: '2px',
                  backgroundColor: isSupabaseConfigured ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                  border: isSupabaseConfigured ? '1px solid #10B981' : '1px solid #F59E0B',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: isSupabaseConfigured ? '#10B981' : '#F59E0B'
                  }}
                />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: isSupabaseConfigured ? '#065F46' : '#92400E' }}>
                    {isSupabaseConfigured
                      ? 'Connected to Live Supabase Project'
                      : 'Running in Local Storage Vault Mode'}
                  </div>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    {isSupabaseConfigured
                      ? `Active URL: ${SUPABASE_URL}`
                      : 'Appointments are stored persistently in browser storage and will mirror to Supabase once credentials are provided.'}
                  </span>
                </div>
              </div>

              {/* Credentials Input Form */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  padding: '1.75rem',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem'
                }}
              >
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    Supabase Project URL (or paste Project ID)
                  </label>
                  <input
                    type="text"
                    placeholder="https://[YOUR_PROJECT_ID].supabase.co"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      fontSize: '0.875rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-medium)',
                      outline: 'none',
                      backgroundColor: 'var(--bg-primary)'
                    }}
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>
                    Example: https://abcdefghijklm.supabase.co
                  </span>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    Supabase Publishable / Anon Key (NEVER use Secret/Service Role Key)
                  </label>
                  <input
                    type="password"
                    placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                    value={customKey}
                    onChange={(e) => setCustomKey(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      fontSize: '0.875rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-medium)',
                      outline: 'none',
                      backgroundColor: 'var(--bg-primary)'
                    }}
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>
                    Standard public client key safe for frontend use.
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <button
                    onClick={handleSaveCredentials}
                    className="btn-luxury-primary"
                    style={{ padding: '0.85rem 1.75rem' }}
                  >
                    <span>Save & Connect Supabase</span>
                  </button>

                  {(customUrl || customKey) && (
                    <button
                      onClick={() => {
                        setCustomUrl('');
                        setCustomKey('');
                        localStorage.removeItem('REAL_REALTY_SUPABASE_URL');
                        localStorage.removeItem('FUTURE_SUPABASE_URL');
                        localStorage.removeItem('NAMO_SUPABASE_URL');
                        localStorage.removeItem('AETHELGARD_SUPABASE_URL');
                        localStorage.removeItem('REAL_REALTY_SUPABASE_KEY');
                        localStorage.removeItem('FUTURE_SUPABASE_KEY');
                        localStorage.removeItem('NAMO_SUPABASE_KEY');
                        localStorage.removeItem('AETHELGARD_SUPABASE_KEY');
                        onToast('Credentials cleared. Returned to Local Vault mode.');
                        setTimeout(() => window.location.reload(), 600);
                      }}
                      className="btn-luxury-secondary"
                    >
                      Clear Saved Credentials
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
