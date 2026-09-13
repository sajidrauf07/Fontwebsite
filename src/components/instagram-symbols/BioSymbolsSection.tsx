'use client';

import React, { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';

const BIO_SYMBOL_EXAMPLES = [
  { label: 'Separador Punteado', code: '┊✨ Creador de Contenido\n┊📍 Madrid, España\n┊✉️ contacto@email.com' },
  { label: 'Formato Flores', code: '🌸 Fotografía y Estilo de Vida\n🌸 Viajes • Arte • Diseño\n🌸 ⬇️ Mira mi último proyecto' },
  { label: 'Formato Minimalista', code: '· Creador digital\n· Fotografía urbana\n· 📍 Barcelona\n· ✉️ Colaboraciones por DM' },
  { label: 'Formato Marcos Góticos', code: '『 ALEX MARTÍNEZ 』\n✦ Fotógrafo y Diseñador\n✦ Coleccionando momentos\n✦ ✉️ Info en el enlace ⬇️' }
];

export default function BioSymbolsSection() {
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
    <section className="seo-card-section mb-12" id="simbolos-bio">
      <div className="seo-icon-badge">
        <FileText size={20} />
      </div>
      <h2>Símbolos para la Bio de Instagram</h2>
      <p>Organiza tu biografía con estructuras listas para copiar que destacan tu información clave:</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginTop: '1.25rem'
        }}
      >
        {BIO_SYMBOL_EXAMPLES.map((ex, idx) => {
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
                  {ex.label}
                </h3>
                <div
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    color: '#e2e8f0',
                    whiteSpace: 'pre-line',
                    fontFamily: 'sans-serif',
                    lineHeight: '1.5'
                  }}
                >
                  {ex.code}
                </div>
              </div>

              <button
                type="button"
                className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                style={{ width: '100%', height: '36px' }}
                onClick={() => handleCopy(ex.code, idx)}
              >
                {isCopied ? (
                  <>
                    <Check size={14} />
                    <span>¡Bio Copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copiar Estructura</span>
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
