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
  Heart
} from 'lucide-react';
import {
  AESTHETIC_SYMBOLS,
  AESTHETIC_CATEGORIES,
  AestheticSymbol,
  AestheticCategoryType
} from '@/data/aestheticSymbolsData';

export default function AestheticSymbolExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<AestheticCategoryType>('Todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);
  const [copiedTray, setCopiedTray] = useState(false);
  const [randomMessage, setRandomMessage] = useState<string | null>(null);
  const [visibleLimit, setVisibleLimit] = useState(36);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lb_aesthetic_symbols_favs');
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
        localStorage.setItem('lb_aesthetic_symbols_favs', JSON.stringify(updated));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  const copySingleSymbol = async (item: AestheticSymbol) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(item.symbol);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = item.symbol;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedId(item.id);
      setTimeout(() => {
        setCopiedId((curr) => (curr === item.id ? null : curr));
      }, 2000);
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
    setCopiedTray(false);
  };

  const copyTray = async () => {
    if (selectedSymbols.length === 0) return;
    const fullText = selectedSymbols.join(' ');
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(fullText);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = fullText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedTray(true);
      setTimeout(() => setCopiedTray(false), 2200);
    } catch {
      // Fallback
    }
  };

  const pickRandomSymbol = () => {
    const list = AESTHETIC_SYMBOLS;
    const randomItem = list[Math.floor(Math.random() * list.length)];
    copySingleSymbol(randomItem);
    setRandomMessage(`¡Copiado símbolo al azar: ${randomItem.symbol} (${randomItem.name})!`);
    setTimeout(() => setRandomMessage(null), 3500);
  };

  // Filter symbols based on category, search, and favorites
  const filteredSymbols = useMemo(() => {
    return AESTHETIC_SYMBOLS.filter((item) => {
      // Favorites toggle
      if (showOnlyFavorites && !favorites.includes(item.id)) {
        return false;
      }

      // Category filter
      if (activeCategory !== 'Todos' && item.category !== activeCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesSymbol = item.symbol.toLowerCase().includes(query);
        const matchesDescription = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags.some((tag) => tag.toLowerCase().includes(query));
        return matchesName || matchesSymbol || matchesDescription || matchesTags;
      }

      return true;
    });
  }, [searchQuery, activeCategory, showOnlyFavorites, favorites]);

  const displayedSymbols = filteredSymbols.slice(0, visibleLimit);

  return (
    <div
      className="cp-panel"
      style={{
        background: 'var(--panel-bg, #0F172A)',
        border: '1px solid rgba(244, 114, 182, 0.25)',
        borderRadius: '20px',
        padding: '1.75rem',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(244, 114, 182, 0.08)',
        position: 'relative'
      }}
    >
      {/* Top Banner with Badges & Quick Actions */}
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
              gap: '0.45rem',
              background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.15) 0%, rgba(129, 140, 248, 0.15) 100%)',
              border: '1px solid rgba(244, 114, 182, 0.35)',
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              color: '#F472B6',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '0.5rem'
            }}
          >
            <Sparkles size={14} color="#F472B6" />
            <span>COLECCIÓN AESTHETIC 1-CLIC</span>
          </div>
          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', margin: '0 0 0.35rem 0', letterSpacing: '-0.02em' }}>
            Explorador de Símbolos Aesthetic para Copiar
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, maxWidth: '640px', lineHeight: 1.5 }}>
            Toca cualquier tarjeta para copiar al portapapeles o presiona <strong>+</strong> para armar combinaciones aesthetic personalizadas en tu bandeja.
          </p>
        </div>

        {/* Action Controls: Random & Favorites */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={pickRandomSymbol}
            style={{
              background: 'rgba(30, 41, 59, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#E2E8F0',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.55rem 0.95rem',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
            title="Copiar un símbolo aesthetic al azar"
          >
            <Shuffle size={14} color="#38BDF8" />
            <span>Al Azar</span>
          </button>

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
              padding: '0.55rem 0.95rem',
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
      </div>

      {/* Random Alert Banner if activated */}
      {randomMessage && (
        <div
          style={{
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid #10B981',
            borderRadius: '10px',
            padding: '0.65rem 1rem',
            color: '#6EE7B7',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Check size={16} color="#10B981" />
          <span>{randomMessage}</span>
        </div>
      )}

      {/* Aesthetic Combiner Tray / Bandeja de Combinación */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(244, 114, 182, 0.35)',
          borderRadius: '14px',
          padding: '1.15rem 1.25rem',
          marginBottom: '1.5rem',
          boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.35)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bookmark size={15} color="#F472B6" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FDF2F8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Bandeja de Combinación Aesthetic ({selectedSymbols.length} símbolos)
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
                fontSize: '0.78rem',
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

        <div
          style={{
            minHeight: '50px',
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
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.15em',
              wordBreak: 'break-all'
            }}
          >
            {selectedSymbols.length > 0 ? (
              selectedSymbols.join(' ')
            ) : (
              <span style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#94A3B8' }}>
                Toca el botón &quot;+ Añadir&quot; en los símbolos para formar tu combinación aesthetic personalizada...
              </span>
            )}
          </div>

          {selectedSymbols.length > 0 && (
            <button
              type="button"
              onClick={copyTray}
              style={{
                background: copiedTray ? '#10B981' : 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
                color: '#FFF',
                border: 'none',
                borderRadius: '8px',
                padding: '0.55rem 1.15rem',
                fontSize: '0.86rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                boxShadow: '0 4px 14px rgba(236, 72, 153, 0.35)',
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

      {/* Real-time Search Input */}
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
            setVisibleLimit(36);
          }}
          placeholder="Buscar símbolos aesthetic (lazo, luna, estrellas, mariposa, corazones, flor, kaomoji)..."
          style={{
            width: '100%',
            padding: '0.85rem 1rem 0.85rem 2.85rem',
            background: 'rgba(30, 41, 59, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '12px',
            color: '#FFFFFF',
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
              right: '0.85rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              color: '#94A3B8',
              cursor: 'pointer',
              fontSize: '0.82rem',
              fontWeight: 600
            }}
          >
            Borrar
          </button>
        )}
      </div>

      {/* Category Pills Bar (Horizontal Scrollable) */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '0.75rem',
          marginBottom: '1.5rem',
          scrollbarWidth: 'none'
        }}
      >
        {AESTHETIC_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setShowOnlyFavorites(false);
                setVisibleLimit(36);
              }}
              style={{
                padding: '0.5rem 0.95rem',
                borderRadius: '10px',
                fontSize: '0.84rem',
                fontWeight: isActive ? 700 : 500,
                background: isActive
                  ? 'linear-gradient(135deg, rgba(244, 114, 182, 0.25) 0%, rgba(129, 140, 248, 0.25) 100%)'
                  : 'rgba(30, 41, 59, 0.5)',
                border: isActive
                  ? '1px solid rgba(244, 114, 182, 0.6)'
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

      {/* Grid of Aesthetic Symbol Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
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
                  color: isFav ? '#F472B6' : '#475569'
                }}
                title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
              >
                <Star size={13} fill={isFav ? '#F472B6' : 'none'} />
              </button>

              {/* Big Aesthetic Symbol Display */}
              <div
                style={{
                  fontSize: item.symbol.length > 5 ? '1.1rem' : '2.1rem',
                  lineHeight: 1.25,
                  color: '#FFFFFF',
                  marginTop: '0.65rem',
                  marginBottom: '0.5rem',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  userSelect: 'none',
                  wordBreak: 'break-word',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
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
                    background: isCopied ? '#10B981' : 'rgba(244, 114, 182, 0.15)',
                    border: isCopied ? '1px solid #10B981' : '1px solid rgba(244, 114, 182, 0.35)',
                    color: isCopied ? '#FFF' : '#F472B6',
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
      {displayedSymbols.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
          <Heart size={32} color="#F472B6" style={{ margin: '0 auto 0.75rem auto', opacity: 0.7 }} />
          <p style={{ fontSize: '1rem', fontWeight: 600, color: '#F1F5F9', margin: '0 0 0.5rem 0' }}>
            No se encontraron símbolos aesthetic
          </p>
          <p style={{ fontSize: '0.85rem', margin: 0 }}>
            {showOnlyFavorites
              ? 'Aún no has guardado favoritos. Haz clic en la estrella de cualquier símbolo para guardarlo aquí.'
              : 'Intenta con otro término como "lazo", "luna", "estrellas" o "mariposa".'}
          </p>
        </div>
      )}

      {/* Load More Button */}
      {filteredSymbols.length > visibleLimit && (
        <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
          <button
            type="button"
            onClick={() => setVisibleLimit((prev) => prev + 24)}
            style={{
              background: 'rgba(30, 41, 59, 0.85)',
              border: '1px solid rgba(244, 114, 182, 0.35)',
              color: '#F472B6',
              padding: '0.65rem 1.75rem',
              borderRadius: '10px',
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Ver más símbolos aesthetic ({filteredSymbols.length - visibleLimit} restantes)
          </button>
        </div>
      )}
    </div>
  );
}
