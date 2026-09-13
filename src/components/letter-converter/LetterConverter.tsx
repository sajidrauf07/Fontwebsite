'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Copy, Check, X, Search, Sparkles, Star, Zap } from 'lucide-react';
import { ALL_FONT_STYLES, CATEGORIES, type CategoryType, type FontStyle } from '@/data/fontStyles';
import { sanitizeInput } from '@/lib/unicode/normalize';

export default function LetterConverter() {
  const [inputText, setInputText] = useState('Letras Bonitas');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const defaultText = 'Letras Bonitas';
  const textToTransform = sanitizeInput(inputText.trim() || defaultText, 250);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lb_converter_favorites');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  // Save favorites
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('lb_converter_favorites', JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  // Populate preset on click
  const handleQuickPreset = (presetText: string) => {
    setInputText(presetText);
  };

  // Filter styles by search, category, and favorites
  const filteredStyles = useMemo(() => {
    return ALL_FONT_STYLES.filter((style) => {
      if (showOnlyFavorites && !favorites.includes(style.id)) {
        return false;
      }

      const matchesSearch =
        searchQuery.trim() === '' ||
        style.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesCategory = true;
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Popular') {
          matchesCategory = style.popularity >= 90;
        } else {
          matchesCategory = style.category === selectedCategory;
        }
      }

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
      .slice(0, 50) // limit copy all to top 50 visible styles for performance
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
    <section className="letter-converter-section" id="conversor-herramienta">
      <div className="lc-panel">
        {/* Quick Examples Buttons */}
        <div className="lc-quick-presets">
          <span className="lc-quick-label">
            <Zap size={13} className="cg-icon" /> Pruebas rápidas:
          </span>
          <div className="lc-quick-chips">
            <button type="button" onClick={() => handleQuickPreset('Letras Bonitas')}>
              Letras Bonitas
            </button>
            <button type="button" onClick={() => handleQuickPreset('Hola Mundo')}>
              Hola Mundo
            </button>
            <button type="button" onClick={() => handleQuickPreset('Mi Nombre')}>
              Mi Nombre
            </button>
            <button type="button" onClick={() => handleQuickPreset('Mi Perfil')}>
              Mi Perfil
            </button>
            <button type="button" onClick={() => handleQuickPreset('Instagram Bio')}>
              Instagram Bio
            </button>
            <button type="button" onClick={() => handleQuickPreset('Creador Digital')}>
              Creador Digital
            </button>
            <button type="button" onClick={() => handleQuickPreset('Gaming Name')}>
              Gaming Name
            </button>
          </div>
        </div>

        {/* Input Text Box */}
        <div className="lc-input-block">
          <div className="lc-input-header">
            <label htmlFor="letter-converter-input" className="lc-input-title">
              <Sparkles size={16} className="cg-icon" />
              <span>Escribe tu texto para convertir</span>
            </label>
            <div className="lc-input-actions">
              {inputText && (
                <button
                  type="button"
                  className="lc-clear-btn"
                  onClick={() => setInputText('')}
                  title="Borrar texto"
                >
                  <X size={14} />
                  <span>Borrar</span>
                </button>
              )}
              <span className="lc-char-counter">{inputText.length} / 250</span>
            </div>
          </div>

          <div className="lc-textarea-wrapper">
            <textarea
              id="letter-converter-input"
              className="lc-textarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu texto aquí..."
              maxLength={250}
              rows={2}
            />
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="lc-filter-bar">
          <div className="lc-search-wrapper">
            <Search size={15} className="lc-search-icon" />
            <input
              type="text"
              className="lc-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar estilo (ej. cursiva, elegante, negrita, gótica, aesthetic...)"
            />
            {searchQuery && (
              <button
                type="button"
                className="lc-search-clear"
                onClick={() => setSearchQuery('')}
              >
                <X size={13} />
              </button>
            )}
          </div>

          <div className="lc-tags-wrapper">
            <div className="lc-categories-scroll">
              <button
                type="button"
                className={`lc-tag-chip ${selectedCategory === 'All' && !showOnlyFavorites ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('All');
                  setShowOnlyFavorites(false);
                }}
              >
                Todas ({ALL_FONT_STYLES.length})
              </button>
              <button
                type="button"
                className={`lc-tag-chip ${selectedCategory === 'Popular' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Popular');
                  setShowOnlyFavorites(false);
                }}
              >
                🔥 Populares
              </button>
              <button
                type="button"
                className={`lc-tag-chip ${selectedCategory === 'Cursive' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Cursive');
                  setShowOnlyFavorites(false);
                }}
              >
                ✒️ Cursivas
              </button>
              <button
                type="button"
                className={`lc-tag-chip ${selectedCategory === 'Elegant' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Elegant');
                  setShowOnlyFavorites(false);
                }}
              >
                ✨ Elegantes
              </button>
              <button
                type="button"
                className={`lc-tag-chip ${selectedCategory === 'Bold' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Bold');
                  setShowOnlyFavorites(false);
                }}
              >
                💪 Negritas
              </button>
              <button
                type="button"
                className={`lc-tag-chip ${selectedCategory === 'Aesthetic' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Aesthetic');
                  setShowOnlyFavorites(false);
                }}
              >
                🌸 Aesthetic
              </button>
              <button
                type="button"
                className={`lc-tag-chip ${selectedCategory === 'Gothic' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Gothic');
                  setShowOnlyFavorites(false);
                }}
              >
                🏰 Góticas
              </button>
              <button
                type="button"
                className={`lc-tag-chip ${selectedCategory === 'Small Caps' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Small Caps');
                  setShowOnlyFavorites(false);
                }}
              >
                🔤 Versalitas
              </button>

              {favorites.length > 0 && (
                <button
                  type="button"
                  className={`lc-tag-chip fav-chip ${showOnlyFavorites ? 'active' : ''}`}
                  onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                >
                  <Star size={12} fill="currentColor" /> Favoritas ({favorites.length})
                </button>
              )}
            </div>

            <button
              type="button"
              className={`lc-copy-all-btn ${copiedAll ? 'copied' : ''}`}
              onClick={handleCopyAll}
              title="Copiar todos los resultados visibles"
            >
              {copiedAll ? (
                <>
                  <Check size={14} />
                  <span>¡Copiados!</span>
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

        {/* Results Header */}
        <div className="lc-results-header">
          <span>Mostrando {filteredStyles.length} estilos de letras convertidos</span>
        </div>

        {/* Results Grid */}
        <div className="lc-results-grid">
          {filteredStyles.slice(0, 100).map((style) => {
            const transformed = style.transform(textToTransform);
            const isCopied = copiedId === style.id;
            const isFav = favorites.includes(style.id);

            return (
              <div
                key={style.id}
                className={`lc-style-card ${isCopied ? 'copied' : ''}`}
              >
                <div className="lc-card-header">
                  <span className="lc-card-name">{style.name}</span>
                  <button
                    type="button"
                    className={`lc-fav-btn ${isFav ? 'active' : ''}`}
                    onClick={() => toggleFavorite(style.id)}
                    title={isFav ? 'Quitar de favoritas' : 'Guardar en favoritas'}
                    aria-label={isFav ? 'Quitar de favoritas' : 'Guardar en favoritas'}
                  >
                    <Star size={15} fill={isFav ? '#F59E0B' : 'none'} color={isFav ? '#F59E0B' : 'var(--text-dim)'} />
                  </button>
                </div>

                <div className="lc-card-preview">
                  <span className="lc-card-text">{transformed}</span>
                </div>

                <div className="lc-card-actions">
                  <button
                    type="button"
                    className={`lc-card-copy-btn ${isCopied ? 'copied' : ''}`}
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
