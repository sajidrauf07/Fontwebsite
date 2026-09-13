'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import { CURATED_SYMBOL_COMBINATIONS, SymbolCombinationItem } from '@/data/symbolData';

export default function SymbolCombiner() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (combo: string, id: string) => {
    try {
      await navigator.clipboard.writeText(combo);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = combo;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge">
        <Sparkles size={20} />
      </div>
      <h2>Combina Símbolos para Instagram</h2>
      <p>Combinaciones estéticas equilibradas listas para copiar e insertar en tus títulos o descripciones:</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          marginTop: '1.25rem'
        }}
      >
        {CURATED_SYMBOL_COMBINATIONS.map((item: SymbolCombinationItem) => {
          const isCopied = copiedId === item.id;
          return (
            <div
              key={item.id}
              style={{
                background: 'var(--card-bg, #1e2029)',
                borderRadius: '12px',
                border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.75rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>
                  {item.title}
                </span>
                <div style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700, marginTop: '4px' }}>
                  {item.combo}
                </div>
              </div>

              <button
                type="button"
                className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                style={{ width: '100%', height: '34px', fontSize: '0.8rem' }}
                onClick={() => handleCopy(item.combo, item.id)}
              >
                {isCopied ? (
                  <>
                    <Check size={13} />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copiar Combinación</span>
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
