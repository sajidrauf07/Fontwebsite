'use client';

import React, { useState } from 'react';
import { Copy, Check, MessageSquareQuote } from 'lucide-react';
import { COPYABLE_PHRASES } from '@/data/copyPasteExamples';

export default function PhrasesToCopySection() {
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
    <section className="seo-card-section" id="frases-para-copiar">
      <div className="seo-icon-badge">
        <MessageSquareQuote size={20} />
      </div>
      <h2>Frases para Copiar y Pegar</h2>
      <p>
        Estados cortos y descripciones formateadas para utilizar inmediatamente en tus perfiles:
      </p>

      <div className="cursive-examples-grid" style={{ marginTop: '1rem' }}>
        {COPYABLE_PHRASES.map((item, idx) => {
          const idPhrase = `p-item-${idx}`;
          const isCopied = copiedId === idPhrase;

          return (
            <div key={idx} className="cursive-example-card">
              <span className="example-label">{item.label}</span>
              <span className="example-cursive">{item.text}</span>
              <button
                type="button"
                className={`rtc-copy-btn ${isCopied ? 'copied' : ''}`}
                style={{ marginTop: '0.4rem' }}
                onClick={() => handleCopy(idPhrase, item.text)}
              >
                {isCopied ? <Check size={12} /> : <Copy size={12} />}
                <span>{isCopied ? 'Copiado' : 'Copiar Frase'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
