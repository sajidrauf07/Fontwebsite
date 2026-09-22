'use client';

import React, { useState, useMemo, useEffect, useDeferredValue } from 'react';
import {
  Copy,
  Check,
  X,
  Search,
  Sparkles,
  Dices,
  Star,
  RefreshCw,
  AlertCircle,
  Gamepad2,
  CheckCircle2,
  Flame,
  Shuffle
} from 'lucide-react';
import {
  GAME_CATEGORIES,
  QUICK_BASE_WORDS,
  RANDOM_GAMER_NAMES,
  GAME_SYMBOL_WRAPPERS,
  CATEGORY_AFFIXES,
  CURATED_CATEGORY_PRESETS,
  UNICODE_TEXT_TRANSFORMS
} from '@/data/gameNamesData';

interface GeneratedNick {
  id: string;
  name: string;
  category: string;
  styleLabel: string;
}

interface GameNameGeneratorProps {
  badgeLabel?: string;
  title?: string;
  subtitle?: string;
  defaultInput?: string;
}

export default function GameNameGenerator({
  badgeLabel = 'GENERADOR GRATIS',
  title = 'Nombres para Juegos',
  subtitle = 'Crea nombres para juegos originales, chidos y con estilo. Genera opciones, personalízalas y copia tu favorita en segundos.',
  defaultInput = 'Shadow'
}: GameNameGeneratorProps = {}) {
  const [inputText, setInputText] = useState(defaultInput);
  const deferredInputText = useDeferredValue(inputText);
  const [selectedCategory, setSelectedCategory] = useState<string>('gamer');
  const [searchFilter, setSearchFilter] = useState('');
  const [generationSeed, setGenerationSeed] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lb_favorite_game_nicks');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // Fallback
    }
  }, []);

  const toggleFavorite = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) => {
      const updated = prev.includes(text)
        ? prev.filter((item) => item !== text)
        : [...prev, text];
      try {
        localStorage.setItem('lb_favorite_game_nicks', JSON.stringify(updated));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  const handleCopy = (text: string, id: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      }).catch(() => {
        fallbackCopy(text, id);
      });
    } else {
      fallbackCopy(text, id);
    }
  };

  const fallbackCopy = (text: string, id: string) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      }
    } catch {
      // Fallback silently
    }
  };

  // Trigger random name generation
  const handleRandomName = () => {
    const randomIndex = Math.floor(Math.random() * RANDOM_GAMER_NAMES.length);
    const randomWord = RANDOM_GAMER_NAMES[randomIndex];
    setInputText(randomWord);
    setGenerationSeed((prev) => prev + 1);
  };

  const cleanBase = useMemo(() => {
    return deferredInputText.trim().slice(0, 30);
  }, [deferredInputText]);

  // Generate deterministic variations without duplicates (capped at 25-30 per batch)
  const generatedList = useMemo(() => {
    const list: GeneratedNick[] = [];
    const seen = new Set<string>();

    const addNick = (name: string, category: string, styleLabel: string) => {
      const trimmed = name.trim();
      if (!trimmed || seen.has(trimmed)) return;
      seen.add(trimmed);
      list.push({
        id: `nick-${category}-${seen.size}-${trimmed}`,
        name: trimmed,
        category,
        styleLabel
      });
    };

    const currentCat = selectedCategory || 'gamer';
    const affixes = CATEGORY_AFFIXES[currentCat] || CATEGORY_AFFIXES.gamer;
    const catData = GAME_CATEGORIES.find((c) => c.id === currentCat) || GAME_CATEGORIES[0];

    if (!cleanBase) {
      // Input is empty: Show curated category ideas
      const curated = CURATED_CATEGORY_PRESETS[currentCat] || CURATED_CATEGORY_PRESETS.gamer;
      curated.forEach((preset, index) => {
        addNick(preset, catData.name, `Idea ${index + 1}`);
      });
      return list;
    }

    // 1. Symbol Wrappers relevant to this category or universal
    const relevantWrappers = GAME_SYMBOL_WRAPPERS.filter(
      (w) => w.categories.includes(currentCat) || w.categories.includes('gamer')
    );

    // Dynamic rotation based on generationSeed
    const shuffledWrappers = [...relevantWrappers];
    if (generationSeed > 0) {
      shuffledWrappers.sort((a, b) => {
        const hashA = (a.id.length * 17 + generationSeed * 31) % 19;
        const hashB = (b.id.length * 17 + generationSeed * 31) % 19;
        return hashA - hashB;
      });
    }

    shuffledWrappers.slice(0, 10).forEach((wrap) => {
      addNick(`${wrap.prefix}${cleanBase}${wrap.suffix}`, catData.name, wrap.styleName);
    });

    // 2. Affix Combinations (Suffixes & Prefixes)
    const suffixes = affixes.suffixes;
    const prefixes = affixes.prefixes;

    suffixes.slice(0, 6).forEach((suffix) => {
      if (suffix) {
        addNick(`${cleanBase}${suffix}`, catData.name, `Sufijo ${suffix}`);
      }
    });

    prefixes.slice(0, 4).forEach((prefix) => {
      if (prefix) {
        addNick(`${prefix}${cleanBase}`, catData.name, `Prefijo ${prefix}`);
      }
    });

    // 3. Combined Prefix + Suffix
    if (prefixes.length > 0 && suffixes.length > 0) {
      for (let i = 0; i < 3; i++) {
        const p = prefixes[(i + generationSeed) % prefixes.length];
        const s = suffixes[(i + generationSeed * 2) % suffixes.length];
        if (p && s) {
          addNick(`${p}${cleanBase}${s}`, catData.name, 'Compuesto');
        }
      }
    }

    // 4. Unicode Typography Transforms
    UNICODE_TEXT_TRANSFORMS.slice(0, 5).forEach((trans) => {
      try {
        const transformed = trans.transform(cleanBase);
        addNick(transformed, catData.name, trans.name);
      } catch {
        // Fallback
      }
    });

    // 5. Stylized combinations (Symbol + Affix)
    const topSymbols = ['亗', '『', '★', '⚡'];
    topSymbols.forEach((sym) => {
      const suff = suffixes[(generationSeed + 1) % suffixes.length] || 'X';
      if (sym === '『') {
        addNick(`『${cleanBase}${suff}』`, catData.name, 'Estilo Gótico');
      } else {
        addNick(`${sym}${cleanBase}${suff}${sym}`, catData.name, 'Combinado Pro');
      }
    });

    return list.slice(0, 28);
  }, [cleanBase, selectedCategory, generationSeed]);

  // Filter list by search query and favorites
  const filteredList = useMemo(() => {
    let result = generatedList;

    if (showOnlyFavorites) {
      result = result.filter((item) => favorites.includes(item.name));
    }

    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.styleLabel.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [generatedList, showOnlyFavorites, favorites, searchFilter]);

  const activeCategoryObj = useMemo(() => {
    return GAME_CATEGORIES.find((c) => c.id === selectedCategory) || GAME_CATEGORIES[0];
  }, [selectedCategory]);

  return (
    <div className="cp-panel" id="generador-de-nombres">
      {/* Tool Top Header & Small Label */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
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
              padding: '0.3rem 0.8rem',
              borderRadius: '9999px',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: '#A5B4FC',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.65rem'
            }}
          >
            <Gamepad2 size={14} color="#818CF8" />
            <span>{badgeLabel}</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF', margin: '0 0 0.35rem 0', letterSpacing: '-0.02em' }}>
            {title}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, maxWidth: '640px', lineHeight: 1.5 }}>
            {subtitle}
          </p>
        </div>

        {/* Action Controls: Random & Otra Tanda */}
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={handleRandomName}
            className="cp-copy-all-btn"
            style={{
              background: 'rgba(236, 72, 153, 0.15)',
              border: '1px solid rgba(236, 72, 153, 0.35)',
              color: '#F472B6',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.55rem 1rem',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 700
            }}
            title="Generar un nombre aleatorio de nuestra base de datos"
          >
            <Shuffle size={14} color="#F472B6" />
            <span>Nombre aleatorio</span>
          </button>

          <button
            type="button"
            onClick={() => setGenerationSeed((prev) => prev + 1)}
            className="cp-copy-all-btn"
            style={{
              background: 'rgba(30, 41, 59, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#F1F5F9',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.55rem 1rem',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 700
            }}
            title="Generar nueva tanda de combinaciones"
          >
            <RefreshCw size={14} color="#818CF8" />
            <span>Mostrar otra tanda</span>
          </button>
        </div>
      </div>

      {/* Main Text Input Field */}
      <div className="cp-input-block">
        <label htmlFor="game-name-input" className="cp-label" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          Escribe tu nombre o palabra:
        </label>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input
            id="game-name-input"
            type="text"
            className="cp-textarea"
            style={{
              height: '52px',
              paddingTop: '12px',
              paddingBottom: '12px',
              paddingRight: cleanBase ? '44px' : '16px',
              fontSize: '1.05rem',
              fontWeight: 600,
              width: '100%'
            }}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe una palabra o nombre... (ej. Shadow)"
            maxLength={35}
            aria-label="Escribe tu nombre o palabra para juegos"
          />
          {cleanBase && (
            <button
              type="button"
              style={{
                position: 'absolute',
                right: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                color: '#CBD5E1',
                padding: '0.35rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setInputText('')}
              title="Borrar texto"
              aria-label="Borrar texto"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Quick Word Presets */}
        <div className="cp-quick-presets" style={{ marginTop: '0.85rem' }}>
          <span className="cp-quick-label">
            <Sparkles size={13} /> Sugerencias rápidas:
          </span>
          <div className="cp-quick-chips">
            {QUICK_BASE_WORDS.map((word) => (
              <button
                key={word}
                type="button"
                onClick={() => setInputText(word)}
                style={{
                  background: cleanBase.toLowerCase() === word.toLowerCase() ? 'rgba(99, 102, 241, 0.25)' : undefined,
                  borderColor: cleanBase.toLowerCase() === word.toLowerCase() ? '#818CF8' : undefined,
                  color: cleanBase.toLowerCase() === word.toLowerCase() ? '#FFF' : undefined,
                  fontWeight: cleanBase.toLowerCase() === word.toLowerCase() ? 700 : undefined
                }}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Style & Category Selection Tabs */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Elige una categoría:
          </span>
          <span style={{ fontSize: '0.82rem', color: '#818CF8' }}>
            {activeCategoryObj.icon} {activeCategoryObj.description}
          </span>
        </div>

        <div className="cp-categories-scroll">
          {GAME_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setShowOnlyFavorites(false);
                }}
                className={`cp-tag-chip ${isActive ? 'active' : ''}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem'
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
        <div className="cp-search-wrapper" style={{ flex: 1, minWidth: '240px' }}>
          <Search size={15} className="cp-search-icon" />
          <input
            type="text"
            className="cp-search-input"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder={`Filtrar nombres ${activeCategoryObj.name.toLowerCase()}...`}
          />
          {searchFilter && (
            <button
              type="button"
              className="cp-search-clear"
              onClick={() => setSearchFilter('')}
              title="Limpiar búsqueda"
            >
              <X size={13} />
            </button>
          )}
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            type="button"
            onClick={() => setGenerationSeed((prev) => prev + 1)}
            className="cp-tag-chip"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.55rem 0.9rem', fontSize: '0.85rem' }}
          >
            <Sparkles size={13} color="#818CF8" />
            <span>Generar nombres</span>
          </button>

          {favorites.length > 0 && (
            <button
              type="button"
              className={`cp-tag-chip fav-chip ${showOnlyFavorites ? 'active' : ''}`}
              onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.55rem 1rem', fontSize: '0.85rem' }}
            >
              <Star size={14} fill={showOnlyFavorites ? 'currentColor' : 'none'} />
              <span>Mis Favoritos ({favorites.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div
        className="cp-results-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          margin: '0.25rem 0'
        }}
      >
        <span>
          Mostrando <strong>{filteredList.length}</strong> opciones para{' '}
          <strong style={{ color: '#FFF' }}>"{cleanBase || activeCategoryObj.name}"</strong>
        </span>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          Haz clic en cualquier nombre o botón para copiar
        </span>
      </div>

      {/* Results Grid with Official cp-style-card styling */}
      <div className="cp-results-grid">
        {filteredList.map((item) => {
          const isCopied = copiedId === item.id;
          const isFavorite = favorites.includes(item.name);

          return (
            <div
              key={item.id}
              className={`cp-style-card ${isCopied ? 'copied' : ''}`}
            >
              <div className="cp-card-header">
                <span className="cp-card-name" style={{ fontSize: '0.82rem', color: '#818CF8' }}>
                  {item.styleLabel}
                </span>

                <button
                  type="button"
                  className="cp-fav-btn"
                  onClick={(e) => toggleFavorite(item.name, e)}
                  title={isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                  aria-label="Favorito"
                >
                  <Star
                    size={14}
                    fill={isFavorite ? '#F59E0B' : 'none'}
                    color={isFavorite ? '#F59E0B' : 'var(--text-muted)'}
                  />
                </button>
              </div>

              {/* Display Result Name in full-width preview container */}
              <div
                className="cp-card-preview"
                onClick={() => handleCopy(item.name, item.id)}
                style={{ cursor: 'pointer' }}
                title="Haz clic para copiar"
              >
                <span
                  className="cp-card-text"
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    display: 'block'
                  }}
                >
                  {item.name}
                </span>
              </div>

              {/* Copy Action Button */}
              <div className="cp-card-actions" style={{ marginTop: '0.65rem' }}>
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

      {filteredList.length === 0 && (
        <div style={{ padding: '2.5rem', textAlign: 'center', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
            No se encontraron nombres con los filtros seleccionados.
          </p>
          <button
            type="button"
            className="cp-copy-all-btn"
            style={{ marginTop: '1rem', display: 'inline-flex' }}
            onClick={() => {
              setSearchFilter('');
              setShowOnlyFavorites(false);
            }}
          >
            Restablecer búsqueda
          </button>
        </div>
      )}

      {/* Compatibility Notice Banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem',
          padding: '0.9rem 1.15rem',
          borderRadius: '12px',
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6
        }}
      >
        <AlertCircle size={17} color="#818CF8" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong style={{ color: '#FFF' }}>Aviso de compatibilidad:</strong> Los nombres generados utilizan caracteres y símbolos del estándar <strong>Unicode</strong> universal, no fuentes tipográficas instaladas en el juego. Cada videojuego y sistema operativo renderiza o filtra los caracteres de forma distinta. Te aconsejamos comprobar siempre el nick pegándolo en el campo de prueba de tu juego antes de confirmar cambios definitivos.
        </div>
      </div>
    </div>
  );
}
