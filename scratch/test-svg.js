const fs = require('fs');

const svgMarkup = `
<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="tlb-emblem-svg" aria-hidden="true">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="tlbCosmicBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E1B4B" />
      <stop offset="45%" stop-color="#111827" />
      <stop offset="100%" stop-color="#090514" />
    </linearGradient>

    <!-- Border Ring Gradient -->
    <linearGradient id="tlbRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818CF8" />
      <stop offset="30%" stop-color="#C084FC" />
      <stop offset="65%" stop-color="#F43F5E" />
      <stop offset="100%" stop-color="#FB923C" />
    </linearGradient>

    <!-- Inner Glow Gradient -->
    <radialGradient id="tlbInnerGlow" cx="30%" cy="25%" r="65%">
      <stop offset="0%" stop-color="#818CF8" stop-opacity="0.35" />
      <stop offset="50%" stop-color="#EC4899" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Monogram Letters Gradient -->
    <linearGradient id="tlbMonogramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="25%" stop-color="#E0E7FF" />
      <stop offset="55%" stop-color="#C084FC" />
      <stop offset="85%" stop-color="#F43F5E" />
      <stop offset="100%" stop-color="#FB923C" />
    </linearGradient>

    <!-- Star Glow -->
    <linearGradient id="tlbStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047" />
      <stop offset="100%" stop-color="#F43F5E" />
    </linearGradient>
  </defs>

  <!-- Ambient Glow Behind Emblem -->
  <rect x="3" y="3" width="46" height="46" rx="14" fill="url(#tlbRingGrad)" opacity="0.25" filter="blur(4px)" />

  <!-- Base Squircle -->
  <rect x="2.5" y="2.5" width="47" height="47" rx="14" fill="url(#tlbCosmicBg)" stroke="url(#tlbRingGrad)" stroke-width="1.75" />
  
  <!-- Subtle Inner Glow -->
  <rect x="3.5" y="3.5" width="45" height="45" rx="13" fill="url(#tlbInnerGlow)" />

  <!-- Glass Specular Highlight Arc -->
  <path d="M 6 15 Q 26 8 46 15" stroke="rgba(255, 255, 255, 0.3)" stroke-width="1.2" stroke-linecap="round" />

  <!-- The Interlocking TLB Monogram -->
  <!-- Vector Glyph: T-L-B harmonized flow -->
  <g id="tlbMonogramGroup">
    <!-- Letter T: Modern Winged Crossbar + Pillar -->
    <path d="M 10 16.5 C 10 15.1 11.1 14 12.5 14 H 22.5 C 23.9 14 25 15.1 25 16.5 C 25 17.9 23.9 19 22.5 19 H 19.5 V 34.5 C 19.5 35.9 18.4 37 17 37 C 15.6 37 14.5 35.9 14.5 34.5 V 19 H 12.5 C 11.1 19 10 17.9 10 16.5 Z" fill="url(#tlbMonogramGrad)" />
    
    <!-- Letter L: Elegant Stem + Base Sweep -->
    <path d="M 21.5 20.5 C 21.5 19.4 22.4 18.5 23.5 18.5 C 24.6 18.5 25.5 19.4 25.5 20.5 V 33.5 H 29.5 C 30.6 33.5 31.5 34.4 31.5 35.5 C 31.5 36.6 30.6 37.5 29.5 37.5 H 23.5 C 22.4 37.5 21.5 36.6 21.5 35.5 V 20.5 Z" fill="url(#tlbMonogramGrad)" />

    <!-- Letter B: Modern Bold Dual-Loop Silhouette with Inset Curves -->
    <path d="M 28 15 C 28 13.9 28.9 13 30 13 H 35 C 38 13 40.5 15.2 40.5 18 C 40.5 19.9 39.4 21.5 37.8 22.3 C 40 23.2 41.5 25.2 41.5 27.8 C 41.5 31 38.8 33.5 35.5 33.5 H 30 C 28.9 33.5 28 32.6 28 31.5 V 15 Z" fill="url(#tlbMonogramGrad)" opacity="0.95" />
    
    <!-- Negative cutouts inside B for crisp glyph definition -->
    <rect x="31" y="16.5" width="4" height="4.5" rx="1.5" fill="#111827" />
    <rect x="31" y="24.5" width="4.5" height="5" rx="1.5" fill="#111827" />
  </g>

  <!-- Sparkle Star Accent in Top-Right Corner -->
  <path d="M 40 7.5 L 41.2 11 L 44.5 12.2 L 41.2 13.4 L 40 17 L 38.8 13.4 L 35.5 12.2 L 38.8 11 Z" fill="url(#tlbStarGrad)" />
  <circle cx="40" cy="12.2" r="1" fill="#FFFFFF" />
</svg>
`;

fs.writeFileSync('scratch-svg.svg', svgMarkup.trim());
console.log('Saved scratch-svg.svg successfully!');
