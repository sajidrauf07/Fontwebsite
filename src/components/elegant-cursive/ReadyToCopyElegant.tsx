'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import { READY_TO_COPY_ELEGANT, type ElegantExampleItem } from '@/data/elegantExamples';

export default function ReadyToCopyElegant() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (item: ElegantExampleItem) => {
    try {
      await navigator.clipboard.writeText(item.cursiveText);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = item.cursiveText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  return (
    <section className="ready-to-copy-section" id="letras-cursivas-elegantes-para-copiar">
      <div className="rtc-header">
        <div className="seo-icon-badge">
          <Sparkles size={20} />
        </div>
        <h2>Letras Cursivas Elegantes para Copiar</h2>
        <p className="rtc-subtitle">
          Colección de textos, nombres y frases en cursiva sofisticada listos para copiar con un solo clic.
        </p>
      </div>

      <div className="rtc-grid">
        {READY_TO_COPY_ELEGANT.map((item) => {
          const isCopied = copiedId === item.id;

          return (
            <div key={item.id} className={`rtc-card ${isCopied ? 'copied' : ''}`}>
              <div className="rtc-card-top">
                <span className="rtc-card-label">{item.label}</span>
                <span className="rtc-card-style">{item.styleName}</span>
              </div>

              <div className="rtc-card-cursive">
                <span>{item.cursiveText}</span>
              </div>

              <button
                type="button"
                className={`rtc-copy-btn ${isCopied ? 'copied' : ''}`}
                onClick={() => handleCopy(item)}
                aria-label={`Copiar ${item.label} en letras cursivas elegantes`}
              >
                {isCopied ? (
                  <>
                    <Check size={13} />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
