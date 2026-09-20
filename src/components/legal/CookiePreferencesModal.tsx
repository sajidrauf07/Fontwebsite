'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sliders, X } from 'lucide-react';

export interface CookiePreferences {
  necessary: boolean; // Always true
  preferences: boolean; // localStorage favorites
  analytics: boolean;   // future GA4
  advertising: boolean; // future AdSense
  savedAt: string;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  preferences: true,
  analytics: false,
  advertising: false,
  savedAt: new Date().toISOString(),
};

export default function CookiePreferencesModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    // Load saved preferences if available
    try {
      const stored = localStorage.getItem('lb_cookie_consent');
      if (stored) {
        setPreferences(JSON.parse(stored));
      }
    } catch {
      // ignore
    }

    const handleOpen = () => {
      setIsOpen(true);
      setSavedSuccess(false);
    };

    window.addEventListener('open-cookie-preferences', handleOpen);
    return () => window.removeEventListener('open-cookie-preferences', handleOpen);
  }, []);

  const handleSave = (customPrefs: CookiePreferences) => {
    try {
      localStorage.setItem('lb_cookie_consent', JSON.stringify({
        ...customPrefs,
        savedAt: new Date().toISOString(),
      }));
      setPreferences(customPrefs);
      setSavedSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setSavedSuccess(false);
      }, 700);

      // Dispatch event for other components if needed
      window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: customPrefs }));
    } catch {
      // ignore
    }
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      preferences: true,
      analytics: true,
      advertising: true,
      savedAt: new Date().toISOString(),
    };
    handleSave(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const minimal: CookiePreferences = {
      necessary: true,
      preferences: false,
      analytics: false,
      advertising: false,
      savedAt: new Date().toISOString(),
    };
    handleSave(minimal);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      className="lb-cookie-modal-overlay"
    >
      <div className="lb-cookie-modal-card">
        {/* Modal Header */}
        <div className="lb-cookie-modal-header">
          <div className="flex items-center gap-2.5" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div className="lb-cookie-icon-wrapper">
              <Sliders size={18} style={{ width: 18, height: 18, flexShrink: 0 }} />
            </div>
            <div>
              <h2 id="cookie-preferences-title" className="text-lg font-bold" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Centro de Preferencias de Cookies
              </h2>
              <p className="text-xs" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Controla la información y tecnologías que se almacenan en tu dispositivo.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar modal de preferencias"
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 6, display: 'flex', alignItems: 'center' }}
          >
            <X size={18} style={{ width: 18, height: 18, flexShrink: 0 }} />
          </button>
        </div>

        {/* Modal Body: Category list */}
        <div className="lb-cookie-modal-body">
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            En Letras Bonitas respetamos tu privacidad. Conforme a las directrices de protección de datos en México y estándares internacionales, puedes elegir qué tecnologías no esenciales deseas autorizar. Consulta nuestra{' '}
            <Link href="/politica-de-cookies" className="text-[var(--accent-primary)] underline hover:text-[var(--accent-secondary)]">
              Política de Cookies completa
            </Link>.
          </p>

          {/* Cuestión 1: Necesarias */}
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2 font-semibold text-[var(--text-primary)]">
                <span>1. Técnicas y Necesarias</span>
                <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-bold">
                  Siempre Activas
                </span>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled
                aria-label="Cookies técnicas y necesarias siempre activas"
                className="w-4 h-4 rounded text-[var(--accent-primary)] opacity-60 cursor-not-allowed"
              />
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Son indispensables para que la plataforma funcione correctamente. Permiten la navegación fluida, la ejecución local del conversor Unicode en memoria del navegador y la persistencia de la sesión. No almacenan datos de identificación personal.
            </p>
          </div>

          {/* Cuestión 2: Preferencias */}
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
            <div className="flex items-center justify-between gap-3 mb-2">
              <label htmlFor="pref-checkbox" className="font-semibold text-[var(--text-primary)] cursor-pointer">
                2. Preferencias de Usuario (localStorage)
              </label>
              <input
                id="pref-checkbox"
                type="checkbox"
                checked={preferences.preferences}
                onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                className="w-4 h-4 rounded text-[var(--accent-primary)] accent-[var(--accent-primary)] cursor-pointer"
              />
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Permiten recordar tu modo de color preferido (tema oscuro o claro) y guardar tus tipografías y símbolos favoritos localmente en tu propio dispositivo para que no se borren al recargar la página.
            </p>
          </div>

          {/* Cuestión 3: Analíticas */}
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
            <div className="flex items-center justify-between gap-3 mb-2">
              <label htmlFor="analytics-checkbox" className="font-semibold text-[var(--text-primary)] cursor-pointer">
                3. Analíticas de Navegación
              </label>
              <input
                id="analytics-checkbox"
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="w-4 h-4 rounded text-[var(--accent-primary)] accent-[var(--accent-primary)] cursor-pointer"
              />
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Nos ayudan a conocer de forma totalmente anónima y agregada qué herramientas son las más utilizadas y detectar posibles errores técnicos para optimizar la velocidad del sitio.
            </p>
          </div>

          {/* Cuestión 4: Publicidad */}
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
            <div className="flex items-center justify-between gap-3 mb-2">
              <label htmlFor="ads-checkbox" className="font-semibold text-[var(--text-primary)] cursor-pointer">
                4. Publicidad y Personalización
              </label>
              <input
                id="ads-checkbox"
                type="checkbox"
                checked={preferences.advertising}
                onChange={(e) => setPreferences({ ...preferences, advertising: e.target.checked })}
                className="w-4 h-4 rounded text-[var(--accent-primary)] accent-[var(--accent-primary)] cursor-pointer"
              />
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Permiten a nuestros proveedores publicitarios mostrarte anuncios relevantes y financiar el mantenimiento gratuito e ilimitado de nuestras herramientas de texto.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[var(--border-primary)] bg-[var(--bg-card)] flex flex-col sm:flex-row items-center justify-between gap-3">
          {savedSuccess ? (
            <div className="w-full text-center py-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              ✓ Preferencias guardadas correctamente
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-primary)] transition-colors"
              >
                Rechazar no esenciales
              </button>
              <div className="w-full sm:w-auto flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSave(preferences)}
                  className="w-1/2 sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[var(--border-primary)] border border-[var(--border-primary)] transition-colors"
                >
                  Guardar selección
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-1/2 sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-95 shadow-md shadow-violet-600/20 transition-all"
                >
                  Aceptar todas
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
