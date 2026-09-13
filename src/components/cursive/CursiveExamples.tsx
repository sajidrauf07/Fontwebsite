'use client';

import React, { useState } from 'react';
import { mapAlphabet } from '@/lib/unicode/transformations';
import { Copy, Check } from 'lucide-react';

interface ExampleItem {
  label: string;
  text: string;
}

const EXAMPLES: ExampleItem[] = [
  { label: 'Nombre personal', text: 'María García' },
  { label: 'Bio de Instagram', text: 'Soñadora y creadora de mundos' },
  { label: 'Título', text: 'Bienvenidos a mi perfil' },
  { label: 'Frase corta', text: 'Vive y deja vivir' },
  { label: 'Nombre para perfil', text: 'Luna Estrella' },
  { label: 'Gaming name', text: 'Dark Knight' },
];

export const CursiveExamples: React.FC = () => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = async (text: string, idx: number) => {
    try {
      const transformed = mapAlphabet(text, 'boldScript');
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(transformed);
      }
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="cursive-examples-grid">
      {EXAMPLES.map((item, idx) => {
        const transformed = mapAlphabet(item.text, 'boldScript');
        const isCopied = copiedIdx === idx;
        return (
          <div key={idx} className="cursive-example-card">
            <span className="example-label">{item.label}</span>
            <span className="example-original">{item.text}</span>
            <span className="example-cursive">{transformed}</span>
            <button
              onClick={() => handleCopy(item.text, idx)}
              className={`csc-copy-btn ${isCopied ? 'copied' : ''}`}
              type="button"
              aria-label={`Copiar ejemplo: ${item.label}`}
            >
              {isCopied ? (
                <>
                  <Check size={14} />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};
