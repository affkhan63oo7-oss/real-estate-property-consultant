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
      question: 'How does Dishank Asija & Namo Property Consultant assist buyers?',
      answer:
        'We provide dedicated, one-on-one property advisory. Rather than promoting random listings, Dishank Asija analyzes your family’s budget, configuration goals, and preferred localities to curate verified residential options in Kandivali East and Mumbai. We assist throughout property visits, layout evaluations, price negotiations, and final registration.'
    },
    {
      question: 'What configurations and carpet sizes are available in Kandivali East?',
      answer:
        'We showcase verified 2 BHK (approx. 780 sq.ft), 3 BHK (approx. 1,180 sq.ft), and 4 BHK (approx. 1,850 sq.ft) residential homes situated on higher floors with open suburban views, as well as prime commercial office suites (approx. 950 sq.ft) with prominent arterial road visibility.'
    },
    {
      question: 'How are property titles and legal documentation verified?',
      answer:
        'Every property recommended by Namo Property Consultant undergoes thorough documentation evaluation—including chain of title inspection, society NOC status, RERA compliance verification, and occupancy certification checks to ensure absolute transparency and peace of mind.'
    },
    {
      question: 'Can I arrange a private physical site visit or sample residence inspection?',
      answer:
        'Yes. You can schedule a private consultation directly through this website or by contacting Dishank Asija via phone/WhatsApp. We will coordinate with property management and personally accompany you for a comprehensive on-site walk-through of the residence and society amenities.'
    },
    {
      question: 'Do you provide assistance with home loans and bank financing?',
      answer:
        'Yes. We guide clients through documentation requirements and liaise with major nationalized and private banking institutions (including SBI, HDFC, ICICI, and Axis Bank) to facilitate transparent loan pre-approvals, valuation clearances, and legal disbursement assistance.'
    },
    {
      question: 'What advisory support is provided for commercial and rental properties?',
      answer:
        'For commercial clients, we analyze road frontage, passenger elevator capacities, and flexible floor-plate zoning. For rental clients, we coordinate leave-and-license agreements, police verification formalities, and smooth handover protocols for both owners and tenants.'
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
