import { ALL_STYLES } from './styles';

export interface CopyPasteStyle {
  id: string;
  name: string;
  category: string;
  description: string;
  transform: (text: string) => string;
  tags: string[];
}

export const COPY_PASTE_STYLES: CopyPasteStyle[] = ALL_STYLES.map((s) => ({
  id: s.id,
  name: s.name,
  category: s.category,
  description: s.description || s.name,
  transform: s.transform,
  tags: s.tags || [s.category.toLowerCase()]
}));
