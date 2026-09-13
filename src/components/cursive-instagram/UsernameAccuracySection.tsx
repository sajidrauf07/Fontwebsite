'use client';

import React from 'react';
import { BookOpen, AlertTriangle } from 'lucide-react';

export default function UsernameAccuracySection() {
  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge">
        <BookOpen size={20} />
      </div>
      <h2>¿Puedo usar letras cursivas en mi nombre de usuario de Instagram?</h2>
      <p>
        Es fundamental diferenciar los distintos campos de tu perfil en la aplicación de Instagram:
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginTop: '1.25rem'
        }}
      >
        <div
          style={{
            background: 'var(--card-bg, #1e2029)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))'
          }}
        >
          <h3 style={{ fontSize: '1.1rem', color: '#818cf8', marginBottom: '0.5rem', fontWeight: 700 }}>
            1. Nombre de Perfil (Display Name)
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
            <strong>Totalmente compatible.</strong> Es el nombre visible arriba en tu perfil. Admite letras cursivas Unicode, mayúsculas, espacios y emojis.
          </p>
        </div>

        <div
          style={{
            background: 'var(--card-bg, #1e2029)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))'
          }}
        >
          <h3 style={{ fontSize: '1.1rem', color: '#f43f5e', marginBottom: '0.5rem', fontWeight: 700 }}>
            2. Nombre de Usuario (@handle)
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
            <strong>No admite letras cursivas.</strong> El @handle es la dirección única de tu cuenta y solo permite caracteres alfanuméricos básicos (a-z, 0-9), puntos y guiones bajos.
          </p>
        </div>

        <div
          style={{
            background: 'var(--card-bg, #1e2029)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))'
          }}
        >
          <h3 style={{ fontSize: '1.1rem', color: '#10b981', marginBottom: '0.5rem', fontWeight: 700 }}>
            3. Biografía (Bio) y Captions
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
            <strong>100% compatible.</strong> Puedes pegar múltiples líneas en cursiva, títulos destacados y descripciones.
          </p>
        </div>
      </div>

      <div
        className="mt-6"
        style={{
          background: 'rgba(15, 23, 42, 0.9)',
          border: '1px dashed rgba(148, 163, 184, 0.3)',
          borderRadius: '10px',
          padding: '1rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F59E0B', fontWeight: 600, fontSize: '0.9rem' }}>
          <AlertTriangle size={16} />
          <span>Compatibilidad de fuentes cursivas Unicode</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '0.35rem 0 0 0' }}>
          Las letras cursivas no son archivos de fuente instalados, sino símbolos estandarizados en Unicode. La apariencia puede variar ligeramente entre dispositivos iOS (iPhone) y Android.
        </p>
      </div>
    </section>
  );
}
