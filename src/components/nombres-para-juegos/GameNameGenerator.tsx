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
  CheckCircle2
} from 'lucide-react';
import {
  GAME_CATEGORIES,
  QUICK_BASE_WORDS,
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

export default function GameNameGenerator() {
  const [inputText, setInputText] = useState('Nova');
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

  const cleanBase = useMemo(() => {
    return deferredInputText.trim().slice(0, 30);
  }, [deferredInputText]);

  // Generate deterministic variations without duplicates
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

    shuffledWrappers.forEach((wrap) => {
      addNick(`${wrap.prefix}${cleanBase}${wrap.suffix}`, catData.name, wrap.styleName);
    });

    // 2. Affix Combinations (Suffixes & Prefixes)
    const suffixes = affixes.suffixes;
    const prefixes = affixes.prefixes;

    suffixes.forEach((suffix) => {
      if (suffix) {
        addNick(`${cleanBase}${suffix}`, catData.name, `Sufijo ${suffix}`);
      }
    });

    prefixes.forEach((prefix) => {
      if (prefix) {
        addNick(`${prefix}${cleanBase}`, catData.name, `Prefijo ${prefix}`);
      }
    });

    // 3. Combined Prefix + Suffix
    if (prefixes.length > 0 && suffixes.length > 0) {
      for (let i = 0; i < Math.min(6, prefixes.length); i++) {
        const p = prefixes[(i + generationSeed) % prefixes.length];
        const s = suffixes[(i + generationSeed * 2) % suffixes.length];
        if (p && s) {
          addNick(`${p}${cleanBase}${s}`, catData.name, 'Compuesto');
        }
      }
    }

    // 4. Unicode Typography Transforms
    UNICODE_TEXT_TRANSFORMS.forEach((trans) => {
      try {
        const transformed = trans.transform(cleanBase);
        addNick(transformed, catData.name, trans.name);
      } catch {
        // Fallback
      }
    });

    // 5. Stylized combinations (Symbol + Affix)
    const topSymbols = ['亗', '『', '★', '⚡', '✦'];
    topSymbols.forEach((sym) => {
      const suff = suffixes[(generationSeed + 1) % suffixes.length] || 'X';
      if (sym === '『') {
        addNick(`『${cleanBase}${suff}』`, catData.name, 'Estilo Gótico');
      } else {
        addNick(`${sym}${cleanBase}${suff}${sym}`, catData.name, 'Combinado Pro');
      }
    });

    return list;
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
      {/* Tool Header & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
            <Gamepad2 size={13} className="text-indigo-400" />
            <span>Generador de Nombres para Juegos</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Crea tu nick personalizado
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Escribe una palabra o apodo, elige tu estilo y copia el nick que más te guste en 1 clic.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setGenerationSeed((prev) => prev + 1)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-bold transition-all shadow-sm active:scale-95 self-start sm:self-auto"
          title="Generar nueva tanda de variaciones"
        >
          <RefreshCw size={14} className="text-indigo-400" />
          <span>Otra tanda</span>
        </button>
      </div>

      {/* Main Text Input Field */}
      <div className="cp-input-block">
        <label htmlFor="game-name-input" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
          Escribe tu nombre o palabra:
        </label>
        <div className="relative flex items-center">
          <input
            id="game-name-input"
            type="text"
            className="cp-textarea w-full text-base sm:text-lg font-semibold"
            style={{ height: '52px', paddingTop: '12px', paddingBottom: '12px', paddingRight: cleanBase ? '44px' : '16px' }}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ejemplo: Nova, Luna, Rayo, Nexo..."
            maxLength={35}
            aria-label="Escribe tu nombre o palabra para juegos"
          />
          {cleanBase && (
            <button
              type="button"
              className="absolute right-3 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              onClick={() => setInputText('')}
              title="Borrar texto"
              aria-label="Borrar texto"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Quick Word Presets */}
        <div className="cp-quick-presets mt-3">
          <span className="cp-quick-label">
            <Sparkles size={12} /> Sugerencias rápidas:
          </span>
          <div className="cp-quick-chips">
            {QUICK_BASE_WORDS.map((word) => (
              <button
                key={word}
                type="button"
                onClick={() => setInputText(word)}
                className={cleanBase.toLowerCase() === word.toLowerCase() ? 'active font-bold text-indigo-300' : ''}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Style & Category Selection Tabs */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Elige un estilo:
          </span>
          <span className="text-xs text-slate-400">
            {activeCategoryObj.icon} {activeCategoryObj.description}
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
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
                className={`cp-tag-chip flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold px-3.5 py-2 rounded-xl transition-all ${
                  isActive ? 'active' : ''
                }`}
                style={{
                  background: isActive ? 'rgba(99, 102, 241, 0.25)' : undefined,
                  borderColor: isActive ? '#818cf8' : undefined,
                  color: isActive ? '#e0e7ff' : undefined
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
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <div className="cp-search-wrapper flex-1">
          <Search size={15} className="cp-search-icon" />
          <input
            type="text"
            className="cp-search-input"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder={`Buscar entre nombres ${activeCategoryObj.name.toLowerCase()}...`}
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

        {favorites.length > 0 && (
          <button
            type="button"
            className={`cp-tag-chip fav-chip self-start sm:self-auto text-xs py-2 px-3 ${
              showOnlyFavorites ? 'active' : ''
            }`}
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
          >
            <Star size={13} fill={showOnlyFavorites ? 'currentColor' : 'none'} />
            <span>Mis Favoritos ({favorites.length})</span>
          </button>
        )}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Mostrando <strong>{filteredList.length}</strong> opciones para{' '}
          <span className="text-white font-semibold">"{cleanBase || activeCategoryObj.name}"</span>
        </span>
        <span className="text-slate-500 hidden sm:inline">
          Haz clic en cualquier nombre o botón para copiar
        </span>
      </div>

      {/* Results Grid */}
      <div className="cp-results-grid">
        {filteredList.map((item) => {
          const isCopied = copiedId === item.id;
          const isFavorite = favorites.includes(item.name);

          return (
            <div
              key={item.id}
              className={`cp-style-card cursor-pointer group ${isCopied ? 'copied' : ''}`}
              onClick={() => handleCopy(item.name, item.id)}
              title="Haz clic para copiar"
            >
              <div className="cp-card-header">
                <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                  {item.styleLabel}
                </span>

                <button
                  type="button"
                  className="cp-fav-btn text-slate-500 hover:text-amber-400 transition-colors"
                  onClick={(e) => toggleFavorite(item.name, e)}
                  title={isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                  aria-label="Favorito"
                >
                  <Star
                    size={14}
                    fill={isFavorite ? '#F59E0B' : 'none'}
                    color={isFavorite ? '#F59E0B' : 'currentColor'}
                  />
                </button>
              </div>

              {/* Display Result Name */}
              <div
                className="my-1.5 text-base sm:text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors break-words select-all"
                style={{ minHeight: '28px' }}
              >
                {item.name}
              </div>

              {/* Copy Action Button */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  {isCopied ? 'Listo para pegar' : activeCategoryObj.badge}
                </span>

                <button
                  type="button"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                    isCopied
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(item.name, item.id);
                  }}
                >
                  {isCopied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
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
            </div>
          );
        })}
      </div>

      {filteredList.length === 0 && (
        <div className="p-8 text-center bg-slate-900/60 rounded-xl border border-slate-800">
          <p className="text-sm text-slate-400">
            No se encontraron nombres con los filtros seleccionados.
          </p>
          <button
            type="button"
            className="mt-3 text-xs text-indigo-400 underline font-semibold"
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
      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
        <AlertCircle size={16} className="text-indigo-400 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Aviso de compatibilidad:</strong> Los nombres generados utilizan caracteres y símbolos del estándar <strong>Unicode</strong> universal, no fuentes tipográficas instaladas en el juego. Cada videojuego y sistema operativo renderiza o filtra los caracteres de forma distinta. Te aconsejamos comprobar siempre el nick pegándolo en el campo de prueba de tu juego antes de confirmar cambios definitivos.
        </p>
      </div>
    </div>
  );
}
