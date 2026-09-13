'use client';

import React, { useState } from 'react';
import { Copy, Check, Layers } from 'lucide-react';
import { HIGHLIGHT_SYMBOLS_COLLECTION, HighlightCategoryGroup } from '@/data/symbolData';

export default function HighlightSymbolsSection() {
  const [copiedSym, setCopiedSym] = useState<string | null>(null);

  const handleCopy = async (sym: string) => {
    try {
      await navigator.clipboard.writeText(sym);
      setCopiedSym(sym);
      setTimeout(() => setCopiedSym(null), 1500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = sym;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedSym(sym);
      setTimeout(() => setCopiedSym(null), 1500);
    }
  };

  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge">
        <Layers size={20} />
      </div>
      <h2>Símbolos para Historias Destacadas (Highlights)</h2>
      <p>Iconos y símbolos limpios ideales para titular las portadas de tus historias destacadas:</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
          marginTop: '1.25rem'
        }}
      >
        {HIGHLIGHT_SYMBOLS_COLLECTION.map((group: HighlightCategoryGroup, idx: number) => (
          <div
            key={idx}
            style={{
              background: 'var(--card-bg, #1e2029)',
              borderRadius: '12px',
              border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
              padding: '1.25rem'
            }}
          >
            <h3 style={{ fontSize: '1rem', color: '#818cf8', fontWeight: 600, marginBottom: '0.85rem' }}>
              {group.icon} {group.category}
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.symbols.map((sym: string, sIdx: number) => {
                const isCopied = copiedSym === sym;
                return (
                  <button
                    key={sIdx}
                    type="button"
                    style={{
                      background: isCopied ? '#10b981' : 'rgba(255, 255, 255, 0.05)',
                      color: isCopied ? '#ffffff' : '#f8fafc',
                      border: isCopied ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '0.45rem 0.7rem',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onClick={() => handleCopy(sym)}
                    title={`Copiar "${sym}"`}
                  >
                    {sym}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
