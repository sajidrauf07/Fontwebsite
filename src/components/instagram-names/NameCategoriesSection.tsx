'use client';

import React, { useState } from 'react';
import { NICHE_NAME_CATEGORIES, NicheNameCategory } from '@/data/nameData';

export default function NameCategoriesSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  return (
    <section className="seo-card-section" style={{ marginTop: '2.5rem' }}>
      <div className="seo-section-header">
        <h2 className="seo-section-title">Estilos de Nombres por Categoría y Nicho</h2>
        <p className="seo-section-desc">
          Encuentra inspiración según el tipo de perfil que deseas destacar en Instagram.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem'
        }}
      >
        {NICHE_NAME_CATEGORIES.map((cat: NicheNameCategory) => (
          <div
            key={cat.id}
            style={{
              background: 'var(--card-bg, #1e2029)',
              borderRadius: '12px',
              border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
              padding: '1.25rem'
            }}
          >
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: 'var(--text-accent, #818cf8)',
                marginBottom: '0.5rem'
              }}
            >
              {cat.title}
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted, #94a3b8)',
                marginBottom: '1rem',
                lineHeight: '1.4'
              }}
            >
              {cat.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {cat.examples.map((ex: string, idx: number) => {
                const isCopied = copiedText === ex;
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'rgba(0, 0, 0, 0.25)',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      color: '#e2e8f0'
                    }}
                  >
                    <span style={{ fontFamily: 'monospace, sans-serif' }}>{ex}</span>
                    <button
                      type="button"
                      className="cp-copy-btn"
                      style={{
                        padding: '3px 10px',
                        fontSize: '0.75rem',
                        height: 'auto',
                        minWidth: 'auto'
                      }}
                      onClick={() => handleCopy(ex)}
                    >
                      {isCopied ? '✓' : 'Copiar'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
