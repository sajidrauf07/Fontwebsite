'use client';

import React, { useState } from 'react';
import { Copy, Check, Flame } from 'lucide-react';
import { FREE_FIRE_NICHE_IDEAS, NicheNameIdeaGroup } from '@/data/freeFireData';

export default function FreeFireNamesNicheIdeas() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12" id="explorar-ideas">
      <div className="seo-icon-badge">
        <Flame size={20} color="#F59E0B" />
      </div>
      <h2>Catálogo de Nombres para Free Fire por Categoría</h2>
      <p>Explora nombres clasificados por estilos para encontrar la opción perfecta para tu perfil o clan:</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
          marginTop: '1.25rem'
        }}
      >
        {FREE_FIRE_NICHE_IDEAS.map((group: NicheNameIdeaGroup, idx: number) => (
          <div
            key={idx}
            style={{
              background: 'var(--card-bg, #1e2029)',
              borderRadius: '12px',
              border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
              padding: '1.25rem'
            }}
          >
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#f59e0b', marginBottom: '0.5rem' }}>
              {group.title}
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem', lineHeight: '1.4' }}>
              {group.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {group.examples.map((ex: string, eIdx: number) => {
                const isCopied = copiedText === ex;
                return (
                  <div
                    key={eIdx}
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
                    <span style={{ fontFamily: 'monospace, sans-serif', fontWeight: 600 }}>{ex}</span>
                    <button
                      type="button"
                      className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                      style={{ padding: '3px 10px', fontSize: '0.75rem', height: 'auto', minWidth: 'auto' }}
                      onClick={() => handleCopy(ex)}
                    >
                      {isCopied ? (
                        <>
                          <Check size={12} />
                          <span>¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copiar</span>
                        </>
                      )}
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
