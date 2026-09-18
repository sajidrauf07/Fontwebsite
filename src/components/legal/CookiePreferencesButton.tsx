'use client';

import React from 'react';

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
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-95 shadow-md shadow-violet-600/20 transition-all ${className}`}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
      <span>{label}</span>
    </button>
  );
}
