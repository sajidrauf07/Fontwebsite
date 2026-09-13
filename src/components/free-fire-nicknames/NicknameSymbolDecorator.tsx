'use client';

import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

const DECORATIVE_PRESETS = [
  { label: 'Símbolos Ligeros', prefix: '★ ', suffix: ' ★' },
  { label: 'Coronas Pro', prefix: '亗 ', suffix: ' 亗' },
  { label: 'Corchetes Elegantes', prefix: '『', suffix: '』' },
  { label: 'Kanji Japonés', prefix: 'メ ', suffix: ' メ' },
  { label: 'Aesthetic Floral', prefix: '🌸 ', suffix: ' 🌸' },
  { label: 'Rayo Gaming', prefix: '⚡ ', suffix: ' ⚡' },
  { label: 'Estrellas Especiales', prefix: '★彡 ', suffix: ' 彡★' },
  { label: 'Símbolo Místico', prefix: '☬ ', suffix: ' ☬' },
  { label: 'Corazón Bonito', prefix: '♡ ', suffix: ' ♡' }
];

export default function NicknameSymbolDecorator() {
  const [inputText, setInputText] = useState('Shadow');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge" style={{ color: '#0EA5E9' }}>
        <Sparkles size={20} />
      </div>
      <h2>Decora tu Apodo</h2>
      <p>
        Personaliza tu apodo añadiendo símbolos laterales, marcos de coronas o caracteres aesthetic antes y después de tu nombre.
      </p>

      <div style={{ marginTop: '1.25rem' }}>
        <label htmlFor="decorator-apodo-input" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.9rem' }}>
          Escribe tu apodo:
        </label>
        <input
          id="decorator-apodo-input"
          type="text"
          className="cp-search-input"
          style={{
            background: '#1E293B',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            borderRadius: '10px',
            padding: '0.75rem 1rem',
            color: '#FFFFFF',
            fontSize: '1rem',
            maxWidth: '400px'
          }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escribe tu apodo..."
          maxLength={25}
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem',
          marginTop: '1.5rem'
        }}
      >
        {DECORATIVE_PRESETS.map((preset, idx) => {
          const decorated = `${preset.prefix}${inputText || 'Shadow'}${preset.suffix}`;
          const isCopied = copiedIndex === idx;

          return (
            <div
              key={preset.label}
              style={{
                background: 'var(--card-bg, #1e2029)',
                border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.75rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0EA5E9', display: 'block', marginBottom: '0.35rem' }}>
                  {preset.label}
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', wordBreak: 'break-all' }}>
                  {decorated}
                </span>
              </div>

              <button
                type="button"
                className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                onClick={() => handleCopy(decorated, idx)}
              >
                {isCopied ? (
                  <>
                    <Check size={14} />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
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
