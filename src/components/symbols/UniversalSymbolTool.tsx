'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Copy,
  Check,
  Search,
  Sparkles,
  Star,
  Plus,
  Trash2,
  Filter,
  CheckCircle2,
  RefreshCw,
  SlidersHorizontal,
  Bookmark
} from 'lucide-react';
import {
  UNIVERSAL_SYMBOLS,
  SYMBOL_CATEGORIES,
  UniversalSymbol,
  SymbolCategoryType
} from '@/data/universalSymbolsData';

export default function UniversalSymbolTool() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<SymbolCategoryType>('Todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);
  const [copiedTray, setCopiedTray] = useState(false);
  const [visibleCount, setVisibleCount] = useState(48);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lb_universal_symbols_favs');
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
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('lb_universal_symbols_favs', JSON.stringify(updated));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  const copySingleSymbol = async (item: UniversalSymbol) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(item.symbol);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = item.symbol;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // Fallback
    }
  };

  const addToTray = (symbol: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedSymbols((prev) => [...prev, symbol]);
  };

  const clearTray = () => {
    setSelectedSymbols([]);
  };

  const copyTray = async () => {
    if (selectedSymbols.length === 0) return;
    const textToCopy = selectedSymbols.join(' ');
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedTray(true);
      setTimeout(() => setCopiedTray(false), 2000);
    } catch {
      // Fallback
    }
  };

  // Filter list
  const filteredSymbols = useMemo(() => {
    return UNIVERSAL_SYMBOLS.filter((item) => {
      // Category filter
      if (activeCategory === 'Populares') {
        if (!item.featured) return false;
      } else if (activeCategory !== 'Todos') {
        if (item.category !== activeCategory) return false;
      }

      // Favorites filter
      if (showOnlyFavorites && !favorites.includes(item.id)) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesSymbol = item.symbol.includes(q);
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesKeywords = item.keywords.some((k) => k.toLowerCase().includes(q));
        if (!matchesSymbol && !matchesName && !matchesDesc && !matchesKeywords) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, showOnlyFavorites, favorites, searchQuery]);

  const displayedSymbols = useMemo(() => {
    return filteredSymbols.slice(0, visibleCount);
  }, [filteredSymbols, visibleCount]);

  return (
    <div
      className="cp-panel"
      style={{
        background: 'var(--panel-bg, #0F172A)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '1.75rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)',
        position: 'relative'
      }}
    >
      {/* Header of Tool */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '1.5rem',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              padding: '0.25rem 0.65rem',
              borderRadius: '999px',
              color: '#A5B4FC',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.65rem'
            }}
          >
            <Sparkles size={14} color="#818CF8" />
            <span>CATÁLOGO UNIVERSAL 100% GRATIS</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF', margin: '0 0 0.35rem 0', letterSpacing: '-0.02em' }}>
            Explorador de Símbolos para Copiar y Pegar
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, maxWidth: '640px', lineHeight: 1.5 }}>
            Toca cualquier símbolo para copiarlo al instante o agrégalo a tu bandeja para crear combinaciones estéticas y nicks completos.
          </p>
        </div>

        {/* Favorite count toggle */}
        <button
          type="button"
          onClick={() => setShowOnlyFavorites((prev) => !prev)}
          style={{
            background: showOnlyFavorites ? 'rgba(236, 72, 153, 0.25)' : 'rgba(30, 41, 59, 0.85)',
            border: showOnlyFavorites ? '1px solid #EC4899' : '1px solid rgba(255, 255, 255, 0.12)',
            color: showOnlyFavorites ? '#F472B6' : '#E2E8F0',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.55rem 1rem',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 700,
            transition: 'all 0.2s ease'
          }}
          title="Ver tus símbolos favoritos guardados"
        >
          <Star size={14} fill={showOnlyFavorites ? '#F472B6' : 'none'} color={showOnlyFavorites ? '#F472B6' : '#94A3B8'} />
          <span>Favoritos ({favorites.length})</span>
        </button>
      </div>

      {/* Symbol Combiner Tray / Bandeja de Símbolos */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(99, 102, 241, 0.35)',
          borderRadius: '14px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
          boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bookmark size={15} color="#818CF8" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F1F5F9', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Bandeja de Combinación ({selectedSymbols.length} símbolos)
            </span>
          </div>
          {selectedSymbols.length > 0 && (
            <button
              type="button"
              onClick={clearTray}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#EF4444',
                fontSize: '0.8rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer'
              }}
            >
              <Trash2 size={13} />
              <span>Vaciar</span>
            </button>
          )}
        </div>

        {/* Selected preview bar */}
        <div
          style={{
            minHeight: '52px',
            background: 'rgba(30, 41, 59, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            padding: '0.65rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}
        >
          <div
            style={{
              fontSize: '1.25rem',
              color: selectedSymbols.length > 0 ? '#FFFFFF' : 'var(--text-muted)',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.15em',
              wordBreak: 'break-all'
            }}
          >
            {selectedSymbols.length > 0 ? (
              selectedSymbols.join(' ')
            ) : (
              <span style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#64748B' }}>
                Toca el botón "+ Añadir" en cualquier símbolo para armar tu combinación personalizada aquí...
              </span>
            )}
          </div>

          {selectedSymbols.length > 0 && (
            <button
              type="button"
              onClick={copyTray}
              style={{
                background: copiedTray ? '#10B981' : 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                color: '#FFF',
                border: 'none',
                borderRadius: '8px',
                padding: '0.55rem 1.15rem',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
            >
              {copiedTray ? <Check size={15} /> : <Copy size={15} />}
              <span>{copiedTray ? '¡Copiado!' : 'Copiar Combinación'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Search Input Filter */}
      <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
        <Search
          size={18}
          color="#94A3B8"
          style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setVisibleCount(48);
          }}
          placeholder="Buscar símbolos por nombre (ej. corona, flecha, corazon, estrella, check, flor)..."
          aria-label="Buscar símbolos"
          style={{
            width: '100%',
            padding: '0.85rem 1rem 0.85rem 2.75rem',
            background: 'rgba(30, 41, 59, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '12px',
            color: '#FFFFFF',
            fontSize: '0.95rem',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              color: '#94A3B8',
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            ✕ Limpiar
          </button>
        )}
      </div>

      {/* Category Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '0.75rem',
          marginBottom: '1.5rem',
          scrollbarWidth: 'thin'
        }}
      >
        {SYMBOL_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setShowOnlyFavorites(false);
                setVisibleCount(48);
              }}
              style={{
                padding: '0.5rem 0.95rem',
                borderRadius: '10px',
                fontSize: '0.85rem',
                fontWeight: isActive ? 700 : 500,
                background: isActive
                  ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(236, 72, 153, 0.25) 100%)'
                  : 'rgba(30, 41, 59, 0.5)',
                border: isActive
                  ? '1px solid rgba(129, 140, 248, 0.6)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                color: isActive ? '#FFFFFF' : '#CBD5E1',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Symbol Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
          gap: '0.85rem',
          marginBottom: '1.75rem'
        }}
      >
        {displayedSymbols.map((item) => {
          const isCopied = copiedId === item.id;
          const isFav = favorites.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => copySingleSymbol(item)}
              style={{
                background: 'rgba(15, 23, 42, 0.75)',
                border: isCopied ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '0.85rem 0.65rem',
                textAlign: 'center',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.15s ease, border-color 0.15s ease, background 0.15s ease'
              }}
              title={`Clic para copiar ${item.name} (${item.symbol})`}
            >
              {/* Star favorite icon */}
              <button
                type="button"
                onClick={(e) => toggleFavorite(item.id, e)}
                style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  color: isFav ? '#F59E0B' : '#475569'
                }}
                title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
              >
                <Star size={13} fill={isFav ? '#F59E0B' : 'none'} />
              </button>

              {/* Big Symbol Display */}
              <div
                style={{
                  fontSize: item.symbol.length > 3 ? '1.35rem' : '2.1rem',
                  lineHeight: 1.2,
                  color: '#FFFFFF',
                  marginTop: '0.5rem',
                  marginBottom: '0.5rem',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  userSelect: 'none'
                }}
              >
                {item.symbol}
              </div>

              {/* Name label */}
              <div
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginBottom: '0.65rem',
                  padding: '0 0.25rem'
                }}
              >
                {item.name}
              </div>

              {/* Action Buttons: Copiar & Añadir */}
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    copySingleSymbol(item);
                  }}
                  style={{
                    flex: 1,
                    background: isCopied ? '#10B981' : 'rgba(99, 102, 241, 0.15)',
                    border: isCopied ? '1px solid #10B981' : '1px solid rgba(99, 102, 241, 0.35)',
                    color: isCopied ? '#FFF' : '#A5B4FC',
                    borderRadius: '8px',
                    padding: '0.35rem 0.25rem',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.2rem'
                  }}
                >
                  {isCopied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{isCopied ? '¡Listo!' : 'Copiar'}</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => addToTray(item.symbol, e)}
                  style={{
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#CBD5E1',
                    borderRadius: '8px',
                    padding: '0.35rem 0.45rem',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  title="Añadir a la bandeja"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredSymbols.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
          <Sparkles size={32} color="#6366F1" style={{ margin: '0 auto 1rem auto' }} />
          <h3 style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: '0.5rem' }}>No se encontraron símbolos</h3>
          <p style={{ fontSize: '0.9rem', maxWidth: '420px', margin: '0 auto 1.25rem auto' }}>
            Prueba buscando con otra palabra clave como "corona", "corazón", "estrella" o selecciona la categoría "Todos".
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('Todos');
              setShowOnlyFavorites(false);
            }}
            style={{
              background: 'rgba(99, 102, 241, 0.2)',
              border: '1px solid #818CF8',
              color: '#A5B4FC',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Restablecer Filtros
          </button>
        </div>
      )}

      {/* Load More Button */}
      {filteredSymbols.length > visibleCount && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 48)}
            style={{
              background: 'rgba(30, 41, 59, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#F1F5F9',
              borderRadius: '12px',
              padding: '0.65rem 1.75rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem'
            }}
          >
            <RefreshCw size={14} color="#818CF8" />
            <span>Cargar más símbolos ({filteredSymbols.length - visibleCount} restantes)</span>
          </button>
        </div>
      )}
    </div>
  );
}
