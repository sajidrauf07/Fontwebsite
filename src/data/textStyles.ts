import { ALL_STYLES } from './styles';

export interface TextStyleItem {
  id: string;
  name: string;
  category: string;
  transform: (text: string) => string;
  description?: string;
  featured?: boolean;
}

export const TEXT_STYLES_COLLECTION: TextStyleItem[] = ALL_STYLES.map((s) => ({
  id: s.id,
  name: s.name,
  category: s.category,
  transform: s.transform,
  description: s.description,
  featured: s.featured
}));
