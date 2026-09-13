'use client';

import React, { useState, useMemo } from 'react';
import { Copy, Check, Type } from 'lucide-react';
import { buildAlphabet } from '@/data/cursiveAlphabet';
import AlphabetLetterCard from '@/components/cursive-alphabet/AlphabetLetterCard';

export default function LettersToCopySection() {
  const [caseFilter, setCaseFilter] = useState<'both' | 'upper' | 'lower'>('both');

  const upperLetters = useMemo(() => buildAlphabet('boldScript', 'upper'), []);
  const lowerLetters = useMemo(() => buildAlphabet('boldScript', 'lower'), []);

  const displayedLetters = useMemo(() => {
    if (caseFilter === 'upper') return upperLetters;
    if (caseFilter === 'lower') return lowerLetters;
    return [...upperLetters, ...lowerLetters];
  }, [caseFilter, upperLetters, lowerLetters]);

  return (
    <section className="seo-card-section" id="letras-para-copiar">
      <div className="seo-icon-badge">
        <Type size={20} />
      </div>
      <h2>Letras para Copiar</h2>
      <p>
        Abecedario completo con caracteres cursivos y caligráficos individuales. Haz clic en cualquiera de las letras para copiarla al instante:
      </p>

      <div className="cac-filter-toggles" style={{ margin: '1rem 0' }}>
        <button
          type="button"
          className={`cat-case-btn ${caseFilter === 'both' ? 'active' : ''}`}
          onClick={() => setCaseFilter('both')}
        >
          Ambas (A-z)
        </button>
        <button
          type="button"
          className={`cat-case-btn ${caseFilter === 'upper' ? 'active' : ''}`}
          onClick={() => setCaseFilter('upper')}
        >
          Mayúsculas (A-Z)
        </button>
        <button
          type="button"
          className={`cat-case-btn ${caseFilter === 'lower' ? 'active' : ''}`}
          onClick={() => setCaseFilter('lower')}
        >
          Minúsculas (a-z)
        </button>
      </div>

      <div className="cat-letters-grid">
        {displayedLetters.map((item, idx) => (
          <AlphabetLetterCard key={`ltc-${item.original}-${idx}`} letter={item} />
        ))}
      </div>
    </section>
  );
}
