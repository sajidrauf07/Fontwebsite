export interface BioSymbolCategory {
  title: string;
  items: string[];
}

export const BIO_SYMBOLS_DATA: BioSymbolCategory[] = [
  {
    title: 'Separadores de Línea',
    items: ['─── · 🪷 · ───', '───── ⋆✩⋆ ─────', '┈──────────┈', '════ ⋆★⋆ ════', '━━━━ • ✨ • ━━━━']
  },
  {
    title: 'Puntos y Viñetas',
    items: ['•', '▸', '❖', '✦', '⬩', '✹', '◈', '▫', '▪', '◊']
  },
  {
    title: 'Corazones y Estrellas',
    items: ['♡', '♥', '❣', '✨', '✦', '✧', '💫', '🌟', '💖', '🤍']
  },
  {
    title: 'Flechas e Indicadores',
    items: ['⬇️', '👇', '➔', '►', '»', '➾', '➢', '🎯']
  }
];
