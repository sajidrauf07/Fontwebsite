'use client';

import React, { useState } from 'react';
import { BIO_SYMBOLS_DATA } from '@/data/bioSymbols';
import { Copy, Check, Sparkles } from 'lucide-react';

export default function BioSeparatorsSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = async (item: string) => {
    try {
      await navigator.clipboard.writeText(item);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = item;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12" id="separadores-bio">
      <div className="seo-icon-badge">
        <Sparkles size={20} />
      </div>
      <h2>Separadores y Símbolos para Bio</h2>
      <p>
        Organiza las líneas de tu biografía con divisores estéticos y símbolos decorativos:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
        {BIO_SYMBOLS_DATA.map((group) => (
          <div key={group.title} className="cp-panel" style={{ padding: '1rem 1.25rem' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#A5B4FC', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {group.title}
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.items.map((symbolItem, idx) => {
                const isCopied = copiedItem === symbolItem;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleCopy(symbolItem)}
                    className={`cp-tag-chip ${isCopied ? 'active' : ''}`}
                    style={{ fontSize: '1rem', padding: '0.5rem 0.85rem' }}
                    title={`Copiar ${symbolItem}`}
                  >
                    {isCopied ? <Check size={14} style={{ color: '#10B981' }} /> : symbolItem}
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
