'use client';

import React, { useState } from 'react';
import { NAME_SYMBOLS_COLLECTION, NameSymbolGroup } from '@/data/nameData';

export default function NameSymbolsSection() {
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);

  const handleCopy = (symbol: string) => {
    navigator.clipboard.writeText(symbol);
    setCopiedSymbol(symbol);
    setTimeout(() => {
      setCopiedSymbol(null);
    }, 1500);
  };

  return (
    <section className="seo-card-section" style={{ marginTop: '2.5rem' }}>
      <div className="seo-section-header">
        <h2 className="seo-section-title">Símbolos para Nombres</h2>
        <p className="seo-section-desc">
          Toca o haz clic en cualquier símbolo para copiarlo al instante e insertarlo en tu nombre de perfil.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {NAME_SYMBOLS_COLLECTION.map((group: NameSymbolGroup, idx: number) => (
          <div
            key={idx}
            style={{
              background: 'var(--card-bg, #1e2029)',
              borderRadius: '12px',
              border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
              padding: '1.25rem'
            }}
          >
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: '#e2e8f0',
                marginBottom: '0.85rem'
              }}
            >
              {group.category}
            </h3>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem'
              }}
            >
              {group.symbols.map((sym: string, sIdx: number) => {
                const isCopied = copiedSymbol === sym;
                return (
                  <button
                    key={sIdx}
                    type="button"
                    style={{
                      background: isCopied ? '#10b981' : 'rgba(255, 255, 255, 0.05)',
                      color: isCopied ? '#ffffff' : '#f8fafc',
                      border: isCopied
                        ? '1px solid #10b981'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '0.5rem 0.75rem',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      minWidth: '42px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
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
