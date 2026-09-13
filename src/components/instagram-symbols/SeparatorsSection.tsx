'use client';

import React, { useState } from 'react';
import { Copy, Check, Zap } from 'lucide-react';

const SEPARATOR_ITEMS = [
  { label: 'Separador de Puntos', line: '•─────•' },
  { label: 'Separador de Estrella', line: '·.★.·' },
  { label: 'Separador Chispas', line: '┊✨┊' },
  { label: 'Separador Flores', line: '🌸━━🌸' },
  { label: 'Línea Discontinua', line: '┊ ┆ │ ┃ ╱ ╲' },
  { label: 'Divisor Gótico', line: '꧁༺ ★ ༻꧂' }
];

export default function SeparatorsSection() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = async (line: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(line);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = line;
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
        <Zap size={20} />
      </div>
      <h2>Separadores para Instagram</h2>
      <p>Líneas divisorias y marcos horizontales para organizar el texto de tu biografía:</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          marginTop: '1.25rem'
        }}
      >
        {SEPARATOR_ITEMS.map((item, idx) => {
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
                  {item.line}
                </div>
              </div>

              <button
                type="button"
                className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                style={{ width: '100%', height: '34px', fontSize: '0.8rem' }}
                onClick={() => handleCopy(item.line, idx)}
              >
                {isCopied ? (
                  <>
                    <Check size={13} />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copiar Separador</span>
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
