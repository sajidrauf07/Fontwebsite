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
  Flame,
  Layers,
  HelpCircle,
  X
} from 'lucide-react';
import {
  SIMBOLOS_PARA_COPIAR_DATA,
  SIMBOLO_CATEGORIES,
  SimboloParaCopiar,
  SimboloCategoryType
} from '@/data/paraCopiarSimbolosData';
import { copyToClipboard } from '@/lib/clipboard';

export default function ParaCopiarSymbolExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<SimboloCategoryType>('Todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [showOnlyPopular, setShowOnlyPopular] = useState(false);
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);
  const [copiedTray, setCopiedTray] = useState(false);
  const [randomFeedback, setRandomFeedback] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(48);
  const [liveAnnouncement, setLiveAnnouncement] = useState('');

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lb_simbolos_para_copiar_favs');
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
        localStorage.setItem('lb_simbolos_para_copiar_favs', JSON.stringify(updated));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  const copySingleSymbol = async (item: SimboloParaCopiar) => {
    const success = await copyToClipboard(item.symbol);
    if (success) {
      setCopiedId(item.id);
      setLiveAnnouncement(`Símbolo ${item.symbol} copiado al portapapeles`);
      setTimeout(() => {
        setCopiedId((curr) => (curr === item.id ? null : curr));
      }, 2000);
    }
  };

  const addToTray = (symbol: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedSymbols((prev) => [...prev, symbol]);
    setLiveAnnouncement(`Símbolo ${symbol} agregado a la bandeja`);
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
      setLiveAnnouncement('Combinación de símbolos copiada al portapapeles');
      setTimeout(() => setCopiedTray(false), 2200);
    }
  };

  // Filter logic
  const filteredList = useMemo(() => {
    let result = SIMBOLOS_PARA_COPIAR_DATA;

    if (activeCategory !== 'Todos') {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (showOnlyFavorites) {
      result = result.filter((item) => favorites.includes(item.id));
    }

    if (showOnlyPopular) {
      result = result.filter((item) => item.popular);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.symbol.includes(q) ||
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeCategory, showOnlyFavorites, showOnlyPopular, searchQuery, favorites]);

  const pickRandomSymbol = () => {
    const pool = filteredList.length > 0 ? filteredList : SIMBOLOS_PARA_COPIAR_DATA;
    const randomItem = pool[Math.floor(Math.random() * pool.length)];
    copySingleSymbol(randomItem);
    setRandomFeedback(`¡Símbolo al azar copiado: ${randomItem.symbol} (${randomItem.name})!`);
    setTimeout(() => setRandomFeedback(null), 3500);
  };

  const displayedSymbols = useMemo(() => {
    return filteredList.slice(0, visibleCount);
  }, [filteredList, visibleCount]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Todos: SIMBOLOS_PARA_COPIAR_DATA.length };
    SIMBOLO_CATEGORIES.forEach((cat) => {
      if (cat !== 'Todos') {
        counts[cat] = SIMBOLOS_PARA_COPIAR_DATA.filter((s) => s.category === cat).length;
      }
    });
    return counts;
  }, []);

  return (
    <div className="symbol-explorer-root" suppressHydrationWarning style={{ width: '100%', position: 'relative' }}>
      {/* Screen Reader Live Region for Accessibility */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
        {liveAnnouncement}
      </div>

      {/* Hero Control Console Card */}
      <div
        className="symbol-tool-console"
        style={{
          background: 'linear-gradient(180deg, rgba(20, 27, 45, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(236, 72, 153, 0.25)',
          padding: '1.75rem',
          boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 30px rgba(236, 72, 153, 0.12)',
          marginBottom: '2rem'
        }}
      >
        {/* Search Bar & Primary Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div
              style={{
                flex: '1 1 320px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Search
                size={20}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  color: 'var(--text-secondary, #94A3B8)',
                  pointerEvents: 'none'
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar símbolos: estrella, corazón, rayo, flor, flecha..."
                aria-label="Buscar símbolos para copiar y pegar"
                style={{
                  width: '100%',
                  padding: '0.95rem 2.75rem 0.95rem 2.85rem',
                  backgroundColor: 'rgba(11, 15, 25, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  color: '#F8FAFC',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#EC4899';
                  e.target.style.boxShadow = '0 0 0 3px rgba(236, 72, 153, 0.25)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.3)';
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpiar búsqueda"
                  style={{
                    position: 'absolute',
                    right: '0.85rem',
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '26px',
                    height: '26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94A3B8',
                    cursor: 'pointer'
                  }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  setShowOnlyPopular(!showOnlyPopular);
                  setShowOnlyFavorites(false);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '14px',
                  border: showOnlyPopular ? '1px solid #EC4899' : '1px solid rgba(255, 255, 255, 0.1)',
                  background: showOnlyPopular
                    ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%)'
                    : 'rgba(15, 23, 42, 0.7)',
                  color: showOnlyPopular ? '#F472B6' : '#F8FAFC',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Flame size={16} color={showOnlyPopular ? '#EC4899' : '#F59E0B'} />
                Populares
              </button>

              <button
                onClick={() => {
                  setShowOnlyFavorites(!showOnlyFavorites);
                  setShowOnlyPopular(false);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '14px',
                  border: showOnlyFavorites ? '1px solid #6366F1' : '1px solid rgba(255, 255, 255, 0.1)',
                  background: showOnlyFavorites
                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.35) 0%, rgba(168, 85, 247, 0.3) 100%)'
                    : 'rgba(15, 23, 42, 0.7)',
                  color: showOnlyFavorites ? '#A5B4FC' : '#F8FAFC',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Bookmark size={16} color={showOnlyFavorites ? '#6366F1' : '#A855F7'} />
                Favoritos ({favorites.length})
              </button>

              <button
                onClick={pickRandomSymbol}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '14px',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(14, 165, 233, 0.15) 100%)',
                  color: '#6EE7B7',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title="Copia automáticamente un símbolo al azar de la lista"
              >
                <Shuffle size={16} />
                Símbolo al Azar
              </button>
            </div>
          </div>

          {/* Random Feedback Pill */}
          {randomFeedback && (
            <div
              style={{
                padding: '0.75rem 1.25rem',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.2)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#A7F3D0',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                animation: 'fadeIn 0.2s ease'
              }}
            >
              <Check size={18} color="#10B981" />
              <span>{randomFeedback}</span>
            </div>
          )}
        </div>

        {/* Category Pills Slider */}
        <div style={{ marginTop: '0.5rem' }}>
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.6rem',
              scrollbarWidth: 'thin'
            }}
          >
            {SIMBOLO_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat && !showOnlyFavorites && !showOnlyPopular;
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowOnlyFavorites(false);
                    setShowOnlyPopular(false);
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.55rem 1rem',
                    borderRadius: '100px',
                    whiteSpace: 'nowrap',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    border: isActive
                      ? '1px solid #EC4899'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    background: isActive
                      ? 'linear-gradient(135deg, #EC4899 0%, #A855F7 100%)'
                      : 'rgba(15, 23, 42, 0.6)',
                    color: isActive ? '#FFFFFF' : '#94A3B8',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 4px 12px rgba(236, 72, 153, 0.35)' : 'none'
                  }}
                >
                  <span>{cat}</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.1rem 0.45rem',
                      borderRadius: '10px',
                      background: isActive ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.08)',
                      color: isActive ? '#FFFFFF' : '#64748B'
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Multi-Symbol Combination Tray */}
        <div
          style={{
            marginTop: '1.25rem',
            padding: '1.25rem',
            borderRadius: '18px',
            background: 'rgba(11, 15, 25, 0.9)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={18} color="#818CF8" />
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#E2E8F0' }}>
                Bandeja de Combinación de Símbolos
              </span>
              <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                (Toca el botón <span style={{ color: '#F472B6', fontWeight: 'bold' }}>+</span> en cualquier tarjeta para armar tu diseño)
              </span>
            </div>

            {selectedSymbols.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={clearTray}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#FCA5A5',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <Trash2 size={13} />
                  Limpiar
                </button>

                <button
                  onClick={copyTray}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 1.15rem',
                    borderRadius: '10px',
                    border: 'none',
                    background: copiedTray
                      ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                      : 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                    color: '#FFFFFF',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.35)'
                  }}
                >
                  {copiedTray ? <Check size={14} /> : <Copy size={14} />}
                  {copiedTray ? '¡Copiado Todo!' : 'Copiar Combinación'}
                </button>
              </div>
            )}
          </div>

          <div
            style={{
              minHeight: '48px',
              padding: '0.75rem 1rem',
              borderRadius: '12px',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px dashed rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              fontSize: '1.25rem',
              color: '#F8FAFC'
            }}
          >
            {selectedSymbols.length === 0 ? (
              <span style={{ fontSize: '0.88rem', color: '#64748B', fontStyle: 'italic' }}>
                Tu bandeja está vacía. Agrega corazones, estrellas, coronas o flechas para armar un nick o bio completo...
              </span>
            ) : (
              selectedSymbols.map((sym, idx) => (
                <span
                  key={idx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '8px',
                    background: 'rgba(99, 102, 241, 0.25)',
                    border: '1px solid rgba(99, 102, 241, 0.4)',
                    fontSize: '1.2rem'
                  }}
                >
                  {sym}
                  <button
                    onClick={() => setSelectedSymbols((prev) => prev.filter((_, i) => i !== idx))}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94A3B8',
                      cursor: 'pointer',
                      padding: '0 2px',
                      fontSize: '0.75rem',
                      lineHeight: 1
                    }}
                    title="Eliminar este símbolo"
                  >
                    ×
                  </button>
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Results Header Counter */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.25rem',
          padding: '0 0.5rem'
        }}
      >
        <span style={{ fontSize: '0.95rem', color: '#94A3B8', fontWeight: 500 }}>
          Mostrando <strong style={{ color: '#F8FAFC' }}>{filteredList.length}</strong> símbolos disponibles
          {activeCategory !== 'Todos' && ` en "${activeCategory}"`}
        </span>
        <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
          Toca cualquier tarjeta para copiar con 1 clic
        </span>
      </div>

      {/* Symbol Cards Grid */}
      {displayedSymbols.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '4rem 1.5rem',
            background: 'rgba(20, 27, 45, 0.5)',
            borderRadius: '20px',
            border: '1px dashed rgba(255, 255, 255, 0.1)',
            marginBottom: '2rem'
          }}
        >
          <HelpCircle size={48} color="#64748B" style={{ margin: '0 auto 1rem auto' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.5rem' }}>
            No encontramos símbolos con esa búsqueda
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', maxWidth: '460px', margin: '0 auto 1.5rem auto' }}>
            Prueba buscando con palabras más generales como &quot;estrella&quot;, &quot;corazón&quot;, &quot;flor&quot;, &quot;cruz&quot; o limpia los filtros.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('Todos');
              setShowOnlyFavorites(false);
              setShowOnlyPopular(false);
            }}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(135deg, #EC4899 0%, #A855F7 100%)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer'
            }}
          >
            Restablecer Catálogo Completo
          </button>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}
        >
          {displayedSymbols.map((item) => {
            const isCopied = copiedId === item.id;
            const isFavorite = favorites.includes(item.id);

            return (
              <div
                key={item.id}
                tabIndex={0}
                role="button"
                aria-label={`Copiar símbolo ${item.symbol} (${item.name})`}
                onClick={() => copySingleSymbol(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    copySingleSymbol(item);
                  }
                }}
                style={{
                  position: 'relative',
                  backgroundColor: isCopied ? 'rgba(16, 185, 129, 0.15)' : 'rgba(20, 27, 45, 0.75)',
                  border: isCopied
                    ? '1px solid #10B981'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '1.15rem 0.85rem 0.85rem 0.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '145px',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isCopied
                    ? '0 0 20px rgba(16, 185, 129, 0.3)'
                    : '0 4px 12px rgba(0, 0, 0, 0.2)',
                  userSelect: 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isCopied) {
                    e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.5)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.35)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isCopied) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                  }
                }}
              >
                {/* Top Quick Actions (Add to Tray & Favorite) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.45rem',
                    left: '0.45rem',
                    right: '0.45rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <button
                    onClick={(e) => addToTray(item.symbol, e)}
                    aria-label={`Agregar ${item.symbol} a la bandeja`}
                    title="Agregar a la bandeja"
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: 'none',
                      borderRadius: '6px',
                      width: '22px',
                      height: '22px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#94A3B8',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(236, 72, 153, 0.3)';
                      e.currentTarget.style.color = '#F472B6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.color = '#94A3B8';
                    }}
                  >
                    <Plus size={13} />
                  </button>

                  <button
                    onClick={(e) => toggleFavorite(item.id, e)}
                    aria-label={`Guardar ${item.name} en favoritos`}
                    title={isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '2px',
                      color: isFavorite ? '#F59E0B' : 'rgba(255, 255, 255, 0.25)',
                      transition: 'transform 0.15s ease'
                    }}
                  >
                    <Star size={14} fill={isFavorite ? '#F59E0B' : 'none'} />
                  </button>
                </div>

                {/* Main Prominent Symbol Glyph */}
                <div
                  style={{
                    fontSize: item.symbol.length > 5 ? '1.25rem' : '2rem',
                    color: isCopied ? '#34D399' : '#FFFFFF',
                    textAlign: 'center',
                    margin: '1.25rem 0 0.5rem 0',
                    lineHeight: 1.2,
                    fontFamily: 'var(--font-unicode, system-ui, sans-serif)',
                    wordBreak: 'break-all'
                  }}
                >
                  {item.symbol}
                </div>

                {/* Symbol Label Name */}
                <div
                  style={{
                    fontSize: '0.76rem',
                    color: '#94A3B8',
                    textAlign: 'center',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '100%',
                    marginBottom: '0.6rem'
                  }}
                  title={item.name}
                >
                  {item.name}
                </div>

                {/* One-Click Copy Action Button */}
                <button
                  type="button"
                  tabIndex={-1}
                  style={{
                    width: '100%',
                    padding: '0.4rem 0',
                    borderRadius: '8px',
                    border: 'none',
                    background: isCopied
                      ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                      : 'rgba(255, 255, 255, 0.08)',
                    color: isCopied ? '#FFFFFF' : '#CBD5E1',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem',
                    transition: 'all 0.2s ease',
                    pointerEvents: 'none'
                  }}
                >
                  {isCopied ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Check size={12} />
                      ¡Copiado!
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Copy size={11} />
                      Copiar
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Load More Pagination Button */}
      {visibleCount < filteredList.length && (
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <button
            onClick={() => setVisibleCount((prev) => prev + 48)}
            style={{
              padding: '0.85rem 2.25rem',
              borderRadius: '14px',
              border: '1px solid rgba(236, 72, 153, 0.4)',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
              color: '#F472B6',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = '#EC4899';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.4)';
            }}
          >
            Cargar Más Símbolos ({filteredList.length - visibleCount} restantes)
          </button>
        </div>
      )}
    </div>
  );
}
