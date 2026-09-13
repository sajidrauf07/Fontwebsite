'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Copy, Check, X, Search, Sparkles, Star, Zap } from 'lucide-react';
import { ALL_STYLES, TextStyleDef } from '@/data/styles';
import { transformText } from '@/lib/unicode/styleEngine';
import { CURSIVE_QUICK_PRESETS } from '@/data/cursiveInstagramData';

const CATEGORY_TABS = [
  'Cursivas',
  'Elegantes',
  'Itálicas',
  'Manuscritas',
  'Aesthetic',
  'Negritas',
  'Góticas',
  'Decorativas',
  'Especiales',
  'Todos'
];

export default function CursiveInstagramGenerator() {
  const [inputText, setInputText] = useState('Hola Mundo');
  const [activeCategory, setActiveCategory] = useState('Cursivas');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(30);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lb_favorite_cursive_styles');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // Fallback
    }
  }, []);

  // Save favorites to localStorage
  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id];
      try {
        localStorage.setItem('lb_favorite_cursive_styles', JSON.stringify(updated));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  // Filter styles prioritizing cursive categories
  const filteredStyles = useMemo(() => {
    return ALL_STYLES.filter((style) => {
      // Favorites check
      if (showOnlyFavorites) {
        if (!favorites.includes(style.id)) return false;
      } else if (activeCategory !== 'Todos') {
        const styleCat = style.category.toLowerCase();
        const activeCat = activeCategory.toLowerCase();
        if (activeCat === 'cursivas') {
          // Priority matching for script, cursive, and italic styles
          const isCursiveLike =
            styleCat.includes('cursiva') ||
            styleCat.includes('script') ||
            styleCat.includes('manuscrita') ||
            styleCat.includes('itálica') ||
            styleCat.includes('italic') ||
            style.id.toLowerCase().includes('script') ||
            style.id.toLowerCase().includes('italic') ||
            style.name.toLowerCase().includes('cursiva') ||
            style.name.toLowerCase().includes('script') ||
            style.name.toLowerCase().includes('manuscrita');
          if (!isCursiveLike) return false;
        } else if (styleCat !== activeCat) {
          return false;
        }
      }

      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = style.name.toLowerCase().includes(q);
        const catMatch = style.category.toLowerCase().includes(q);
        const descMatch = style.description ? style.description.toLowerCase().includes(q) : false;
        return nameMatch || catMatch || descMatch;
      }

      return true;
    });
  }, [activeCategory, searchQuery, favorites, showOnlyFavorites]);

  const displayedStyles = useMemo(() => {
    return filteredStyles.slice(0, visibleCount);
  }, [filteredStyles, visibleCount]);

  const handleCopy = async (transformedText: string, id: string) => {
    if (!transformedText) return;
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
    <section className="copy-paste-tool-section" id="generador-cursivas-instagram">
      <div className="cp-panel">
        {/* Quick Fill Presets */}
        <div className="cp-quick-presets">
          <span className="cp-quick-label">
            <Zap size={13} className="cg-icon" /> Textos de ejemplo:
          </span>
          <div className="cp-quick-chips">
            {CURSIVE_QUICK_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                className={inputText === preset.text ? 'active' : ''}
                onClick={() => setInputText(preset.text)}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Text Area Block */}
        <div className="cp-input-block">
          <div className="cp-input-header">
            <label htmlFor="cursive-input" className="cp-input-title">
              <Sparkles size={16} className="cg-icon" />
              <span>Escribe tu texto en letras cursivas (admite múltiples líneas)</span>
            </label>
            <div className="cp-input-actions">
              {inputText && (
                <button
                  type="button"
                  className="cp-clear-btn"
                  onClick={() => setInputText('')}
                  title="Borrar texto"
                >
                  <X size={14} />
                  <span>Borrar</span>
                </button>
              )}
              <span className="cp-char-counter">Caracteres: {inputText.length}</span>
            </div>
          </div>

          <div className="cp-textarea-wrapper">
            <textarea
              id="cursive-input"
              className="cp-textarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu texto aquí (admite acentos, Ñ y emojis)..."
              rows={3}
              maxLength={300}
            />
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="cp-filter-bar mt-6">
          <div className="cp-search-wrapper">
            <Search size={15} className="cp-search-icon" />
            <input
              type="text"
              className="cp-search-input"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(30);
              }}
              placeholder="Buscar estilo cursivo (ej. manuscrita, script, elegante, itálica...)"
            />
            {searchQuery && (
              <button
                type="button"
                className="cp-search-clear"
                onClick={() => setSearchQuery('')}
              >
                <X size={13} />
              </button>
            )}
          </div>

          <div className="cp-tags-wrapper">
            <div className="cp-categories-scroll">
              {CATEGORY_TABS.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`cp-tag-chip ${activeCategory === cat && !showOnlyFavorites ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowOnlyFavorites(false);
                    setVisibleCount(30);
                  }}
                >
                  {cat}
                </button>
              ))}

              {favorites.length > 0 && (
                <button
                  type="button"
                  className={`cp-tag-chip fav-chip ${showOnlyFavorites ? 'active' : ''}`}
                  onClick={() => {
                    setShowOnlyFavorites(!showOnlyFavorites);
                    setVisibleCount(30);
                  }}
                >
                  <Star size={12} fill="currentColor" /> Favoritos ({favorites.length})
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="cp-results-header">
          <span>
            Mostrando {displayedStyles.length} de {filteredStyles.length} estilos cursivos y caligráficos
            {activeCategory !== 'Todos' ? ` en ${activeCategory}` : ''}
          </span>
        </div>

        {/* Results Grid */}
        {displayedStyles.length === 0 ? (
          <div className="cp-empty-state" style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--text-dim)' }}>
            <p>No se encontraron estilos cursivos que coincidan con tu búsqueda.</p>
            <button
              type="button"
              className="cp-copy-all-btn mt-4"
              onClick={() => {
                setActiveCategory('Cursivas');
                setSearchQuery('');
                setShowOnlyFavorites(false);
              }}
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="cp-results-grid">
            {displayedStyles.map((style: TextStyleDef) => {
              const transformed = transformText(inputText || 'Hola Mundo', style);
              const isCopied = copiedId === style.id;
              const isFav = favorites.includes(style.id);

              return (
                <div
                  key={style.id}
                  className={`cp-style-card ${isCopied ? 'copied' : ''}`}
                >
                  <div className="cp-card-header">
                    <span className="cp-card-name">{style.name}</span>
                    <button
                      type="button"
                      className={`cp-fav-btn ${isFav ? 'active' : ''}`}
                      onClick={(e) => toggleFavorite(style.id, e)}
                      title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                      aria-label="Favorito"
                    >
                      <Star size={15} fill={isFav ? '#F59E0B' : 'none'} color={isFav ? '#F59E0B' : 'var(--text-dim)'} />
                    </button>
                  </div>

                  <div className="cp-card-preview" style={{ whiteSpace: 'pre-line' }}>
                    <span className="cp-card-text">{transformed}</span>
                  </div>

                  <div className="cp-card-actions">
                    <button
                      type="button"
                      className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                      onClick={() => handleCopy(transformed, style.id)}
                      aria-label={`Copiar texto en estilo ${style.name}`}
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
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredStyles.length && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <button
              type="button"
              className="cp-copy-all-btn"
              style={{ padding: '0.75rem 2rem', fontSize: '0.95rem' }}
              onClick={() => setVisibleCount((prev) => prev + 30)}
            >
              Mostrar más estilos ({filteredStyles.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
