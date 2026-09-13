'use client';

import React, { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';
import { type AlphabetLetter } from '@/data/cursiveAlphabet';

interface AlphabetLetterCardProps {
  letter: AlphabetLetter;
}

export default function AlphabetLetterCard({ letter }: AlphabetLetterCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(letter.cursive);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback if clipboard API fails
      const textarea = document.createElement('textarea');
      textarea.value = letter.cursive;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div
      className={`alphabet-letter-card ${copied ? 'copied' : ''} ${
        letter.isSpecial ? 'special-char' : ''
      }`}
      onClick={handleCopy}
      role="button"
      tabIndex={0}
      aria-label={`Copiar letra cursiva ${letter.original}: ${letter.cursive}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCopy();
        }
      }}
    >
      <div className="alc-top">
        <span className="alc-original">{letter.original}</span>
        {letter.isSpecial && (
          <span className="alc-special-badge" title="No tiene equivalente único en Unicode cursive, se conserva la letra original">
            <Info size={10} /> Ñ
          </span>
        )}
      </div>

      <div className="alc-cursive-box">
        <span className="alc-cursive">{letter.cursive}</span>
      </div>

      <div className="alc-footer">
        <button
          type="button"
          className={`alc-copy-btn ${copied ? 'copied-btn' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
          aria-label={copied ? 'Copiado' : `Copiar ${letter.cursive}`}
        >
          {copied ? (
            <>
              <Check size={12} />
              <span>Copiado</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
