'use client';

import React, { useState } from 'react';
import { Copy, Check, UserCheck } from 'lucide-react';
import { COPYABLE_NAMES } from '@/data/copyPasteExamples';

export default function NamesToCopySection() {
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
    <section className="seo-card-section" id="nombres-para-copiar">
      <div className="seo-icon-badge">
        <UserCheck size={20} />
      </div>
      <h2>Nombres para Copiar y Pegar</h2>
      <p>
        Ejemplos de nombres propios en tipografías cursivas y aesthetic listos para copiar:
      </p>

      <div className="cursive-examples-grid" style={{ marginTop: '1rem' }}>
        {COPYABLE_NAMES.map((item, idx) => {
          const idCur = `n-cur-${idx}`;
          const isCopiedCur = copiedId === idCur;

          return (
            <div key={idx} className="cursive-example-card">
              <span className="example-label">{item.name}</span>
              <span className="example-cursive">{item.cursive}</span>
              <button
                type="button"
                className={`rtc-copy-btn ${isCopiedCur ? 'copied' : ''}`}
                style={{ marginTop: '0.4rem' }}
                onClick={() => handleCopy(idCur, item.cursive)}
              >
                {isCopiedCur ? <Check size={12} /> : <Copy size={12} />}
                <span>{isCopiedCur ? 'Copiado' : 'Copiar Nombre'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
