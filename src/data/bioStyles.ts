import { ALL_STYLES } from './styles';

export interface BioStyleItem {
  id: string;
  name: string;
  category: string;
  transform: (text: string) => string;
  featured?: boolean;
}

export const BIO_STYLES_COLLECTION: BioStyleItem[] = ALL_STYLES.map((s) => ({
  id: s.id,
  name: s.name,
  category: s.category,
  transform: s.transform,
  featured: s.featured
}));
