'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { FontStyle } from '@/data/fontStyles';
import { Copy, Check, Heart, AlertTriangle } from 'lucide-react';

interface StyleCardProps {
  styleDef: FontStyle;
  inputText: string;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onCopied: (id: string, text: string) => void;
}

const StyleCardComponent: React.FC<StyleCardProps> = ({
  styleDef,
  inputText,
  isFavorite,
  onToggleFavorite,
  onCopied
}) => {
  const [copied, setCopied] = useState(false);

  const defaultText = 'Letras Bonitas';
  const rawText = inputText.trim() || defaultText;

  // Memoize transformation to avoid unnecessary string manipulations
  const transformedText = useMemo(() => {
    try {
      return styleDef.transform(rawText);
    } catch {
      return rawText;
    }
  }, [styleDef, rawText]);

  const handleCopy = useCallback(async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(transformedText);
      } else {
        // Fallback for older browsers/environments
        const textarea = document.createElement('textarea');
        textarea.value = transformedText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      setCopied(true);
      onCopied(styleDef.id, transformedText);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Error al copiar al portapapeles:', err);
    }
  }, [transformedText, onCopied, styleDef.id]);

  return (
    <div className={`style-card ${copied ? 'card-copied' : ''}`}>
      <div className="card-top">
        <div className="card-meta">
          <span className="card-name">{styleDef.name}</span>
          <span className="card-category-tag">{styleDef.category}</span>
          {styleDef.isExperimental && (
            <span className="experimental-tag" title="Este estilo puede variar según el dispositivo">
              <AlertTriangle size={12} />
              <span>Exp</span>
            </span>
          )}
        </div>
        <button
          onClick={() => onToggleFavorite(styleDef.id)}
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          title={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          type="button"
          aria-label={`Favorito ${styleDef.name}`}
        >
          <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="card-preview">
        <div className="preview-text" tabIndex={0} aria-label={`Vista previa: ${transformedText}`}>
          {transformedText}
        </div>
      </div>

      <div className="card-bottom">
        <button
          onClick={handleCopy}
          className={`copy-btn ${copied ? 'copied' : ''}`}
          type="button"
          aria-label={`Copiar estilo ${styleDef.name}`}
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

export const StyleCard = React.memo(StyleCardComponent);
