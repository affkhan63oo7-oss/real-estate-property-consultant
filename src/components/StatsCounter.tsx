import React, { useState, useEffect, useRef } from 'react';
import { STATS_DATA } from '../data/mockData';

export const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(STATS_DATA.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers smoothly over 1.8 seconds
          const duration = 1800;
          const steps = 60;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            // Ease-out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              STATS_DATA.map((item) => {
                const target = item.value;
                return Math.round(target * easeProgress * 10) / 10;
              })
            );

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(STATS_DATA.map((item) => item.value));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="section-spacing"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: '#FFFFFF',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container-luxury">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            textAlign: 'center'
          }}
        >
          {STATS_DATA.map((stat, idx) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: '#FFFFFF',
                  marginBottom: '0.75rem'
                }}
              >
                {counts[idx]}
                <span style={{ color: '#C9A982' }}>{stat.suffix}</span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.6)',
                  maxWidth: '200px'
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
