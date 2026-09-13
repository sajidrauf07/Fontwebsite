'use client';

import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

const CLAN_DECORATION_PRESETS = [
  { label: 'Coronas Pro', prefix: '亗 ', suffix: ' 亗' },
  { label: 'Corchetes de Clan', prefix: '『', suffix: '』' },
  { label: 'Estrellas de Escuadra', prefix: '★彡 ', suffix: ' 彡★' },
  { label: 'Kanji Competitivo', prefix: 'メ ', suffix: ' メ' },
  { label: 'Símbolo Escudo', prefix: '☬ ', suffix: ' ☬' },
  { label: 'Rayo Eléctrico', prefix: '⚡ ', suffix: ' ⚡' },
  { label: 'Calavera Savage', prefix: '☠️ ', suffix: ' ☠️' },
  { label: 'Alas Legendarias', prefix: '꧁༺ ', suffix: ' ༻꧂' },
  { label: 'Fuego Insano', prefix: '🔥 ', suffix: ' 👑' }
];

export default function ClanSymbolDecorator() {
  const [inputText, setInputText] = useState('Shadow Squad');
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
      <div className="seo-icon-badge" style={{ color: '#10B981' }}>
        <Sparkles size={20} />
      </div>
      <h2>Decora el Nombre de tu Clan</h2>
      <p>
        Añade símbolos de equipo, marcos Pro, coronas y kanjis alrededor del nombre de tu escuadra para darle una apariencia profesional.
      </p>

      <div style={{ marginTop: '1.25rem' }}>
        <label htmlFor="decorator-clan-input" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.9rem' }}>
          Nombre de tu clan:
        </label>
        <input
          id="decorator-clan-input"
          type="text"
          className="cp-search-input"
          style={{
            background: '#1E293B',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '10px',
            padding: '0.75rem 1rem',
            color: '#FFFFFF',
            fontSize: '1rem',
            maxWidth: '400px'
          }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escribe el nombre de tu clan..."
          maxLength={30}
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
        {CLAN_DECORATION_PRESETS.map((preset, idx) => {
          const decorated = `${preset.prefix}${inputText || 'Shadow Squad'}${preset.suffix}`;
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
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', display: 'block', marginBottom: '0.35rem' }}>
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
