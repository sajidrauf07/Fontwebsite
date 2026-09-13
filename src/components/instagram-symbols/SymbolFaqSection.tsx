'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { SYMBOL_FAQ_ITEMS, SymbolFaqItem } from '@/data/symbolData';

export default function SymbolFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-v2-wrapper mb-12" id="faq">
      <div className="faq-v2-accent-bar" />

      <div className="faq-v2-header">
        <div className="faq-v2-badge">
          <HelpCircle size={16} />
          <span>Dudas resueltas</span>
        </div>
        <h2 className="faq-v2-title">
          Preguntas Frecuentes sobre Símbolos para Instagram
        </h2>
      </div>

      <div className="faq-v2-list">
        {SYMBOL_FAQ_ITEMS.map((item: SymbolFaqItem, idx: number) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`faq-v2-card${isOpen ? ' open' : ''}`}
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
