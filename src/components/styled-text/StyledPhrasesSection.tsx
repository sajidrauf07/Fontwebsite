'use client';

import React, { useState } from 'react';
import { mapAlphabet } from '@/lib/unicode/transformations';
import { Copy, Check, MessageSquare } from 'lucide-react';

const PHRASES_LIST = [
  { raw: 'Creador de contenido digital', tag: 'Bio Instagram' },
  { raw: 'Persiguiendo grandes sueños', tag: 'Estado' },
  { raw: 'Coleccionando momentos especiales', tag: 'Caption' },
  { raw: 'Modo creativo activado', tag: 'Perfil' },
  { raw: 'Creando mi propia historia', tag: 'Inspirador' }
];

export default function StyledPhrasesSection() {
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
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge">
        <MessageSquare size={20} />
      </div>
      <h2>Frases con estilos para biografía y estados</h2>
      <p>
        Copia frases elegantes y aesthetic listas para destacar en tu perfil de Instagram, TikTok o estado de WhatsApp:
      </p>

      <div className="cp-results-grid mt-6" style={{ gridTemplateColumns: '1fr' }}>
        {PHRASES_LIST.map((item, idx) => {
          const styledText = mapAlphabet(item.raw, 'scriptBold');
          const isCopied = copiedIndex === idx;

          return (
            <div key={idx} className={`cp-style-card ${isCopied ? 'copied' : ''}`}>
              <div className="cp-card-header">
                <span className="cp-tag-chip">{item.tag}</span>
              </div>
              <div className="cp-card-preview">
                <span className="cp-card-text" style={{ fontSize: '1.25rem' }}>{styledText}</span>
              </div>
              <div className="cp-card-actions">
                <button
                  type="button"
                  className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                  onClick={() => handleCopy(idx, styledText)}
                >
                  {isCopied ? (
                    <>
                      <Check size={14} />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copiar</span>
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
