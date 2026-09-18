'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ArrowRight, Sparkles } from 'lucide-react';
import { mapAlphabet } from '@/lib/unicode/transformations';

const COPY_PASTE_ITEMS = [
  { id: 'cp-1', label: 'Biografía Aesthetic', text: `✨ ${mapAlphabet('Creador de contenido', 'boldScript')} ✨` },
  { id: 'cp-2', label: 'Mensaje Bonito', text: `🌸 ${mapAlphabet('Que tengas un bonito día', 'script')} 🌸` },
  { id: 'cp-3', label: 'Nick Gaming', text: `⚡ ${mapAlphabet('ProGamer', 'boldItalic')} ⚡` }
];

export default function CopyPasteSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  return (
    <section className="seo-card-section" id="letras-para-copiar-y-pegar">
      <div className="seo-icon-badge">
        <Sparkles size={20} />
      </div>
      <h2>Letras para Copiar y Pegar</h2>
      <p>
        Ejemplos preformateados listos para usar en tus descripciones y perfiles sociales:
      </p>

      <div className="cursive-examples-grid" style={{ marginTop: '1rem' }}>
        {COPY_PASTE_ITEMS.map((item) => {
          const isCopied = copiedId === item.id;
          return (
            <div key={item.id} className={`cursive-example-card ${isCopied ? 'copied' : ''}`}>
              <span className="example-label">{item.label}</span>
              <span className="example-cursive">{item.text}</span>
              <button
                type="button"
                className={`rtc-copy-btn ${isCopied ? 'copied' : ''}`}
                style={{ marginTop: '0.4rem' }}
                onClick={() => handleCopy(item.id, item.text)}
              >
                {isCopied ? <Check size={12} /> : <Copy size={12} />}
                <span>{isCopied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '1.25rem' }}>
        <Link
          href="/letras-cursivas/letras-cursivas-para-copiar-y-pegar"
          className="silo-cta-link"
        >
          <span>Ver catálogo de letras cursivas para copiar y pegar</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
