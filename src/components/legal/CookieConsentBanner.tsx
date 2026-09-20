'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

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
      className="lb-cookie-banner"
    >
      <div className="lb-cookie-container">
        <div className="lb-cookie-content">
          <div className="lb-cookie-icon-wrapper">
            <ShieldCheck size={20} style={{ width: 20, height: 20, flexShrink: 0 }} />
          </div>
          <div className="lb-cookie-text">
            <p>
              En <strong>Letras Bonitas</strong> usamos tecnologías indispensables y almacenamiento local para ofrecerte herramientas de texto gratuitas y recordar tus preferencias. Con tu consentimiento, recopilamos analíticas anónimas para mejorar el servicio.{' '}
              <Link href="/politica-de-cookies">
                Leer Política de Cookies
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="lb-cookie-actions">
          <button
            type="button"
            onClick={handleOpenPreferences}
            className="lb-cookie-btn lb-cookie-btn-secondary"
          >
            Configurar
          </button>
          <button
            type="button"
            onClick={handleRejectNonEssential}
            className="lb-cookie-btn lb-cookie-btn-secondary"
          >
            Rechazar no esenciales
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="lb-cookie-btn lb-cookie-btn-primary"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
