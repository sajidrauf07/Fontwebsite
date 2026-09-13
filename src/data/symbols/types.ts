export interface InstagramSymbolItem {
  id: string;
  symbol: string;
  name: string;
  category:
    | 'Corazones'
    | 'Estrellas'
    | 'Flechas'
    | 'Flores'
    | 'Decorativos'
    | 'Naturaleza'
    | 'Puntos'
    | 'Separadores'
    | 'Marcos'
    | 'Checks'
    | 'Aesthetic'
    | 'Minimalistas'
    | 'Especiales';
  description: string;
  keywords: string[];
  featured?: boolean;
}
