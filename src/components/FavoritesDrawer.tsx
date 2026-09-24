import React from 'react';
import { Property } from '../types';
import { X, Trash2, ArrowUpRight, Calendar, Heart } from 'lucide-react';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Property[];
  onRemoveFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onScheduleProperty: (property: Property) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onSelectProperty,
  onScheduleProperty
}) => {
  if (!isOpen) return null;

  const totalValue = favorites.reduce((sum, item) => sum + item.price, 0);

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
          maxWidth: '460px',
          height: '100%',
          backgroundColor: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-floating)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2rem'
        }}
      >
        {/* Drawer Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Heart size={20} fill="#B38E5D" color="#B38E5D" />
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                Private Wishlist ({favorites.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={22} />
            </button>
          </div>

          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Curated residences earmarked for comparative acquisition review.
          </p>
        </div>

        {/* Property List */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '0.25rem' }}>
          {favorites.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
              <Heart size={40} strokeWidth={1} style={{ margin: '0 auto 1rem auto', opacity: 0.4 }} />
              <p style={{ fontSize: '0.9375rem' }}>Your private wishlist is empty.</p>
              <span style={{ fontSize: '0.8125rem' }}>Click the heart icon on any residence to preserve it here.</span>
            </div>
          ) : (
            favorites.map((prop) => (
              <div
                key={prop.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: '2px',
                  border: '1px solid var(--border-light)'
                }}
              >
                <img
                  src={prop.heroImage}
                  alt={prop.title}
                  style={{ width: '84px', height: '84px', objectFit: 'cover', borderRadius: '1px', flexShrink: 0 }}
                />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                      {prop.title}
                    </h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {prop.location.city}, {prop.location.country}
                    </span>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                      {prop.priceFormatted}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProperty(prop);
                      }}
                      className="btn-luxury-ghost"
                      style={{ padding: 0, fontSize: '0.75rem' }}
                    >
                      Dossier
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onScheduleProperty(prop);
                      }}
                      className="btn-luxury-ghost"
                      style={{ padding: 0, fontSize: '0.75rem', color: 'var(--text-primary)' }}
                    >
                      Viewing
                    </button>
                    <button
                      onClick={() => onRemoveFavorite(prop.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444', marginLeft: 'auto' }}
                      title="Remove"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Portfolio Total */}
        {favorites.length > 0 && (
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Aggregate Value
              </span>
              <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                ${(totalValue / 1000000).toFixed(1)}M USD
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onScheduleProperty(favorites[0]);
              }}
              className="btn-luxury-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={15} />
              <span>Book Priority Tour of Saved</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
