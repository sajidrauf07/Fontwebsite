'use client';

import React, { useState } from 'react';
import { Shuffle, Copy, Check, Flame, Zap } from 'lucide-react';
import { INSANE_POWER_WORDS, INSANE_DECORATIVE_FRAMES } from '@/data/freeFireInsaneData';

export default function RandomInsaneNameGenerator() {
  const [randomName, setRandomName] = useState('亗 INSANO 亗');
  const [isCopied, setIsCopied] = useState(false);

  const generateRandomInsane = () => {
    const word = INSANE_POWER_WORDS[Math.floor(Math.random() * INSANE_POWER_WORDS.length)];
    const frame = INSANE_DECORATIVE_FRAMES[Math.floor(Math.random() * INSANE_DECORATIVE_FRAMES.length)];
    setRandomName(`${frame.prefix}${word}${frame.suffix}`);
    setIsCopied(false);
  };

  const handleCopy = async () => {
    if (!randomName) return;
    try {
      await navigator.clipboard.writeText(randomName);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = randomName;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12" style={{ borderColor: 'rgba(245, 158, 11, 0.3)' }}>
      <div className="seo-icon-badge" style={{ color: '#F59E0B' }}>
        <Flame size={20} />
      </div>
      <h2>Generador de Nombres Insanos Aleatorios</h2>
      <p>
        ¿No sabes qué nombre elegir? Utiliza nuestro motor de generación aleatoria para combinar términos agresivos, símbolos Pro y marcos gráficos al instante.
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '16px',
          padding: '2rem',
          marginTop: '1.5rem',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            fontSize: '1.8rem',
            fontWeight: 800,
            color: '#FFFFFF',
            fontFamily: 'monospace',
            letterSpacing: '1px',
            textShadow: '0 0 20px rgba(245, 158, 11, 0.4)',
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '1rem 2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            minWidth: '280px'
          }}
        >
          {randomName}
        </div>

        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            type="button"
            className="cp-copy-all-btn"
            style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
            onClick={generateRandomInsane}
          >
            <Shuffle size={16} />
            <span>Generar Nombre Insano</span>
          </button>

          <button
            type="button"
            className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
            style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
            onClick={handleCopy}
          >
            {isCopied ? (
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
