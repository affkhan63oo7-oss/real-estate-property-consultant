import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { TowerResidence } from './data/towerData';

// Reference-Inspired Luxury Campaign Component Suite
import { CustomCursor } from './components/CustomCursor';
import { TowerHeader } from './components/TowerHeader';
import { TowerHero } from './components/TowerHero';
import { ProjectStatsBar } from './components/ProjectStatsBar';
import { ProjectIntroduction } from './components/ProjectIntroduction';
import { ProjectMasterPlan } from './components/ProjectMasterPlan';
import { ProjectConfigurations } from './components/ProjectConfigurations';
import { ProjectAmenities } from './components/ProjectAmenities';
import { ProjectLocation } from './components/ProjectLocation';
import { ProjectGallery } from './components/ProjectGallery';
import { ProjectFAQ } from './components/ProjectFAQ';
import { ProjectFinalCTA } from './components/ProjectFinalCTA';
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

  // Apple-grade Smooth Scroll Interpolation with Lenis
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1
    });

    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

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
        {/* Full-Screen Hero (Preserved Exactly As-Is with 0 redesign) */}
        <TowerHero
          onExploreClick={() => {
            const el = document.getElementById('overview') || document.getElementById('quick-stats') || document.getElementById('configurations');
            if (el) {
              const lenis = (window as any).__lenis;
              if (lenis) {
                lenis.scrollTo(el, { offset: -30, duration: 1.4 });
              } else {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
          onInquireClick={() => handleOpenInquire()}
        />

        {/* 1. Project Quick Stats (Inspired by Reference Horizontal Cards) */}
        <ProjectStatsBar />

        {/* 2. Project Editorial Introduction */}
        <ProjectIntroduction onInquireClick={() => handleOpenInquire()} />

        {/* 3. Master Plan Section */}
        <ProjectMasterPlan />

        {/* 4. Configurations & Floor Plans Section */}
        <ProjectConfigurations
          onSelectResidence={(res) => setSelectedResidence(res)}
          onInquireResidence={(res) => handleOpenInquire(res)}
        />

        {/* 5. Lifestyle & Curated Amenities Section */}
        <ProjectAmenities />

        {/* 6. Location & Connectivity Section */}
        <ProjectLocation />

        {/* 7. Architectural Gallery Section */}
        <ProjectGallery />

        {/* 8. Frequently Asked Questions (FAQ) */}
        <ProjectFAQ />

        {/* 9. Final Consultant Advisory CTA Banner */}
        <ProjectFinalCTA onInquireClick={() => handleOpenInquire()} />
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
