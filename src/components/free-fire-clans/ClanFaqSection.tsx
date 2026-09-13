'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { FREE_FIRE_CLANES_FAQ_ITEMS } from '@/data/freeFireClanesData';

export default function ClanFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-v2-wrapper mb-12" id="faq">
      <div className="faq-v2-accent-bar emerald" />

      <div className="faq-v2-header">
        <div className="faq-v2-badge emerald">
          <HelpCircle size={16} />
          <span>Dudas resueltas</span>
        </div>
        <h2 className="faq-v2-title">
          Preguntas Frecuentes sobre Nombres para Clanes de Free Fire
        </h2>
        <p className="faq-v2-subtitle">
          Respuestas detalladas sobre la creación de nombres de clanes, tags de equipo y compatibilidad Unicode:
        </p>
      </div>

      <div className="faq-v2-list">
        {FREE_FIRE_CLANES_FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={item.question}
              className={`faq-v2-card emerald${isOpen ? ' open' : ''}`}
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
