'use client';

import React from 'react';

interface NamePreviewProps {
  displayName?: string;
  handle?: string;
  bioSnippet?: string;
}

export default function NamePreview({
  displayName = '𝒱𝒶𝓁𝑒𝓇𝒾𝒶 𝑀𝒶𝓇𝓉𝒾́𝓃𝑒𝓏',
  handle = 'valeria_style',
  bioSnippet = '✨ Creadora de Contenido | 📍 Madrid \n🌸 Compartiendo arte y fotografía'
}: NamePreviewProps) {
  return (
    <div className="seo-card-section" style={{ marginTop: '2rem', marginBottom: '2.5rem' }}>
      <div className="seo-section-header">
        <h3 className="seo-section-title">Vista previa de tu nombre en Instagram</h3>
        <p className="seo-section-desc">
          Comprueba cómo lucirá tu nombre personalizado en la tarjeta de perfil de Instagram antes de actualizarlo.
        </p>
      </div>

      <div
        style={{
          background: 'linear-gradient(135deg, #181920 0%, #1e2029 100%)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1.75rem',
          maxWidth: '440px',
          margin: '0 auto',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)',
          color: '#ffffff'
        }}
      >
        {/* Profile Card Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
          {/* Avatar Circle */}
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              padding: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#181920',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: '#e2e8f0'
              }}
            >
              📷
            </div>
          </div>

          {/* User Name & Handle Details */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Display Name */}
            <h4
              style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#f8fafc',
                margin: 0,
                lineHeight: '1.3',
                wordBreak: 'break-word'
              }}
            >
              {displayName || 'Alex Martínez'}
            </h4>
            {/* Handle */}
            <p
              style={{
                fontSize: '0.9rem',
                color: '#94a3b8',
                margin: '2px 0 6px 0'
              }}
            >
              @{handle}
            </p>
            {/* Badge */}
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                padding: '2px 8px',
                borderRadius: '12px',
                background: 'rgba(99, 102, 241, 0.18)',
                color: '#818cf8',
                fontWeight: '600'
              }}
            >
              Perfil Personal / Creador
            </span>
          </div>
        </div>

        {/* Bio Snippet */}
        <div
          style={{
            fontSize: '0.875rem',
            color: '#cbd5e1',
            lineHeight: '1.5',
            whiteSpace: 'pre-line',
            padding: '0.75rem 1rem',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '8px',
            borderLeft: '3px solid #6366f1',
            marginBottom: '1.25rem'
          }}
        >
          {bioSnippet}
        </div>

        {/* Generic Action Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            type="button"
            style={{
              flex: 1,
              padding: '0.55rem',
              borderRadius: '8px',
              background: '#0095f6',
              color: '#ffffff',
              border: 'none',
              fontWeight: '600',
              fontSize: '0.875rem',
              cursor: 'default'
            }}
          >
            Seguir
          </button>
          <button
            type="button"
            style={{
              flex: 1,
              padding: '0.55rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontWeight: '600',
              fontSize: '0.875rem',
              cursor: 'default'
            }}
          >
            Mensaje
          </button>
        </div>

        <p
          style={{
            fontSize: '0.75rem',
            color: '#64748b',
            textAlign: 'center',
            marginTop: '1rem',
            marginBottom: 0
          }}
        >
          * Simulación de tarjeta de perfil con fines de vista previa. No afiliado a Instagram.
        </p>
      </div>
    </div>
  );
}
