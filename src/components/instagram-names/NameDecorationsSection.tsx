'use client';

import React, { useState } from 'react';
import { NAME_DECORATIONS, DecoratedNameItem } from '@/data/nameData';

export default function NameDecorationsSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (sample: string, id: string) => {
    navigator.clipboard.writeText(sample);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section className="seo-card-section" style={{ marginTop: '2.5rem' }}>
      <div className="seo-section-header">
        <h2 className="seo-section-title">Decoraciones para Nombres</h2>
        <p className="seo-section-desc">
          Marcos, estrellas y adornos listos para añadir un estilo único a tu nombre de perfil.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem'
        }}
      >
        {NAME_DECORATIONS.map((dec: DecoratedNameItem) => {
          const isCopied = copiedId === dec.id;
          return (
            <div
              key={dec.id}
              style={{
                background: 'var(--card-bg, #1e2029)',
                borderRadius: '10px',
                border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.75rem'
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted, #94a3b8)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {dec.title}
                </span>
                <div
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    color: '#f8fafc',
                    marginTop: '4px',
                    wordBreak: 'break-word'
                  }}
                >
                  {dec.sample}
                </div>
              </div>

              <button
                type="button"
                className={`cp-copy-btn ${isCopied ? 'success' : ''}`}
                style={{ width: '100%', height: '36px', fontSize: '0.85rem' }}
                onClick={() => handleCopy(dec.sample, dec.id)}
              >
                {isCopied ? '✓ ¡Copiado!' : 'Copiar Decoración'}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
