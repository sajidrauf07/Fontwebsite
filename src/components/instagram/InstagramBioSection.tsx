'use client';

import React, { useState } from 'react';
import { mapAlphabet } from '@/lib/unicode/transformations';
import { Copy, Check, FileText } from 'lucide-react';

const BIO_TEMPLATES = [
  {
    tag: 'Creador / Influencer',
    headline: 'Creador de Contenido',
    subline: 'Viajes, Estilo de Vida & Fotografía 📸',
    buttonLabel: 'Contacto & Colaboraciones ⬇️'
  },
  {
    tag: 'Aesthetic / Personal',
    headline: 'Creando mi realidad',
    subline: 'Viviendo un día a la vez 🌸✨',
    buttonLabel: 'Lee mi último blog ⬇️'
  },
  {
    tag: 'Emprendedor / Marca',
    headline: 'Diseño & Marca Personal',
    subline: 'Ayudo a creadores a destacar online 🚀',
    buttonLabel: 'Consigue tu guía gratis ⬇️'
  }
];

export default function InstagramBioSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (index: number, fullBioText: string) => {
    try {
      await navigator.clipboard.writeText(fullBioText);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = fullBioText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1800);
    }
  };

  return (
    <section className="seo-card-section mb-12" id="letras-para-bio">
      <div className="seo-icon-badge">
        <FileText size={20} />
      </div>
      <h2>Letras para la Bio de Instagram</h2>
      <p>
        La biografía de tu perfil es lo primero que ven tus visitantes. Utiliza nuestros formatos diseñados para títulos, descripciones y llamadas a la acción:
      </p>

      <div className="cp-results-grid mt-6" style={{ gridTemplateColumns: '1fr' }}>
        {BIO_TEMPLATES.map((item, index) => {
          const styledTitle = mapAlphabet(item.headline, 'scriptBold');
          const styledSub = mapAlphabet(item.subline, 'smallCaps');
          const fullBio = `${styledTitle}\n${styledSub}\n${item.buttonLabel}`;
          const isCopied = copiedIndex === index;

          return (
            <div key={index} className={`cp-style-card ${isCopied ? 'copied' : ''}`}>
              <div className="cp-card-header">
                <span className="cp-tag-chip">{item.tag}</span>
              </div>
              <div className="cp-card-preview" style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                <span className="cp-card-text" style={{ fontSize: '1.1rem', color: '#F8FAFC' }}>
                  {styledTitle}
                </span>
                <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                  {styledSub}
                </span>
                <span style={{ display: 'block', fontSize: '0.85rem', color: '#A5B4FC', marginTop: '0.25rem' }}>
                  {item.buttonLabel}
                </span>
              </div>
              <div className="cp-card-actions">
                <button
                  type="button"
                  className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                  onClick={() => handleCopy(index, fullBio)}
                >
                  {isCopied ? (
                    <>
                      <Check size={14} />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copiar Bio Completa</span>
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
