'use client';

import React, { useState } from 'react';
import { Layers, Copy, Check, Trash2, Plus } from 'lucide-react';
import { FREE_FIRE_SYMBOLS_LIBRARY } from '@/data/freeFireSimbolosData';

export default function SymbolCombiner() {
  const [combinedSymbols, setCombinedSymbols] = useState<string[]>(['★', '亗', '『』']);
  const [isCopied, setIsCopied] = useState(false);

  const addSymbol = (sym: string) => {
    setCombinedSymbols((prev) => [...prev, sym]);
    setIsCopied(false);
  };

  const removeSymbolAt = (idx: number) => {
    setCombinedSymbols((prev) => prev.filter((_, i) => i !== idx));
    setIsCopied(false);
  };

  const clearAll = () => {
    setCombinedSymbols([]);
    setIsCopied(false);
  };

  const combinedString = combinedSymbols.join('');

  const handleCopy = async () => {
    if (!combinedString) return;
    try {
      await navigator.clipboard.writeText(combinedString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = combinedString;
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
      <div className="seo-icon-badge" style={{ color: '#F59E0B' }}>
        <Layers size={20} />
      </div>
      <h2>Combina tus Símbolos</h2>
      <p>
        Toca cualquiera de los símbolos rápidos a continuación para añadirlos a tu combinación y crear una secuencia personalizada lista para copiar:
      </p>

      {/* Live Combiner Box */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem',
          marginTop: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#FFFFFF',
            fontFamily: 'monospace',
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.25rem',
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            width: '100%',
            overflowX: 'auto'
          }}
        >
          {combinedSymbols.length === 0 ? (
            <span style={{ color: 'var(--text-dim)', fontSize: '0.95rem', fontWeight: 400 }}>
              (Toca símbolos abajo para añadirlos a tu combinación)
            </span>
          ) : (
            combinedSymbols.map((sym, idx) => (
              <span
                key={idx}
                style={{
                  background: 'rgba(245, 158, 11, 0.2)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  cursor: 'pointer'
                }}
                onClick={() => removeSymbolAt(idx)}
                title="Toca para eliminar este símbolo"
              >
                {sym}
              </span>
            ))
          )}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            type="button"
            className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
            style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem', background: isCopied ? undefined : '#F59E0B', color: isCopied ? undefined : '#000' }}
            onClick={handleCopy}
            disabled={!combinedString}
          >
            {isCopied ? (
              <>
                <Check size={16} />
                <span>¡Combinación Copiada!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copiar Combinación</span>
              </>
            )}
          </button>

          {combinedSymbols.length > 0 && (
            <button
              type="button"
              className="cp-clear-btn"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}
              onClick={clearAll}
            >
              <Trash2 size={15} />
              <span>Limpiar todo</span>
            </button>
          )}
        </div>
      </div>

      {/* Quick Add Palette */}
      <div style={{ marginTop: '1.25rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dim)', display: 'block', marginBottom: '0.6rem' }}>
          Paleta rápida de símbolos:
        </span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {FREE_FIRE_SYMBOLS_LIBRARY.slice(0, 16).map((item) => (
            <button
              key={item.id}
              type="button"
              className="cp-tag-chip"
              style={{ padding: '0.45rem 0.85rem', fontSize: '1.1rem' }}
              onClick={() => addSymbol(item.symbol)}
              title={`Añadir ${item.name}`}
            >
              <Plus size={11} style={{ marginRight: '2px', opacity: 0.7 }} />
              {item.symbol}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
