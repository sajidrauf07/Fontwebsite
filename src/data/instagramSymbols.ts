export interface SymbolCategory {
  name: string;
  symbols: string[];
}

export const INSTAGRAM_SYMBOLS_DATA: SymbolCategory[] = [
  {
    name: 'Corazones',
    symbols: ['♡', '♥', '❣', '❥', '❦', '💖', '💗', '💘', '🤍', '🤎', '💜', '💙']
  },
  {
    name: 'Estrellas y Destellos',
    symbols: ['★', '☆', '✦', '✧', '✩', '✪', '✫', '✬', '✭', '✨', '⚡', '🌟']
  },
  {
    name: 'Flechas y Separadores',
    symbols: ['➔', '➘', '➙', '➛', '➜', '➝', '➞', '➟', '►', '◄', '»', '«', '┊', '┆', '┋', '│']
  },
  {
    name: 'Estética y Marcos',
    symbols: ['✿', '❀', '❁', '❂', '❃', '❄', '❅', '❆', '❇', '❈', '❉', '❊']
  }
];
