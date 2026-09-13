'use client';

import React, { useState, useMemo } from 'react';
import { Tag, Copy, Check, Sparkles } from 'lucide-react';
import { ALL_STYLES } from '@/data/styles';
import { transformText } from '@/lib/unicode/styleEngine';

const TAG_DECORATION_FRAMES = [
  { prefix: '『', suffix: '』' },
  { prefix: '亗', suffix: '亗' },
  { prefix: '★', suffix: '★' },
  { prefix: 'メ', suffix: 'メ' },
  { prefix: '⚡', suffix: '⚡' },
  { prefix: '☬', suffix: '☬' },
  { prefix: '✦', suffix: '✦' },
  { prefix: '👑', suffix: '👑' }
];

export default function ClanTagGenerator() {
  const [clanFullName, setClanFullName] = useState('Shadow Warriors');
  const [tagLength, setTagLength] = useState<2 | 3 | 4>(2);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Compute base tag from full name (e.g. "Shadow Warriors" -> "SW")
  const baseTag = useMemo(() => {
    if (!clanFullName.trim()) return 'SW';
    const words = clanFullName.trim().split(/\s+/).filter(Boolean);
    if (words.length >= 2) {
      const initials = words.map((w) => w[0]).join('').toUpperCase();
      return initials.slice(0, tagLength);
    }
    return clanFullName.trim().slice(0, tagLength).toUpperCase();
  }, [clanFullName, tagLength]);

  // Generate styled variations of the tag
  const tagVariations = useMemo(() => {
    const results: { label: string; text: string }[] = [];

    TAG_DECORATION_FRAMES.forEach((frame, idx) => {
      results.push({
        label: `Tag Marco ${idx + 1}`,
        text: `${frame.prefix}${baseTag}${frame.suffix}`
      });
    });

    // Add a couple of Unicode styled tags
    if (ALL_STYLES.length > 0) {
      const gothicStyle = ALL_STYLES.find((s) => s.id === 'gothic-bold') || ALL_STYLES[0];
      const squaredStyle = ALL_STYLES.find((s) => s.id === 'squared-black') || ALL_STYLES[1];
      const circlesStyle = ALL_STYLES.find((s) => s.id === 'circled-black') || ALL_STYLES[2];

      results.push({
        label: 'Tag Gótico',
        text: transformText(baseTag, gothicStyle)
      });
      results.push({
        label: 'Tag Cuadrado',
        text: transformText(baseTag, squaredStyle)
      });
      results.push({
        label: 'Tag Círculos',
        text: transformText(baseTag, circlesStyle)
      });
    }

    return results;
  }, [baseTag]);

  const handleCopy = async (text: string, idx: number) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12" style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
      <div className="seo-icon-badge" style={{ color: '#10B981' }}>
        <Tag size={20} />
      </div>
      <h2>Generador de Tags para Clan</h2>
      <p>
        Crea siglas o etiquetas cortas (Tags) de 2 a 4 caracteres para que los miembros de tu escuadra coloquen antes de su nick en Free Fire:
      </p>

      <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <div style={{ flex: '1 1 280px' }}>
          <label htmlFor="clan-tag-name-input" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.9rem' }}>
            Nombre completo de tu clan:
          </label>
          <input
            id="clan-tag-name-input"
            type="text"
            className="cp-search-input"
            style={{
              background: '#1E293B',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '10px',
              padding: '0.75rem 1rem',
              color: '#FFFFFF',
              fontSize: '1rem',
              width: '100%'
            }}
            value={clanFullName}
            onChange={(e) => setClanFullName(e.target.value)}
            placeholder="Ej. Shadow Warriors, Dark Kings..."
            maxLength={30}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.9rem' }}>
            Longitud del Tag:
          </label>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {[2, 3, 4].map((len) => (
              <button
                key={len}
                type="button"
                className={`cp-tag-chip ${tagLength === len ? 'active' : ''}`}
                style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                onClick={() => setTagLength(len as 2 | 3 | 4)}
              >
                {len} Letras
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '1.5rem'
        }}
      >
        {tagVariations.map((item, idx) => {
          const isCopied = copiedIndex === idx;

          return (
            <div
              key={idx}
              style={{
                background: 'var(--card-bg, #1e2029)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.75rem'
              }}
            >
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '1px' }}>
                {item.text}
              </span>

              <button
                type="button"
                className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => handleCopy(item.text, idx)}
              >
                {isCopied ? (
                  <>
                    <Check size={14} />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copiar Tag</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
