import { pangrams } from './pangrams';
import { poetry } from './poetry';
import { proverbs } from './proverbs';

export type TranslationSet = {
  name: string;
  original: string[];
  translated: string[];
};

export type TranslationSets = {
  [key: string]: TranslationSet;
};

export const translations: TranslationSets = {
  pangrams,
  poetry,
  proverbs,
};