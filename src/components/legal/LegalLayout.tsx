'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LEGAL_CONFIG } from '@/config/legal';

interface TocItem {
  id: string;
  title: string;
}

interface LegalLayoutProps {
  title: string;
  badge?: string;
  intro: string;
  toc?: TocItem[];
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  badge = 'Información Legal & Transparencia',
  intro,
  toc = [],
  children,
}: LegalLayoutProps) {
  const [activeHeading, setActiveHeading] = useState<string>('');

  useEffect(() => {
    if (toc.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = toc.length - 1; i >= 0; i--) {
        const element = document.getElementById(toc[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveHeading(toc[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb navigation */}
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-[var(--text-muted)] flex-wrap">
            <li>
              <Link href="/" className="hover:text-[var(--accent-primary)] transition-colors">
                Inicio
              </Link>
            </li>
            <li><span className="text-[var(--text-muted)]">/</span></li>
            <li>
              <span className="text-[var(--text-secondary)]">Legal</span>
            </li>
            <li><span className="text-[var(--text-muted)]">/</span></li>
            <li aria-current="page" className="text-[var(--accent-primary)] font-medium truncate max-w-[200px] sm:max-w-none">
              {title}
            </li>
          </ol>
        </nav>

        {/* Header editorial */}
        <header className="mb-10 pb-8 border-b border-[var(--border-primary)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/25 mb-4">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            {badge}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] mb-6">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Última actualización: <strong>{LEGAL_CONFIG.lastUpdated}</strong></span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[var(--accent-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Jurisdicción de referencia: <strong>{LEGAL_CONFIG.country}</strong></span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span>{LEGAL_CONFIG.cleanDomain}</span>
            </div>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] font-normal bg-[var(--bg-secondary)]/50 p-4 sm:p-5 rounded-xl border border-[var(--border-primary)]">
            {intro}
          </p>
        </header>

        {/* Main Content Area with Optional TOC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table of Contents for Desktop & Mobile */}
          {toc.length > 0 && (
            <aside className="lg:col-span-4 lg:sticky lg:top-24 order-1 lg:order-2">
              <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[var(--border-primary)]">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    Índice de Contenido
                  </h2>
                  <span className="text-[10px] text-[var(--text-muted)] bg-[var(--bg-tertiary)] px-2 py-0.5 rounded-full">
                    {toc.length} secciones
                  </span>
                </div>
                <nav aria-label="Tabla de contenidos">
                  <ol className="space-y-1.5 text-xs max-h-[380px] overflow-y-auto pr-1">
                    {toc.map((item, index) => {
                      const isActive = activeHeading === item.id;
                      return (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={`flex items-start gap-2 py-1.5 px-2 rounded-md transition-colors leading-snug ${
                              isActive
                                ? 'bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] font-semibold'
                                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                            }`}
                          >
                            <span className="text-[10px] text-[var(--text-muted)] mt-0.5 min-w-[16px]">
                              {index + 1}.
                            </span>
                            <span className="truncate">{item.title}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                </nav>
              </div>

              {/* Direct Support / Contact Card */}
              <div className="mt-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs text-[var(--text-muted)]">
                <p className="font-semibold text-[var(--text-primary)] mb-1">¿Dudas o requerimientos?</p>
                <p className="mb-3 leading-relaxed">
                  Para consultas sobre privacidad, datos personales o derechos de autor, escríbenos directamente.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center w-full px-3 py-2 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/20 font-medium transition-colors"
                >
                  Canal de Contacto y Solicitudes →
                </Link>
              </div>
            </aside>
          )}

          {/* Legal Prose Content */}
          <main className={`${toc.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'} order-2 lg:order-1 legal-prose`}>
            {children}

            {/* Informational Disclaimer Footer Box */}
            <div className="mt-12 p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs text-[var(--text-muted)] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[var(--text-secondary)]">
                <svg className="w-4 h-4 text-[var(--accent-amber)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Aviso de Transparencia e Información Legal</span>
              </div>
              <p className="leading-relaxed">
                El presente documento tiene fines informativos y de transparencia operativa conforme a las mejores prácticas de la industria y la legislación aplicable en los Estados Unidos Mexicanos (incluyendo la LFPDPPP y la LFDA). No constituye asesoría jurídica vinculante ni reemplaza la consulta con un profesional del derecho debidamente acreditado.
              </p>
              <div className="pt-2 border-t border-[var(--border-primary)]/50 flex flex-wrap gap-4 text-[11px]">
                <span>Sitio web: <strong>{LEGAL_CONFIG.domain}</strong></span>
                <span>Contacto: <strong>{LEGAL_CONFIG.contactEmail}</strong></span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
