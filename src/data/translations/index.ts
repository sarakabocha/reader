import { onion } from "./onion";
import { thanksgivingPrayer } from "./thanksgivingprayer";
import { snow } from "./snow";
// import { jhk20070930 } from "./20070930";
import { cat } from "./catinanemptyapt";

type translated = {
  original: string[];
  translated: string[];
};

export type TranslationSet = {
  name: string;
  title?: translated;
  date?: string;
  author?: string;
  contents: translated;
};

export type TranslationSets = {
  [key: string]: TranslationSet;
};

export const translations: TranslationSets = {
  cat,
  onion,
  snow,
  thanksgivingPrayer,
  // jhk20070930,
};
