'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles, AlertTriangle } from 'lucide-react';

const NAME_SYMBOL_ITEMS = [
  { label: 'Estrellas Dobles', text: '★彡 Alex 彡★' },
  { label: 'Corazones Sutiles', text: '♡ Sofía ♡' },
  { label: 'Marcos Góticos', text: '『 Carlos 』' },
  { label: 'Chispas Sparkles', text: '✨ Luna ✨' },
  { label: 'Marco Flor Cerezo', text: '🌸 Valeria 🌸' },
  { label: 'Crown Royalty', text: '👑 Mateo 👑' },
  { label: 'Barra Minimalista', text: '·.★ Lucas ★.·' },
  { label: 'Lineas Punteadas', text: '┊ Daniela ┊' }
];

export default function NameSymbolsSection() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12" id="simbolos-nombres">
      <div className="seo-icon-badge">
        <Sparkles size={20} />
      </div>
      <h2>Símbolos para Nombres de Instagram</h2>
      <p>Decora tu nombre de perfil visible (Display Name) con marcas, marcos y coronas elegantes:</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1rem',
          marginTop: '1.25rem'
        }}
      >
        {NAME_SYMBOL_ITEMS.map((item, idx) => {
          const isCopied = copiedIdx === idx;
          return (
            <div
              key={idx}
              style={{
                background: 'var(--card-bg, #1e2029)',
                borderRadius: '10px',
                border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.75rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>
                  {item.label}
                </span>
                <div style={{ fontSize: '1.1rem', color: '#f8fafc', fontWeight: 600, marginTop: '4px' }}>
                  {item.text}
                </div>
              </div>

              <button
                type="button"
                className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                style={{ width: '100%', height: '34px', fontSize: '0.8rem' }}
                onClick={() => handleCopy(item.text, idx)}
              >
                {isCopied ? (
                  <>
                    <Check size={13} />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copiar Nombre</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
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
          <span>Nota sobre la casilla de Nombre de Usuario (@handle)</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '0.35rem 0 0 0' }}>
          Estos símbolos funcionan en el campo "Nombre" visible del perfil. El "Nombre de Usuario" (@usuario) tiene normas más estrictas y solo admite letras estándar, números, puntos y guiones bajos.
        </p>
      </div>
    </section>
  );
}
