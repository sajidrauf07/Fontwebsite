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
  Bookmark,
  Shuffle,
  Zap,
  Crown
} from 'lucide-react';
import {
  ESPECIALES_SYMBOLS,
  ESPECIAL_CATEGORIES,
  EspecialSymbol,
  EspecialCategoryType
} from '@/data/especialesSymbolsData';

export default function EspecialesSymbolExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<EspecialCategoryType>('Todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);
  const [copiedTray, setCopiedTray] = useState(false);
  const [randomMessage, setRandomMessage] = useState<string | null>(null);
  const [visibleLimit, setVisibleLimit] = useState(48);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lb_especiales_symbols_favs');
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
        localStorage.setItem('lb_especiales_symbols_favs', JSON.stringify(updated));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  const copySingleSymbol = async (item: EspecialSymbol) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(item.symbol);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = item.symbol;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedId(item.id);
      setTimeout(() => {
        setCopiedId(null);
      }, 1500);
    } catch {
      // Fallback
    }
  };

  const addToTray = (symbol: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedSymbols((prev) => [...prev, symbol]);
  };

  const removeLastFromTray = () => {
    setSelectedSymbols((prev) => prev.slice(0, -1));
  };

  const clearTray = () => {
    setSelectedSymbols([]);
  };

  const copyTrayContent = async () => {
    if (selectedSymbols.length === 0) return;
    const fullText = selectedSymbols.join(' ');
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fullText);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = fullText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
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

  const pickRandomSymbol = () => {
    const pool = ESPECIALES_SYMBOLS;
    if (!pool.length) return;
    const random = pool[Math.floor(Math.random() * pool.length)];
    copySingleSymbol(random);
    setRandomMessage(`¡Símbolo aleatorio copiado: ${random.symbol}!`);
    setTimeout(() => setRandomMessage(null), 3000);
  };

  // Filter symbols based on category, search, and favorites
  const filteredSymbols = useMemo(() => {
    return ESPECIALES_SYMBOLS.filter((item) => {
      if (showOnlyFavorites) {
        if (!favorites.includes(item.id)) return false;
      }

      if (activeCategory !== 'Todos') {
        if (item.category !== activeCategory) return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesSymbol = item.symbol.includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesKeywords = item.keywords.some((k) => k.toLowerCase().includes(query));

        return matchesName || matchesCategory || matchesSymbol || matchesDesc || matchesKeywords;
      }

      return true;
    });
  }, [searchQuery, activeCategory, showOnlyFavorites, favorites]);

  const displayedSymbols = useMemo(() => {
    return filteredSymbols.slice(0, visibleLimit);
  }, [filteredSymbols, visibleLimit]);

  return (
    <div
      className="symbol-explorer-wrapper"
      style={{
        background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.85) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '1.5rem',
        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
        maxWidth: '100%',
        overflow: 'hidden'
      }}
    >
      {/* Header with Search and Quick Actions */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={22} color="#F59E0B" />
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#F8FAFC',
                margin: 0,
                letterSpacing: '-0.02em'
              }}
            >
              Explorador de Símbolos Especiales
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {/* Random Button */}
            <button
              type="button"
              onClick={pickRandomSymbol}
              style={{
                background: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                color: '#F59E0B',
                borderRadius: '8px',
                padding: '0.45rem 0.85rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                touchAction: 'manipulation'
              }}
              title="Copiar un símbolo aleatorio sorpresa"
            >
              <Shuffle size={14} />
              <span>Símbolo al azar</span>
            </button>

            {/* Favorites Toggle */}
            <button
              type="button"
              onClick={() => setShowOnlyFavorites((prev) => !prev)}
              style={{
                background: showOnlyFavorites ? '#F59E0B' : 'rgba(255, 255, 255, 0.05)',
                color: showOnlyFavorites ? '#0F172A' : '#E2E8F0',
                border: showOnlyFavorites
                  ? '1px solid #F59E0B'
                  : '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '0.45rem 0.85rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                touchAction: 'manipulation'
              }}
              aria-pressed={showOnlyFavorites}
            >
              <Bookmark size={14} />
              <span>Favoritos ({favorites.length})</span>
            </button>
          </div>
        </div>

        {/* Live Search Input */}
        <div style={{ position: 'relative', width: '100%' }}>
          <Search
            size={18}
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)'
            }}
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleLimit(48);
            }}
            placeholder="Buscar por nombre, tipo o emoción (ej. corona, rayo, cruz, flor, infinito)..."
            aria-label="Buscar símbolos especiales"
            style={{
              width: '100%',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '12px',
              padding: '0.75rem 1rem 0.75rem 2.75rem',
              color: '#F8FAFC',
              fontSize: '0.92rem',
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
                right: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              Limpiar
            </button>
          )}
        </div>

        {/* Category Pills Slider */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.4rem',
            scrollbarWidth: 'thin',
            maxWidth: '100%',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {ESPECIAL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat && !showOnlyFavorites;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setShowOnlyFavorites(false);
                  setVisibleLimit(48);
                }}
                style={{
                  whiteSpace: 'nowrap',
                  background: isActive
                    ? 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
                    : 'rgba(30, 41, 59, 0.7)',
                  color: isActive ? '#0F172A' : '#CBD5E1',
                  border: isActive ? '1px solid #F59E0B' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '999px',
                  padding: '0.4rem 0.95rem',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 800 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  flexShrink: 0
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Random Notification Popup */}
      {randomMessage && (
        <div
          role="status"
          style={{
            background: 'rgba(245, 158, 11, 0.9)',
            color: '#0F172A',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            fontSize: '0.85rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Sparkles size={16} />
          <span>{randomMessage}</span>
        </div>
      )}

      {/* Combination Tray Section */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.7)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '12px',
          padding: '0.9rem 1.1rem',
          marginBottom: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={16} color="#F59E0B" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F8FAFC' }}>
              Bandeja de Combinación Especial
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              ({selectedSymbols.length} símbolos)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <button
              type="button"
              onClick={copyTrayContent}
              disabled={selectedSymbols.length === 0}
              style={{
                background: copiedTray ? '#10B981' : '#F59E0B',
                color: '#0F172A',
                border: 'none',
                borderRadius: '8px',
                padding: '0.4rem 0.85rem',
                fontSize: '0.8rem',
                fontWeight: 800,
                cursor: selectedSymbols.length > 0 ? 'pointer' : 'not-allowed',
                opacity: selectedSymbols.length > 0 ? 1 : 0.45,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'all 0.2s ease',
                touchAction: 'manipulation'
              }}
            >
              {copiedTray ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedTray ? '¡Copiado!' : 'Copiar Combinación'}</span>
            </button>

            {selectedSymbols.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={removeLastFromTray}
                  aria-label="Eliminar último símbolo"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#E2E8F0',
                    borderRadius: '8px',
                    padding: '0.4rem 0.6rem',
                    fontSize: '0.78rem',
                    cursor: 'pointer'
                  }}
                  title="Borrar último"
                >
                  Deshacer
                </button>
                <button
                  type="button"
                  onClick={clearTray}
                  aria-label="Limpiar bandeja de combinación"
                  style={{
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#F87171',
                    borderRadius: '8px',
                    padding: '0.4rem 0.6rem',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                  title="Vaciar toda la bandeja"
                >
                  <Trash2 size={13} />
                  <span>Vaciar</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Tray Preview Window */}
        <div
          style={{
            minHeight: '44px',
            background: 'rgba(0, 0, 0, 0.35)',
            border: '1px dashed rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            padding: '0.5rem 0.85rem',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            fontSize: '1.25rem',
            letterSpacing: '0.1em',
            wordBreak: 'break-all'
          }}
        >
          {selectedSymbols.length > 0 ? (
            selectedSymbols.map((sym, index) => (
              <span
                key={index}
                style={{
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  color: '#F8FAFC',
                  borderRadius: '6px',
                  padding: '0.1rem 0.45rem',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                {sym}
              </span>
            ))
          ) : (
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', letterSpacing: 'normal' }}>
              Toca el botón &quot;+&quot; en cualquier símbolo para armar tu diseño o nick personalizado...
            </span>
          )}
        </div>
      </div>

      {/* Grid of Symbol Cards */}
      <div
        className="symbol-grid-responsive"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 155px), 1fr))',
          gap: '0.75rem'
        }}
      >
        {displayedSymbols.map((item) => {
          const isCopied = copiedId === item.id;
          const isFav = favorites.includes(item.id);

          return (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => copySingleSymbol(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  copySingleSymbol(item);
                }
              }}
              style={{
                position: 'relative',
                background: isCopied ? 'rgba(16, 185, 129, 0.18)' : 'rgba(30, 41, 59, 0.65)',
                border: isCopied ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '0.9rem 0.65rem 0.75rem 0.65rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                userSelect: 'none',
                minHeight: '125px',
                boxSizing: 'border-box',
                outline: 'none'
              }}
              aria-label={`Copiar símbolo ${item.name} (${item.symbol})`}
            >
              {/* Top Bar inside Card: Category badge + Favorite star */}
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.35rem'
                }}
              >
                <span
                  style={{
                    fontSize: '0.66rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    fontWeight: 600,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '85px'
                  }}
                >
                  {item.category}
                </span>

                <button
                  type="button"
                  onClick={(e) => toggleFavorite(item.id, e)}
                  aria-label={isFav ? `Quitar ${item.name} de favoritos` : `Guardar ${item.name} en favoritos`}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '2px',
                    color: isFav ? '#F59E0B' : 'rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    touchAction: 'manipulation'
                  }}
                  title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                >
                  <Star size={14} fill={isFav ? '#F59E0B' : 'none'} />
                </button>
              </div>

              {/* Big Symbol Glyphs */}
              <div
                style={{
                  fontSize: 'clamp(1.75rem, 5vw, 2.3rem)',
                  lineHeight: 1.1,
                  color: isCopied ? '#34D399' : '#FFFFFF',
                  margin: '0.35rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '44px',
                  wordBreak: 'break-all'
                }}
              >
                {item.symbol}
              </div>

              {/* Name label */}
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: isCopied ? '#34D399' : '#CBD5E1',
                  marginBottom: '0.5rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  width: '100%'
                }}
              >
                {item.name}
              </span>

              {/* Action Buttons: Copiar & Añadir a la bandeja */}
              <div style={{ display: 'flex', gap: '0.35rem', width: '100%' }}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    copySingleSymbol(item);
                  }}
                  aria-label={`Copiar ${item.name}`}
                  style={{
                    flex: 1,
                    background: isCopied ? '#10B981' : 'rgba(245, 158, 11, 0.15)',
                    border: isCopied ? '1px solid #10B981' : '1px solid rgba(245, 158, 11, 0.35)',
                    color: isCopied ? '#FFFFFF' : '#F59E0B',
                    borderRadius: '8px',
                    padding: '0.4rem 0.2rem',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.25rem',
                    minHeight: '36px',
                    touchAction: 'manipulation'
                  }}
                >
                  {isCopied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{isCopied ? '¡Listo!' : 'Copiar'}</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => addToTray(item.symbol, e)}
                  aria-label={`Añadir ${item.symbol} a la bandeja`}
                  style={{
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#CBD5E1',
                    borderRadius: '8px',
                    padding: '0.4rem 0.5rem',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '36px',
                    minWidth: '32px',
                    touchAction: 'manipulation'
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
      {displayedSymbols.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
          <Zap size={32} color="#F59E0B" style={{ margin: '0 auto 0.75rem auto', opacity: 0.7 }} />
          <p style={{ fontSize: '1rem', fontWeight: 600, color: '#F1F5F9', margin: '0 0 0.5rem 0' }}>
            No se encontraron símbolos especiales
          </p>
          <p style={{ fontSize: '0.85rem', margin: 0 }}>
            {showOnlyFavorites
              ? 'Aún no has guardado favoritos. Toca la estrella en cualquier tarjeta para tenerlo aquí.'
              : 'Intenta con otro término como "estrella", "corona", "cruz", "flecha" o "rayo".'}
          </p>
        </div>
      )}

      {/* Load More Button */}
      {filteredSymbols.length > visibleLimit && (
        <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
          <button
            type="button"
            onClick={() => setVisibleLimit((prev) => prev + 36)}
            style={{
              background: 'rgba(30, 41, 59, 0.85)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              color: '#F59E0B',
              padding: '0.65rem 1.75rem',
              borderRadius: '10px',
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Ver más símbolos especiales ({filteredSymbols.length - visibleLimit} restantes)
          </button>
        </div>
      )}
    </div>
  );
}
