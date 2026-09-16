'use client';

import React, { useState, useMemo, useEffect, useDeferredValue } from 'react';
import { Copy, Check, X, Search, Sparkles, Star, Zap, ClipboardPaste } from 'lucide-react';
import { BIO_STYLES_COLLECTION, type BioStyleItem } from '@/data/bioStyles';
import { sanitizeInput } from '@/lib/unicode/normalize';
import BioPreview from './BioPreview';

const BIO_PRESET_CHIPS = [
  'Mi Nombre',
  'Creador Digital',
  'Fotografía',
  'Viajes',
  'Fitness',
  'Música',
  'Negocio',
  'Estudiante',
  'Freelancer',
  'Lifestyle'
];

export default function BioGenerator() {
  const [inputText, setInputText] = useState('Creativo digital | Fotografía | Viajes');
  const deferredInputText = useDeferredValue(inputText);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('lb_bio_font_favs');
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
        localStorage.setItem('lb_bio_font_favs', JSON.stringify(next));
      } catch {
        // Fallback
      }
      return next;
    });
  };

  const defaultText = 'Creativo digital | Fotografía | Viajes';
  const textToTransform = sanitizeInput(deferredInputText.trim() || defaultText, 300);

  const filteredStyles = useMemo(() => {
    return BIO_STYLES_COLLECTION.filter((style) => {
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

  const handleCopyAllBio = async () => {
    const mainTransformed = filteredStyles[0]
      ? filteredStyles[0].transform(textToTransform)
      : textToTransform;

    try {
      await navigator.clipboard.writeText(mainTransformed);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = mainTransformed;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  const handlePaste = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) setInputText(text);
      }
    } catch {
      // Fallback
    }
  };

  const currentStyledBio = filteredStyles[0]
    ? filteredStyles[0].transform(textToTransform)
    : textToTransform;

  return (
    <section className="copy-paste-tool-section" id="generador-bio-instagram">
      <div className="cp-panel">
        {/* Quick Fill Presets */}
        <div className="cp-quick-presets">
          <span className="cp-quick-label">
            <Zap size={13} className="cg-icon" /> Pruebas rápidas:
          </span>
          <div className="cp-quick-chips">
            {BIO_PRESET_CHIPS.map((chip) => (
              <button key={chip} type="button" onClick={() => setInputText(chip)}>
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Text Area Box */}
        <div className="cp-input-block">
          <div className="cp-input-header">
            <label htmlFor="bio-font-input" className="cp-input-title">
              <Sparkles size={16} className="cg-icon" />
              <span>Escribe el texto de tu bio de Instagram</span>
            </label>
            <div className="cp-input-actions">
              <button
                type="button"
                className="cp-clear-btn"
                onClick={handlePaste}
                title="Pegar del portapapeles"
              >
                <ClipboardPaste size={14} />
                <span>Pegar</span>
              </button>
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
              <span className="cp-char-counter">Caracteres: {inputText.length}</span>
            </div>
          </div>

          <div className="cp-textarea-wrapper">
            <textarea
              id="bio-font-input"
              className="cp-textarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe el texto de tu bio aquí (admite múltiples líneas)..."
              maxLength={300}
              rows={3}
            />
          </div>
        </div>

        {/* Profile Preview Box */}
        <BioPreview styledText={currentStyledBio} />

        {/* Filter and Search Controls */}
        <div className="cp-filter-bar mt-6">
          <div className="cp-search-wrapper">
            <Search size={15} className="cp-search-icon" />
            <input
              type="text"
              className="cp-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar estilo para bio (ej. cursiva, elegante, versalitas, aesthetic...)"
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
                Todas ({BIO_STYLES_COLLECTION.length})
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
                className={`cp-tag-chip ${selectedCategory === 'Minimalistas' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('Minimalistas');
                  setShowOnlyFavorites(false);
                }}
              >
                ☕ Minimalistas
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
              onClick={handleCopyAllBio}
              title="Copiar Bio Completa"
            >
              {copiedAll ? (
                <>
                  <Check size={14} />
                  <span>¡Bio Copiada!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copiar Bio</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Header */}
        <div className="cp-results-header">
          <span>{filteredStyles.length} estilos de bio disponibles</span>
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

                <div className="cp-card-preview" style={{ whiteSpace: 'pre-line' }}>
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
