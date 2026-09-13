'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import { COPYABLE_WORDS } from '@/data/copyPasteExamples';

export default function WordsToCopySection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  return (
    <section className="seo-card-section" id="palabras-para-copiar">
      <div className="seo-icon-badge">
        <Sparkles size={20} />
      </div>
      <h2>Palabras para Copiar y Pegar</h2>
      <p>
        Selección de palabras frecuentes transformadas en fuentes cursivas y versalitas listas para copiar en un solo clic:
      </p>

      <div className="rtc-grid" style={{ marginTop: '1.25rem' }}>
        {COPYABLE_WORDS.map((item, idx) => {
          const idCursiva = `w-cur-${idx}`;
          const idVersalita = `w-vers-${idx}`;
          const isCopiedCur = copiedId === idCursiva;
          const isCopiedVers = copiedId === idVersalita;

          return (
            <div key={idx} className="rtc-card">
              <div className="rtc-card-top">
                <span className="rtc-card-label">{item.label}</span>
              </div>

              {/* Cursive variant */}
              <div className="rtc-card-cursive">
                <span>{item.cursive}</span>
              </div>
              <button
                type="button"
                className={`rtc-copy-btn ${isCopiedCur ? 'copied' : ''}`}
                onClick={() => handleCopy(idCursiva, item.cursive)}
              >
                {isCopiedCur ? <Check size={12} /> : <Copy size={12} />}
                <span>{isCopiedCur ? 'Copiado' : 'Copiar Cursiva'}</span>
              </button>

              {/* Small Caps variant */}
              <div className="rtc-card-cursive" style={{ marginTop: '0.4rem' }}>
                <span>{item.smallCaps}</span>
              </div>
              <button
                type="button"
                className={`rtc-copy-btn ${isCopiedVers ? 'copied' : ''}`}
                onClick={() => handleCopy(idVersalita, item.smallCaps)}
              >
                {isCopiedVers ? <Check size={12} /> : <Copy size={12} />}
                <span>{isCopiedVers ? 'Copiado' : 'Copiar Versalita'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
