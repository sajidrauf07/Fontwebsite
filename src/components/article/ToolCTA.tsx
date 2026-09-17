'use client';

import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';

interface ToolCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  targetId?: string;
  badge?: string;
}

export const ToolCTA: React.FC<ToolCTAProps> = ({
  title = '¿Listo para probar los estilos en tu texto?',
  description = 'Introduce cualquier palabra o frase en el generador y explora al instante más de 350 estilos tipográficos Unicode listos para copiar y pegar.',
  buttonText = 'Probar el Generador',
  targetId,
  badge = 'Herramienta Interactiva Gratuita'
}) => {
  const handleScrollToGenerator = () => {
    let generatorEl: Element | null = null;
    if (targetId) {
      generatorEl = document.getElementById(targetId);
    }
    if (!generatorEl) {
      generatorEl = document.querySelector('.hero-section') || document.querySelector('.generator-input-card');
    }
    if (generatorEl) {
      const topOffset = 80;
      const elementPosition = generatorEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
      // Try to focus the textarea after scrolling
      setTimeout(() => {
        const textarea = (generatorEl ? generatorEl.querySelector('textarea, input[type="text"]') : null) || (document.querySelector('.generator-textarea') as HTMLTextAreaElement | null);
        if (textarea) (textarea as HTMLElement).focus();
      }, 500);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="article-tool-cta">
      <div className="cta-glow-accent" aria-hidden="true" />
      <div className="cta-content">
        <div className="cta-badge">
          <Sparkles size={16} className="cta-badge-icon" aria-hidden="true" />
          <span>{badge}</span>
        </div>
        <h3 className="cta-title">{title}</h3>
        <p className="cta-desc">{description}</p>
        <button
          type="button"
          onClick={handleScrollToGenerator}
          className="cta-action-btn"
          title="Subir al generador de letras"
        >
          <Sparkles size={18} aria-hidden="true" />
          <span>{buttonText}</span>
          <ArrowUp size={16} className="cta-arrow" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
