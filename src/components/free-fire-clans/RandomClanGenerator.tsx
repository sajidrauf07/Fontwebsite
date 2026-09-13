'use client';

import React, { useState } from 'react';
import { Shuffle, Copy, Check, Users } from 'lucide-react';
import { CLAN_POWER_WORDS, CLAN_TEAM_WORDS, CLAN_DECORATIVE_DECK } from '@/data/freeFireClanesData';

export default function RandomClanGenerator() {
  const [randomClan, setRandomClan] = useState('亗 SHADOW SQUAD 亗');
  const [isCopied, setIsCopied] = useState(false);

  const generateRandomClan = () => {
    const power = CLAN_POWER_WORDS[Math.floor(Math.random() * CLAN_POWER_WORDS.length)];
    const team = CLAN_TEAM_WORDS[Math.floor(Math.random() * CLAN_TEAM_WORDS.length)];
    const deck = CLAN_DECORATIVE_DECK[Math.floor(Math.random() * CLAN_DECORATIVE_DECK.length)];
    setRandomClan(`${deck.prefix}${power} ${team}${deck.suffix}`);
    setIsCopied(false);
  };

  const handleCopy = async () => {
    if (!randomClan) return;
    try {
      await navigator.clipboard.writeText(randomClan);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = randomClan;
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
      <div className="seo-icon-badge" style={{ color: '#10B981' }}>
        <Users size={20} />
      </div>
      <h2>Generador de Clan Aleatorio</h2>
      <p>
        Genera nombres de equipos y clanes competitivos combinando conceptos imponentes, sufijos de escuadra y símbolos Pro al instante.
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
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
            textShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '1rem 2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            minWidth: '280px'
          }}
        >
          {randomClan}
        </div>

        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            type="button"
            className="cp-copy-all-btn"
            style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', background: 'linear-gradient(135deg, #10B981, #0EA5E9)' }}
            onClick={generateRandomClan}
          >
            <Shuffle size={16} />
            <span>Generar Clan Aleatorio</span>
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
                <span>Copiar Clan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
