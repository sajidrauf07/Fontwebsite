'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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
  const [mounted, setMounted] = useState(false);

  // Accordion state - expand all silos by default so all pages are immediately visible like in standard mobile navigations
  const [expandedSilos, setExpandedSilos] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    SILO_NAVIGATION.forEach(silo => {
      initial[silo.id] = true;
    });
    return initial;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll cleanly when mobile menu is open without layout shifts or unpinning headers
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
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

  const allExpanded = SILO_NAVIGATION.every(silo => !!expandedSilos[silo.id]);
  const toggleAllSilos = () => {
    const nextState = !allExpanded;
    const updated: Record<string, boolean> = {};
    SILO_NAVIGATION.forEach(silo => {
      updated[silo.id] = nextState;
    });
    setExpandedSilos(updated);
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
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

          {/* Section Heading & Quick Toggle */}
          <div className="mobile-nav-section-header">
            <span className="mobile-nav-section-title">Categorías y Páginas</span>
            <button
              type="button"
              onClick={toggleAllSilos}
              className="mobile-nav-toggle-all-btn"
            >
              {allExpanded ? 'Contraer todo' : 'Expandir todo'}
            </button>
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
                    <span className="mobile-silo-bullet-indicator" />
                    <span className="mobile-silo-title">{silo.title}</span>
                    <span className="mobile-silo-count-badge">
                      {silo.children.length} {silo.children.length === 1 ? 'pág' : 'págs'}
                    </span>
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

                {/* Subpages Compact List */}
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
    </div>,
    document.body
  );
};
