'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';

const SYMBOL_DECORATORS = [
  { id: 'd-1', label: 'Corona Pro 亗', prefix: '亗 ', suffix: ' 亗' },
  { id: 'd-2', label: 'Corchete Gótico', prefix: '『 ', suffix: ' 』' },
  { id: 'd-3', label: 'Kanji 么', prefix: '么 ', suffix: ' 么' },
  { id: 'd-4', label: 'Estrellas ★彡', prefix: '★彡 ', suffix: ' 彡★' },
  { id: 'd-5', label: 'Alas Góticas', prefix: '꧁༺ ', suffix: ' ༻꧂' },
  { id: 'd-6', label: 'Rayo Energy', prefix: '⚡ ', suffix: ' ⚡' },
  { id: 'd-7', label: 'Crown Royalty', prefix: '👑 ', suffix: ' 👑' },
  { id: 'd-8', label: 'Espadas', prefix: '⚔️ ', suffix: ' ⚔️' }
];

export default function FreeFireSymbolBuilder() {
  const [baseWord, setBaseWord] = useState('Shadow');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
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
      <h2>Decora tu Nombre para Free Fire</h2>
      <p>Prueba diferentes marcos y adornos de símbolos alrededor de tu apodo:</p>

      <div style={{ maxWidth: '400px', margin: '1rem 0' }}>
        <input
          type="text"
          className="cp-search-input"
          style={{ width: '100%', height: '42px', fontSize: '0.95rem' }}
          value={baseWord}
          onChange={(e) => setBaseWord(e.target.value)}
          placeholder="Escribe la palabra para decorar..."
          maxLength={30}
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          marginTop: '1.25rem'
        }}
      >
        {SYMBOL_DECORATORS.map((dec) => {
          const formatted = `${dec.prefix}${baseWord || 'Shadow'}${dec.suffix}`;
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
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>
                  {dec.label}
                </span>
                <div style={{ fontSize: '1.15rem', color: '#f8fafc', fontWeight: 600, marginTop: '4px', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                  {formatted}
                </div>
              </div>

              <button
                type="button"
                className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                style={{ width: '100%', height: '34px', fontSize: '0.8rem' }}
                onClick={() => handleCopy(formatted, dec.id)}
              >
                {isCopied ? (
                  <>
                    <Check size={13} />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copiar</span>
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
