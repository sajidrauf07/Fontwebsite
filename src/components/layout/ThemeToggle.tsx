'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read current theme from html attribute or localStorage
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' | null;
    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      const stored = localStorage.getItem('theme') as 'dark' | 'light' | null;
      if (stored) {
        setTheme(stored);
        document.documentElement.setAttribute('data-theme', stored);
      } else {
        // Default to dark mode
        setTheme('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }

    // Listen to themechange events if multiple toggles exist
    const handleThemeChange = (e: CustomEvent<{ theme: 'dark' | 'light' }>) => {
      if (e.detail?.theme) {
        setTheme(e.detail.theme);
      }
    };

    window.addEventListener('themechange' as any, handleThemeChange);
    return () => window.removeEventListener('themechange' as any, handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (e) {
      // Ignore localStorage errors
    }

    // Dispatch event so all toggle buttons update simultaneously
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: nextTheme } }));
  };

  const isLight = theme === 'light';
  const label = isLight ? 'Cambiar a modo noche (oscuro)' : 'Cambiar a modo día (claro)';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${isLight ? 'is-light' : 'is-dark'}`}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle-indicator">
        {mounted && isLight ? (
          <Sun size={18} className="theme-icon sun-icon" />
        ) : (
          <Moon size={18} className="theme-icon moon-icon" />
        )}
      </span>
      <span className="theme-toggle-sr">{label}</span>
    </button>
  );
};

export default ThemeToggle;
