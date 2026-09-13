'use client';

import React, { useState } from 'react';
import { BIO_EXAMPLES_DATA } from '@/data/bioExamples';
import { Copy, Check, FileText } from 'lucide-react';

export default function BioExamplesSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12" id="ejemplos-bio">
      <div className="seo-icon-badge">
        <FileText size={20} />
      </div>
      <h2>Ejemplos de Letras para Bio</h2>
      <p>
        Inspírate con estas plantillas de biografías formateadas con fuentes cursivas, versalitas y estéticas para diferentes nichos:
      </p>

      <div className="cp-results-grid mt-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {BIO_EXAMPLES_DATA.map((item) => {
          const isCopied = copiedId === item.id;
          return (
            <div key={item.id} className={`cp-style-card ${isCopied ? 'copied' : ''}`}>
              <div className="cp-card-header">
                <span className="cp-tag-chip">{item.niche}</span>
              </div>
              <div className="cp-card-preview" style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                <span className="cp-card-text" style={{ fontSize: '1.1rem', color: '#F8FAFC' }}>
                  {item.styledTitle}
                </span>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.35rem' }}>
                  {item.styledDesc}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#A5B4FC', marginTop: '0.35rem' }}>
                  {item.ctaText}
                </div>
              </div>
              <div className="cp-card-actions">
                <button
                  type="button"
                  className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                  onClick={() => handleCopy(item.id, item.fullText)}
                >
                  {isCopied ? (
                    <>
                      <Check size={14} />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copiar Plantilla</span>
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
