'use client';

import React, { useState, useMemo } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
import { ALL_STYLES, TextStyleDef } from '@/data/styles';
import { transformText } from '@/lib/unicode/styleEngine';

const SYMBOL_FRAME_PRESETS = [
  { name: 'Coronas Pro', symbol: '亗' },
  { name: 'Corchetes Asiáticos', symbol: '『』' },
  { name: 'Estrella Sólida', symbol: '★' },
  { name: 'Kanji Agresivo', symbol: 'メ' },
  { name: 'Rayo Eléctrico', symbol: '⚡' },
  { name: 'Flor Aesthetic', symbol: '🌸' },
  { name: 'Destellos Mágicos', symbol: '✨' },
  { name: 'Corona Real', symbol: '👑' }
];

export default function NameSymbolDecoratorTool() {
  const [nameInput, setNameInput] = useState('Shadow');
  const [positionMode, setPositionMode] = useState<'both' | 'before' | 'after' | 'sep'>('both');
  const [selectedFrame, setSelectedFrame] = useState('亗');
  const [selectedStyleId, setSelectedStyleId] = useState<string>('gothic-bold');
  const [isCopied, setIsCopied] = useState(false);

  // Apply selected 350+ Unicode style
  const selectedStyleDef = useMemo(() => {
    return ALL_STYLES.find((s) => s.id === selectedStyleId) || ALL_STYLES[0];
  }, [selectedStyleId]);

  const styledName = useMemo(() => {
    return transformText(nameInput || 'Shadow', selectedStyleDef);
  }, [nameInput, selectedStyleDef]);

  // Build decorated output string
  const decoratedResult = useMemo(() => {
    if (selectedFrame === '『』' || selectedFrame === '【】' || selectedFrame === '꧁꧂') {
      if (selectedFrame === '『』') return `『${styledName}』`;
      if (selectedFrame === '【】') return `【${styledName}】`;
      if (selectedFrame === '꧁꧂') return `꧁${styledName}꧂`;
    }

    if (positionMode === 'before') return `${selectedFrame} ${styledName}`;
    if (positionMode === 'after') return `${styledName} ${selectedFrame}`;
    if (positionMode === 'sep') {
      const parts = nameInput.trim().split(/\s+/);
      if (parts.length >= 2) {
        const styledFirst = transformText(parts[0], selectedStyleDef);
        const styledRest = transformText(parts.slice(1).join(' '), selectedStyleDef);
        return `${styledFirst} ${selectedFrame} ${styledRest}`;
      }
      return `${styledName} ${selectedFrame} King`;
    }
    return `${selectedFrame} ${styledName} ${selectedFrame}`;
  }, [styledName, selectedFrame, positionMode, nameInput, selectedStyleDef]);

  const handleCopy = async () => {
    if (!decoratedResult) return;
    try {
      await navigator.clipboard.writeText(decoratedResult);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = decoratedResult;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge" style={{ color: '#818CF8' }}>
        <Sparkles size={20} />
      </div>
      <h2>Decora tu Nombre con Símbolos + Fuentes 350+</h2>
      <p>
        Combina la tipografía Unicode que desees con marcos gráficos y posiciones personalizadas para crear la combinación final para Free Fire:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
        {/* Input Name */}
        <div>
          <label htmlFor="name-dec-input" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.88rem' }}>
            Tu apodo o nombre:
          </label>
          <input
            id="name-dec-input"
            type="text"
            className="cp-search-input"
            style={{
              background: '#1E293B',
              border: '1px solid rgba(129, 140, 248, 0.4)',
              borderRadius: '10px',
              padding: '0.75rem 1rem',
              color: '#FFFFFF',
              fontSize: '1rem',
              width: '100%'
            }}
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Escribe tu apodo..."
            maxLength={30}
          />
        </div>

        {/* Position Controls */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.88rem' }}>
            Posición del Símbolo:
          </label>
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
            {[
              { id: 'both', label: 'Ambos lados' },
              { id: 'before', label: 'Antes' },
              { id: 'after', label: 'Después' },
              { id: 'sep', label: 'Separador' }
            ].map((pos) => (
              <button
                key={pos.id}
                type="button"
                className={`cp-tag-chip ${positionMode === pos.id ? 'active' : ''}`}
                onClick={() => setPositionMode(pos.id as any)}
              >
                {pos.label}
              </button>
            ))}
          </div>
        </div>

        {/* Select Unicode Style from 350+ Engine */}
        <div>
          <label htmlFor="style-select-dec" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.88rem' }}>
            Estilo de Fuente (Librería 350+):
          </label>
          <select
            id="style-select-dec"
            style={{
              width: '100%',
              background: '#1E293B',
              border: '1px solid rgba(129, 140, 248, 0.4)',
              borderRadius: '10px',
              padding: '0.75rem 1rem',
              color: '#FFFFFF',
              fontSize: '0.9rem',
              outline: 'none'
            }}
            value={selectedStyleId}
            onChange={(e) => setSelectedStyleId(e.target.value)}
          >
            {ALL_STYLES.slice(0, 50).map((style) => (
              <option key={style.id} value={style.id}>
                {style.name} ({style.category})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Frame Palette */}
      <div style={{ marginTop: '1.25rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>
          Selecciona el símbolo o marco principal:
        </span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {SYMBOL_FRAME_PRESETS.map((preset) => (
            <button
              key={preset.name}
              type="button"
              className={`cp-tag-chip ${selectedFrame === preset.symbol ? 'active' : ''}`}
              style={{ padding: '0.45rem 0.85rem', fontSize: '1rem' }}
              onClick={() => setSelectedFrame(preset.symbol)}
            >
              {preset.symbol} {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Live Decorated Result Card */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(129, 140, 248, 0.4)',
          borderRadius: '16px',
          padding: '1.75rem',
          marginTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            fontSize: '1.8rem',
            fontWeight: 800,
            color: '#FFFFFF',
            fontFamily: 'sans-serif',
            letterSpacing: '0.5px',
            textShadow: '0 0 20px rgba(129, 140, 248, 0.4)',
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '1rem 2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            minWidth: '280px',
            wordBreak: 'break-all'
          }}
        >
          {decoratedResult}
        </div>

        <button
          type="button"
          className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
          style={{ padding: '0.75rem 2rem', fontSize: '0.95rem' }}
          onClick={handleCopy}
        >
          {isCopied ? (
            <>
              <Check size={16} />
              <span>¡Resultado Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copiar Nombre Decorado</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
