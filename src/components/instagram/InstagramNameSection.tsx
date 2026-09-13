'use client';

import React, { useState } from 'react';
import { mapAlphabet } from '@/lib/unicode/transformations';
import { Copy, Check, UserCheck, AlertCircle } from 'lucide-react';

export default function InstagramNameSection() {
  const [name, setName] = useState('Mi Nombre');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const cleanName = name.trim().length > 0 ? name : 'Mi Nombre';

  const nameStyles = [
    { label: 'Cursiva Elegante', text: mapAlphabet(cleanName, 'scriptBold') },
    { label: 'Versalitas Aesthetic', text: mapAlphabet(cleanName, 'smallCaps') },
    { label: 'Doble Trazo', text: mapAlphabet(cleanName, 'doubleStruck') },
    { label: 'Negrita Fuerte', text: mapAlphabet(cleanName, 'boldSans') },
    { label: 'Gótica Medieval', text: mapAlphabet(cleanName, 'fraktur') }
  ];

  const handleCopy = async (index: number, textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12" id="letras-para-nombre">
      <div className="seo-icon-badge">
        <UserCheck size={20} />
      </div>
      <h2>Letras para el Nombre de Instagram</h2>
      <p>
        El «Nombre de Perfil» de Instagram permite caracteres tipográficos especiales. Prueba cómo luce tu nombre:
      </p>

      <div className="cp-panel mt-6">
        <div className="cp-input-block">
          <div className="cp-input-header">
            <span className="cp-input-title">Escribe tu nombre de Instagram:</span>
          </div>
          <div className="cp-textarea-wrapper">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Sofía Martínez"
              className="cp-search-input"
              style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '1.1rem' }}
            />
          </div>
        </div>

        <div className="cp-results-grid mt-4">
          {nameStyles.map((item, index) => {
            const isCopied = copiedIndex === index;
            return (
              <div key={index} className={`cp-style-card ${isCopied ? 'copied' : ''}`}>
                <div className="cp-card-header">
                  <span className="cp-card-name">{item.label}</span>
                </div>
                <div className="cp-card-preview">
                  <span className="cp-card-text">{item.text}</span>
                </div>
                <div className="cp-card-actions">
                  <button
                    type="button"
                    className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                    onClick={() => handleCopy(index, item.text)}
                  >
                    {isCopied ? (
                      <>
                        <Check size={14} />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="seo-card-section mt-6" style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px dashed rgba(148, 163, 184, 0.3)' }}>
          <div className="flex items-center gap-2 mb-1" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F59E0B', fontWeight: 600 }}>
            <AlertCircle size={16} />
            <span>Diferencia importante: Nombre vs Nombre de usuario (@usuario)</span>
          </div>
          <p className="text-xs text-slate-400" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: 0 }}>
            Puedes cambiar libremente las letras de tu <strong>Nombre visible</strong> de perfil. Sin embargo, el <strong>Nombre de Usuario (@usuario)</strong> de Instagram solo admite letras sin formato, números, puntos y guiones bajos.
          </p>
        </div>
      </div>
    </section>
  );
}
