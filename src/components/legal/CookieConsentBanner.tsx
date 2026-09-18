'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem('lb_cookie_consent');
      if (!consent) {
        // Show after brief delay so initial page load feels instant
        const timer = setTimeout(() => setShowBanner(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('lb_cookie_consent', JSON.stringify({
        necessary: true,
        preferences: true,
        analytics: true,
        advertising: true,
        savedAt: new Date().toISOString(),
      }));
      setShowBanner(false);
      window.dispatchEvent(new CustomEvent('cookie-consent-updated'));
    } catch {
      setShowBanner(false);
    }
  };

  const handleRejectNonEssential = () => {
    try {
      localStorage.setItem('lb_cookie_consent', JSON.stringify({
        necessary: true,
        preferences: false,
        analytics: false,
        advertising: false,
        savedAt: new Date().toISOString(),
      }));
      setShowBanner(false);
      window.dispatchEvent(new CustomEvent('cookie-consent-updated'));
    } catch {
      setShowBanner(false);
    }
  };

  const handleOpenPreferences = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
  };

  if (!mounted || !showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de consentimiento de cookies y privacidad"
      className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-5 bg-[var(--bg-secondary)]/95 backdrop-blur-md border-t border-[var(--border-primary)] shadow-2xl animate-fade-in text-[var(--text-primary)]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="p-2.5 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] shrink-0 mt-0.5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            <p>
              En <strong className="text-[var(--text-primary)]">Letras Bonitas</strong> usamos tecnologías técnicas indispensables y almacenamiento local para ofrecerte herramientas de texto gratuitas y recordar tus preferencias (como el modo oscuro). Con tu consentimiento, también recopilamos métricas analíticas anónimas para mejorar el servicio.{' '}
              <Link href="/politica-de-cookies" className="text-[var(--accent-primary)] underline hover:text-[var(--accent-secondary)]">
                Leer Política de Cookies
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
          <button
            type="button"
            onClick={handleOpenPreferences}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-primary)] transition-colors"
          >
            Configurar
          </button>
          <button
            type="button"
            onClick={handleRejectNonEssential}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-primary)] transition-colors"
          >
            Rechazar no esenciales
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-95 shadow-md shadow-violet-600/20 transition-all"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
