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
  BONITO_SYMBOLS,
  BONITO_CATEGORIES,
  BonitoSymbol,
  BonitoCategoryType
} from '@/data/bonitoSymbolsData';
import { copyToClipboard } from '@/lib/clipboard';

export default function BonitoSymbolExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<BonitoCategoryType>('Todos');
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
      const saved = localStorage.getItem('lb_bonito_symbols_favs');
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
        localStorage.setItem('lb_bonito_symbols_favs', JSON.stringify(updated));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  const copySingleSymbol = async (item: BonitoSymbol) => {
    const success = await copyToClipboard(item.symbol);
    if (success) {
      setCopiedId(item.id);
      setTimeout(() => {
        setCopiedId((curr) => (curr === item.id ? null : curr));
      }, 2000);
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
    const success = await copyToClipboard(fullText);
    if (success) {
      setCopiedTray(true);
      setTimeout(() => setCopiedTray(false), 2200);
    }
  };

  const pickRandomSymbol = () => {
    const list = BONITO_SYMBOLS;
    const randomItem = list[Math.floor(Math.random() * list.length)];
    copySingleSymbol(randomItem);
    setRandomMessage(`¡Copiado símbolo bonito al azar: ${randomItem.symbol} (${randomItem.name})!`);
    setTimeout(() => setRandomMessage(null), 3500);
  };

  // Filter symbols based on category, search, and favorites
  const filteredSymbols = useMemo(() => {
    return BONITO_SYMBOLS.filter((item) => {
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
        const matchesKeywords = item.keywords.some((kw) => kw.toLowerCase().includes(query));
        return matchesName || matchesSymbol || matchesDescription || matchesKeywords;
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
        border: '1px solid rgba(236, 72, 153, 0.25)',
        borderRadius: 'clamp(14px, 2.5vw, 20px)',
        padding: 'clamp(1rem, 2.5vw, 1.75rem)',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(236, 72, 153, 0.08)',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Top Banner with Badges & Quick Actions */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '0.85rem',
          marginBottom: '1.25rem',
          paddingBottom: '1.15rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div style={{ flex: '1 1 260px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(129, 140, 248, 0.15) 100%)',
              border: '1px solid rgba(236, 72, 153, 0.35)',
              padding: '0.2rem 0.65rem',
              borderRadius: '999px',
              color: '#EC4899',
              fontSize: '0.74rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.45rem'
            }}
          >
            <Sparkles size={13} color="#EC4899" />
            <span>SÍMBOLOS BONITOS · COPIAR 1-CLIC</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.65rem)', fontWeight: 800, color: '#FFF', margin: '0 0 0.35rem 0', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
            Explorador de Símbolos Bonitos para Copiar
          </h2>
          <p style={{ fontSize: 'clamp(0.82rem, 2vw, 0.9rem)', color: 'var(--text-muted)', margin: 0, maxWidth: '640px', lineHeight: 1.5 }}>
            Toca cualquier tarjeta para copiar al portapapeles o presiona <strong>+</strong> para armar combinaciones bonitas personalizadas en tu bandeja.
          </p>
        </div>

        {/* Action Controls: Random & Favorites */}
        <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            type="button"
            onClick={pickRandomSymbol}
            aria-label="Copiar un símbolo bonito al azar"
            style={{
              background: 'rgba(30, 41, 59, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#E2E8F0',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: 'clamp(0.78rem, 2vw, 0.84rem)',
              fontWeight: 600,
              minHeight: '36px',
              touchAction: 'manipulation',
              transition: 'all 0.2s ease'
            }}
          >
            <Shuffle size={13} color="#38BDF8" />
            <span>Al Azar</span>
          </button>

          <button
            type="button"
            onClick={() => setShowOnlyFavorites((prev) => !prev)}
            aria-label={showOnlyFavorites ? 'Mostrar todos los símbolos' : 'Ver solo favoritos'}
            style={{
              background: showOnlyFavorites ? 'rgba(236, 72, 153, 0.25)' : 'rgba(30, 41, 59, 0.85)',
              border: showOnlyFavorites ? '1px solid #EC4899' : '1px solid rgba(255, 255, 255, 0.12)',
              color: showOnlyFavorites ? '#F472B6' : '#E2E8F0',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: 'clamp(0.78rem, 2vw, 0.84rem)',
              fontWeight: 700,
              minHeight: '36px',
              touchAction: 'manipulation',
              transition: 'all 0.2s ease'
            }}
          >
            <Star size={13} fill={showOnlyFavorites ? '#F472B6' : 'none'} color={showOnlyFavorites ? '#F472B6' : '#94A3B8'} />
            <span>Favoritos ({favorites.length})</span>
          </button>
        </div>
      </div>

      {/* Random Alert Banner if activated */}
      {randomMessage && (
        <div
          role="status"
          aria-live="polite"
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

      {/* Combiner Tray / Bandeja de Combinación */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(236, 72, 153, 0.35)',
          borderRadius: '14px',
          padding: 'clamp(0.85rem, 2vw, 1.25rem)',
          marginBottom: '1.25rem',
          boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.35)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Bookmark size={14} color="#EC4899" />
            <span style={{ fontSize: 'clamp(0.74rem, 2vw, 0.82rem)', fontWeight: 700, color: '#FDF2F8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Bandeja de Combinación ({selectedSymbols.length})
            </span>
          </div>
          {selectedSymbols.length > 0 && (
            <button
              type="button"
              onClick={clearTray}
              aria-label="Vaciar la bandeja de combinación"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#EF4444',
                fontSize: '0.78rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer',
                padding: '4px 6px'
              }}
            >
              <Trash2 size={13} />
              <span>Vaciar</span>
            </button>
          )}
        </div>

        <div
          style={{
            minHeight: '48px',
            background: 'rgba(30, 41, 59, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            padding: '0.65rem 0.85rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.85rem',
            flexWrap: 'wrap'
          }}
        >
          <div
            style={{
              fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
              color: selectedSymbols.length > 0 ? '#FFFFFF' : 'var(--text-muted)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.12em',
              wordBreak: 'break-all',
              flex: '1 1 180px'
            }}
          >
            {selectedSymbols.length > 0 ? (
              selectedSymbols.join(' ')
            ) : (
              <span style={{ fontSize: '0.82rem', fontStyle: 'italic', color: '#94A3B8' }}>
                Toca el botón &quot;+&quot; en los símbolos para formar tu combinación bonita personalizada...
              </span>
            )}
          </div>

          {selectedSymbols.length > 0 && (
            <button
              type="button"
              onClick={copyTray}
              aria-label="Copiar toda la combinación"
              style={{
                background: copiedTray ? '#10B981' : 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
                color: '#FFF',
                border: 'none',
                borderRadius: '8px',
                padding: '0.55rem 1rem',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                boxShadow: '0 4px 14px rgba(236, 72, 153, 0.35)',
                transition: 'all 0.2s ease',
                flex: '1 1 auto',
                minWidth: '150px',
                minHeight: '38px',
                touchAction: 'manipulation'
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
          style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setVisibleLimit(48);
          }}
          placeholder="Buscar símbolos bonitos (corazón, estrella, flor, luna, lazo)..."
          aria-label="Buscar símbolos bonitos"
          style={{
            width: '100%',
            padding: '0.8rem 2.6rem 0.8rem 2.65rem',
            background: 'rgba(30, 41, 59, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '12px',
            color: '#FFFFFF',
            fontSize: '1rem',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            aria-label="Borrar búsqueda"
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
              fontWeight: 600,
              padding: '6px'
            }}
          >
            Borrar
          </button>
        )}
      </div>

      {/* Category Pills Bar (Horizontal Scrollable) */}
      <div
        role="tablist"
        aria-label="Categorías de símbolos bonitos"
        style={{
          display: 'flex',
          gap: '0.45rem',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '0.65rem',
          marginBottom: '1.25rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {BONITO_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setActiveCategory(cat);
                setShowOnlyFavorites(false);
                setVisibleLimit(48);
              }}
              style={{
                padding: '0.45rem 0.85rem',
                borderRadius: '10px',
                fontSize: 'clamp(0.76rem, 2vw, 0.84rem)',
                fontWeight: isActive ? 700 : 500,
                background: isActive
                  ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.25) 0%, rgba(129, 140, 248, 0.25) 100%)'
                  : 'rgba(30, 41, 59, 0.5)',
                border: isActive
                  ? '1px solid rgba(236, 72, 153, 0.6)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                color: isActive ? '#FFFFFF' : '#CBD5E1',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                touchAction: 'manipulation',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Bonito Symbol Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(88px, 26vw, 135px), 1fr))',
          gap: 'clamp(0.5rem, 1.5vw, 0.85rem)',
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
              role="button"
              tabIndex={0}
              aria-label={`Copiar ${item.name}: ${item.symbol}`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copySingleSymbol(item); } }}
              style={{
                background: 'rgba(15, 23, 42, 0.75)',
                border: isCopied ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '0.75rem 0.45rem',
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
                aria-label={isFav ? `Quitar ${item.name} de favoritos` : `Guardar ${item.name} en favoritos`}
                style={{
                  position: 'absolute',
                  top: '4px',
                  right: '4px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  color: isFav ? '#EC4899' : '#475569'
                }}
              >
                <Star size={13} fill={isFav ? '#EC4899' : 'none'} />
              </button>

              {/* Big Symbol Display */}
              <div
                style={{
                  fontSize: item.symbol.length > 5 ? 'clamp(0.85rem, 2.5vw, 1.05rem)' : 'clamp(1.4rem, 4.5vw, 2rem)',
                  lineHeight: 1.2,
                  color: '#FFFFFF',
                  marginTop: '0.55rem',
                  marginBottom: '0.45rem',
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
                  fontSize: 'clamp(0.68rem, 1.8vw, 0.74rem)',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginBottom: '0.55rem',
                  padding: '0 0.15rem'
                }}
              >
                {item.name}
              </div>

              {/* Action Buttons: Copiar & Añadir */}
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    copySingleSymbol(item);
                  }}
                  aria-label={isCopied ? 'Símbolo copiado' : `Copiar ${item.symbol}`}
                  style={{
                    flex: 1,
                    background: isCopied ? '#10B981' : 'rgba(236, 72, 153, 0.15)',
                    border: isCopied ? '1px solid #10B981' : '1px solid rgba(236, 72, 153, 0.35)',
                    color: isCopied ? '#FFF' : '#EC4899',
                    borderRadius: '8px',
                    padding: '0.4rem 0.2rem',
                    fontSize: 'clamp(0.68rem, 1.8vw, 0.74rem)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.2rem',
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
          <Heart size={32} color="#EC4899" style={{ margin: '0 auto 0.75rem auto', opacity: 0.7 }} />
          <p style={{ fontSize: '1rem', fontWeight: 600, color: '#F1F5F9', margin: '0 0 0.5rem 0' }}>
            No se encontraron símbolos bonitos
          </p>
          <p style={{ fontSize: '0.85rem', margin: 0 }}>
            {showOnlyFavorites
              ? 'Aún no has guardado favoritos. Toca la estrella de cualquier símbolo para guardarlo aquí.'
              : 'Intenta con otro término como "corazón", "estrella", "flor", "luna" o "lazo".'}
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
              border: '1px solid rgba(236, 72, 153, 0.35)',
              color: '#EC4899',
              padding: '0.65rem 1.75rem',
              borderRadius: '10px',
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Ver más símbolos bonitos ({filteredSymbols.length - visibleLimit} restantes)
          </button>
        </div>
      )}
    </div>
  );
}
