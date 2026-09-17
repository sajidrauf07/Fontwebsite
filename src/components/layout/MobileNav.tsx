'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Compass,
  Home,
  Check
} from 'lucide-react';
import {
  SILO_NAVIGATION,
  isPathActive,
  getActiveSilo,
  type SiloNavItem
} from '@/config/navigation';
import { ThemeToggle } from './ThemeToggle';
import { BrandLogo } from './BrandLogo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Determine active SILO on initial render or route change to auto-expand it
  const [expandedSilos, setExpandedSilos] = useState<Record<string, boolean>>(() => {
    const active = getActiveSilo(pathname);
    return active ? { [active.id]: true } : {};
  });

  // Auto-expand active silo whenever pathname changes
  useEffect(() => {
    const active = getActiveSilo(pathname);
    if (active) {
      setExpandedSilos(prev => ({ ...prev, [active.id]: true }));
    }
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus close button on open
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
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
      className="mobile-nav-portal"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación principal"
    >
      {/* Backdrop */}
      <div
        className="mobile-nav-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="mobile-nav-drawer" ref={drawerRef}>
        {/* Drawer Header */}
        <div className="mobile-drawer-header">
          <BrandLogo onClick={onClose} size="sm" />

          <div className="mobile-drawer-header-actions">
            <ThemeToggle />
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="mobile-nav-close-btn"
              aria-label="Cerrar menú de navegación"
              type="button"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="mobile-drawer-body">
          <nav className="mobile-silo-nav" aria-label="Navegación SILO móvil">
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

            {/* SILO Accordion Sections */}
            {SILO_NAVIGATION.map((silo: SiloNavItem) => {
              const isSiloActive = isPathActive(pathname, silo.href, false);
              const isExpanded = !!expandedSilos[silo.id];

              return (
                <div
                  key={silo.id}
                  className={`mobile-silo-block ${isSiloActive ? 'is-active-silo' : ''} ${isExpanded ? 'is-expanded' : ''} theme-${silo.colorTheme}`}
                >
                  {/* Split Target Row */}
                  <div className="mobile-silo-row">
                    {/* Left: Direct link to parent SILO */}
                    <Link
                      href={silo.href}
                      onClick={onClose}
                      className={`mobile-silo-parent-link ${isSiloActive ? 'active' : ''}`}
                    >
                      <span className="mobile-silo-title">{silo.title}</span>
                      {isSiloActive && (
                        <span className="mobile-silo-active-badge">SILO Activo</span>
                      )}
                    </Link>

                    {/* Right: Toggle Button for Accordion */}
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

                  {/* Supporting Children Links Accordion Panel */}
                  <div
                    id={`mobile-silo-panel-${silo.id}`}
                    className={`mobile-silo-panel ${isExpanded ? 'open' : 'closed'}`}
                    style={{
                      maxHeight: isExpanded ? '600px' : '0',
                      opacity: isExpanded ? 1 : 0,
                      visibility: isExpanded ? 'visible' : 'hidden'
                    }}
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
                              <div className="mobile-child-info">
                                <span className="mobile-child-text">{child.title}</span>
                                {child.description && (
                                  <span className="mobile-child-desc">{child.description}</span>
                                )}
                              </div>
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
                </div>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer CTA */}
        <div className="mobile-drawer-footer">
          <a
            href="/#generador"
            onClick={onClose}
            className="mobile-cta-btn"
          >
            <Compass size={18} />
            <span>Ir al Generador Principal</span>
          </a>
        </div>
      </div>
    </div>
  );
};
