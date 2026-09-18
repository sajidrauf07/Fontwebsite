'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HOW_TO_LETTER_STYLES } from '@/data/letterStyles';
import { sanitizeInput } from '@/lib/unicode/normalize';
import { Copy, Check, Sparkles, X, ArrowRight, Zap } from 'lucide-react';

const PRESET_TEXTS = [
  'Hola Mundo',
  'Mi Nombre',
  'Letras Bonitas',
  'Mi Perfil',
  'Instagram',
  'Bio'
];

export default function MiniLetterConverter() {
  const [inputText, setInputText] = useState('Hola Mundo');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const cleanText = sanitizeInput(inputText);
  const displayText = cleanText.length > 0 ? cleanText : 'Hola Mundo';

  const handleCopy = async (id: string, transformedText: string) => {
    try {
      await navigator.clipboard.writeText(transformedText);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = transformedText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  return (
    <section className="copy-paste-tool-section mb-12" id="herramienta-conversor">
      <div className="cp-panel">
        <div className="cp-quick-presets">
          <span className="cp-quick-label">
            <Zap size={13} className="cg-icon" /> Pruebas rápidas:
          </span>
          <div className="cp-quick-chips">
            {PRESET_TEXTS.map((preset) => (
              <button key={preset} type="button" onClick={() => setInputText(preset)}>
                {preset}
              </button>
            ))}
          </div>
        </div>

        <div className="cp-input-block">
          <div className="cp-input-header">
            <label htmlFor="mini-converter-input" className="cp-input-title">
              <Sparkles size={16} className="cg-icon" />
              <span>Mini Conversor de Letras</span>
            </label>
            {inputText && (
              <div className="cp-input-actions">
                <button
                  type="button"
                  className="cp-clear-btn"
                  onClick={() => setInputText('')}
                  title="Borrar texto"
                >
                  <X size={14} />
                  <span>Borrar</span>
                </button>
              </div>
            )}
          </div>

          <div className="cp-textarea-wrapper">
            <textarea
              id="mini-converter-input"
              className="cp-textarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu texto aquí..."
              rows={2}
            />
          </div>
        </div>

        <div className="cp-results-grid mt-6">
          {HOW_TO_LETTER_STYLES.map((style) => {
            const result = style.transform(displayText);
            const isCopied = copiedId === style.id;

            return (
              <div key={style.id} className={`cp-style-card ${isCopied ? 'copied' : ''}`}>
                <div className="cp-card-header">
                  <span className="cp-card-name">{style.name}</span>
                </div>
                <div className="cp-card-preview">
                  <span className="cp-card-text">{result}</span>
                </div>
                <div className="cp-card-actions">
                  <button
                    type="button"
                    className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                    onClick={() => handleCopy(style.id, result)}
                  >
                    {isCopied ? (
                      <>
                        <Check size={14} />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Link Box */}
        <div className="cac-deep-link-box" style={{ marginTop: '2rem' }}>
          <Link href="/conversor-de-letras" className="cac-deep-link">
            <span>Probar el Conversor de Letras Completo (350+ Estilos)</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
