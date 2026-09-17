'use client';

import React, { useState, useEffect } from 'react';
import { ListTree, ChevronDown } from 'lucide-react';

export interface TOCItem {
  id: string;
  title?: string;
  label?: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-80px 0% -60% 0%',
      threshold: 0.1
    });

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
      setActiveId(id);
      setMobileOpen(false);
    }
  };

  return (
    <nav className="article-toc-wrapper" aria-label="Índice del artículo">
      <div className="toc-header" onClick={() => setMobileOpen(!mobileOpen)}>
        <div className="toc-title-group">
          <ListTree size={18} className="toc-icon" aria-hidden="true" />
          <span className="toc-title">Contenido del artículo</span>
        </div>
        <button
          type="button"
          className="toc-mobile-toggle"
          aria-expanded={mobileOpen}
          aria-label="Alternar índice"
        >
          <ChevronDown
            size={18}
            className={`toc-chevron ${mobileOpen ? 'rotated' : ''}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className={`toc-list-container ${mobileOpen ? 'mobile-expanded' : ''}`}>
        <ol className="toc-list">
          {items.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className={`toc-item ${isActive ? 'is-active' : ''}`}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollTo(item.id, e)}
                  className={`toc-link ${isActive ? 'active' : ''}`}
                >
                  <span className="toc-num">{String(index + 1).padStart(2, '0')}</span>
                  <span className="toc-text">{item.title || item.label}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
