import { processText } from "../utils/textProcessor";

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
  lastModified?: string;
};

export type TranslationSet = {
  original: Translation;
  translated: Translation;
};

export type ProcessedContent = string[][];
export type UnprocessedContent = string;

export type AnyContent = UnprocessedContent | ProcessedContent;

export function Process(content: AnyContent, type: WorkType): ProcessedContent {
  if (typeof content === "string") {
    return processText(content, { worktype: type });
  } else {
    // Ensure content is properly formatted as string[][]
    return content.map((paragraph) => {
      if (Array.isArray(paragraph)) {
        return paragraph;
      } else {
        return [paragraph];
      }
    });
  }
}

export type Translation = {
  language: string;
  title: string;
  content: AnyContent;
};
