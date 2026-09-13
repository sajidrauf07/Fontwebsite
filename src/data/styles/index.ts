import { type StyleDefinition } from './cursive';
import { CURSIVE_STYLES } from './cursive';
import { BOLD_STYLES } from './bold';
import { GOTHIC_STYLES } from './gothic';
import { DOUBLE_STRUCK_STYLES } from './doubleStruck';
import { MONOSPACE_STYLES } from './monospace';
import { SMALL_CAPS_STYLES } from './smallCaps';
import { CIRCLED_STYLES } from './circled';
import { SQUARED_STYLES } from './squared';
import { FULLWIDTH_STYLES } from './fullwidth';
import { SUPERSCRIPT_STYLES } from './superscript';
import { DECORATIVE_STYLES } from './decorative';
import { AESTHETIC_STYLES } from './aesthetic';
import { SYMBOLS_STYLES } from './symbols';
import { MIXED_STYLES } from './mixed';

export type { StyleDefinition };
export type TextStyleDef = StyleDefinition;

export const ALL_STYLES: StyleDefinition[] = [
  ...CURSIVE_STYLES,
  ...BOLD_STYLES,
  ...GOTHIC_STYLES,
  ...DOUBLE_STRUCK_STYLES,
  ...MONOSPACE_STYLES,
  ...SMALL_CAPS_STYLES,
  ...CIRCLED_STYLES,
  ...SQUARED_STYLES,
  ...FULLWIDTH_STYLES,
  ...SUPERSCRIPT_STYLES,
  ...DECORATIVE_STYLES,
  ...AESTHETIC_STYLES,
  ...SYMBOLS_STYLES,
  ...MIXED_STYLES
];

export const TOTAL_STYLE_COUNT = ALL_STYLES.length;
