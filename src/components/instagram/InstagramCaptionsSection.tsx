'use client';

import React, { useState } from 'react';
import { mapAlphabet } from '@/lib/unicode/transformations';
import { Copy, Check, MessageCircle } from 'lucide-react';

const CAPTION_EXAMPLES = [
  { raw: 'Coleccionando momentos mágicos', category: 'Inspiración' },
  { raw: 'Viviendo al máximo cada día', category: 'Lifestyle' },
  { raw: 'Donde las palabras fallan la música habla', category: 'Música' },
  { raw: 'Perdiéndome en lugares maravillosos', category: 'Viajes' },
  { raw: 'Creando mi propio camino', category: 'Personal' }
];

export default function InstagramCaptionsSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (idx: number, textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12" id="captions-instagram">
      <div className="seo-icon-badge">
        <MessageCircle size={20} />
      </div>
      <h2>Letras para captions de Instagram</h2>
      <p>
        Pies de foto con letras bonitas y aesthetic para acompañar tus imágenes y reels:
      </p>

      <div className="cp-results-grid mt-6" style={{ gridTemplateColumns: '1fr' }}>
        {CAPTION_EXAMPLES.map((item, idx) => {
          const styledCaption = mapAlphabet(item.raw, 'scriptBold');
          const isCopied = copiedIndex === idx;

          return (
            <div key={idx} className={`cp-style-card ${isCopied ? 'copied' : ''}`}>
              <div className="cp-card-header">
                <span className="cp-tag-chip">{item.category}</span>
              </div>
              <div className="cp-card-preview">
                <span className="cp-card-text" style={{ fontSize: '1.2rem' }}>
                  {styledCaption}
                </span>
              </div>
              <div className="cp-card-actions">
                <button
                  type="button"
                  className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                  onClick={() => handleCopy(idx, styledCaption)}
                >
                  {isCopied ? (
                    <>
                      <Check size={14} />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copiar Caption</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
