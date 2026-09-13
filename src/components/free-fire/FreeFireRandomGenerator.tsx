'use client';

import React, { useState } from 'react';
import { Copy, Check, Dices } from 'lucide-react';
import {
  RANDOM_NAME_WORDS,
  RANDOM_SYMBOL_PREFIXES,
  RANDOM_SYMBOL_SUFFIXES
} from '@/data/freeFireData';

export default function FreeFireRandomGenerator() {
  const [randomName, setRandomName] = useState('亗 Shadow 亗');
  const [copied, setCopied] = useState(false);

  const generateNewRandom = () => {
    const word = RANDOM_NAME_WORDS[Math.floor(Math.random() * RANDOM_NAME_WORDS.length)];
    const prefixIdx = Math.floor(Math.random() * RANDOM_SYMBOL_PREFIXES.length);
    const prefix = RANDOM_SYMBOL_PREFIXES[prefixIdx];
    const suffix = RANDOM_SYMBOL_SUFFIXES[prefixIdx]; // Matching pair

    setRandomName(`${prefix}${word}${suffix}`);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(randomName);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = randomName;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge">
        <Dices size={20} />
      </div>
      <h2>Generar Nombre Aleatorio para Free Fire</h2>
      <p>
        ¿No sabes qué nombre elegir? Pulsa el botón para generar nombres y apodos aleatorios con símbolos Pro:
      </p>

      <div
        style={{
          background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.7), rgba(15, 23, 42, 0.9))',
          borderRadius: '16px',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          padding: '1.75rem',
          maxWidth: '520px',
          margin: '1.5rem auto 0 auto',
          textAlign: 'center',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)'
        }}
      >
        <span style={{ fontSize: '0.825rem', color: '#a855f7', fontWeight: 600, textTransform: 'uppercase' }}>
          Apodo Aleatorio Generado
        </span>

        <div
          style={{
            fontSize: 'clamp(1.2rem, 5vw, 1.75rem)',
            fontWeight: 700,
            color: '#ffffff',
            margin: '1rem 0 1.5rem 0',
            fontFamily: 'monospace, sans-serif',
            wordBreak: 'break-word',
            overflowWrap: 'anywhere'
          }}
        >
          {randomName}
        </div>

        <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="cp-copy-all-btn"
            style={{ padding: '0.75rem 1.5rem', background: '#9333ea', borderColor: '#a855f7' }}
            onClick={generateNewRandom}
          >
            <Dices size={16} />
            <span>Generar Otro Nombre</span>
          </button>

          <button
            type="button"
            className={`cp-copy-all-btn ${copied ? 'copied' : ''}`}
            style={{ padding: '0.75rem 1.5rem' }}
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check size={16} />
                <span>¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copiar Nombre</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
