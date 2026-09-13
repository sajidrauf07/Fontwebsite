'use client';

import React, { useState } from 'react';
import { Copy, Check, Instagram, Sparkles } from 'lucide-react';
import { ELEGANT_BIO_TEMPLATES } from '@/data/elegantExamples';

export default function ElegantBioGenerator() {
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
    <section className="seo-card-section" id="bio-elegante">
      <div className="seo-icon-badge">
        <Sparkles size={20} />
      </div>
      <h2>Crear una Bio Elegante para Instagram</h2>
      <p>
        Plantillas preconcebidas listas para copiar y pegar directamente en tu perfil o biografía de Instagram y TikTok:
      </p>

      <div className="eb-templates-grid" style={{ marginTop: '1.25rem' }}>
        {ELEGANT_BIO_TEMPLATES.map((item) => {
          const isCopied = copiedId === item.id;

          return (
            <div key={item.id} className={`eb-template-card ${isCopied ? 'copied' : ''}`}>
              <div className="eb-card-top">
                <span className="eb-card-label">{item.label}</span>
              </div>

              <div className="eb-card-content">
                <pre className="eb-template-text">{item.template}</pre>
              </div>

              <button
                type="button"
                className={`eb-copy-btn ${isCopied ? 'copied' : ''}`}
                onClick={() => handleCopy(item.id, item.template)}
              >
                {isCopied ? (
                  <>
                    <Check size={14} />
                    <span>¡Bio Copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copiar Bio</span>
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
