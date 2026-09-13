'use client';

import React, { useState, useMemo } from 'react';
import { Copy, Check, X, Search, Sparkles, SlidersHorizontal } from 'lucide-react';
import { CURSIVE_STYLES, type CursiveStyle } from '@/data/cursiveStyles';

export default function CursiveCopyGenerator() {
  const [inputText, setInputText] = useState('Letras Bonitas');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const defaultText = 'Letras Bonitas';
  const textToTransform = inputText.trim() || defaultText;

  // Filter styles based on search and selected tag
  const filteredStyles = useMemo(() => {
    return CURSIVE_STYLES.filter((style) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        style.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag =
        selectedTag === 'all' || style.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  // Copy individual style result
  const handleCopy = async (id: string, text: string) => {
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

  // Copy all visible generated results cleanly
  const handleCopyAll = async () => {
    const allResults = filteredStyles
      .map((s) => `${s.name}: ${s.transform(textToTransform)}`)
      .join('\n');

    try {
      await navigator.clipboard.writeText(allResults);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = allResults;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  return (
    <section className="cursive-copy-generator-section" id="generador-cursivas">
      <div className="cc-panel">
        {/* Input Text Box */}
        <div className="cc-input-block">
          <div className="cc-input-header">
            <label htmlFor="cursive-copy-input" className="cc-input-title">
              <Sparkles size={16} className="cg-icon" />
              <span>Escribe tu texto para convertir a cursiva</span>
            </label>
            <div className="cc-input-actions">
              {inputText && (
                <button
                  type="button"
                  className="cc-clear-btn"
                  onClick={() => setInputText('')}
                  title="Borrar texto"
                >
                  <X size={14} />
                  <span>Borrar</span>
                </button>
              )}
              <span className="cc-char-counter">{inputText.length} / 200</span>
            </div>
          </div>

          <div className="cc-textarea-wrapper">
            <textarea
              id="cursive-copy-input"
              className="cc-textarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu texto aquí..."
              maxLength={200}
              rows={2}
            />
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="cc-filter-bar">
          <div className="cc-search-wrapper">
            <Search size={15} className="cc-search-icon" />
            <input
              type="text"
              className="cc-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar estilo (ej. elegante, negrita, script...)"
            />
            {searchQuery && (
              <button
                type="button"
                className="cc-search-clear"
                onClick={() => setSearchQuery('')}
              >
                <X size={13} />
              </button>
            )}
          </div>

          <div className="cc-tags-wrapper">
            <SlidersHorizontal size={14} className="cg-icon" />
            <div className="cc-tags-scroll">
              <button
                type="button"
                className={`cc-tag-chip ${selectedTag === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedTag('all')}
              >
                Todos los estilos ({CURSIVE_STYLES.length})
              </button>
              <button
                type="button"
                className={`cc-tag-chip ${selectedTag === 'clasica' ? 'active' : ''}`}
                onClick={() => setSelectedTag('clasica')}
              >
                Clásicas
              </button>
              <button
                type="button"
                className={`cc-tag-chip ${selectedTag === 'elegante' ? 'active' : ''}`}
                onClick={() => setSelectedTag('elegante')}
              >
                Elegantes
              </button>
              <button
                type="button"
                className={`cc-tag-chip ${selectedTag === 'negrita' ? 'active' : ''}`}
                onClick={() => setSelectedTag('negrita')}
              >
                Negritas
              </button>
              <button
                type="button"
                className={`cc-tag-chip ${selectedTag === 'aesthetic' ? 'active' : ''}`}
                onClick={() => setSelectedTag('aesthetic')}
              >
                Aesthetic
              </button>
            </div>

            <button
              type="button"
              className={`cc-copy-all-btn ${copiedAll ? 'copied' : ''}`}
              onClick={handleCopyAll}
              title="Copiar todos los resultados visibles"
            >
              {copiedAll ? (
                <>
                  <Check size={14} />
                  <span>¡Todo Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copiar Todos</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="cc-results-header">
          <span>{filteredStyles.length} estilos cursivos disponibles</span>
        </div>

        <div className="cc-results-grid">
          {filteredStyles.map((style) => {
            const transformed = style.transform(textToTransform);
            const isCopied = copiedId === style.id;

            return (
              <div
                key={style.id}
                className={`cc-style-card ${isCopied ? 'copied' : ''}`}
              >
                <div className="cc-card-header">
                  <span className="cc-card-name">{style.name}</span>
                </div>

                <div className="cc-card-preview">
                  <span className="cc-card-text">{transformed}</span>
                </div>

                <div className="cc-card-actions">
                  <button
                    type="button"
                    className={`cc-card-copy-btn ${isCopied ? 'copied' : ''}`}
                    onClick={() => handleCopy(style.id, transformed)}
                    aria-label={isCopied ? 'Copiado' : `Copiar en estilo ${style.name}`}
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
      </div>
    </section>
  );
}
