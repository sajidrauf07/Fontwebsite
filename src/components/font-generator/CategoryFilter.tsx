'use client';

import React, { useRef } from 'react';
import { CATEGORIES, CategoryType } from '@/data/fontStyles';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  favoritesCount: number;
  totalCount: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  favoritesCount,
  totalCount
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="category-filter-wrapper">
      <button
        onClick={() => scroll('left')}
        className="scroll-arrow arrow-left"
        aria-label="Desplazar categorías a la izquierda"
        type="button"
      >
        <ChevronLeft size={18} />
      </button>

      <div className="category-scroll-container" ref={scrollContainerRef}>
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`category-pill ${isActive ? 'active' : ''}`}
              type="button"
            >
              <span>{cat.label}</span>
              {cat.id === 'Popular' && <span className="pill-badge">Popular</span>}
            </button>
          );
        })}

        <button
          onClick={() => onSelectCategory('Favorites' as any)}
          className={`category-pill pill-favorite ${selectedCategory === ('Favorites' as any) ? 'active' : ''}`}
          type="button"
        >
          <span>❤️ Favoritos</span>
          <span className="pill-count">{favoritesCount}</span>
        </button>
      </div>

      <button
        onClick={() => scroll('right')}
        className="scroll-arrow arrow-right"
        aria-label="Desplazar categorías a la derecha"
        type="button"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};
