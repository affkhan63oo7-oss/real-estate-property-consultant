import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { HelpCircle, ChevronDown, Plus, Minus, ShieldCheck } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const ProjectFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What services does South Bopal Real Estate offer?',
      answer:
        'South Bopal Real Estate is a premier real estate agency and property consultant led by Kishor Udhas. We offer six core real estate services: Property Buying, Property Selling, Property Renting, Residential Properties, Bungalows / Villas, and Property Consultation.'
    },
    {
      question: 'What is your primary location and area focus?',
      answer:
        'Our primary location is South Bopal, Ahmedabad, Gujarat. We provide comprehensive property buying, selling, renting, and consultation services focused on South Bopal and key Ahmedabad residential corridors.'
    },
    {
      question: 'What types of properties do you specialize in?',
      answer:
        'We specialize in residential properties, premium apartments, flats, independent bungalows, and private gated villas across South Bopal, Ahmedabad.'
    },
    {
      question: 'Where is South Bopal Real Estate located and how can I visit?',
      answer:
        'Our office is located at D 382, SOBO Centre, South Bopal, Ahmedabad, Gujarat – 380058. You are warmly welcome to visit us for personalized, in-person property consultations with Kishor Udhas.'
    },
    {
      question: 'Who is Kishor Udhas and what is your consulting philosophy?',
      answer:
        'Kishor Udhas is the owner and property consultant of South Bopal Real Estate. We are committed to objective, transparent, and personalized advisory to ensure clients achieve optimal value in every property transaction.'
    },
    {
      question: 'How do I arrange a property consultation or site visit?',
      answer:
        'You can click "Enquire Now" on this website, call us directly at +91 99986 33795, or connect with us on WhatsApp. We will promptly assist with curated listings, physical property visits, title checks, and documentation guidance.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="section-editorial"
      style={{
        backgroundColor: 'var(--bg-dark-obsidian)',
        borderBottom: '1px solid var(--border-gold-subtle)',
        position: 'relative'
      }}
    >
      <div className="container-editorial" style={{ maxWidth: '1040px' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center' }}>
          <ScrollReveal delay={0} distance={10}>
            <div className="eyebrow-pill" style={{ marginInline: 'auto' }}>
              <HelpCircle size={12} color="var(--accent-gold)" />
              <span>Essential Clarity</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80} distance={14}>
            <h2
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: 'clamp(2rem, 4.2vw, 3.8rem)',
                lineHeight: 1.16,
                letterSpacing: 'clamp(0.04em, 1.2vw, 0.08em)',
                color: '#FAF8F5',
                marginBottom: '1rem'
              }}
            >
              Clear Answers{' '}
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--accent-gold)'
                }}
              >
                Before You Decide
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} distance={12}>
            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                fontStyle: 'italic',
                color: 'rgba(250, 248, 245, 0.78)',
                lineHeight: 1.6,
                maxWidth: '680px',
                marginInline: 'auto'
              }}
            >
              Transparent guidance regarding property selection, verification, site visits, and consultation.
            </p>
          </ScrollReveal>
        </div>

        {/* Minimalist Accordion Rows */}
        <ScrollReveal delay={120} distance={16}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.question}
                  className="card-editorial"
                  style={{
                    overflow: 'hidden',
                    borderColor: isOpen ? 'var(--border-gold-strong)' : 'var(--border-gold-subtle)',
                    transition: 'all 0.35s var(--ease-cinematic)'
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: 'clamp(1.25rem, 2vw, 1.6rem) clamp(1.25rem, 2.5vw, 2rem)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: '#FAF8F5'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontFamily: 'var(--font-title)',
                          color: 'var(--accent-gold)',
                          letterSpacing: '0.15em',
                          flexShrink: 0
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <h4
                        style={{
                          fontFamily: 'var(--font-title)',
                          fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                          fontWeight: 500,
                          lineHeight: 1.35,
                          letterSpacing: '0.03em',
                          color: isOpen ? 'var(--accent-gold)' : '#FAF8F5',
                          transition: 'color 0.25s'
                        }}
                      >
                        {faq.question}
                      </h4>
                    </div>

                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? 'rgba(201, 169, 130, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${isOpen ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.1)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isOpen ? 'var(--accent-gold)' : '#FAF8F5',
                        flexShrink: 0,
                        transition: 'all 0.3s'
                      }}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </div>
                  </button>

                  {/* Expandable Content with Smooth Animation */}
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 clamp(1.25rem, 2.5vw, 2rem) clamp(1.25rem, 2vw, 1.6rem) clamp(2.75rem, 4vw, 3.75rem)',
                        animation: 'fadeIn 0.25s ease'
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9rem',
                          lineHeight: 1.8,
                          color: 'rgba(250, 248, 245, 0.78)',
                          borderTop: '1px solid rgba(201, 169, 130, 0.15)',
                          paddingTop: '1rem'
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
