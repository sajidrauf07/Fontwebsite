'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Copy, Check, X, Search, Sparkles, Star, Flame, Shield, Zap, Smile } from 'lucide-react';
import { ALL_STYLES, TextStyleDef } from '@/data/styles';
import { transformText } from '@/lib/unicode/styleEngine';
import { CURATED_APODOS_IDEAS_LIBRARY, CuratedApodoItem } from '@/data/freeFireApodosData';

const CATEGORY_TABS = [
  'Todos',
  'Bonitos',
  'Aesthetic',
  'Originales',
  'Pro',
  'Gaming',
  'Elegantes',
  'Cursivos',
  'Góticos',
  'Símbolos',
  'Minimalistas'
];

export default function NicknameGenerator() {
  const [activeTabMode, setActiveTabMode] = useState<'ideas' | 'custom'>('ideas');
  const [customText, setCustomText] = useState('Shadow');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(40);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lb_favorite_ff_apodos');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // Fallback
    }
  }, []);

  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id];
      try {
        localStorage.setItem('lb_favorite_ff_apodos', JSON.stringify(updated));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  // Filter curated library if activeTabMode === 'ideas'
  const filteredIdeas = useMemo(() => {
    return CURATED_APODOS_IDEAS_LIBRARY.filter((item) => {
      if (showOnlyFavorites) {
        if (!favorites.includes(item.id)) return false;
      } else if (activeCategory !== 'Todos') {
        if (item.category.toLowerCase() !== activeCategory.toLowerCase()) {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = item.name.toLowerCase().includes(q);
        const catMatch = item.category.toLowerCase().includes(q);
        const keyMatch = item.keywords.some((k) => k.toLowerCase().includes(q));
        return nameMatch || catMatch || keyMatch;
      }

      return true;
    });
  }, [activeCategory, searchQuery, favorites, showOnlyFavorites]);

  // Filter central 350+ style engine if activeTabMode === 'custom'
  const filteredStyles = useMemo(() => {
    return ALL_STYLES.filter((style) => {
      if (showOnlyFavorites) {
        if (!favorites.includes(style.id)) return false;
      } else if (activeCategory !== 'Todos') {
        const catClean = activeCategory.toLowerCase();
        const styleCat = style.category.toLowerCase();
        if (!styleCat.includes(catClean) && !style.name.toLowerCase().includes(catClean)) {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = style.name.toLowerCase().includes(q);
        const catMatch = style.category.toLowerCase().includes(q);
        return nameMatch || catMatch;
      }

      return true;
    });
  }, [activeCategory, searchQuery, favorites, showOnlyFavorites]);

  const displayedIdeas = useMemo(() => {
    return filteredIdeas.slice(0, visibleCount);
  }, [filteredIdeas, visibleCount]);

  const displayedStyles = useMemo(() => {
    return filteredStyles.slice(0, visibleCount);
  }, [filteredStyles, visibleCount]);

  const handleCopy = async (text: string, id: string) => {
    if (!text) return;
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

  return (
    <section className="copy-paste-tool-section" id="generador-apodos-ff">
      <div className="cp-panel">
        {/* Mode Switcher Tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className={`cp-copy-all-btn ${activeTabMode === 'ideas' ? 'copied' : ''}`}
            onClick={() => setActiveTabMode('ideas')}
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}
          >
            <Flame size={15} />
            <span>Explorar Catalog de Apodos ({CURATED_APODOS_IDEAS_LIBRARY.length})</span>
          </button>

          <button
            type="button"
            className={`cp-copy-all-btn ${activeTabMode === 'custom' ? 'copied' : ''}`}
            onClick={() => setActiveTabMode('custom')}
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}
          >
            <Sparkles size={15} />
            <span>Transformar Mi Apodo Personalizado</span>
          </button>
        </div>

        {/* Input Block if Custom Mode */}
        {activeTabMode === 'custom' && (
          <div className="cp-input-block mb-6">
            <div className="cp-input-header">
              <label htmlFor="custom-apodo-input" className="cp-input-title">
                <Sparkles size={16} className="cg-icon" />
                <span>Ingresa cualquier nombre o apodo para transformar:</span>
              </label>
              {customText && (
                <button
                  type="button"
                  className="cp-clear-btn"
                  onClick={() => setCustomText('')}
                  title="Borrar texto"
                >
                  <X size={14} />
                  <span>Borrar</span>
                </button>
              )}
            </div>

            <div className="cp-textarea-wrapper">
              <input
                id="custom-apodo-input"
                type="text"
                className="cp-textarea"
                style={{ height: '48px', paddingTop: '10px', paddingBottom: '10px' }}
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Escribe tu nombre o apodo (ej. Shadow, Alex, Nova)..."
                maxLength={40}
              />
            </div>
          </div>
        )}

        {/* Filter and High Contrast Search Controls */}
        <div className="cp-filter-bar">
          <div className="cp-search-wrapper">
            <Search size={18} className="cp-search-icon" />
            <input
              type="text"
              className="cp-search-input"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(40);
              }}
              placeholder="Buscar apodo o estilo (ej. shadow, aesthetic, bonito, pro, gotico...)"
            />
            {searchQuery && (
              <button
                type="button"
                className="cp-search-clear"
                onClick={() => setSearchQuery('')}
                title="Limpiar búsqueda"
              >
                <X size={14} />
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

        {/* Results Header */}
        <div className="cp-results-header">
          <span>
            {activeTabMode === 'ideas'
              ? `Mostrando ${displayedIdeas.length} de ${filteredIdeas.length} apodos`
              : `Mostrando ${displayedStyles.length} de ${filteredStyles.length} estilos para "${customText || 'Shadow'}"`}
            {activeCategory !== 'Todos' ? ` en ${activeCategory}` : ''}
          </span>
        </div>

        {/* Results Grid - Mode 1: Curated Apodos Ideas */}
        {activeTabMode === 'ideas' ? (
          displayedIdeas.length === 0 ? (
            <div className="cp-empty-state" style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--text-dim)' }}>
              <p>No se encontraron apodos que coincidan con tu búsqueda.</p>
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
              {displayedIdeas.map((item: CuratedApodoItem) => {
                const isCopied = copiedId === item.id;
                const isFav = favorites.includes(item.id);

                return (
                  <div key={item.id} className={`cp-style-card ${isCopied ? 'copied' : ''}`}>
                    <div className="cp-card-header">
                      <span className="cp-card-name" style={{ color: '#0EA5E9' }}>{item.category}</span>
                      <button
                        type="button"
                        className={`cp-fav-btn ${isFav ? 'active' : ''}`}
                        onClick={(e) => toggleFavorite(item.id, e)}
                        title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                        aria-label="Favorito"
                      >
                        <Star size={15} fill={isFav ? '#F59E0B' : 'none'} color={isFav ? '#F59E0B' : 'var(--text-dim)'} />
                      </button>
                    </div>

                    <div className="cp-card-preview">
                      <span className="cp-card-text">{item.name}</span>
                    </div>

                    <div className="cp-card-actions">
                      <button
                        type="button"
                        className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                        onClick={() => handleCopy(item.name, item.id)}
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
          )
        ) : (
          /* Results Grid - Mode 2: Custom Nickname Transformations */
          displayedStyles.length === 0 ? (
            <div className="cp-empty-state" style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--text-dim)' }}>
              <p>No se encontraron estilos de apodo que coincidan con tu búsqueda.</p>
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
                const transformed = transformText(customText || 'Shadow', style);
                const isCopied = copiedId === style.id;
                const isFav = favorites.includes(style.id);

                return (
                  <div key={style.id} className={`cp-style-card ${isCopied ? 'copied' : ''}`}>
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
          )
        )}

        {/* Load More Button */}
        {((activeTabMode === 'ideas' && visibleCount < filteredIdeas.length) ||
          (activeTabMode === 'custom' && visibleCount < filteredStyles.length)) && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <button
              type="button"
              className="cp-copy-all-btn"
              style={{ padding: '0.75rem 2rem', fontSize: '0.95rem' }}
              onClick={() => setVisibleCount((prev) => prev + 40)}
            >
              Mostrar más apodos ({activeTabMode === 'ideas' ? filteredIdeas.length - visibleCount : filteredStyles.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
