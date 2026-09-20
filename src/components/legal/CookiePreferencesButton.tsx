'use client';

import React from 'react';
import { Sliders } from 'lucide-react';

interface CookiePreferencesButtonProps {
  label?: string;
  className?: string;
}

export default function CookiePreferencesButton({
  label = 'Configuración de cookies',
  className = '',
}: CookiePreferencesButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`footer-legal-cookie-btn ${className}`}
    >
      <Sliders size={14} style={{ width: 14, height: 14, flexShrink: 0, marginRight: 6 }} />
      <span>{label}</span>
    </button>
  );
}
