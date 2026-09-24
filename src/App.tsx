import React, { useState, useEffect } from 'react';
import { Property } from './types';
import { PROPERTIES } from './data/mockData';

// Component Suite
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VisionSection } from './components/VisionSection';
import { FeaturedProperty } from './components/FeaturedProperty';
import { PropertyDiscovery } from './components/PropertyDiscovery';
import { AmenitiesStory } from './components/AmenitiesStory';
import { ProgressSlider } from './components/ProgressSlider';
import { FloorPlanViewer } from './components/FloorPlanViewer';
import { Model3DViewer } from './components/Model3DViewer';
import { LocationExplorer } from './components/LocationExplorer';
import { StatsCounter } from './components/StatsCounter';
import { DeveloperHeritage } from './components/DeveloperHeritage';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingConcierge } from './components/FloatingConcierge';

// Interactive Modals & Drawers
import { ScheduleModal } from './components/ScheduleModal';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { EnquiryDrawer } from './components/EnquiryDrawer';
import { AdminPanel } from './components/AdminPanel';

export const App: React.FC = () => {
  // Favorites State (stored in localStorage)
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aethelgard_favorites');
      return saved ? JSON.parse(saved) : ['villa-solaria'];
    } catch {
      return ['villa-solaria'];
    }
  });

  // Modal States
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [scheduleTargetProperty, setScheduleTargetProperty] = useState<Property | null>(null);

  const [detailProperty, setDetailProperty] = useState<Property | null>(null);

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<{ url: string; caption: string; category: string }[]>([]);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);

  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('aethelgard_favorites', JSON.stringify(favoriteIds));
    } catch (err) {
      console.error('Failed to save favorites to localStorage:', err);
    }
  }, [favoriteIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const handleToggleFavorite = (id: string) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds((prev) => prev.filter((item) => item !== id));
      showToast('Removed residence from private wishlist.');
    } else {
      setFavoriteIds((prev) => [...prev, id]);
      showToast('Preserved residence in private wishlist.');
    }
  };

  const handleOpenSchedule = (property?: Property) => {
    setScheduleTargetProperty(property || null);
    setIsScheduleOpen(true);
  };

  const handleOpenGallery = (images: { url: string; caption: string; category: string }[], startIndex = 0) => {
    setGalleryImages(images);
    setGalleryStartIndex(startIndex);
    setIsGalleryOpen(true);
  };

  const favoriteProperties = PROPERTIES.filter((p) => favoriteIds.includes(p.id));

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Refined Desktop Custom Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Header
        favoritesCount={favoriteIds.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenSchedule={() => handleOpenSchedule()}
        onToggleAdmin={() => setIsAdminOpen(!isAdminOpen)}
        isAdminOpen={isAdminOpen}
      />

      {/* Main Page Storytelling Experience */}
      <main>
        {/* Full-Screen Cinematic Hero */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('collection');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onScheduleClick={() => handleOpenSchedule()}
        />

        {/* 01 / Architectural Manifesto */}
        <VisionSection />

        {/* 02 / Landmark Feature (Villa Solaria) */}
        <FeaturedProperty
          property={PROPERTIES[0]}
          onExplore={(prop) => setDetailProperty(prop)}
          onSchedule={(prop) => handleOpenSchedule(prop)}
          isFavorite={favoriteIds.includes(PROPERTIES[0].id)}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* 03 / The Sovereign Collection (Catalog, Filters, Grid/Carousel) */}
        <PropertyDiscovery
          properties={PROPERTIES}
          onSelectProperty={(prop) => setDetailProperty(prop)}
          onScheduleProperty={(prop) => handleOpenSchedule(prop)}
          favorites={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* 04 / Signature Amenities Visual Story */}
        <AmenitiesStory />

        {/* 05 / Construction Progress Before/After Slider */}
        <ProgressSlider />

        {/* 06 / Spatial Blueprint & Interactive Floor Plans */}
        <FloorPlanViewer />

        {/* 07 / Interactive 3D Massing & Blueprint Viewer */}
        <Model3DViewer />

        {/* 08 / Sovereign Geography & Connectivity Map */}
        <LocationExplorer />

        {/* Numerical Mastery Statistics */}
        <StatsCounter />

        {/* 09 / Sovereign Lineage & Portfolio Archive */}
        <DeveloperHeritage />

        {/* Client & Patron Statements */}
        <Testimonials />
      </main>

      {/* Editorial Footer with Final Signature CTA */}
      <Footer
        onScheduleClick={() => handleOpenSchedule()}
        onEnquiryClick={() => setIsEnquiryOpen(true)}
        onToast={showToast}
      />

      {/* Unobtrusive Floating Concierge & WhatsApp */}
      <FloatingConcierge
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
        onOpenSchedule={() => handleOpenSchedule()}
      />

      {/* Modals & Slide-out Drawers */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        initialProperty={scheduleTargetProperty}
        onSuccessToast={showToast}
      />

      <PropertyDetailModal
        property={detailProperty}
        onClose={() => setDetailProperty(null)}
        onSchedule={(prop) => {
          setDetailProperty(null);
          handleOpenSchedule(prop);
        }}
        isFavorite={detailProperty ? favoriteIds.includes(detailProperty.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onOpenGallery={(startIndex) => {
          if (detailProperty) {
            handleOpenGallery(detailProperty.gallery, startIndex);
          }
        }}
        onToast={showToast}
      />

      <GalleryLightbox
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={galleryImages}
        initialIndex={galleryStartIndex}
      />

      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favoriteProperties}
        onRemoveFavorite={handleToggleFavorite}
        onSelectProperty={(prop) => setDetailProperty(prop)}
        onScheduleProperty={(prop) => handleOpenSchedule(prop)}
      />

      <EnquiryDrawer
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        onToast={showToast}
      />

      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onToast={showToast}
      />

      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(18, 19, 22, 0.95)',
            backdropFilter: 'blur(10px)',
            color: '#FFFFFF',
            padding: '0.85rem 1.75rem',
            borderRadius: '100px',
            fontSize: '0.8125rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
            zIndex: 3000,
            animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default App;
