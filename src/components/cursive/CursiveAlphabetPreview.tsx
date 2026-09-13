'use client';

import React from 'react';
import { mapAlphabet } from '@/lib/unicode/transformations';

const ALPHABET_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHABET_LOWER = 'abcdefghijklmnopqrstuvwxyz';

export const CursiveAlphabetPreview: React.FC = () => {
  const boldScriptUpper = mapAlphabet(ALPHABET_UPPER, 'boldScript');
  const boldScriptLower = mapAlphabet(ALPHABET_LOWER, 'boldScript');
  const scriptUpper = mapAlphabet(ALPHABET_UPPER, 'script');
  const scriptLower = mapAlphabet(ALPHABET_LOWER, 'script');

  return (
    <div className="alphabet-preview-container">
      <div className="alphabet-block">
        <h4 className="alphabet-block-title">Cursiva clásica — Mayúsculas</h4>
        <div className="alphabet-letters">
          {Array.from(boldScriptUpper).map((char, i) => (
            <span key={`bu-${i}`} className="alphabet-char">
              <span className="char-original">{ALPHABET_UPPER[i]}</span>
              <span className="char-cursive">{char}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="alphabet-block">
        <h4 className="alphabet-block-title">Cursiva clásica — Minúsculas</h4>
        <div className="alphabet-letters">
          {Array.from(boldScriptLower).map((char, i) => (
            <span key={`bl-${i}`} className="alphabet-char">
              <span className="char-original">{ALPHABET_LOWER[i]}</span>
              <span className="char-cursive">{char}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="alphabet-block">
        <h4 className="alphabet-block-title">Cursiva fina — Mayúsculas</h4>
        <div className="alphabet-letters">
          {Array.from(scriptUpper).map((char, i) => (
            <span key={`su-${i}`} className="alphabet-char">
              <span className="char-original">{ALPHABET_UPPER[i]}</span>
              <span className="char-cursive">{char}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="alphabet-block">
        <h4 className="alphabet-block-title">Cursiva fina — Minúsculas</h4>
        <div className="alphabet-letters">
          {Array.from(scriptLower).map((char, i) => (
            <span key={`sl-${i}`} className="alphabet-char">
              <span className="char-original">{ALPHABET_LOWER[i]}</span>
              <span className="char-cursive">{char}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
