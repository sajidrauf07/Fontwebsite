'use client';

import React, { useState } from 'react';
import { Sparkles, Copy, Check, Shield } from 'lucide-react';

const DECORATION_PRESETS = [
  { label: 'Coronas Insanas', prefix: '亗 ', suffix: ' 亗' },
  { label: 'Corchetes Pro', prefix: '『', suffix: '』' },
  { label: 'Estrellas Pro', prefix: '★彡 ', suffix: ' 彡★' },
  { label: 'Kanji Agresivo', prefix: 'メ ', suffix: ' メ' },
  { label: 'Símbolo Místico', prefix: '☬ ', suffix: ' ☬' },
  { label: 'Rayo Eléctrico', prefix: '⚡ ', suffix: ' ⚡' },
  { label: 'Calavera Savage', prefix: '☠️ ', suffix: ' ☠️' },
  { label: 'Alas Legendarias', prefix: '꧁༺ ', suffix: ' ༻꧂' },
  { label: 'Fuego Insano', prefix: '🔥 ', suffix: ' 👑' }
];

export default function InsaneSymbolDecorator() {
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
      <div className="seo-icon-badge" style={{ color: '#818CF8' }}>
        <Sparkles size={20} />
      </div>
      <h2>Decora tu Nombre Insano</h2>
      <p>
        Añade símbolos Pro, marcos gráficos, kanjis y decoraciones laterales alrededor de tu nombre para darle un aspecto insano en Free Fire.
      </p>

      <div style={{ marginTop: '1.25rem' }}>
        <label htmlFor="decorator-input-insane" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.9rem' }}>
          Tu apodo base:
        </label>
        <input
          id="decorator-input-insane"
          type="text"
          className="cp-search-input"
          style={{
            background: '#1E293B',
            border: '1px solid rgba(129, 140, 248, 0.3)',
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
        {DECORATION_PRESETS.map((preset, idx) => {
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
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F59E0B', display: 'block', marginBottom: '0.35rem' }}>
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
