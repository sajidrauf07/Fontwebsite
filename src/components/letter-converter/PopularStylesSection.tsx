'use client';

import React, { useState } from 'react';
import { Copy, Check, Flame } from 'lucide-react';
import { mapAlphabet, transformGlitch } from '@/lib/unicode/transformations';

const POPULAR_CONVERTER_STYLES = [
  { id: 'p-1', name: 'Cursiva Clásica', preview: mapAlphabet('Letras Bonitas', 'boldScript') },
  { id: 'p-2', name: 'Cursiva Fina', preview: mapAlphabet('Letras Bonitas', 'script') },
  { id: 'p-3', name: 'Doble Trazo', preview: mapAlphabet('Letras Bonitas', 'doubleStruck') },
  { id: 'p-4', name: 'Gótica Clásica', preview: mapAlphabet('Letras Bonitas', 'gothicBold') },
  { id: 'p-5', name: 'Versalitas', preview: mapAlphabet('Letras Bonitas', 'smallCaps') },
  { id: 'p-6', name: 'Burbujas Blancas', preview: mapAlphabet('Letras Bonitas', 'circledWhite') }
];

export default function PopularStylesSection() {
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
    <section className="seo-card-section" id="estilos-populares">
      <div className="seo-icon-badge">
        <Flame size={20} />
      </div>
      <h2>Estilos Populares del Conversor</h2>
      <p>
        Una selección de los alfabetos especiales más buscados y utilizados para personalizar nombres y biografías:
      </p>

      <div className="cursive-examples-grid" style={{ marginTop: '1rem' }}>
        {POPULAR_CONVERTER_STYLES.map((style) => {
          const isCopied = copiedId === style.id;
          return (
            <div key={style.id} className={`cursive-example-card ${isCopied ? 'copied' : ''}`}>
              <span className="example-label">{style.name}</span>
              <span className="example-cursive">{style.preview}</span>
              <button
                type="button"
                className={`rtc-copy-btn ${isCopied ? 'copied' : ''}`}
                style={{ marginTop: '0.4rem' }}
                onClick={() => handleCopy(style.id, style.preview)}
              >
                {isCopied ? <Check size={12} /> : <Copy size={12} />}
                <span>{isCopied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
