'use client';

import React, { useState } from 'react';
import { mapAlphabet } from '@/lib/unicode/transformations';
import { Copy, Check, Type } from 'lucide-react';

const WORDS_COLLECTION = [
  { original: 'Hola', category: 'Saludo' },
  { original: 'Amor', category: 'Sentimiento' },
  { original: 'Sueños', category: 'Inspiración' },
  { original: 'Éxito', category: 'Motivación' },
  { original: 'Bonito', category: 'Estilo' },
  { original: 'Gracias', category: 'Cortesía' }
];

export default function StyledWordsSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (key: string, textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge">
        <Type size={20} />
      </div>
      <h2>Palabras con estilos para copiar</h2>
      <p>
        Descubre cómo lucen palabras habituales transformadas en diferentes estilos estéticos para copiar y usar al instante:
      </p>

      <div className="cp-results-grid mt-6">
        {WORDS_COLLECTION.map((wordItem) => {
          const cursiva = mapAlphabet(wordItem.original, 'scriptBold');
          const versalitas = mapAlphabet(wordItem.original, 'smallCaps');
          const doble = mapAlphabet(wordItem.original, 'doubleStruck');

          const keyCursiva = `${wordItem.original}-cursiva`;
          const keyVersalitas = `${wordItem.original}-versalitas`;
          const keyDoble = `${wordItem.original}-doble`;

          return (
            <div key={wordItem.original} className="cp-style-card">
              <div className="cp-card-header">
                <span className="cp-card-name">{wordItem.original}</span>
                <span className="cp-tag-chip">{wordItem.category}</span>
              </div>

              <div className="space-y-2 mt-2">
                <div className="flex items-center justify-between p-2 rounded-lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(51, 65, 85, 0.6)', borderRadius: '0.5rem' }}>
                  <span className="cp-card-text" style={{ fontSize: '1.1rem' }}>{cursiva}</span>
                  <button
                    type="button"
                    className={`cp-card-copy-btn ${copiedKey === keyCursiva ? 'copied' : ''}`}
                    onClick={() => handleCopy(keyCursiva, cursiva)}
                    style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
                  >
                    {copiedKey === keyCursiva ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedKey === keyCursiva ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(51, 65, 85, 0.6)', borderRadius: '0.5rem' }}>
                  <span className="cp-card-text" style={{ fontSize: '1.1rem' }}>{versalitas}</span>
                  <button
                    type="button"
                    className={`cp-card-copy-btn ${copiedKey === keyVersalitas ? 'copied' : ''}`}
                    onClick={() => handleCopy(keyVersalitas, versalitas)}
                    style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
                  >
                    {copiedKey === keyVersalitas ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedKey === keyVersalitas ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(51, 65, 85, 0.6)', borderRadius: '0.5rem' }}>
                  <span className="cp-card-text" style={{ fontSize: '1.1rem' }}>{doble}</span>
                  <button
                    type="button"
                    className={`cp-card-copy-btn ${copiedKey === keyDoble ? 'copied' : ''}`}
                    onClick={() => handleCopy(keyDoble, doble)}
                    style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
                  >
                    {copiedKey === keyDoble ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedKey === keyDoble ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
