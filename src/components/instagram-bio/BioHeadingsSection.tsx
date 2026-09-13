'use client';

import React, { useState } from 'react';
import { mapAlphabet } from '@/lib/unicode/transformations';
import { BIO_HEADINGS_LIST } from '@/data/bioExamples';
import { Copy, Check, Type } from 'lucide-react';

export default function BioHeadingsSection() {
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
    <section className="seo-card-section mb-12" id="titulos-bio">
      <div className="seo-icon-badge">
        <Type size={20} />
      </div>
      <h2>Títulos para tu Bio</h2>
      <p>
        Utiliza encabezados en cursiva o versalitas para estructurar las secciones de tu perfil:
      </p>

      <div className="cp-results-grid mt-6">
        {BIO_HEADINGS_LIST.map((heading) => {
          const cursivaHeading = mapAlphabet(heading, 'scriptBold');
          const versalitasHeading = mapAlphabet(heading, 'smallCaps');

          const keyCursiva = `${heading}-cursiva`;
          const keyVersalitas = `${heading}-versalitas`;

          return (
            <div key={heading} className="cp-style-card">
              <div className="cp-card-header">
                <span className="cp-card-name">{heading}</span>
              </div>

              <div className="space-y-2 mt-2">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(51, 65, 85, 0.6)', borderRadius: '0.5rem' }}>
                  <span className="cp-card-text" style={{ fontSize: '1.1rem' }}>{cursivaHeading}</span>
                  <button
                    type="button"
                    className={`cp-card-copy-btn ${copiedKey === keyCursiva ? 'copied' : ''}`}
                    onClick={() => handleCopy(keyCursiva, cursivaHeading)}
                    style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
                  >
                    {copiedKey === keyCursiva ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedKey === keyCursiva ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(51, 65, 85, 0.6)', borderRadius: '0.5rem' }}>
                  <span className="cp-card-text" style={{ fontSize: '1.1rem' }}>{versalitasHeading}</span>
                  <button
                    type="button"
                    className={`cp-card-copy-btn ${copiedKey === keyVersalitas ? 'copied' : ''}`}
                    onClick={() => handleCopy(keyVersalitas, versalitasHeading)}
                    style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
                  >
                    {copiedKey === keyVersalitas ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedKey === keyVersalitas ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
