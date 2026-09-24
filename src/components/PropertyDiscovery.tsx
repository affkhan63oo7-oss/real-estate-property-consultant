import React, { useState, useMemo, useRef } from 'react';
import { Property } from '../types';
import { Search, SlidersHorizontal, Grid, Columns, ChevronLeft, ChevronRight, Heart, MapPin, Bed, Bath, Maximize2, ArrowUpRight } from 'lucide-react';

interface PropertyDiscoveryProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onScheduleProperty: (property: Property) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const PropertyDiscovery: React.FC<PropertyDiscoveryProps> = ({
  properties,
  onSelectProperty,
  onScheduleProperty,
  favorites,
  onToggleFavorite
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bedroomFilter, setBedroomFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');

  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Villa', 'Penthouse', 'Waterfront', 'Sanctuary'];

  // Filter and sort logic
  const filteredProperties = useMemo(() => {
    return properties
      .filter((p) => {
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesSearch =
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.location.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.architect.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesBedrooms =
          bedroomFilter === 'All' ||
          (bedroomFilter === '4+' && p.specs.bedrooms >= 4) ||
          (bedroomFilter === '6+' && p.specs.bedrooms >= 6);

        return matchesCategory && matchesSearch && matchesBedrooms;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'area-desc') return b.specs.interiorSqFt - a.specs.interiorSqFt;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [properties, selectedCategory, searchQuery, bedroomFilter, sortBy]);

  const handleCarouselScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="collection"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--accent-bronze)',
              display: 'block',
              marginBottom: '0.75rem'
            }}
          >
            03 / The Sovereign Collection
          </span>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: 'var(--text-primary)' }}>
                Curated Residences
              </h2>
              <p style={{ maxWidth: '580px', marginTop: '0.5rem' }}>
                Explore limited architectural masterworks currently available for private acquisition across Europe, North America, and Asia.
              </p>
            </div>

            {/* View Mode & Carousel Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  display: 'flex',
                  backgroundColor: 'var(--bg-surface)',
                  padding: '4px',
                  borderRadius: '2px',
                  border: '1px solid var(--border-light)'
                }}
              >
                <button
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                  style={{
                    background: viewMode === 'grid' ? 'var(--text-primary)' : 'none',
                    color: viewMode === 'grid' ? '#FFFFFF' : 'var(--text-muted)',
                    border: 'none',
                    padding: '6px 10px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.75rem'
                  }}
                >
                  <Grid size={15} />
                  <span>Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('carousel')}
                  title="Carousel View"
                  style={{
                    background: viewMode === 'carousel' ? 'var(--text-primary)' : 'none',
                    color: viewMode === 'carousel' ? '#FFFFFF' : 'var(--text-muted)',
                    border: 'none',
                    padding: '6px 10px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.75rem'
                  }}
                >
                  <Columns size={15} />
                  <span>Carousel</span>
                </button>
              </div>

              {viewMode === 'carousel' && (
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button
                    onClick={() => handleCarouselScroll('left')}
                    className="btn-luxury-secondary"
                    style={{ padding: '8px 12px' }}
                    title="Previous"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => handleCarouselScroll('right')}
                    className="btn-luxury-secondary"
                    style={{ padding: '8px 12px' }}
                    title="Next"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            padding: '1.25rem 1.75rem',
            marginBottom: '3rem',
            borderRadius: '2px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.5rem 1.15rem',
                  borderRadius: '2px',
                  border: selectedCategory === cat ? '1px solid var(--text-primary)' : '1px solid var(--border-light)',
                  backgroundColor: selectedCategory === cat ? 'var(--text-primary)' : 'transparent',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search, Bedrooms & Sort Controls */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
            {/* Live Search Input */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Search size={15} color="var(--text-muted)" style={{ position: 'absolute', left: '12px' }} />
              <input
                type="text"
                placeholder="Search city, architect..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '0.5rem 1rem 0.5rem 2.25rem',
                  fontSize: '0.8125rem',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '2px',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  minWidth: '220px'
                }}
              />
            </div>

            {/* Bedroom Select */}
            <select
              value={bedroomFilter}
              onChange={(e) => setBedroomFilter(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.8125rem',
                border: '1px solid var(--border-medium)',
                borderRadius: '2px',
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="All">All Bedrooms</option>
              <option value="4+">4+ Bedrooms</option>
              <option value="6+">6+ Bedrooms</option>
            </select>

            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.8125rem',
                border: '1px solid var(--border-medium)',
                borderRadius: '2px',
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="featured">Featured First</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="area-desc">Area: Largest First</option>
            </select>
          </div>
        </div>

        {/* Property Grid or Carousel */}
        {filteredProperties.length === 0 ? (
          <div
            style={{
              padding: '5rem 2rem',
              textAlign: 'center',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-light)'
            }}
          >
            <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
              No residences matched your criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setBedroomFilter('All');
              }}
              className="btn-luxury-ghost"
              style={{ marginTop: '1rem' }}
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={() => onSelectProperty(property)}
                onSchedule={() => onScheduleProperty(property)}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={() => onToggleFavorite(property.id)}
              />
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            data-cursor="drag"
            style={{
              display: 'flex',
              gap: '2rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: '2rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                style={{
                  minWidth: '400px',
                  maxWidth: '440px',
                  flexShrink: 0,
                  scrollSnapAlign: 'start'
                }}
              >
                <PropertyCard
                  property={property}
                  onSelect={() => onSelectProperty(property)}
                  onSchedule={() => onScheduleProperty(property)}
                  isFavorite={favorites.includes(property.id)}
                  onToggleFavorite={() => onToggleFavorite(property.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface PropertyCardProps {
  property: Property;
  onSelect: () => void;
  onSchedule: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelect,
  onSchedule,
  isFavorite,
  onToggleFavorite
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-cursor="explore"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-light)',
        borderRadius: '2px',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: isHovered ? 'var(--shadow-elevated)' : 'var(--shadow-subtle)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Image Container with Zoom */}
      <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden' }}>
        <img
          src={property.heroImage}
          alt={property.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />

        {/* Category & Status Overlay */}
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
          <span
            style={{
              backgroundColor: 'rgba(18, 19, 22, 0.85)',
              color: '#FFFFFF',
              fontSize: '0.625rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0.3rem 0.65rem',
              borderRadius: '1px'
            }}
          >
            {property.category}
          </span>
          {property.featured && (
            <span
              style={{
                backgroundColor: 'var(--accent-bronze)',
                color: '#FFFFFF',
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '0.3rem 0.65rem',
                borderRadius: '1px'
              }}
            >
              Landmark
            </span>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          title={isFavorite ? 'Remove from Wishlist' : 'Add to Wishlist'}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-subtle)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Heart
            size={17}
            fill={isFavorite ? '#B38E5D' : 'none'}
            color={isFavorite ? '#B38E5D' : '#121316'}
          />
        </button>

        {/* Price Tag Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(18, 19, 22, 0.9)',
            backdropFilter: 'blur(6px)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '1px'
          }}
        >
          {property.priceFormatted}
        </div>
      </div>

      {/* Card Content Area */}
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.5rem' }}>
            <MapPin size={13} color="var(--accent-bronze)" />
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              {property.location.city}, {property.location.country}
            </span>
          </div>

          <h3
            style={{
              fontSize: '1.5rem',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              transition: 'color 0.2s'
            }}
          >
            {property.title}
          </h3>

          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {property.tagline}
          </p>
        </div>

        {/* Specs Ribbon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border-light)',
            paddingTop: '1.25rem',
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Bed size={15} color="var(--accent-bronze)" />
            <span>{property.specs.bedrooms} Beds</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Bath size={15} color="var(--accent-bronze)" />
            <span>{property.specs.bathrooms} Baths</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Maximize2 size={15} color="var(--accent-bronze)" />
            <span>{property.specs.interiorSqFt.toLocaleString()} sq ft</span>
          </div>
        </div>
      </div>
    </div>
  );
};
