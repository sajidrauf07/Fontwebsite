'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';

const AESTHETIC_ITEMS = [
  { label: 'Apuntes / Notas', code: '˚📑 ♡ ˚📑' },
  { label: 'Cerezo con Puntos', code: '🌸 ·.★ 🌸' },
  { label: 'Brillo Místico', code: '✧.˚ ✨ ✧.˚' },
  { label: 'Coquette Ribbon', code: '🎀.· ♡ 🎀.·' },
  { label: 'Osito Cute', code: '🧸.˚ ♡ 🧸.˚' },
  { label: 'Café Cozy', code: '☕.· ✨ ☕.·' }
];

export default function AestheticSymbolsSection() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = async (code: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge">
        <Sparkles size={20} />
      </div>
      <h2>Símbolos Aesthetic</h2>
      <p>Símbolos y marcos suaves de estilo aesthetic y coquette para perfiles creativos:</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          marginTop: '1.25rem'
        }}
      >
        {AESTHETIC_ITEMS.map((item, idx) => {
          const isCopied = copiedIdx === idx;
          return (
            <div
              key={idx}
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
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>
                  {item.label}
                </span>
                <div style={{ fontSize: '1.15rem', color: '#f8fafc', fontWeight: 600, marginTop: '4px' }}>
                  {item.code}
                </div>
              </div>

              <button
                type="button"
                className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                style={{ width: '100%', height: '34px', fontSize: '0.8rem' }}
                onClick={() => handleCopy(item.code, idx)}
              >
                {isCopied ? (
                  <>
                    <Check size={13} />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copiar Aesthetic</span>
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
