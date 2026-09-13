'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Copy, Check, X, Search, Sparkles, Star, Zap, Flame, Shield, Dices } from 'lucide-react';
import { ALL_STYLES, TextStyleDef } from '@/data/styles';
import { transformText } from '@/lib/unicode/styleEngine';
import { FREE_FIRE_PRESETS } from '@/data/freeFireData';

const GENERATION_MODES = [
  { id: 'stylish', label: 'Estilos Unicode' },
  { id: 'symbols', label: 'Con Símbolos' },
  { id: 'gaming', label: 'Pro Gaming' },
  { id: 'aesthetic', label: 'Aesthetic' },
  { id: 'minimal', label: 'Minimalista' },
  { id: 'premium', label: 'VIP Royal' }
];

const CATEGORY_TABS = [
  'Todos',
  '🔥 Pro',
  '⚔️ Warrior',
  '💀 Dark',
  '⚡ Electric',
  '😈 Savage',
  '✨ Aesthetic',
  '💎 VIP',
  '🎮 Gaming',
  'Góticas',
  'Cursivas'
];

const SYMBOL_WRAPPERS = [
  { id: 'w-1', prefix: '亗 ', suffix: ' 亗', name: 'Corona Pro 亗' },
  { id: 'w-2', prefix: '『 ', suffix: ' 』', name: 'Corchete Gótico' },
  { id: 'w-3', prefix: '么 ', suffix: ' 么', name: 'Simbolo Kanji 么' },
  { id: 'w-4', prefix: '★彡 ', suffix: ' 彡★', name: 'Estrellas Dobles' },
  { id: 'w-5', prefix: '꧁༺ ', suffix: ' ༻꧂', name: 'Alas de Batalla' },
  { id: 'w-6', prefix: '⚡ ', suffix: ' ⚡', name: 'Energía Rayo' },
  { id: 'w-7', prefix: '👑 ', suffix: ' 👑', name: 'Rey Crown' },
  { id: 'w-8', prefix: '✦ ', suffix: ' ✦', name: 'Diamantes Sparkle' },
  { id: 'w-9', prefix: '⚔️ ', suffix: ' ⚔️', name: 'Espadas Cruzadas' },
  { id: 'w-10', prefix: '🌸 ', suffix: ' 🌸', name: 'Flor Sakura' },
  { id: 'w-11', prefix: '┊✨ ', suffix: ' ✨┊', name: 'Marco Chispas' },
  { id: 'w-12', prefix: '·.★ ', suffix: ' ★.·', name: 'Barra Minimal' }
];

export default function FreeFireNameGenerator() {
  const [inputText, setInputText] = useState('Shadow');
  const [activeMode, setActiveMode] = useState<'stylish' | 'symbols' | 'gaming' | 'aesthetic' | 'minimal' | 'premium'>('stylish');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(40);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lb_favorite_ff_names');
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
        localStorage.setItem('lb_favorite_ff_names', JSON.stringify(updated));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  // Filter styles from central 350+ engine
  const filteredStyles = useMemo(() => {
    return ALL_STYLES.filter((style) => {
      if (showOnlyFavorites) {
        if (!favorites.includes(style.id)) return false;
      } else if (activeCategory !== 'Todos') {
        const catClean = activeCategory.replace(/[^a-zA-Z]/g, '').toLowerCase();
        const styleCat = style.category.toLowerCase();
        if (catClean && !styleCat.includes(catClean)) {
          // Priority fallback matching
          const matchName = style.name.toLowerCase().includes(catClean);
          if (!matchName) return false;
        }
      }

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

  const nameBase = inputText.trim() || 'Shadow';

  return (
    <section className="copy-paste-tool-section" id="generador-free-fire">
      <div className="cp-panel">
        {/* Quick Fill Presets */}
        <div className="cp-quick-presets">
          <span className="cp-quick-label">
            <Zap size={13} className="cg-icon" /> Nombres de ejemplo:
          </span>
          <div className="cp-quick-chips">
            {FREE_FIRE_PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                className={inputText === preset ? 'active' : ''}
                onClick={() => setInputText(preset)}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Input Block */}
        <div className="cp-input-block">
          <div className="cp-input-header">
            <label htmlFor="ff-name-input" className="cp-input-title">
              <Flame size={16} className="cg-icon" color="#F59E0B" />
              <span>Escribe tu nombre o apodo para Free Fire</span>
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
              id="ff-name-input"
              type="text"
              className="cp-textarea"
              style={{ height: '48px', paddingTop: '10px', paddingBottom: '10px' }}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu nombre (ej. Shadow, Sniper, Alex)..."
              maxLength={40}
            />
          </div>
        </div>

        {/* Generation Mode Buttons */}
        <div style={{ marginTop: '1.25rem' }}>
          <span style={{ fontSize: '0.825rem', color: '#94a3b8', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
            Modo de generación de apodo:
          </span>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {GENERATION_MODES.map((mode) => (
              <button
                key={mode.id}
                type="button"
                className={`cp-tag-chip ${activeMode === mode.id ? 'active' : ''}`}
                onClick={() => setActiveMode(mode.id as any)}
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}
              >
                {mode.label}
              </button>
            ))}
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
              placeholder="Buscar estilo (ej. pro, dark, warrior, aesthetic, gótica, cursiva...)"
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

        {/* Mode 2: Symbols Wrapper Grid preview if activeMode === 'symbols' */}
        {activeMode === 'symbols' ? (
          <div style={{ marginTop: '1.5rem' }}>
            <div className="cp-results-header">
              <span>Combinaciones de Símbolos Pro para "{nameBase}"</span>
            </div>
            <div className="cp-results-grid">
              {SYMBOL_WRAPPERS.map((wrap) => {
                const decorated = `${wrap.prefix}${nameBase}${wrap.suffix}`;
                const isCopied = copiedId === wrap.id;
                return (
                  <div key={wrap.id} className={`cp-style-card ${isCopied ? 'copied' : ''}`}>
                    <div className="cp-card-header">
                      <span className="cp-card-name">{wrap.name}</span>
                    </div>
                    <div className="cp-card-preview">
                      <span className="cp-card-text">{decorated}</span>
                    </div>
                    <div className="cp-card-actions">
                      <button
                        type="button"
                        className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                        onClick={() => handleCopy(decorated, wrap.id)}
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
          </div>
        ) : (
          /* Central 350+ Style Engine Results */
          <div>
            <div className="cp-results-header">
              <span>
                Mostrando {displayedStyles.length} de {filteredStyles.length} estilos de apodo para Free Fire
                {activeCategory !== 'Todos' ? ` en ${activeCategory}` : ''}
              </span>
            </div>

            {displayedStyles.length === 0 ? (
              <div className="cp-empty-state" style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--text-dim)' }}>
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
                  let transformed = transformText(nameBase, style);
                  if (activeMode === 'gaming') {
                    transformed = `亗 ${transformed} 亗`;
                  } else if (activeMode === 'aesthetic') {
                    transformed = `🌸 ${transformed} 🌸`;
                  } else if (activeMode === 'premium') {
                    transformed = `👑 ${transformed} 👑`;
                  }

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
                          aria-label={`Copiar apodo en estilo ${style.name}`}
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
                  onClick={() => setVisibleCount((prev) => prev + 40)}
                >
                  Mostrar más estilos ({filteredStyles.length - visibleCount} restantes)
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
