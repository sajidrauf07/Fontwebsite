'use client';

import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

export default function FreeFireCompatibilitySection() {
  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge">
        <Shield size={20} />
      </div>
      <h2>¿Funcionan todos estos nombres en Free Fire?</h2>
      <p>
        Información importante sobre la compatibilidad de caracteres alfanuméricos y símbolos Unicode en el juego:
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
          <h3 style={{ fontSize: '1.05rem', color: '#f59e0b', marginBottom: '0.5rem', fontWeight: 700 }}>
            1. Caracteres Unicode Permitidos
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
            Free Fire admite una amplia variedad de símbolos gráficos Unicode (coronas, coronas 亗, corchetes 『』, estrellas ★ y caracteres Kanji 么).
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
          <h3 style={{ fontSize: '1.05rem', color: '#818cf8', marginBottom: '0.5rem', fontWeight: 700 }}>
            2. Límite de Longitud
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
            Ten en cuenta que Free Fire impone un límite máximo de caracteres para el apodo del perfil (habitualmente 12 caracteres). Recomendamos probar apodos de longitud moderada.
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
          <h3 style={{ fontSize: '1.05rem', color: '#10b981', marginBottom: '0.5rem', fontWeight: 700 }}>
            3. Verificación en Vivo
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
            Dado que las normas de nombres pueden actualizarse en las versiones del juego, te aconsejamos copiar el apodo elegido y probar la vista previa al cambiar de nick en tu cuenta.
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
          <span>Aviso legal sobre marcas registradas</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '0.35rem 0 0 0' }}>
          Este generador es una herramienta independiente desarrollada por Letras Bonitas. No tenemos afiliación, patrocinio ni relación oficial con Free Fire ni Garena. Todas las marcas pertenecen a sus respectivos propietarios.
        </p>
      </div>
    </section>
  );
}
