'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Copy, Check, X, Search, Sparkles, Star, Zap } from 'lucide-react';
import { ALL_STYLES, TextStyleDef } from '@/data/styles';
import { transformText } from '@/lib/unicode/styleEngine';
import { QUICK_NAME_PRESETS } from '@/data/nameData';

const CATEGORY_TABS = [
  'Todos',
  'Cursivas',
  'Elegantes',
  'Negritas',
  'Góticas',
  'Aesthetic',
  'Decorativas',
  'Manuscritas',
  'Especiales',
  'Símbolos'
];

interface NameGeneratorProps {
  onSelectedNameChange?: (formattedName: string) => void;
}

export default function NameGenerator({ onSelectedNameChange }: NameGeneratorProps) {
  const [inputText, setInputText] = useState('Alex');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(40);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lb_favorite_name_styles');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Save favorites to localStorage
  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id];
      try {
        localStorage.setItem('lb_favorite_name_styles', JSON.stringify(updated));
      } catch {
        // Ignore storage errors
      }
      return updated;
    });
  };

  // Filter styles based on category, search query, and favorites
  const filteredStyles = useMemo(() => {
    return ALL_STYLES.filter((style) => {
      // Favorites check
      if (showOnlyFavorites) {
        if (!favorites.includes(style.id)) return false;
      } else if (activeCategory !== 'Todos') {
        if (style.category.toLowerCase() !== activeCategory.toLowerCase()) {
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

  const handleCopy = (text: string, id: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    if (onSelectedNameChange) {
      onSelectedNameChange(text);
    }
    setTimeout(() => {
      setCopiedId(null);
    }, 1800);
  };

  const handlePresetClick = (presetText: string) => {
    setInputText(presetText);
    const sampleFormatted = transformText(presetText, ALL_STYLES[0]);
    if (onSelectedNameChange) {
      onSelectedNameChange(sampleFormatted);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputText(val);
    if (val.trim() && onSelectedNameChange) {
      const sampleFormatted = transformText(val, ALL_STYLES[0]);
      onSelectedNameChange(sampleFormatted);
    }
  };

  return (
    <section className="copy-paste-tool-section" id="generador-nombres">
      <div className="cp-panel">
        {/* Quick Fill Presets */}
        <div className="cp-quick-presets">
          <span className="cp-quick-label">
            <Zap size={13} className="cg-icon" /> Nombres de ejemplo:
          </span>
          <div className="cp-quick-chips">
            {QUICK_NAME_PRESETS.map((preset) => (
              <button
                key={preset.name}
                type="button"
                className={inputText === preset.name ? 'active' : ''}
                onClick={() => handlePresetClick(preset.name)}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Text Input Block */}
        <div className="cp-input-block">
          <div className="cp-input-header">
            <label htmlFor="name-input" className="cp-input-title">
              <Sparkles size={16} className="cg-icon" />
              <span>Ingresa tu nombre o texto de perfil</span>
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
            <input
              id="name-input"
              type="text"
              className="cp-textarea"
              style={{ height: '48px', paddingTop: '10px', paddingBottom: '10px' }}
              value={inputText}
              onChange={handleTextChange}
              placeholder="Escribe tu nombre..."
              maxLength={60}
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
                setVisibleCount(40);
              }}
              placeholder="Buscar estilo (ej. cursiva, elegante, aesthetic, gótica...)"
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
                    setVisibleCount(40);
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
                    setVisibleCount(40);
                  }}
                >
                  <Star size={12} fill="currentColor" /> Favoritos ({favorites.length})
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Count Header */}
        <div className="cp-results-header">
          <span>
            Mostrando {displayedStyles.length} de {filteredStyles.length} estilos de nombre
            {activeCategory !== 'Todos' ? ` en ${activeCategory}` : ''}
          </span>
        </div>

        {/* Results Grid */}
        {displayedStyles.length === 0 ? (
          <div className="cp-empty-state" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-dim)' }}>
            <p>No se encontraron estilos que coincidan con tu búsqueda.</p>
            <button
              type="button"
              className="cp-copy-all-btn mt-4"
              onClick={() => {
                setActiveCategory('Todos');
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
              const transformed = transformText(inputText || 'Alex', style);
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

                  <div className="cp-card-preview">
                    <span className="cp-card-text">{transformed}</span>
                  </div>

                  <div className="cp-card-actions">
                    <button
                      type="button"
                      className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                      onClick={() => handleCopy(transformed, style.id)}
                      aria-label={`Copiar nombre en estilo ${style.name}`}
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
          <div className="flex justify-center mt-8 mb-4" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <button
              type="button"
              className="cp-copy-all-btn"
              style={{ padding: '0.75rem 2rem', fontSize: '0.95rem' }}
              onClick={() => setVisibleCount((prev) => prev + 40)}
            >
              Mostrar más estilos ({filteredStyles.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
