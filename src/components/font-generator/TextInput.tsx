'use client';

import React from 'react';
import { Trash2, Copy, Sparkles, RotateCcw, ClipboardPaste } from 'lucide-react';

interface TextInputProps {
  value: string;
  onChange: (val: string) => void;
  onClear: () => void;
  onCopyAll: () => void;
  onResetFilters: () => void;
  copiedAllState: boolean;
}

const PRESET_EXAMPLES = [
  'Letras Bonitas',
  'Hola Mundo',
  'Mi Nombre',
  'Instagram Bio',
  'Gaming Name'
];

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  onClear,
  onCopyAll,
  onResetFilters,
  copiedAllState
}) => {
  const charCount = value.length;
  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;

  const handlePaste = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) {
          onChange(text);
        }
      }
    } catch {
      // Fallback: clipboard access rejected or unsupported
    }
  };

  return (
    <div className="generator-input-card">
      <div className="input-card-header">
        <div className="header-title">
          <Sparkles className="icon-sparkle" size={20} />
          <span>Ingresa tu texto</span>
        </div>
        <div className="header-actions">
          <button
            onClick={handlePaste}
            className="action-btn text-btn-secondary"
            title="Pegar texto del portapapeles"
            type="button"
          >
            <ClipboardPaste size={16} />
            <span className="btn-text">Pegar</span>
          </button>
          {value && (
            <button
              onClick={onClear}
              className="action-btn text-btn-danger"
              title="Limpiar texto"
              type="button"
            >
              <Trash2 size={16} />
              <span className="btn-text">Limpiar</span>
            </button>
          )}
          <button
            onClick={onCopyAll}
            className={`action-btn ${copiedAllState ? 'btn-success' : 'btn-primary'}`}
            title="Copiar todas las letras generadas"
            type="button"
          >
            <Copy size={16} />
            <span>{copiedAllState ? '¡Copiado Todo!' : 'Copiar Todo'}</span>
          </button>
          <button
            onClick={onResetFilters}
            className="action-btn text-btn-secondary"
            title="Restablecer filtros"
            type="button"
          >
            <RotateCcw size={16} />
            <span className="btn-text">Restablecer</span>
          </button>
        </div>
      </div>

      <div className="textarea-wrapper">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Escribe tu texto aquí..."
          rows={4}
          className="generator-textarea"
          aria-label="Escribe tu texto para transformar"
          maxLength={1000}
        />
        <div className="input-counter">
          <span>{charCount} caracteres</span>
          <span className="counter-divider">•</span>
          <span>{wordCount} palabras</span>
        </div>
      </div>

      <div className="presets-wrapper">
        <span className="presets-label">Ejemplos rápidos:</span>
        <div className="presets-chips">
          {PRESET_EXAMPLES.map((preset) => (
            <button
              key={preset}
              onClick={() => onChange(preset)}
              type="button"
              className={`preset-chip ${value === preset ? 'active' : ''}`}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
