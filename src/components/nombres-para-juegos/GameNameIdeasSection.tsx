'use client';

import React, { useState } from 'react';
import { Copy, Check, Zap, Gamepad2, Sparkles, Crown, Flame } from 'lucide-react';

interface IdeaCategory {
  title: string;
  icon: any;
  color: 'cyan' | 'emerald' | 'pink' | 'amber';
  description: string;
  names: string[];
}

const GAME_NAME_CATEGORIES: IdeaCategory[] = [
  {
    title: 'Nombres cortos',
    icon: Zap,
    color: 'cyan',
    description: 'Fáciles de escribir y recordar. Ideales para añadir un símbolo o detalle después.',
    names: ['Nox', 'Nova', 'Zyn', 'Kiro', 'Ryu', 'Nexo', 'Vex', 'Zen', 'Kael', 'Lux', 'Ziro', 'Ares', 'Nyx', 'Raze', 'Vanta']
  },
  {
    title: 'Nombres gamer',
    icon: Gamepad2,
    color: 'emerald',
    description: 'Opciones de alta intensidad para partidas competitivas, solistas o en equipo.',
    names: ['NovaX', 'NexoRush', 'RayoZen', 'TitanNova', 'VortexX', 'AstroNex', 'ShadowZen', 'PixelRush', 'NovaCore', 'RayoNox', 'ZeroNova', 'NexoPrime', 'VantaX', 'AstroVex', 'ZenRush']
  },
  {
    title: 'Nombres aesthetic',
    icon: Sparkles,
    color: 'pink',
    description: 'Combinaciones suaves, limpias y visualmente armoniosas con palabras evocadoras.',
    names: ['LunaAura', 'NovaLuna', 'AuraNexa', 'SoftNova', 'LunaZen', 'NubeNova', 'AuraSky', 'NovaBloom', 'BrumaZen', 'LunaVibe', 'NexoAura', 'AstroLuna']
  },
  {
    title: 'Nombres elegantes',
    icon: Crown,
    color: 'amber',
    description: 'Estilo limpio y distinguido utilizando una o dos palabras fuertes.',
    names: ['NovaElite', 'LunaRoyal', 'NexoLux', 'AuraPrime', 'ZenRoyal', 'NovaCrown', 'LuxNova', 'EliteNex', 'RoyalZen', 'NovaPrestige']
  },
  {
    title: 'Nombres graciosos',
    icon: Flame,
    color: 'amber',
    description: 'Para jugar con amigos con humor, ingenio y personalidad sin sobrecargar de símbolos.',
    names: ['CasiPro', 'NoEraYo', 'PingAlto', 'ModoSiesta', 'PanConLag', 'CeroDrama', 'OtroIntento', 'CasiGano', 'SinPrisa', 'DonDespiste', 'UyPerdón', 'ModoRelax']
  }
];

export default function GameNameIdeasSection() {
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const handleCopy = async (text: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedName(text);
      setTimeout(() => setCopiedName(null), 1800);
    } catch {
      // Fallback
    }
  };

  return (
    <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.25rem'
        }}
      >
        {GAME_NAME_CATEGORIES.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <div key={idx} className={`niche-card niche-card-${cat.color}`}>
              <div className="niche-card-header">
                <IconComp size={18} />
                <h3 className="niche-card-title">{cat.title}</h3>
              </div>
              <p className="niche-card-desc">{cat.description}</p>

              <div className="niche-card-list">
                {cat.names.map((name, nIdx) => {
                  const isCopied = copiedName === name;
                  return (
                    <div
                      key={nIdx}
                      className="niche-example-row"
                      onClick={() => handleCopy(name)}
                      style={{ cursor: 'pointer' }}
                      title="Haz clic para copiar"
                    >
                      <span className="niche-example-text">{name}</span>
                      <button
                        type="button"
                        className={`cp-card-copy-btn ${isCopied ? 'copied' : ''}`}
                        style={{
                          width: 'auto',
                          padding: '0.25rem 0.75rem',
                          fontSize: '0.75rem',
                          height: 'auto',
                          minWidth: '70px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(name);
                        }}
                      >
                        {isCopied ? (
                          <>
                            <Check size={12} />
                            <span>¡Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
