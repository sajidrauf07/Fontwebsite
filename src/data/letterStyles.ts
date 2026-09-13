import { ALL_STYLES } from './styles';

export interface LetterStyle {
  id: string;
  name: string;
  category: string;
  transform: (text: string) => string;
}

export const HOW_TO_LETTER_STYLES: LetterStyle[] = ALL_STYLES.map((s) => ({
  id: s.id,
  name: s.name,
  category: s.category,
  transform: s.transform
}));
