'use client';

import React, { useState } from 'react';
import { Copy, Check, MessageSquare } from 'lucide-react';

const CAPTION_SYMBOL_ITEMS = [
  { label: 'Formato Cita / Quote', code: '『 Coleccionando momentos mágicos 』\n✨ Cada día es una nueva oportunidad.\n📍 Madrid, España' },
  { label: 'Formato Lista Punteada', code: 'Colección de verano:\n• Diseño único\n• Calidad garantizada\n• Envío a todo el país 📦' },
  { label: 'Formato Inspirador', code: '✦ Vivir el presente.\n✦ Disfrutar el camino.\n✦ Crear historias únicas 🌟' }
];

export default function CaptionSymbolsSection() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = async (code: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge">
        <MessageSquare size={20} />
      </div>
      <h2>Símbolos para Captions y Pies de Foto</h2>
      <p>Añade estructura, énfasis y legibilidad a las publicaciones de tu feed de Instagram:</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginTop: '1.25rem'
        }}
      >
        {CAPTION_SYMBOL_ITEMS.map((item, idx) => {
          const isCopied = copiedIdx === idx;
          return (
            <div
              key={idx}
              style={{
                background: 'var(--card-bg, #1e2029)',
                borderRadius: '12px',
                border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1rem', color: '#818cf8', marginBottom: '0.5rem', fontWeight: 600 }}>
                  {item.label}
                </h3>
                <div
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    color: '#e2e8f0',
                    whiteSpace: 'pre-line',
                    lineHeight: '1.5'
                  }}
                >
                  {item.code}
                </div>
              </div>

              <button
                type="button"
                className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                style={{ width: '100%', height: '36px' }}
                onClick={() => handleCopy(item.code, idx)}
              >
                {isCopied ? (
                  <>
                    <Check size={14} />
                    <span>¡Caption Copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copiar Caption</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
