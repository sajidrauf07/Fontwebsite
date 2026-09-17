'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label = 'Copiar',
  className = '',
  size = 'md'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`article-copy-btn ${copied ? 'copied' : ''} size-${size} ${className}`}
      aria-label={copied ? `Copiado: ${textToCopy}` : `Copiar: ${textToCopy}`}
      title={copied ? '¡Copiado al portapapeles!' : 'Copiar texto al portapapeles'}
    >
      {copied ? (
        <>
          <Check size={16} className="btn-icon text-emerald-400" aria-hidden="true" />
          <span className="btn-text">¡Copiado!</span>
        </>
      ) : (
        <>
          <Copy size={16} className="btn-icon" aria-hidden="true" />
          <span className="btn-text">{label}</span>
        </>
      )}
    </button>
  );
};
