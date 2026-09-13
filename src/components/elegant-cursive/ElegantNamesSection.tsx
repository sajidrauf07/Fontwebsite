'use client';

import React, { useState } from 'react';
import { Copy, Check, UserCheck } from 'lucide-react';
import { ELEGANT_NAMES } from '@/data/elegantExamples';

export default function ElegantNamesSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1800);
    }
  };

  return (
    <section className="seo-card-section" id="nombres-elegantes">
      <div className="seo-icon-badge">
        <UserCheck size={20} />
      </div>
      <h2>Nombres con Letras Cursivas Elegantes</h2>
      <p>
        Ejemplos de nombres populares transformados en tipografía caligráfica sofisticada. Haz clic en cualquiera para copiarlo al instante:
      </p>

      <div className="cursive-examples-grid" style={{ marginTop: '1rem' }}>
        {ELEGANT_NAMES.map((item, idx) => {
          const isCopied = copiedIndex === idx;

          return (
            <div key={idx} className={`cursive-example-card ${isCopied ? 'copied' : ''}`}>
              <span className="example-label">{item.name}</span>
              <span className="example-cursive">{item.cursive}</span>

              <button
                type="button"
                className={`rtc-copy-btn ${isCopied ? 'copied' : ''}`}
                style={{ marginTop: '0.4rem' }}
                onClick={() => handleCopy(item.cursive, idx)}
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
