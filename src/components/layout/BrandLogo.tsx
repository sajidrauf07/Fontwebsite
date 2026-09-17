'use client';

import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  onClick,
  size = 'md'
}) => {
  return (
    <Link
      href="/"
      className={`tlb-site-logo ${className}`}
      onClick={onClick}
      aria-label="The Letras Bonitas - Fuentes, Nombres y Letras Bonitas"
    >
      {/* Monogram Emblem TLB */}
      <div className={`tlb-emblem-badge tlb-size-${size}`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="tlb-emblem-svg"
          aria-hidden="true"
        >
          <defs>
            {/* Cosmic Glass Badge Background */}
            <linearGradient id="tlbCosmicBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1B4B" />
              <stop offset="50%" stopColor="#111827" />
              <stop offset="100%" stopColor="#0B091A" />
            </linearGradient>

            {/* Radiant Neon Border Ring */}
            <linearGradient id="tlbRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="30%" stopColor="#A855F7" />
              <stop offset="65%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#FB923C" />
            </linearGradient>

            {/* Inner Radial Ambient Glow */}
            <radialGradient id="tlbInnerGlow" cx="28%" cy="22%" r="65%">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
              <stop offset="55%" stopColor="#EC4899" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            {/* Monogram Letter Gradients */}
            <linearGradient id="tlbTGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E0E7FF" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>

            <linearGradient id="tlbLGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#E879F9" />
            </linearGradient>

            <linearGradient id="tlbBGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#FB923C" />
            </linearGradient>

            {/* Top-Right Star Flare Gradient */}
            <linearGradient id="tlbStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>

            {/* Lettermark Soft Shadow */}
            <filter id="tlbShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.55" />
            </filter>
          </defs>

          {/* Squircle Badge Base */}
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="13"
            fill="url(#tlbCosmicBg)"
            stroke="url(#tlbRingGrad)"
            strokeWidth="1.8"
          />

          {/* Inner Ambient Glow Layer */}
          <rect
            x="3"
            y="3"
            width="42"
            height="42"
            rx="12"
            fill="url(#tlbInnerGlow)"
          />

          {/* Translucent Glass Specular Highlight Arc */}
          <path
            d="M 5 13 Q 24 6 43 13"
            stroke="rgba(255, 255, 255, 0.32)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Handcrafted TLB Monogram */}
          <g filter="url(#tlbShadow)">
            {/* Letter T: Left Winged Crown & Pillar */}
            <path
              d="M 8.5 15.5 C 8.5 14.1 9.6 13 11 13 H 21 C 22.4 13 23.5 14.1 23.5 15.5 C 23.5 16.9 22.4 18 21 18 H 18 V 32.5 C 18 33.9 16.9 35 15.5 35 C 14.1 35 13 33.9 13 32.5 V 18 H 11 C 9.6 18 8.5 16.9 8.5 15.5 Z"
              fill="url(#tlbTGrad)"
            />

            {/* Letter L: Central Stem + Sweeping Underline */}
            <path
              d="M 19 19 C 19 17.9 19.9 17 21 17 C 22.1 17 23 17.9 23 19 V 31.5 H 28 C 29.1 31.5 30 32.4 30 33.5 C 30 34.6 29.1 35.5 28 35.5 H 20.5 C 19.7 35.5 19 34.8 19 34 V 19 Z"
              fill="url(#tlbLGrad)"
            />

            {/* Letter B: Sculptural Dual-Loop with True Counters */}
            <path
              d="M 26.5 13 H 34 C 37.3 13 39.5 15.2 39.5 18 C 39.5 19.8 38.3 21.3 36.6 22 C 38.8 22.8 40.5 24.9 40.5 27.8 C 40.5 31.2 37.8 34 34.2 34 H 26.5 V 13 Z M 30.5 16.5 H 33.5 C 34.8 16.5 35.8 17.2 35.8 18.5 C 35.8 19.8 34.8 20.5 33.5 20.5 H 30.5 V 16.5 Z M 30.5 24 H 34 C 35.5 24 36.8 24.8 36.8 26.5 C 36.8 28.2 35.5 29 34 29 H 30.5 V 24 Z"
              fillRule="evenodd"
              fill="url(#tlbBGrad)"
            />
          </g>

          {/* Radiant 4-Point Diamond Sparkle */}
          <path
            d="M 37.5 7 L 38.7 10.2 L 42 11.4 L 38.7 12.6 L 37.5 16 L 36.3 12.6 L 33 11.4 L 36.3 10.2 Z"
            fill="url(#tlbStarGrad)"
            className="tlb-emblem-star"
          />
          <circle cx="37.5" cy="11.4" r="0.9" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Domain Words: The Letras Bonitas */}
      <div className="tlb-brand-text">
        <div className="tlb-tag-row">
          <span className="tlb-badge-the">THE</span>
        </div>
        <span className="tlb-main-name">
          Letras<span className="tlb-name-accent">Bonitas</span>
          <span className="tlb-star-flourish" aria-hidden="true">✦</span>
        </span>
      </div>
    </Link>
  );
};
