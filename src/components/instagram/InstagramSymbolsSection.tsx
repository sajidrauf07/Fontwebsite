'use client';

import React, { useState } from 'react';
import { INSTAGRAM_SYMBOLS_DATA } from '@/data/instagramSymbols';
import { Copy, Check, Heart } from 'lucide-react';

export default function InstagramSymbolsSection() {
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);

  const handleCopy = async (symbol: string) => {
    try {
      await navigator.clipboard.writeText(symbol);
      setCopiedSymbol(symbol);
      setTimeout(() => setCopiedSymbol(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = symbol;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedSymbol(symbol);
      setTimeout(() => setCopiedSymbol(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12" id="simbolos-instagram">
      <div className="seo-icon-badge">
        <Heart size={20} />
      </div>
      <h2>Símbolos para Instagram</h2>
      <p>
        Decora tu biografía y tus publicaciones con símbolos y separadores caligráficos listos para copiar con un solo clic:
      </p>

      <div className="space-y-6 mt-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {INSTAGRAM_SYMBOLS_DATA.map((group) => (
          <div key={group.name} className="cp-panel" style={{ padding: '1rem 1.25rem' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#A5B4FC', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {group.name}
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.symbols.map((sym, idx) => {
                const isCopied = copiedSymbol === sym;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleCopy(sym)}
                    className={`cp-tag-chip ${isCopied ? 'active' : ''}`}
                    style={{ fontSize: '1.2rem', padding: '0.4rem 0.8rem', minWidth: '40px', textAlign: 'center' }}
                    title={`Copiar símbolo ${sym}`}
                  >
                    {isCopied ? <Check size={14} style={{ color: '#10B981' }} /> : sym}
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
