'use client';

import React from 'react';
import { Search, X, SlidersHorizontal, EyeOff } from 'lucide-react';

export type SortOption = 'Popular' | 'A-Z' | 'Newest' | 'Favorites';

interface StyleSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  hideExperimental: boolean;
  onToggleExperimental: (hide: boolean) => void;
  resultsCount: number;
}

export const StyleSearch: React.FC<StyleSearchProps> = ({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  hideExperimental,
  onToggleExperimental,
  resultsCount
}) => {
  return (
    <div className="search-controls-bar">
      <div className="search-input-wrapper">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar fuentes (ej: cursiva, gotica, aesthetic, gaming)..."
          className="search-input"
          aria-label="Buscar estilos de fuentes"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="search-clear-btn"
            title="Limpiar búsqueda"
            type="button"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="controls-right">
        <div className="sort-wrapper">
          <SlidersHorizontal size={16} className="sort-icon" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="sort-select"
            aria-label="Ordenar estilos"
          >
            <option value="Popular">Más Populares</option>
            <option value="A-Z">Nombre (A - Z)</option>
            <option value="Newest">Más Nuevos</option>
            <option value="Favorites">Mis Favoritos</option>
          </select>
        </div>

        <label className="toggle-experimental">
          <input
            type="checkbox"
            checked={hideExperimental}
            onChange={(e) => onToggleExperimental(e.target.checked)}
          />
          <EyeOff size={14} />
          <span>Ocultar experimentales</span>
        </label>
      </div>
    </div>
  );
};
