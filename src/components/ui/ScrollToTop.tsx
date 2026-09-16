'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 350);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    // If a generator exists on the page, smoothly scroll to it or to page top
    const generatorEl = document.getElementById('generador') || document.getElementById('generador-letras-instagram') || document.getElementById('generador-cursiva') || document.getElementById('generador-free-fire') || document.getElementById('generador-bio-instagram');
    
    if (generatorEl) {
      generatorEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="mobile-scroll-top-btn"
      aria-label="Volver al generador de texto"
      title="Volver arriba"
      type="button"
    >
      <ArrowUp size={18} className="scroll-top-icon" />
      <span className="scroll-top-label">Subir</span>
    </button>
  );
};
