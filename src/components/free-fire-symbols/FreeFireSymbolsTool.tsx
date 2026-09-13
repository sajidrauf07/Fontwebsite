'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Copy, Check, X, Search, Sparkles, Star, Zap } from 'lucide-react';
import { FREE_FIRE_SYMBOLS_LIBRARY, SymbolItem } from '@/data/freeFireSimbolosData';

const CATEGORY_TABS = [
  'Todos',
  'Gaming',
  'Marcos',
  'Estrellas',
  'Decorativos',
  'Aesthetic',
  'Corazones',
  'Flechas',
  'Líneas',
  'Círculos',
  'Cuadrados',
  'Góticos',
  'Minimalistas',
  'Especiales'
];

export default function FreeFireSymbolsTool() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(48);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lb_favorite_ff_symbols');
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
        localStorage.setItem('lb_favorite_ff_symbols', JSON.stringify(updated));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  const filteredSymbols = useMemo(() => {
    return FREE_FIRE_SYMBOLS_LIBRARY.filter((item) => {
      if (showOnlyFavorites) {
        if (!favorites.includes(item.id)) return false;
      } else if (activeCategory !== 'Todos') {
        if (item.category.toLowerCase() !== activeCategory.toLowerCase()) {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const symMatch = item.symbol.includes(q);
        const nameMatch = item.name.toLowerCase().includes(q);
        const catMatch = item.category.toLowerCase().includes(q);
        const keyMatch = item.keywords.some((k) => k.toLowerCase().includes(q));
        return symMatch || nameMatch || catMatch || keyMatch;
      }

      return true;
    });
  }, [activeCategory, searchQuery, favorites, showOnlyFavorites]);

  const displayedSymbols = useMemo(() => {
    return filteredSymbols.slice(0, visibleCount);
  }, [filteredSymbols, visibleCount]);

  const handleCopy = async (symbol: string, id: string) => {
    if (!symbol) return;
    try {
      await navigator.clipboard.writeText(symbol);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = symbol;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  return (
    <section className="copy-paste-tool-section" id="explorar-simbolos">
      <div className="cp-panel">
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
                setVisibleCount(48);
              }}
              placeholder="Buscar símbolo (ej. corona, estrella, marco, kanji, rayo, flor...)"
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
                    setVisibleCount(48);
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
                    setVisibleCount(48);
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
            Mostrando {displayedSymbols.length} de {filteredSymbols.length} símbolos para Free Fire
            {activeCategory !== 'Todos' ? ` en ${activeCategory}` : ''}
          </span>
        </div>

        {/* Symbol Grid */}
        {displayedSymbols.length === 0 ? (
          <div className="cp-empty-state" style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--text-dim)' }}>
            <p>No se encontraron símbolos que coincidan con tu búsqueda.</p>
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
              gap: '0.85rem'
            }}
          >
            {displayedSymbols.map((item: SymbolItem) => {
              const isCopied = copiedId === item.id;
              const isFav = favorites.includes(item.id);

              return (
                <div
                  key={item.id}
                  style={{
                    background: 'var(--card-bg, #1e2029)',
                    border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
                    borderRadius: '12px',
                    padding: '0.85rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    position: 'relative',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <button
                    type="button"
                    className={`cp-fav-btn ${isFav ? 'active' : ''}`}
                    style={{ position: 'absolute', top: '6px', right: '6px' }}
                    onClick={(e) => toggleFavorite(item.id, e)}
                    title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                    aria-label={`Favorito ${item.name}`}
                  >
                    <Star size={13} fill={isFav ? '#F59E0B' : 'none'} color={isFav ? '#F59E0B' : 'var(--text-dim)'} />
                  </button>

                  <div style={{ fontSize: '1.6rem', padding: '0.3rem 0', color: '#FFFFFF' }}>
                    {item.symbol}
                  </div>

                  <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
                    {item.name}
                  </span>

                  <button
                    type="button"
                    className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.75rem', padding: '0.35rem 0.5rem' }}
                    onClick={() => handleCopy(item.symbol, item.id)}
                    aria-label={`Copiar símbolo de ${item.name}`}
                  >
                    {isCopied ? (
                      <>
                        <Check size={12} />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredSymbols.length && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <button
              type="button"
              className="cp-copy-all-btn"
              style={{ padding: '0.75rem 2rem', fontSize: '0.95rem' }}
              onClick={() => setVisibleCount((prev) => prev + 48)}
            >
              Mostrar más símbolos ({filteredSymbols.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
