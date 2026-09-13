'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Copy, Check, X, Search, Sparkles, Star, Plus, Trash2 } from 'lucide-react';
import { ALL_INSTAGRAM_SYMBOLS, InstagramSymbolItem } from '@/data/symbols';

const CATEGORY_TABS = [
  'Todos',
  'Corazones',
  'Estrellas',
  'Flechas',
  'Flores',
  'Decorativos',
  'Naturaleza',
  'Puntos',
  'Separadores',
  'Marcos',
  'Checks',
  'Aesthetic',
  'Minimalistas',
  'Especiales'
];

export default function MainSymbolTool() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [visibleCount, setVisibleCount] = useState(40);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);
  const [copiedSelection, setCopiedSelection] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('lb_symbol_favs');
      if (savedFavs) {
        setFavorites(JSON.parse(savedFavs));
      }
    } catch {
      // Fallback
    }
  }, []);

  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('lb_symbol_favs', JSON.stringify(updated));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  const addToSelection = (symbol: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedSymbols((prev) => [...prev, symbol]);
  };

  const clearSelection = () => {
    setSelectedSymbols([]);
  };

  const copySelection = async () => {
    if (selectedSymbols.length === 0) return;
    const textToCopy = selectedSymbols.join(' ');
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedSelection(true);
      setTimeout(() => setCopiedSelection(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedSelection(true);
      setTimeout(() => setCopiedSelection(false), 2000);
    }
  };

  const handleCopySingle = async (item: InstagramSymbolItem) => {
    try {
      await navigator.clipboard.writeText(item.symbol);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = item.symbol;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  const filteredSymbols = useMemo(() => {
    return ALL_INSTAGRAM_SYMBOLS.filter((item) => {
      // Favorites check
      if (showOnlyFavorites) {
        if (!favorites.includes(item.id)) return false;
      } else if (activeCategory !== 'Todos') {
        if (item.category.toLowerCase() !== activeCategory.toLowerCase()) {
          return false;
        }
      }

      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = item.name.toLowerCase().includes(q);
        const catMatch = item.category.toLowerCase().includes(q);
        const descMatch = item.description.toLowerCase().includes(q);
        const keyMatch = item.keywords.some((k) => k.toLowerCase().includes(q));
        const symMatch = item.symbol.includes(q);
        return nameMatch || catMatch || descMatch || keyMatch || symMatch;
      }

      return true;
    });
  }, [activeCategory, searchQuery, favorites, showOnlyFavorites]);

  const displayedSymbols = useMemo(() => {
    return filteredSymbols.slice(0, visibleCount);
  }, [filteredSymbols, visibleCount]);

  return (
    <section className="copy-paste-tool-section" id="explorar-simbolos">
      <div className="cp-panel">
        {/* Selection Builder Bar ("Mi Selección") */}
        {selectedSymbols.length > 0 && (
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15))',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} color="#818cf8" /> Mi selección ({selectedSymbols.length} símbolos):
              </span>
              <button
                type="button"
                className="cp-clear-btn"
                onClick={clearSelection}
                style={{ fontSize: '0.8rem', color: '#f43f5e', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <Trash2 size={13} />
                <span>Limpiar</span>
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  flex: 1,
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '8px',
                  padding: '0.6rem 1rem',
                  fontSize: '1.25rem',
                  color: '#ffffff',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  overflowX: 'auto'
                }}
              >
                {selectedSymbols.map((sym, idx) => (
                  <span key={idx} style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                    {sym}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className={`cp-copy-all-btn ${copiedSelection ? 'copied' : ''}`}
                onClick={copySelection}
                style={{ padding: '0.6rem 1.25rem' }}
              >
                {copiedSelection ? (
                  <>
                    <Check size={14} />
                    <span>¡Selección Copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copiar Selección</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Filter and Search Controls */}
        <div className="cp-filter-bar">
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
              placeholder="Buscar símbolo (ej. corazón, estrella, flecha, flor, aesthetic, check...)"
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

        {/* Results Header */}
        <div className="cp-results-header">
          <span>
            Mostrando {displayedSymbols.length} de {filteredSymbols.length} símbolos para Instagram
            {activeCategory !== 'Todos' ? ` en ${activeCategory}` : ''}
          </span>
        </div>

        {/* Results Grid */}
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
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: '1rem',
              marginTop: '1.25rem'
            }}
          >
            {displayedSymbols.map((item: InstagramSymbolItem) => {
              const isCopied = copiedId === item.id;
              const isFav = favorites.includes(item.id);

              return (
                <div
                  key={item.id}
                  style={{
                    background: 'var(--card-bg, #1e2029)',
                    borderRadius: '12px',
                    border: isCopied
                      ? '1px solid #10b981'
                      : '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
                    padding: '0.85rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    transition: 'transform 0.15s ease, border-color 0.15s ease',
                    position: 'relative'
                  }}
                >
                  {/* Top bar: favorite & add-to-selection buttons */}
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                      type="button"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
                      onClick={(e) => toggleFavorite(item.id, e)}
                      title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                    >
                      <Star size={14} fill={isFav ? '#F59E0B' : 'none'} color={isFav ? '#F59E0B' : 'var(--text-dim)'} />
                    </button>

                    <button
                      type="button"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: '#818cf8' }}
                      onClick={(e) => addToSelection(item.symbol, e)}
                      title="Añadir a Mi Selección"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Main Symbol Display */}
                  <div
                    style={{
                      fontSize: '2rem',
                      color: '#ffffff',
                      lineHeight: '1',
                      margin: '0.25rem 0',
                      userSelect: 'all'
                    }}
                  >
                    {item.symbol}
                  </div>

                  {/* Symbol Name & Category Badge */}
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      textAlign: 'center',
                      lineHeight: '1.2',
                      height: '2.4em',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {item.name}
                  </span>

                  {/* Single Copy Button */}
                  <button
                    type="button"
                    className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                    style={{ width: '100%', height: '32px', fontSize: '0.75rem', padding: 0 }}
                    onClick={() => handleCopySingle(item)}
                  >
                    {isCopied ? (
                      <>
                        <Check size={13} />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
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
              onClick={() => setVisibleCount((prev) => prev + 40)}
            >
              Mostrar más símbolos ({filteredSymbols.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
