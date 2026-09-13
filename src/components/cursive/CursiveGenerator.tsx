'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { CURSIVE_STYLES } from '@/data/cursiveStyles';
import { CursiveStyleCard } from './CursiveStyleCard';
import { Sparkles, Trash2, Copy, Check, Type } from 'lucide-react';

const PRESET_EXAMPLES = [
  'Letras Bonitas',
  'Hola Mundo',
  'Mi Nombre',
  'Cursiva Elegante',
  'Instagram Bio',
  'Mi Perfil'
];

export const CursiveGenerator: React.FC = () => {
  const [inputText, setInputText] = useState('Letras Bonitas');
  const [copiedAll, setCopiedAll] = useState(false);

  const displayText = inputText.trim() || 'Letras Bonitas';

  // Sort styles by popularity desc
  const sortedStyles = useMemo(() => {
    return [...CURSIVE_STYLES].sort((a, b) => b.popularity - a.popularity);
  }, []);

  // Generate all previews (memoized per inputText)
  const previews = useMemo(() => {
    return sortedStyles.map((style) => ({
      id: style.id,
      name: style.name,
      preview: style.transform(displayText)
    }));
  }, [displayText, sortedStyles]);

  const handleCopyAll = useCallback(async () => {
    try {
      const allText = previews
        .map((p) => `${p.name}:\n${p.preview}`)
        .join('\n\n');
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(allText);
      }
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2500);
    } catch (e) {
      console.error(e);
    }
  }, [previews]);

  const charCount = inputText.length;

  return (
    <section className="cursive-generator-section" id="generador-cursiva">
      <div className="cursive-gen-panel">
        {/* Input area */}
        <div className="cg-input-block">
          <div className="cg-input-header">
            <div className="cg-input-title">
              <Type size={18} className="cg-icon" />
              <span>Escribe tu texto</span>
            </div>
            <div className="cg-input-actions">
              {inputText && (
                <button
                  onClick={() => setInputText('')}
                  className="action-btn text-btn-danger"
                  type="button"
                  aria-label="Limpiar texto"
                >
                  <Trash2 size={15} />
                  <span className="btn-text">Limpiar</span>
                </button>
              )}
              <button
                onClick={handleCopyAll}
                className={`action-btn ${copiedAll ? 'btn-success' : 'btn-primary'}`}
                type="button"
                aria-label="Copiar todos los estilos"
              >
                {copiedAll ? <Check size={15} /> : <Copy size={15} />}
                <span>{copiedAll ? '¡Copiado Todo!' : 'Copiar Todo'}</span>
              </button>
            </div>
          </div>

          <div className="textarea-wrapper">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu texto aquí..."
              rows={3}
              className="generator-textarea"
              aria-label="Escribe tu texto para convertir a cursiva"
              maxLength={500}
            />
            <div className="input-counter">
              <span>{charCount} caracteres</span>
            </div>
          </div>

          <div className="presets-wrapper">
            <span className="presets-label">Ejemplos:</span>
            <div className="presets-chips">
              {PRESET_EXAMPLES.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setInputText(preset)}
                  className={`preset-chip ${inputText === preset ? 'active' : ''}`}
                  type="button"
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live results grid */}
        <div className="cg-results-header">
          <Sparkles size={18} className="cg-icon" />
          <span>
            <strong>{previews.length}</strong> estilos de letras cursivas generados
          </span>
        </div>

        <div className="cg-results-grid">
          {previews.map((p) => (
            <CursiveStyleCard
              key={p.id}
              name={p.name}
              preview={p.preview}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
