import React, { useState } from 'react';
import { TowerResidence } from './data/towerData';

// 111W57-Inspired Component Suite
import { CustomCursor } from './components/CustomCursor';
import { TowerHeader } from './components/TowerHeader';
import { TowerHero } from './components/TowerHero';
import { TowerManifesto } from './components/TowerManifesto';
import { TowerArchitecture } from './components/TowerArchitecture';
import { TowerResidences } from './components/TowerResidences';
import { TowerInteriors } from './components/TowerInteriors';
import { TowerPanorama } from './components/TowerPanorama';
import { TowerAmenities } from './components/TowerAmenities';
import { TowerLocation } from './components/TowerLocation';
import { TowerAvailability } from './components/TowerAvailability';
import { TowerFooter } from './components/TowerFooter';

// Modals
import { ResidenceDossierModal } from './components/ResidenceDossierModal';
import { TowerInquiryModal } from './components/TowerInquiryModal';
import { AdminPanel } from './components/AdminPanel';

export const App: React.FC = () => {
  // Modal States
  const [selectedResidence, setSelectedResidence] = useState<TowerResidence | null>(null);
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [inquireTargetResidence, setInquireTargetResidence] = useState<TowerResidence | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4500);
  };

  const handleOpenInquire = (residence?: TowerResidence | null) => {
    setInquireTargetResidence(residence || null);
    setIsInquireOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-parchment)' }}>
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* 111W57 Minimal Chapter Navigation Header */}
      <TowerHeader
        onOpenInquire={() => handleOpenInquire()}
        onToggleAdmin={() => setIsAdminOpen(!isAdminOpen)}
        isAdminOpen={isAdminOpen}
      />

      {/* Main Architectural Storytelling Stream */}
      <main>
        {/* Full-Screen Soaring Slender Silhouette Hero */}
        <TowerHero
          onExploreClick={() => {
            const el = document.getElementById('landmark');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onInquireClick={() => handleOpenInquire()}
        />

        {/* Chapter I: The Landmark (1,428 FT, 1:24 Aspect Ratio, Asymmetric Grid) */}
        <TowerManifesto />

        {/* Chapter II: Architecture & Craft (Terra-Cotta & Cast Bronze Filigree) */}
        <TowerArchitecture />

        {/* Chapter III: The Residences (Full-Bleed Editorial Spreads) */}
        <TowerResidences
          onSelectResidence={(res) => setSelectedResidence(res)}
          onInquireResidence={(res) => handleOpenInquire(res)}
        />

        {/* Chapter IV: Interior Craft (French Herringbone, Cristallo Quartzite, Statuario Marble) */}
        <TowerInteriors />

        {/* Chapter V: The Panorama (Interactive Central Park Day/Dusk/Night Views) */}
        <TowerPanorama />

        {/* Chapter VI: Amenities & Wellness (82-Ft Limestone Pool, Private Dining, Athletic Club) */}
        <TowerAmenities />

        {/* Chapter VII: The Enclave (Billionaires' Row & Cultural Destinations) */}
        <TowerLocation />

        {/* Chapter VIII: Availability Index (Clean Editorial Inventory Table) */}
        <TowerAvailability
          onSelectResidence={(res) => setSelectedResidence(res)}
          onInquireResidence={(res) => handleOpenInquire(res)}
        />
      </main>

      {/* Editorial Footer */}
      <TowerFooter onInquireClick={() => handleOpenInquire()} />

      {/* Residence Detailed Architectural Dossier Modal */}
      <ResidenceDossierModal
        residence={selectedResidence}
        onClose={() => setSelectedResidence(null)}
        onInquire={(res) => {
          setSelectedResidence(null);
          handleOpenInquire(res);
        }}
      />

      {/* Chapter IX: Private Salon Viewing & Inquire Modal */}
      <TowerInquiryModal
        isOpen={isInquireOpen}
        onClose={() => setIsInquireOpen(false)}
        selectedResidence={inquireTargetResidence}
        onSuccessToast={showToast}
      />

      {/* Operations Registry & Database Status Panel */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onToast={showToast}
      />

      {/* Minimalist Editorial Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--text-espresso)',
            color: '#FAF8F5',
            padding: '0.85rem 1.75rem',
            fontFamily: 'var(--font-title)',
            fontSize: '0.6875rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            boxShadow: 'var(--shadow-elevated)',
            zIndex: 3000,
            border: '1px solid rgba(250, 248, 245, 0.2)',
            animation: 'fadeIn 0.3s var(--ease-cinematic)'
          }}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default App;
