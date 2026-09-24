'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  ArrowRight,
  Compass,
  Home,
  Check,
  Sparkles
} from 'lucide-react';
import {
  SILO_NAVIGATION,
  isPathActive,
  type SiloNavItem
} from '@/config/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Accordion state - all collapsed by default to keep the navigation compact and scannable
  const [expandedSilos, setExpandedSilos] = useState<Record<string, boolean>>({});

  // Lock body scroll cleanly when mobile menu is open without layout shifts
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSilo = (siloId: string) => {
    setExpandedSilos(prev => ({
      ...prev,
      [siloId]: !prev[siloId]
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      id="mobile-nav-panel"
      className="mobile-nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación principal"
      ref={navRef}
    >
      {/* Semi-transparent Backdrop for outside taps */}
      <div
        className="mobile-nav-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Scrollable Sheet anchored below Header */}
      <div className="mobile-nav-sheet">
        {/* Featured Primary CTA: Ir al Generador Principal */}
        <div className="mobile-nav-cta-card">
          <a
            href="/#generador"
            onClick={onClose}
            className="mobile-nav-cta-link"
          >
            <div className="mobile-nav-cta-icon-wrapper">
              <Compass size={20} className="mobile-nav-cta-icon" />
            </div>
            <div className="mobile-nav-cta-info">
              <span className="mobile-nav-cta-title">
                Ir al Generador Principal
                <Sparkles size={13} className="mobile-nav-cta-sparkle" />
              </span>
              <span className="mobile-nav-cta-desc">350+ fuentes para copiar y pegar</span>
            </div>
            <ArrowRight size={17} className="mobile-nav-cta-arrow" />
          </a>
        </div>

        {/* Navigation List */}
        <nav className="mobile-silo-nav" aria-label="Navegación de categorías móvil">
          {/* Inicio Link */}
          <div className="mobile-nav-root-item">
            <Link
              href="/"
              onClick={onClose}
              className={`mobile-nav-direct-link ${pathname === '/' ? 'active' : ''}`}
            >
              <div className="mobile-nav-link-left">
                <span className="mobile-nav-icon-box">
                  <Home size={16} />
                </span>
                <span className="mobile-nav-label">Inicio (Generador)</span>
              </div>
              {pathname === '/' && <span className="mobile-active-dot" aria-label="Página actual" />}
            </Link>
          </div>

          {/* SILO Accordion Categories */}
          {SILO_NAVIGATION.map((silo: SiloNavItem) => {
            const isSiloActive = isPathActive(pathname, silo.href, false);
            const isExpanded = !!expandedSilos[silo.id];

            return (
              <div
                key={silo.id}
                className={`mobile-silo-block ${isSiloActive ? 'is-active-silo' : ''} ${isExpanded ? 'is-expanded' : ''} theme-${silo.colorTheme}`}
              >
                <div className="mobile-silo-row">
                  {/* Left: Parent Link with Title & optional Active Badge */}
                  <Link
                    href={silo.href}
                    onClick={onClose}
                    className={`mobile-silo-parent-link ${isSiloActive ? 'active' : ''}`}
                  >
                    <span className="mobile-silo-title">{silo.title}</span>
                    {isSiloActive && (
                      <span className="mobile-silo-active-badge">Activo</span>
                    )}
                  </Link>

                  {/* Right: Dedicated Expand/Collapse Chevron Button */}
                  <button
                    type="button"
                    onClick={() => toggleSilo(silo.id)}
                    className="mobile-silo-toggle-btn"
                    aria-expanded={isExpanded}
                    aria-controls={`mobile-silo-panel-${silo.id}`}
                    aria-label={`${isExpanded ? 'Contraer' : 'Expandir'} subpáginas de ${silo.title}`}
                  >
                    <ChevronDown
                      size={18}
                      className={`mobile-silo-chevron ${isExpanded ? 'rotated' : ''}`}
                    />
                  </button>
                </div>

                {/* Subpages Compact List (No bloated multi-line descriptions) */}
                {isExpanded && (
                  <div
                    id={`mobile-silo-panel-${silo.id}`}
                    className="mobile-silo-panel open"
                  >
                    <ul className="mobile-silo-child-list">
                      {/* Overview Link for the Silo */}
                      <li className="mobile-silo-child-item">
                        <Link
                          href={silo.href}
                          onClick={onClose}
                          className={`mobile-silo-child-link parent-overview ${pathname === silo.href ? 'current' : ''}`}
                        >
                          <span className="mobile-child-bullet" />
                          <span className="mobile-child-text font-medium">{silo.viewAllText}</span>
                          <ArrowRight size={14} className="mobile-child-arrow" />
                        </Link>
                      </li>

                      {/* Child Pages */}
                      {silo.children.map((child) => {
                        const isChildActive = isPathActive(pathname, child.href, true);
                        return (
                          <li key={child.href} className="mobile-silo-child-item">
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className={`mobile-silo-child-link ${isChildActive ? 'current' : ''}`}
                            >
                              <span className="mobile-child-bullet" />
                              <span className="mobile-child-text">{child.title}</span>
                              {isChildActive && (
                                <span className="mobile-current-check" title="Página actual">
                                  <Check size={14} />
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Quick Footer Links inside Mobile Sheet */}
        <div className="mobile-nav-sheet-footer">
          <div className="mobile-sheet-footer-links">
            <Link href="/simbolos/" onClick={onClose} className="mobile-sheet-link">Símbolos</Link>
            <span className="mobile-sheet-dot">•</span>
            <Link href="/politica-de-privacidad/" onClick={onClose} className="mobile-sheet-link">Privacidad</Link>
            <span className="mobile-sheet-dot">•</span>
            <Link href="/contacto/" onClick={onClose} className="mobile-sheet-link">Contacto</Link>
          </div>
          <p className="mobile-sheet-copy">The Letras Bonitas — Generador de Fuentes</p>
        </div>
      </div>
    </div>
  );
};
