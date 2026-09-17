'use client';

import React, { useState } from 'react';
import { Copy, Check, Flame, Crown, Sparkles, Zap, Shield } from 'lucide-react';
import { FREE_FIRE_NICHE_IDEAS, NicheNameIdeaGroup } from '@/data/freeFireData';

const NICHE_CONFIG = [
  { color: 'amber', icon: Crown },
  { color: 'pink', icon: Sparkles },
  { color: 'cyan', icon: Zap },
  { color: 'emerald', icon: Shield }
];

export default function FreeFireNameIdeasSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 1800);
    }
  };

  return (
    <div className="mt-8 pt-6 border-t border-slate-800/80">
      <div className="article-category-pill">
        <Flame size={14} className="text-amber-400" aria-hidden="true" />
        <span>Colección de Ideas</span>
      </div>
      <h3 className="article-h3" style={{ marginTop: '0.5rem' }}>
        Ideas de Nombres para Free Fire
      </h3>
      <p className="article-paragraph">
        Explora nombres clasificados por estilos para encontrar la opción perfecta para tu perfil o clan:
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1.25rem',
          marginTop: '1.25rem'
        }}
      >
        {FREE_FIRE_NICHE_IDEAS.map((group: NicheNameIdeaGroup, idx: number) => {
          const cfg = NICHE_CONFIG[idx % NICHE_CONFIG.length];
          const IconComp = cfg.icon;
          return (
            <div
              key={idx}
              className={`niche-card niche-card-${cfg.color}`}
            >
              <div className="niche-card-header">
                <IconComp size={18} />
                <h3 className="niche-card-title">
                  {group.title}
                </h3>
              </div>
              <p className="niche-card-desc">
                {group.description}
              </p>

              <div className="niche-card-list">
                {group.examples.map((ex: string, eIdx: number) => {
                  const isCopied = copiedText === ex;
                  return (
                    <div
                      key={eIdx}
                      className="niche-example-row"
                    >
                      <span className="niche-example-text">{ex}</span>
                      <button
                        type="button"
                        className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                        style={{ padding: '4px 12px', fontSize: '0.75rem', height: 'auto', minWidth: 'auto', width: 'auto' }}
                        onClick={() => handleCopy(ex)}
                      >
                        {isCopied ? (
                          <>
                            <Check size={12} />
                            <span>¡Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

