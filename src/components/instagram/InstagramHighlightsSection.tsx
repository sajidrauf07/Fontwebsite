'use client';

import React, { useState } from 'react';
import { mapAlphabet } from '@/lib/unicode/transformations';
import { Copy, Check, Bookmark } from 'lucide-react';

const HIGHLIGHT_TOPICS = [
  { raw: 'Viajes', emoji: '✈️' },
  { raw: 'Amigos', emoji: '❤️' },
  { raw: 'Fotos', emoji: '📸' },
  { raw: 'Trabajo', emoji: '💼' },
  { raw: 'Música', emoji: '🎧' },
  { raw: 'Eventos', emoji: '🎉' },
  { raw: 'Food', emoji: '🍰' },
  { raw: 'Lifestyle', emoji: '🌿' }
];

export default function InstagramHighlightsSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (key: string, textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12" id="destacados-instagram">
      <div className="seo-icon-badge">
        <Bookmark size={20} />
      </div>
      <h2>Letras para destacados de Instagram</h2>
      <p>
        Personaliza los nombres de tus portadas de Historias Destacadas con títulos elegantes en versalitas o cursiva:
      </p>

      <div className="cp-results-grid mt-6">
        {HIGHLIGHT_TOPICS.map((topic) => {
          const versalitas = mapAlphabet(topic.raw, 'smallCaps');
          const styledText = `${versalitas} ${topic.emoji}`;
          const key = `highlight-${topic.raw}`;
          const isCopied = copiedKey === key;

          return (
            <div key={topic.raw} className={`cp-style-card ${isCopied ? 'copied' : ''}`}>
              <div className="cp-card-header">
                <span className="cp-card-name">Destacado: {topic.raw}</span>
              </div>
              <div className="cp-card-preview">
                <span className="cp-card-text" style={{ fontSize: '1.2rem' }}>
                  {styledText}
                </span>
              </div>
              <div className="cp-card-actions">
                <button
                  type="button"
                  className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                  onClick={() => handleCopy(key, styledText)}
                >
                  {isCopied ? (
                    <>
                      <Check size={14} />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copiar Label</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
