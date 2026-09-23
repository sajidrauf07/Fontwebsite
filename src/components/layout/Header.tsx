'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sparkles,
  ChevronDown,
  Menu,
  Compass,
  ArrowRight,
  Check
} from 'lucide-react';
import {
  SILO_NAVIGATION,
  isPathActive,
  type SiloNavItem
} from '@/config/navigation';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from './ThemeToggle';
import { BrandLogo } from './BrandLogo';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Escape key to close dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Desktop Hover handlers with grace delay
  const handleMouseEnter = (siloId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(siloId);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleDropdown = (siloId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(prev => (prev === siloId ? null : siloId));
  };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-container">
        {/* Brand / Logo: TLB Monogram + The Letras Bonitas */}
        <BrandLogo />

        {/* Desktop Navigation */}
        <nav className="desktop-silo-nav" aria-label="Navegación principal">
          <ul className="desktop-nav-list">
            {/* Inicio Link */}
            <li className="desktop-nav-item">
              <Link
                href="/"
                className={`desktop-nav-link ${pathname === '/' ? 'active' : ''}`}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                Inicio
              </Link>
            </li>

            {/* 4 SILO Expandable Items */}
            {SILO_NAVIGATION.map((silo: SiloNavItem) => {
              const isSiloActive = isPathActive(pathname, silo.href, false);
              const isOpen = activeDropdown === silo.id;

              return (
                <li
                  key={silo.id}
                  className={`desktop-nav-item has-dropdown ${isSiloActive ? 'active-silo' : ''} ${isOpen ? 'dropdown-open' : ''} theme-${silo.colorTheme}`}
                  onMouseEnter={() => handleMouseEnter(silo.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="desktop-nav-trigger-group">
                    {/* Parent Direct Link */}
                    <Link
                      href={silo.href}
                      className={`desktop-nav-link ${isSiloActive ? 'active' : ''}`}
                      aria-current={pathname === silo.href ? 'page' : undefined}
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="desktop-title-full">{silo.title}</span>
                      <span className="desktop-title-short">{silo.shortTitle || silo.title}</span>
                      {isSiloActive && <span className="active-nav-indicator" />}
                    </Link>

                    {/* Dedicated Chevron Trigger */}
                    <button
                      type="button"
                      className={`desktop-chevron-btn ${isOpen ? 'open' : ''}`}
                      onClick={() => toggleDropdown(silo.id)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={`dropdown-menu-${silo.id}`}
                      aria-label={`${isOpen ? 'Cerrar' : 'Abrir'} menú de ${silo.title}`}
                    >
                      <ChevronDown size={14} className="chevron-icon" />
                    </button>
                  </div>

                  {/* Desktop Dropdown Panel */}
                  <div
                    id={`dropdown-menu-${silo.id}`}
                    className={`desktop-dropdown-menu ${isOpen ? 'is-visible' : ''}`}
                    role="region"
                    aria-label={`Submenú de ${silo.title}`}
                  >
                    <div className="dropdown-inner-card">
                      {/* Dropdown Header / Parent Overview Link */}
                      <div className="dropdown-header">
                        <div className="dropdown-header-info">
                          <span className="dropdown-silo-badge">{silo.shortTitle || silo.title}</span>
                          <p className="dropdown-silo-desc">{silo.description}</p>
                        </div>
                        <Link
                          href={silo.href}
                          onClick={() => setActiveDropdown(null)}
                          className="dropdown-overview-link"
                        >
                          <span>{silo.viewAllText}</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>

                      {/* Child Links List */}
                      <ul className="dropdown-links-grid">
                        {silo.children.map((child) => {
                          const isChildActive = isPathActive(pathname, child.href, true);

                          return (
                            <li key={child.href} className="dropdown-link-item">
                              <Link
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`dropdown-card-link ${isChildActive ? 'current-page' : ''}`}
                                aria-current={isChildActive ? 'page' : undefined}
                              >
                                <div className="dropdown-card-content">
                                  <div className="dropdown-card-title-row">
                                    <span className="dropdown-card-title">{child.title}</span>
                                    {isChildActive && (
                                      <span className="current-page-badge" title="Página actual">
                                        <Check size={12} />
                                        <span>Actual</span>
                                      </span>
                                    )}
                                  </div>
                                  {child.description && (
                                    <p className="dropdown-card-desc">{child.description}</p>
                                  )}
                                </div>
                                <ArrowRight size={15} className="dropdown-card-arrow" />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="header-right-actions">
          <ThemeToggle />

          <a href="/#generador" className="header-cta-btn">
            <Compass size={16} />
            <span>Usar Generador</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="mobile-hamburger-btn"
            aria-label="Abrir menú de navegación móvil"
            aria-expanded={mobileMenuOpen}
            type="button"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Accessible Mobile Nav Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};
