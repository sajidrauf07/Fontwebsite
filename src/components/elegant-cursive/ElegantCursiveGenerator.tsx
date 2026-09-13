'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Copy, Check, X, Search, Sparkles, SlidersHorizontal, Star, Zap } from 'lucide-react';
import { ELEGANT_CURSIVE_STYLES, type ElegantCursiveStyle } from '@/data/elegantCursiveStyles';

export default function ElegantCursiveGenerator() {
  const [inputText, setInputText] = useState('Letras Bonitas');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const defaultText = 'Letras Bonitas';
  const textToTransform = inputText.trim() || defaultText;

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lb_elegant_favorites');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors in SSR or restricted environments
    }
  }, []);

  // Save favorites to localStorage
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('lb_elegant_favorites', JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  // Quick preset button click handler
  const handleQuickPreset = (presetText: string) => {
    setInputText(presetText);
  };

  // Filter styles based on search, category, and favorites
  const filteredStyles = useMemo(() => {
    return ELEGANT_CURSIVE_STYLES.filter((style) => {
      if (showOnlyFavorites && !favorites.includes(style.id)) {
        return false;
      }

      const matchesSearch =
        searchQuery.trim() === '' ||
        style.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || style.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, favorites, showOnlyFavorites]);

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
    <section className="elegant-cursive-generator-section" id="generador-elegante">
      <div className="ec-panel">
        {/* Quick Example Populate Buttons */}
        <div className="ec-quick-presets">
          <span className="ec-quick-label">
            <Zap size={13} className="cg-icon" /> Pruebas rápidas:
          </span>
          <div className="ec-quick-chips">
            <button type="button" onClick={() => handleQuickPreset('Letras Bonitas')}>
              Letras Bonitas
            </button>
            <button type="button" onClick={() => handleQuickPreset('Hola Mundo')}>
              Hola Mundo
            </button>
            <button type="button" onClick={() => handleQuickPreset('Mi Nombre')}>
              Mi Nombre
            </button>
            <button type="button" onClick={() => handleQuickPreset('Perfil Elegante')}>
              Perfil Elegante
            </button>
            <button type="button" onClick={() => handleQuickPreset('Instagram')}>
              Instagram
            </button>
            <button type="button" onClick={() => handleQuickPreset('Mi Bio')}>
              Mi Bio
            </button>
          </div>
        </div>

        {/* Input Text Box */}
        <div className="ec-input-block">
          <div className="ec-input-header">
            <label htmlFor="elegant-input" className="ec-input-title">
              <Sparkles size={16} className="cg-icon" />
              <span>Escribe tu texto para convertir a Cursiva Elegante</span>
            </label>
            <div className="ec-input-actions">
              {inputText && (
                <button
                  type="button"
                  className="ec-clear-btn"
                  onClick={() => setInputText('')}
                  title="Borrar texto"
                >
                  <X size={14} />
                  <span>Borrar</span>
                </button>
              )}
              <span className="ec-char-counter">{inputText.length} / 200</span>
            </div>
          </div>

          <div className="ec-textarea-wrapper">
            <textarea
              id="elegant-input"
              className="ec-textarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu texto aquí..."
              maxLength={200}
              rows={2}
            />
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="ec-filter-bar">
          <div className="ec-search-wrapper">
            <Search size={15} className="ec-search-icon" />
            <input
              type="text"
              className="ec-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar estilo elegante (ej. fina, script, negrita, destellos...)"
            />
            {searchQuery && (
              <button
                type="button"
                className="ec-search-clear"
                onClick={() => setSearchQuery('')}
              >
                <X size={13} />
              </button>
            )}
          </div>

          <div className="ec-tags-wrapper">
            <div className="ec-categories-scroll">
              <button
                type="button"
                className={`ec-tag-chip ${selectedCategory === 'all' && !showOnlyFavorites ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('all');
                  setShowOnlyFavorites(false);
                }}
              >
                Todas ({ELEGANT_CURSIVE_STYLES.length})
              </button>
              <button
                type="button"
                className={`ec-tag-chip ${selectedCategory === 'fina' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('fina');
                  setShowOnlyFavorites(false);
                }}
              >
                Fina
              </button>
              <button
                type="button"
                className={`ec-tag-chip ${selectedCategory === 'clasica' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('clasica');
                  setShowOnlyFavorites(false);
                }}
              >
                Clásica
              </button>
              <button
                type="button"
                className={`ec-tag-chip ${selectedCategory === 'elegante' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('elegante');
                  setShowOnlyFavorites(false);
                }}
              >
                Elegante
              </button>
              <button
                type="button"
                className={`ec-tag-chip ${selectedCategory === 'script' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('script');
                  setShowOnlyFavorites(false);
                }}
              >
                Script
              </button>
              <button
                type="button"
                className={`ec-tag-chip ${selectedCategory === 'decorativa' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('decorativa');
                  setShowOnlyFavorites(false);
                }}
              >
                Decorativa
              </button>

              {favorites.length > 0 && (
                <button
                  type="button"
                  className={`ec-tag-chip fav-chip ${showOnlyFavorites ? 'active' : ''}`}
                  onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                >
                  <Star size={12} fill="currentColor" /> Favoritas ({favorites.length})
                </button>
              )}
            </div>

            <button
              type="button"
              className={`ec-copy-all-btn ${copiedAll ? 'copied' : ''}`}
              onClick={handleCopyAll}
              title="Copiar todos los resultados elegantes visibles"
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
        <div className="ec-results-header">
          <span>{filteredStyles.length} estilos cursivos elegantes listos</span>
        </div>

        <div className="ec-results-grid">
          {filteredStyles.map((style) => {
            const transformed = style.transform(textToTransform);
            const isCopied = copiedId === style.id;
            const isFav = favorites.includes(style.id);

            return (
              <div
                key={style.id}
                className={`ec-style-card ${isCopied ? 'copied' : ''}`}
              >
                <div className="ec-card-header">
                  <span className="ec-card-name">{style.name}</span>
                  <button
                    type="button"
                    className={`ec-fav-btn ${isFav ? 'active' : ''}`}
                    onClick={() => toggleFavorite(style.id)}
                    title={isFav ? 'Quitar de favoritas' : 'Guardar en favoritas'}
                    aria-label={isFav ? 'Quitar de favoritas' : 'Guardar en favoritas'}
                  >
                    <Star size={15} fill={isFav ? '#F59E0B' : 'none'} color={isFav ? '#F59E0B' : 'var(--text-dim)'} />
                  </button>
                </div>

                <div className="ec-card-preview">
                  <span className="ec-card-text">{transformed}</span>
                </div>

                <div className="ec-card-actions">
                  <button
                    type="button"
                    className={`ec-card-copy-btn ${isCopied ? 'copied' : ''}`}
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
