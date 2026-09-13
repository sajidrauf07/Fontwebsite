'use client';

import React, { useState } from 'react';
import { mapAlphabet } from '@/lib/unicode/transformations';
import { Copy, Check, UserCheck } from 'lucide-react';

export default function NameChangeSection() {
  const [name, setName] = useState('María');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const cleanName = name.trim().length > 0 ? name : 'María';

  const nameStyles = [
    { label: 'Cursiva Elegante', text: mapAlphabet(cleanName, 'scriptBold') },
    { label: 'Versalitas', text: mapAlphabet(cleanName, 'smallCaps') },
    { label: 'Gótica Medieval', text: mapAlphabet(cleanName, 'fraktur') },
    { label: 'Doble Trazo', text: mapAlphabet(cleanName, 'doubleStruck') },
    { label: 'Negrita Fina', text: mapAlphabet(cleanName, 'boldSans') }
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
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge">
        <UserCheck size={20} />
      </div>
      <h2>Cómo cambiar las letras de un nombre</h2>
      <p>
        Personalizar tu nombre de usuario para redes sociales o perfiles de videojuegos es muy sencillo. Escribe tu nombre a continuación para probarlo en tiempo real:
      </p>

      <div className="cp-panel mt-6">
        <div className="cp-input-block">
          <div className="cp-input-header">
            <span className="cp-input-title">Escribe tu nombre:</span>
          </div>
          <div className="cp-textarea-wrapper">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: María"
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
      </div>
    </section>
  );
}
