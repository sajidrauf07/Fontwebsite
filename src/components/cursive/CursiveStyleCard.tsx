'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CursiveStyleCardProps {
  name: string;
  preview: string;
  description?: string;
}

export const CursiveStyleCard: React.FC<CursiveStyleCardProps> = ({
  name,
  preview,
  description
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(preview);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = preview;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <div className={`cursive-style-card ${copied ? 'card-copied' : ''}`}>
      <div className="csc-header">
        <span className="csc-name">{name}</span>
      </div>
      <div className="csc-preview">
        <span className="csc-preview-text">{preview}</span>
      </div>
      <div className="csc-actions">
        <button
          onClick={handleCopy}
          className={`csc-copy-btn ${copied ? 'copied' : ''}`}
          type="button"
          aria-label={`Copiar estilo ${name}`}
        >
          {copied ? (
            <>
              <Check size={16} />
              <span>¡Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
