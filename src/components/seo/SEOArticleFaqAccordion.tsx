'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import type { FAQItem } from './SEOContent';

interface SEOArticleFaqAccordionProps {
  faqs: FAQItem[];
}

export const SEOArticleFaqAccordion: React.FC<SEOArticleFaqAccordionProps> = ({ faqs }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="faq-v2-list">
      {faqs.map((faq, index) => {
        const isOpen = openFaqIndex === index;
        return (
          <div key={index} className={`faq-v2-card${isOpen ? ' open' : ''}`}>
            <button
              onClick={() => toggleFaq(index)}
              className="faq-v2-question"
              aria-expanded={isOpen}
              type="button"
            >
              <span className="faq-v2-arrow">
                <ChevronRight size={18} />
              </span>
              <span className="faq-v2-question-text">{faq.question}</span>
            </button>
            {isOpen && (
              <div className="faq-v2-answer">
                <p className="faq-v2-answer-text">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
