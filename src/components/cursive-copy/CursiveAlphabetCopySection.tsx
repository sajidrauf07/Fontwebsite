'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Copy, Check, ArrowRight, BookOpen } from 'lucide-react';
import { buildAlphabet, buildFullAlphabetString } from '@/data/cursiveAlphabet';
import AlphabetLetterCard from '@/components/cursive-alphabet/AlphabetLetterCard';

export default function CursiveAlphabetCopySection() {
  const [copiedAction, setCopiedAction] = useState<string | null>(null);
  const [caseFilter, setCaseFilter] = useState<'both' | 'upper' | 'lower'>('both');

  const upperLetters = useMemo(() => buildAlphabet('boldScript', 'upper'), []);
  const lowerLetters = useMemo(() => buildAlphabet('boldScript', 'lower'), []);

  const displayedLetters = useMemo(() => {
    if (caseFilter === 'upper') return upperLetters;
    if (caseFilter === 'lower') return lowerLetters;
    return [...upperLetters, ...lowerLetters];
  }, [caseFilter, upperLetters, lowerLetters]);

  const handleCopyGroup = async (type: 'upper' | 'lower' | 'all') => {
    let strToCopy = '';
    if (type === 'upper') {
      strToCopy = upperLetters.map((l) => l.cursive).join(' ');
    } else if (type === 'lower') {
      strToCopy = lowerLetters.map((l) => l.cursive).join(' ');
    } else {
      strToCopy = buildFullAlphabetString('boldScript');
    }

    try {
      await navigator.clipboard.writeText(strToCopy);
      setCopiedAction(type);
      setTimeout(() => setCopiedAction(null), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = strToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedAction(type);
      setTimeout(() => setCopiedAction(null), 2000);
    }
  };

  return (
    <section className="cursive-alphabet-copy-section" id="abecedario-cursivo">
      <div className="cac-header">
        <div className="seo-icon-badge">
          <BookOpen size={20} />
        </div>
        <h2>Abecedario Cursivo para Copiar</h2>
        <p className="cac-subtitle">
          Copia letras individuales en cursiva de la A a la Z o exporta conjuntos completos en mayúsculas y minúsculas.
        </p>
      </div>

      {/* Control Actions Bar */}
      <div className="cac-actions-bar">
        <div className="cac-filter-toggles">
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

        <div className="cac-group-copy-btns">
          <button
            type="button"
            className={`cac-group-btn ${copiedAction === 'upper' ? 'copied' : ''}`}
            onClick={() => handleCopyGroup('upper')}
          >
            {copiedAction === 'upper' ? <Check size={13} /> : <Copy size={13} />}
            <span>Copiar mayúsculas</span>
          </button>

          <button
            type="button"
            className={`cac-group-btn ${copiedAction === 'lower' ? 'copied' : ''}`}
            onClick={() => handleCopyGroup('lower')}
          >
            {copiedAction === 'lower' ? <Check size={13} /> : <Copy size={13} />}
            <span>Copiar minúsculas</span>
          </button>

          <button
            type="button"
            className={`cac-group-btn primary-copy ${copiedAction === 'all' ? 'copied' : ''}`}
            onClick={() => handleCopyGroup('all')}
          >
            {copiedAction === 'all' ? <Check size={13} /> : <Copy size={13} />}
            <span>Copiar todo</span>
          </button>
        </div>
      </div>

      {/* Grid of Individual Letters */}
      <div className="cat-letters-grid">
        {displayedLetters.map((item, idx) => (
          <AlphabetLetterCard key={`cac-${item.original}-${idx}`} letter={item} />
        ))}
      </div>

      {/* Deep Link to Abecedario Cursivo SILO Page */}
      <div className="cac-deep-link-box">
        <Link href="/letras-cursivas/abecedario-cursivo" className="cac-deep-link">
          <span>Ver el abecedario cursivo completo con selector de 6 estilos manuscritos</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
