'use client';

import React, { useState } from 'react';
import { Shuffle, Copy, Check, Sparkles } from 'lucide-react';
import { APODOS_WORD_LIST, APODOS_DECORATIVE_DECK } from '@/data/freeFireApodosData';

export default function RandomNicknameGenerator() {
  const [randomNick, setRandomNick] = useState('亗 SHADOW 亗');
  const [isCopied, setIsCopied] = useState(false);

  const generateRandomNickname = () => {
    const word = APODOS_WORD_LIST[Math.floor(Math.random() * APODOS_WORD_LIST.length)];
    const deck = APODOS_DECORATIVE_DECK[Math.floor(Math.random() * APODOS_DECORATIVE_DECK.length)];
    setRandomNick(`${deck.prefix}${word}${deck.suffix}`);
    setIsCopied(false);
  };

  const handleCopy = async () => {
    if (!randomNick) return;
    try {
      await navigator.clipboard.writeText(randomNick);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = randomNick;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge" style={{ color: '#0EA5E9' }}>
        <Sparkles size={20} />
      </div>
      <h2>Generador de Apodos Aleatorios</h2>
      <p>
        Genera combinaciones únicas y creativas mezclando palabras populares y marcos gráficos para Free Fire con un solo clic.
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(14, 165, 233, 0.25)',
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
            textShadow: '0 0 20px rgba(14, 165, 233, 0.4)',
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '1rem 2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            minWidth: '280px'
          }}
        >
          {randomNick}
        </div>

        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            type="button"
            className="cp-copy-all-btn"
            style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', background: 'linear-gradient(135deg, #0EA5E9, #6366F1)' }}
            onClick={generateRandomNickname}
          >
            <Shuffle size={16} />
            <span>Generar Apodo Aleatorio</span>
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
                <span>Copiar Apodo</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
