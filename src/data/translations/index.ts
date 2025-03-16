import { pangrams } from './pangrams';
import { poetry } from './poetry';
import { proverbs } from './proverbs';
import { onion } from './onion';
import { thanksgivingPrayer } from './thanksgivingprayer';

type translated = {
  original: string[];
  translated: string[];
};

export type TranslationSet = {
  name: string;
  title?: translated;
  year?: number;
  author?: string;
  contents: translated;

};

export type TranslationSets = {
  [key: string]: TranslationSet;
};

export const translations: TranslationSets = {
  pangrams,
  poetry,
  proverbs,
  onion,
  thanksgivingPrayer,
};