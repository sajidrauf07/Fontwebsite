'use client';

import React, { useState, useMemo } from 'react';
import { Copy, Check, SlidersHorizontal, Type } from 'lucide-react';
import {
  ALPHABET_STYLES,
  buildAlphabet,
  buildFullAlphabetString,
  type AlphabetLetter
} from '@/data/cursiveAlphabet';
import { mapAlphabet } from '@/lib/unicode/transformations';
import { type AlphabetStyleKey } from '@/lib/unicode/mappings';
import AlphabetLetterCard from './AlphabetLetterCard';

type CaseFilter = 'upper' | 'lower' | 'both';

export default function CursiveAlphabetTool() {
  const [selectedStyleId, setSelectedStyleId] = useState<string>('boldScript');
  const [caseFilter, setCaseFilter] = useState<CaseFilter>('both');
  const [copiedAll, setCopiedAll] = useState(false);
  const [customText, setCustomText] = useState('Letras Cursivas Bonitas');
  const [copiedCustom, setCopiedCustom] = useState(false);

  // Active style object
  const activeStyle = useMemo(() => {
    return ALPHABET_STYLES.find((s) => s.id === selectedStyleId) || ALPHABET_STYLES[0];
  }, [selectedStyleId]);

  // Compute letters array according to filter
  const displayedLetters = useMemo(() => {
    const styleKey = activeStyle.styleKey;
    if (caseFilter === 'upper') {
      return buildAlphabet(styleKey, 'upper');
    }
    if (caseFilter === 'lower') {
      return buildAlphabet(styleKey, 'lower');
    }
    // 'both' -> Combine upper and lower
    const upper = buildAlphabet(styleKey, 'upper');
    const lower = buildAlphabet(styleKey, 'lower');
    return [...upper, ...lower];
  }, [activeStyle, caseFilter]);

  // Copy full alphabet to clipboard
  const handleCopyAll = async () => {
    const fullStr = buildFullAlphabetString(activeStyle.styleKey);
    try {
      await navigator.clipboard.writeText(fullStr);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = fullStr;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  // Transform custom input live
  const customTransformed = useMemo(() => {
    if (!customText.trim()) return '';
    return mapAlphabet(customText, activeStyle.styleKey);
  }, [customText, activeStyle]);

  const handleCopyCustom = async () => {
    if (!customTransformed) return;
    try {
      await navigator.clipboard.writeText(customTransformed);
      setCopiedCustom(true);
      setTimeout(() => setCopiedCustom(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = customTransformed;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedCustom(true);
      setTimeout(() => setCopiedCustom(false), 2000);
    }
  };

  return (
    <section className="cursive-alphabet-tool-section" id="abecedario-tool">
      <div className="cat-panel">
        {/* Style Selector Tabs */}
        <div className="cat-styles-bar">
          <div className="cat-bar-header">
            <span className="cat-bar-title">
              <SlidersHorizontal size={16} className="cg-icon" /> Estilo de Cursiva
            </span>
            <span className="cat-style-desc">{activeStyle.description}</span>
          </div>
          <div className="cat-tabs-scroll">
            {ALPHABET_STYLES.map((style) => (
              <button
                key={style.id}
                type="button"
                className={`cat-tab-btn ${selectedStyleId === style.id ? 'active' : ''}`}
                onClick={() => setSelectedStyleId(style.id)}
              >
                <span>{style.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Toolbar & Controls */}
        <div className="cat-toolbar">
          <div className="cat-case-toggles">
            <button
              type="button"
              className={`cat-case-btn ${caseFilter === 'both' ? 'active' : ''}`}
              onClick={() => setCaseFilter('both')}
            >
              Ambas (A-z)
            </button>
            <button
              type="button"
              className={`cat-case-btn ${caseFilter === 'upper' ? 'active' : ''}`}
              onClick={() => setCaseFilter('upper')}
            >
              Mayúsculas (A-Z)
            </button>
            <button
              type="button"
              className={`cat-case-btn ${caseFilter === 'lower' ? 'active' : ''}`}
              onClick={() => setCaseFilter('lower')}
            >
              Minúsculas (a-z)
            </button>
          </div>

          <button
            type="button"
            className={`cat-copy-all-btn ${copiedAll ? 'copied' : ''}`}
            onClick={handleCopyAll}
            title="Copiar todo el abecedario cursivo al portapapeles"
          >
            {copiedAll ? (
              <>
                <Check size={15} />
                <span>¡Abecedario Copiado!</span>
              </>
            ) : (
              <>
                <Copy size={15} />
                <span>Copiar Todo el Abecedario</span>
              </>
            )}
          </button>
        </div>

        {/* Alphabet Letter Grid */}
        <div className="cat-grid-wrapper">
          <div className="cat-letters-grid">
            {displayedLetters.map((item, index) => (
              <AlphabetLetterCard key={`${activeStyle.id}-${item.original}-${index}`} letter={item} />
            ))}
          </div>
        </div>

        {/* Live Custom Text Tester */}
        <div className="cat-live-tester">
          <div className="clt-header">
            <h3 className="clt-title">
              <Type size={16} className="cg-icon" /> Probar estilo «{activeStyle.name}» con tu propio texto
            </h3>
          </div>
          <div className="clt-body">
            <input
              type="text"
              className="clt-input"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Escribe algo para convertir a cursiva..."
              maxLength={120}
            />
            {customTransformed && (
              <div className="clt-result-box">
                <span className="clt-result-text">{customTransformed}</span>
                <button
                  type="button"
                  className={`clt-copy-btn ${copiedCustom ? 'copied' : ''}`}
                  onClick={handleCopyCustom}
                >
                  {copiedCustom ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedCustom ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
