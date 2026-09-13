'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { FREE_FIRE_APODOS_FAQ_ITEMS } from '@/data/freeFireApodosData';

export default function NicknameFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-v2-wrapper mb-12" id="faq">
      <div className="faq-v2-accent-bar cyan" />

      <div className="faq-v2-header">
        <div className="faq-v2-badge cyan">
          <HelpCircle size={16} />
          <span>Dudas resueltas</span>
        </div>
        <h2 className="faq-v2-title">
          Preguntas Frecuentes sobre Apodos para Free Fire
        </h2>
        <p className="faq-v2-subtitle">
          Resolvemos tus dudas sobre la generación, personalización y compatibilidad de apodos en Free Fire:
        </p>
      </div>

      <div className="faq-v2-list">
        {FREE_FIRE_APODOS_FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={item.question}
              className={`faq-v2-card cyan${isOpen ? ' open' : ''}`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="faq-v2-question"
                aria-expanded={isOpen}
              >
                <span className="faq-v2-arrow">
                  <ChevronRight size={18} />
                </span>
                <span className="faq-v2-question-text">
                  {item.question}
                </span>
              </button>

              {isOpen && (
                <div className="faq-v2-answer">
                  <p className="faq-v2-answer-text">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
