import { createClient } from '@supabase/supabase-js';
import { Appointment, LeadEnquiry } from '../types';

// Read from Vite environment variables or localStorage overrides
const envUrl = import.meta.env.VITE_SUPABASE_URL || '';
const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Stored credentials from settings if configured by user
const storedUrl = typeof window !== 'undefined'
  ? localStorage.getItem('REAL_REALTY_SUPABASE_URL') || ''
  : '';
const storedKey = typeof window !== 'undefined'
  ? localStorage.getItem('REAL_REALTY_SUPABASE_KEY') || ''
  : '';

export const SUPABASE_URL = storedUrl || envUrl;
export const SUPABASE_ANON_KEY = storedKey || envKey;

export const isSupabaseConfigured = Boolean(
  SUPABASE_URL && 
  SUPABASE_ANON_KEY && 
  SUPABASE_URL.startsWith('https://') &&
  !SUPABASE_URL.includes('your-project-id')
);

export const supabase = isSupabaseConfigured
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

// Local fallback store keys
const LOCAL_APPOINTMENTS_KEY = 'real_realty_appointments_vault';
const LOCAL_LEADS_KEY = 'real_realty_leads_vault';

export const getStoredAppointments = (): Appointment[] => {
  try {
    let raw = localStorage.getItem(LOCAL_APPOINTMENTS_KEY);
    if (!raw) {
      // Seed default consultation demonstration records
      const initial: Appointment[] = [
        {
          id: 'apt-001',
          created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
          property_id: 'res-apartments-flats',
          property_title: 'Apartments & Flats',
          full_name: 'Amitabh Sen',
          email: 'amitabh.sen@example.com',
          phone: '+91 98201 12345',
          date_of_birth: '1982-04-14',
          preferred_date: '2026-10-15',
          preferred_time: '11:00 AM (Morning)',
          inquiry_type: 'Property Consultation',
          notes: 'Interested in a 3 BHK premium apartment in South Bopal / Shela corridor.',
          status: 'Confirmed'
        },
        {
          id: 'apt-002',
          created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
          property_id: 'res-commercial-properties',
          property_title: 'Commercial Properties',
          full_name: 'Pooja Mehta',
          email: 'pooja.mehta@consultancy.in',
          phone: '+91 98190 67890',
          date_of_birth: '1989-11-23',
          preferred_date: '2026-10-22',
          preferred_time: '03:00 PM (Afternoon)',
          inquiry_type: 'Commercial Real Estate',
          notes: 'Looking for a residential property consultation in South Bopal.',
          status: 'Pending'
        }
      ];
      localStorage.setItem(LOCAL_APPOINTMENTS_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading local appointments:', err);
    return [];
  }
};

export const saveAppointmentToStore = async (appointmentData: Omit<Appointment, 'id' | 'created_at'>): Promise<Appointment> => {
  const newAppointment: Appointment = {
    ...appointmentData,
    id: `apt-${Date.now()}`,
    created_at: new Date().toISOString(),
  };

  // If Supabase is configured, attempt insert to database table 'appointments'
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .insert([
          {
            property_id: newAppointment.property_id,
            property_title: newAppointment.property_title,
            full_name: newAppointment.full_name,
            email: newAppointment.email,
            phone: newAppointment.phone,
            date_of_birth: newAppointment.date_of_birth,
            preferred_date: newAppointment.preferred_date,
            preferred_time: newAppointment.preferred_time,
            inquiry_type: newAppointment.inquiry_type,
            notes: newAppointment.notes || '',
            status: newAppointment.status
          }
        ])
        .select()
        .single();

      if (error) {
        console.warn('Supabase insert returned error, backing up locally:', error.message);
      } else if (data) {
        newAppointment.id = data.id || newAppointment.id;
      }
    } catch (err) {
      console.warn('Supabase connection failed, gracefully saving to local vault:', err);
    }
  }

  // Always mirror in localStorage for instant admin panel reactivity and offline safety
  try {
    const list = getStoredAppointments();
    const updated = [newAppointment, ...list];
    localStorage.setItem(LOCAL_APPOINTMENTS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed writing to local storage:', err);
  }

  return newAppointment;
};

export const getStoredLeads = (): LeadEnquiry[] => {
  try {
    let raw = localStorage.getItem(LOCAL_LEADS_KEY);
    if (!raw) {
      const initial: LeadEnquiry[] = [
        {
          id: 'lead-001',
          created_at: new Date(Date.now() - 3600000 * 12).toISOString(),
          name: 'Rajesh Vora',
          email: 'rajesh.vora@business.in',
          phone: '+91 98210 54321',
          preferred_contact: 'WhatsApp',
          property_interest: 'Apartments & Flats',
          budget_range: '₹85 Lakh – ₹2.5 Cr',
          message: 'Looking for a verified residential apartment or commercial space in South Bopal, Ahmedabad.',
          status: 'New'
        }
      ];
      localStorage.setItem(LOCAL_LEADS_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
};

export const saveLeadToStore = async (leadData: Omit<LeadEnquiry, 'id' | 'created_at'>): Promise<LeadEnquiry> => {
  const newLead: LeadEnquiry = {
    ...leadData,
    id: `lead-${Date.now()}`,
    created_at: new Date().toISOString()
  };

  if (supabase) {
    try {
      await supabase.from('leads').insert([newLead]);
    } catch (err) {
      console.warn('Supabase lead insert notice:', err);
    }
  }

  const existing = getStoredLeads();
  localStorage.setItem(LOCAL_LEADS_KEY, JSON.stringify([newLead, ...existing]));
  return newLead;
};
