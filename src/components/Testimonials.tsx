import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      className="section-spacing"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container-luxury">
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', color: 'var(--accent-bronze)', marginBottom: '1.5rem' }}>
            <Quote size={40} strokeWidth={1} />
          </div>

          <p
            key={current.id}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.6rem, 3.2vw, 2.5rem)',
              lineHeight: 1.4,
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              fontWeight: 300,
              marginBottom: '2.5rem',
              animation: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            "{current.quote}"
          </p>

          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {current.author}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              {current.title} • {current.location}
            </div>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <button
              onClick={prev}
              className="btn-luxury-secondary"
              style={{ width: '44px', height: '44px', padding: 0, borderRadius: '50%' }}
              title="Previous Statement"
            >
              <ChevronLeft size={18} />
            </button>

            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>

            <button
              onClick={next}
              className="btn-luxury-secondary"
              style={{ width: '44px', height: '44px', padding: 0, borderRadius: '50%' }}
              title="Next Statement"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
