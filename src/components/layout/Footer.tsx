'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, ChevronDown, Heart } from 'lucide-react';
import { SILO_NAVIGATION, isPathActive, type SiloNavItem } from '@/config/navigation';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Mobile accordion state for footer SILO sections
  const [expandedFooterSilos, setExpandedFooterSilos] = useState<Record<string, boolean>>({});

  const toggleFooterSilo = (siloId: string) => {
    setExpandedFooterSilos(prev => ({
      ...prev,
      [siloId]: !prev[siloId]
    }));
  };

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Pie de página">
      <div className="footer-container">
        {/* Main 5-Column Grid on Desktop / Responsive on Mobile */}
        <div className="footer-main-grid">
          {/* COLUMN 1: Brand & Utility Mission */}
          <div className="footer-brand-column">
            <BrandLogo />

            <p className="footer-brand-desc">
              Plataforma gratuita en español de herramientas para transformar texto ordinario en letras bonitas, fuentes cursivas, caracteres decorativos para Instagram y nicks de videojuegos para copiar y pegar al instante.
            </p>

            <div className="footer-meta-pill">
              <span className="footer-meta-dot" />
              <span>Más de 350 estilos tipográficos Unicode 100% compatibles</span>
            </div>
          </div>

          {/* COLUMNS 2, 3, 4, 5: The 4 SILO Columns */}
          {SILO_NAVIGATION.map((silo: SiloNavItem) => {
            const isSiloActive = isPathActive(pathname, silo.href, false);
            const isExpanded = !!expandedFooterSilos[silo.id];

            return (
              <div
                key={silo.id}
                className={`footer-silo-column ${isSiloActive ? 'current-silo' : ''} theme-${silo.colorTheme}`}
              >
                {/* Desktop Heading / Mobile Accordion Header */}
                <div className="footer-column-header">
                  <Link
                    href={silo.href}
                    className={`footer-silo-heading-link ${isSiloActive ? 'active' : ''}`}
                  >
                    <h3 className="footer-silo-title">{silo.title}</h3>
                  </Link>

                  {/* Mobile Accordion Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleFooterSilo(silo.id)}
                    className="footer-accordion-toggle-btn"
                    aria-expanded={isExpanded}
                    aria-controls={`footer-silo-links-${silo.id}`}
                    aria-label={`${isExpanded ? 'Contraer' : 'Expandir'} enlaces de ${silo.title}`}
                  >
                    <ChevronDown
                      size={16}
                      className={`footer-chevron ${isExpanded ? 'rotated' : ''}`}
                    />
                  </button>
                </div>

                {/* SILO Links List */}
                <div
                  id={`footer-silo-links-${silo.id}`}
                  className={`footer-silo-links-wrapper ${isExpanded ? 'mobile-open' : 'mobile-closed'}`}
                >
                  <ul className="footer-nav-list">
                    {/* Direct link to parent SILO page */}
                    <li className="footer-nav-item">
                      <Link
                        href={silo.href}
                        className={`footer-nav-link parent-link ${pathname === silo.href ? 'active' : ''}`}
                      >
                        <span className="footer-link-bullet" />
                        <span className="footer-link-text">{silo.title}</span>
                      </Link>
                    </li>

                    {/* Supporting child pages */}
                    {silo.children.map((child) => {
                      const isChildActive = isPathActive(pathname, child.href, true);

                      return (
                        <li key={child.href} className="footer-nav-item">
                          <Link
                            href={child.href}
                            className={`footer-nav-link ${isChildActive ? 'active' : ''}`}
                          >
                            <span className="footer-link-bullet" />
                            <span className="footer-link-text">{child.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* COLUMN 6: DEDICATED LEGAL SECTION */}
          <div className="footer-silo-column theme-indigo">
            <div className="footer-column-header">
              <Link
                href="/aviso-legal"
                className={`footer-silo-heading-link ${pathname.startsWith('/politica') || pathname === '/terminos-y-condiciones' || pathname === '/aviso-legal' || pathname === '/derechos-de-autor' || pathname === '/contacto' ? 'active' : ''}`}
              >
                <h3 className="footer-silo-title">LEGAL</h3>
              </Link>

              <button
                type="button"
                onClick={() => toggleFooterSilo('legal')}
                className="footer-accordion-toggle-btn"
                aria-expanded={!!expandedFooterSilos['legal']}
                aria-controls="footer-silo-links-legal"
                aria-label={`${expandedFooterSilos['legal'] ? 'Contraer' : 'Expandir'} enlaces legales`}
              >
                <ChevronDown
                  size={16}
                  className={`footer-chevron ${expandedFooterSilos['legal'] ? 'rotated' : ''}`}
                />
              </button>
            </div>

            <div
              id="footer-silo-links-legal"
              className={`footer-silo-links-wrapper ${expandedFooterSilos['legal'] ? 'mobile-open' : 'mobile-closed'}`}
            >
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <Link
                    href="/politica-de-privacidad"
                    className={`footer-nav-link ${pathname === '/politica-de-privacidad' ? 'active' : ''}`}
                  >
                    <span className="footer-link-bullet" />
                    <span className="footer-link-text">Política de Privacidad</span>
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link
                    href="/terminos-y-condiciones"
                    className={`footer-nav-link ${pathname === '/terminos-y-condiciones' ? 'active' : ''}`}
                  >
                    <span className="footer-link-bullet" />
                    <span className="footer-link-text">Términos y Condiciones</span>
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link
                    href="/politica-de-cookies"
                    className={`footer-nav-link ${pathname === '/politica-de-cookies' ? 'active' : ''}`}
                  >
                    <span className="footer-link-bullet" />
                    <span className="footer-link-text">Política de Cookies</span>
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link
                    href="/aviso-legal"
                    className={`footer-nav-link ${pathname === '/aviso-legal' ? 'active' : ''}`}
                  >
                    <span className="footer-link-bullet" />
                    <span className="footer-link-text">Aviso Legal</span>
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link
                    href="/derechos-de-autor"
                    className={`footer-nav-link ${pathname === '/derechos-de-autor' ? 'active' : ''}`}
                  >
                    <span className="footer-link-bullet" />
                    <span className="footer-link-text">Derechos de Autor</span>
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link
                    href="/contacto"
                    className={`footer-nav-link ${pathname === '/contacto' ? 'active' : ''}`}
                  >
                    <span className="footer-link-bullet" />
                    <span className="footer-link-text">Contacto y Derechos ARCO</span>
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <button
                    type="button"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
                      }
                    }}
                    className="footer-nav-link text-left w-full cursor-pointer"
                    style={{ background: 'none', border: 'none', padding: 0 }}
                  >
                    <span className="footer-link-bullet" />
                    <span className="footer-link-text">Configuración de cookies</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar: Copyright, Developer Credit & Subtle Utility Tagline */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} Letras Bonitas. Todos los derechos reservados.
          </p>

          <p className="footer-agency-credit">
            Desarrollado por{' '}
            <a
              href="https://www.sntechweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-agency-link"
              title="SN Tech Web — Desarrollo y Soluciones Web"
            >
              SN Tech Web
            </a>
          </p>

          <p className="footer-made-with">
            Diseñado con <Heart size={14} className="footer-heart-icon" /> para copiar y pegar caracteres Unicode sin descargas ni registros.
          </p>
        </div>
      </div>
    </footer>
  );
};
