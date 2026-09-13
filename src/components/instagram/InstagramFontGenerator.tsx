'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Copy, Check, X, Search, Sparkles, Star, Zap } from 'lucide-react';
import { INSTAGRAM_STYLES, type InstagramStyleItem } from '@/data/instagramStyles';
import { sanitizeInput } from '@/lib/unicode/normalize';

const INSTAGRAM_PRESETS = [
  'Mi Perfil',
  'Mi Nombre',
  'Mi Bio',
  'Hola Mundo',
  'Creador Digital',
  'Fotografía',
  'Viajes',
  'Lifestyle',
  'Gaming',
  'Música'
];

export default function InstagramFontGenerator() {
  const [inputText, setInputText] = useState('Mi Perfil');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('lb_ig_font_favs');
      if (savedFavs) {
        setFavorites(JSON.parse(savedFavs));
      }
    } catch {
      // Fallback
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('lb_ig_font_favs', JSON.stringify(next));
      } catch {
        // Fallback
      }
      return next;
    });
  };

  const defaultText = 'Mi Perfil';
  const textToTransform = sanitizeInput(inputText.trim() || defaultText, 250);

  const filteredStyles = useMemo(() => {
    return INSTAGRAM_STYLES.filter((style) => {
      if (showOnlyFavorites && !favorites.includes(style.id)) {
        return false;
      }

      const matchesSearch =
        searchQuery.trim() === '' ||
        style.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || style.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, favorites, showOnlyFavorites]);

  const handleCopySingle = async (id: string, text: string) => {
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

  const handleCopyAll = async () => {
    const allResults = filteredStyles
      .map((s) => `${s.name}: ${s.transform(textToTransform)}`)
      .join('\n');

    try {
      await navigator.clipboard.writeText(allResults);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = allResults;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  return (
    <section className="copy-paste-tool-section" id="generador-letras-instagram">
      <div className="cp-panel">
        {/* Quick Fill Presets */}
        <div className="cp-quick-presets">
          <span className="cp-quick-label">
            <Zap size={13} className="cg-icon" /> Pruebas rápidas:
          </span>
          <div className="cp-quick-chips">
            {INSTAGRAM_PRESETS.map((preset) => (
              <button key={preset} type="button" onClick={() => setInputText(preset)}>
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Text Input Box */}
        <div className="cp-input-block">
          <div className="cp-input-header">
            <label htmlFor="ig-font-input" className="cp-input-title">
              <Sparkles size={16} className="cg-icon" />
              <span>Escribe tu texto para Instagram (Nombre, Bio, Caption...)</span>
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
              <span className="cp-char-counter">{inputText.length} / 250</span>
            </div>
          </div>

          <div className="cp-textarea-wrapper">
            <textarea
              id="ig-font-input"
              className="cp-textarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu texto para Instagram..."
              maxLength={250}
              rows={2}
            />
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="cp-filter-bar">
          <div className="cp-search-wrapper">
            <Search size={15} className="cp-search-icon" />
            <input
              type="text"
              className="cp-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar estilo para Instagram (ej. cursiva, elegante, negrita, aesthetic...)"
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
              <button
                type="button"
                className={`cp-tag-chip ${selectedCategory === 'all' && !showOnlyFavorites ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('all');
                  setShowOnlyFavorites(false);
                }}
              >
                Todas ({INSTAGRAM_STYLES.length})
              </button>
              <button
                type="button"
                className={`cp-tag-chip ${selectedCategory === 'Cursivas' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Cursivas');
                  setShowOnlyFavorites(false);
                }}
              >
                ✒️ Cursivas
              </button>
              <button
                type="button"
                className={`cp-tag-chip ${selectedCategory === 'Elegantes' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Elegantes');
                  setShowOnlyFavorites(false);
                }}
              >
                ✨ Elegantes
              </button>
              <button
                type="button"
                className={`cp-tag-chip ${selectedCategory === 'Negritas' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Negritas');
                  setShowOnlyFavorites(false);
                }}
              >
                💪 Negritas
              </button>
              <button
                type="button"
                className={`cp-tag-chip ${selectedCategory === 'Aesthetic' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Aesthetic');
                  setShowOnlyFavorites(false);
                }}
              >
                🌸 Aesthetic
              </button>
              <button
                type="button"
                className={`cp-tag-chip ${selectedCategory === 'Decorativas' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Decorativas');
                  setShowOnlyFavorites(false);
                }}
              >
                👑 Decorativas
              </button>

              {favorites.length > 0 && (
                <button
                  type="button"
                  className={`cp-tag-chip fav-chip ${showOnlyFavorites ? 'active' : ''}`}
                  onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                >
                  <Star size={12} fill="currentColor" /> Favoritas ({favorites.length})
                </button>
              )}
            </div>

            <button
              type="button"
              className={`cp-copy-all-btn ${copiedAll ? 'copied' : ''}`}
              onClick={handleCopyAll}
              title="Copiar todos los resultados visibles"
            >
              {copiedAll ? (
                <>
                  <Check size={14} />
                  <span>¡Copiados!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copiar Todos</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Header */}
        <div className="cp-results-header">
          <span>{filteredStyles.length} fuentes para Instagram listas para copiar</span>
        </div>

        {/* Results Grid */}
        <div className="cp-results-grid">
          {filteredStyles.map((style) => {
            const transformed = style.transform(textToTransform);
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
                    onClick={() => toggleFavorite(style.id)}
                    title={isFav ? 'Quitar de favoritas' : 'Guardar en favoritas'}
                    aria-label={isFav ? 'Quitar de favoritas' : 'Guardar en favoritas'}
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
                    onClick={() => handleCopySingle(style.id, transformed)}
                    aria-label={isCopied ? 'Copiado' : `Copiar en estilo ${style.name}`}
                  >
                    {isCopied ? (
                      <>
                        <Check size={14} />
                        <span>Copiado</span>
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
    </section>
  );
}
