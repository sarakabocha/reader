export type Collection = {
  name: string;
  works: Work[];
  volume: boolean;
};

type WorkType = "poetry" | "prose";

export type Work = {
  author: string;
  date: string;
  translations: TranslationSet;
  worktype: WorkType;
};

export type TranslationSet = {
  original: Translation;
  translated: Translation;
};

export type Translation = {
  language: string;
  title: string;
  content: string;
};
