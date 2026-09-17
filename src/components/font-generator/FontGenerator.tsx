'use client';

import React, { useState, useEffect, useMemo, useCallback, useDeferredValue } from 'react';
import { ALL_FONT_STYLES, FontStyle, CategoryType } from '@/data/fontStyles';
import { TextInput } from './TextInput';
import { CategoryFilter } from './CategoryFilter';
import { StyleSearch, SortOption } from './StyleSearch';
import { StyleCard } from './StyleCard';
import { RecentlyUsed } from './RecentlyUsed';
import { Sparkles, Layers, SlidersHorizontal } from 'lucide-react';

interface RecentStyleItem {
  id: string;
  name: string;
  text: string;
  timestamp: number;
}

const ITEMS_PER_PAGE = 18;

export const FontGenerator: React.FC = () => {
  const [inputText, setInputText] = useState<string>('Letras Bonitas');
  // Defer the input for heavy style transformations so mobile keyboard typing remains 60fps instant
  const deferredInputText = useDeferredValue(inputText);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('Popular');
  const [hideExperimental, setHideExperimental] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentItems, setRecentItems] = useState<RecentStyleItem[]>([]);
  const [displayCount, setDisplayCount] = useState<number>(ITEMS_PER_PAGE);
  const [copiedAllState, setCopiedAllState] = useState<boolean>(false);

  // Load local storage on mount safely
  useEffect(() => {
    try {
      const storedFavs = localStorage.getItem('letras_bonitas_favs');
      if (storedFavs) setFavorites(JSON.parse(storedFavs));

      const storedRecent = localStorage.getItem('letras_bonitas_recent');
      if (storedRecent) setRecentItems(JSON.parse(storedRecent));
    } catch (e) {
      console.error('LocalStorage load error:', e);
    }
  }, []);

  // Save favorites to local storage
  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('letras_bonitas_favs', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  }, []);

  // Track recent copied styles
  const handleCopied = useCallback((id: string, text: string) => {
    const styleObj = ALL_FONT_STYLES.find((s) => s.id === id);
    if (!styleObj) return;

    setRecentItems((prev) => {
      const filtered = prev.filter((item) => item.id !== id);
      const updated = [
        { id, name: styleObj.name, text, timestamp: Date.now() },
        ...filtered
      ].slice(0, 10);

      try {
        localStorage.setItem('letras_bonitas_recent', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  }, []);

  // Reset pagination display whenever search or filters change
  useEffect(() => {
    setDisplayCount(ITEMS_PER_PAGE);
  }, [selectedCategory, searchTerm, sortBy, hideExperimental]);

  // Filter and sort the 350+ styles engine catalog efficiently
  const filteredStyles = useMemo(() => {
    return ALL_FONT_STYLES.filter((style) => {
      // Experimental filter
      if (hideExperimental && style.isExperimental) return false;

      // Category filter
      if (selectedCategory === ('Favorites' as any)) {
        if (!favorites.includes(style.id)) return false;
      } else if (selectedCategory === 'Popular') {
        if (style.popularity < 90) return false;
      } else if (selectedCategory !== 'All') {
        if (style.category !== selectedCategory) return false;
      }

      // Search filter
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const matchesName = style.name.toLowerCase().includes(query);
        const matchesCategory = style.category.toLowerCase().includes(query);
        const matchesTags = style.tags.some((tag) => tag.toLowerCase().includes(query));
        if (!matchesName && !matchesCategory && !matchesTags) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'Favorites') {
        const aFav = favorites.includes(a.id) ? 1 : 0;
        const bFav = favorites.includes(b.id) ? 1 : 0;
        return bFav - aFav;
      }
      if (sortBy === 'A-Z') {
        return a.name.localeCompare(b.name, 'es');
      }
      if (sortBy === 'Newest') {
        return b.id.localeCompare(a.id);
      }
      // Default: Popular
      return b.popularity - a.popularity;
    });
  }, [selectedCategory, searchTerm, sortBy, hideExperimental, favorites]);

  // Copy All results
  const handleCopyAll = async () => {
    try {
      const raw = inputText.trim() || 'Letras Bonitas';
      const allText = filteredStyles
        .slice(0, 50)
        .map((s) => `${s.name}:\n${s.transform(raw)}`)
        .join('\n\n');

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(allText);
      }
      setCopiedAllState(true);
      setTimeout(() => setCopiedAllState(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setSearchTerm('');
    setSortBy('Popular');
    setHideExperimental(false);
  };

  const visibleStyles = filteredStyles.slice(0, displayCount);
  const hasMore = displayCount < filteredStyles.length;

  return (
    <section className="main-generator-section" id="generador">
      <div className="generator-container">
        {/* Main Input Text Area */}
        <TextInput
          value={inputText}
          onChange={setInputText}
          onClear={() => setInputText('')}
          onCopyAll={handleCopyAll}
          onResetFilters={resetAllFilters}
          copiedAllState={copiedAllState}
        />

        {/* Recently Copied Bar */}
        <RecentlyUsed
          recentItems={recentItems}
          onClearRecent={() => {
            setRecentItems([]);
            localStorage.removeItem('letras_bonitas_recent');
          }}
        />

        {/* Category Pills Slider */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          favoritesCount={favorites.length}
          totalCount={filteredStyles.length}
        />

        {/* Search, Sort and Experimental Toggle Controls */}
        <StyleSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
          hideExperimental={hideExperimental}
          onToggleExperimental={setHideExperimental}
          resultsCount={filteredStyles.length}
        />

        {/* Active Filters Summary Header */}
        <div className="results-counter-bar">
          <div className="counter-left">
            <Layers size={18} className="counter-icon" />
            <span>
              Mostrando <strong>{visibleStyles.length}</strong> de{' '}
              <strong>{filteredStyles.length}</strong> estilos
            </span>
          </div>

          {(searchTerm || selectedCategory !== 'All' || hideExperimental) && (
            <button onClick={resetAllFilters} className="reset-active-link" type="button">
              Limpiar filtros activos
            </button>
          )}
        </div>

        {/* Responsive Grid of Font Style Cards */}
        {visibleStyles.length > 0 ? (
          <div className="styles-responsive-grid">
            {visibleStyles.map((style) => (
              <StyleCard
                key={style.id}
                styleDef={style}
                inputText={deferredInputText}
                isFavorite={favorites.includes(style.id)}
                onToggleFavorite={toggleFavorite}
                onCopied={handleCopied}
              />
            ))}
          </div>
        ) : (
          <div className="empty-results-box">
            <Sparkles size={36} className="empty-icon" />
            <h3>No se encontraron estilos de letras</h3>
            <p>
              Prueba buscando otro término como "cursiva", "gotica", "aesthetic" o cambia de categoría.
            </p>
            <button onClick={resetAllFilters} className="btn-secondary" type="button">
              Ver todas las fuentes
            </button>
          </div>
        )}

        {/* Load More Button for 350+ Styles catalog */}
        {hasMore && (
          <div className="load-more-wrapper">
            <button
              onClick={() => setDisplayCount((prev) => prev + ITEMS_PER_PAGE)}
              className="load-more-btn"
              type="button"
            >
              <span>Ver más estilos ({filteredStyles.length - displayCount} restantes)</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
