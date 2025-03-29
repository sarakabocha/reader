import React from "react";
import { detectScript } from "../utils/languageDetector";

type TranslationPaneProps = {
  translationtype: string;
  title: string;
  sentences: string[][];
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
  worktype: "poetry" | "prose";
};

export function TranslationPane({
  translationtype,
  title,
  sentences,
  hoveredIndex,
  onHover,
  worktype,
}: TranslationPaneProps) {
  const titleScript = detectScript(title);
  const contentScript = detectScript(sentences.flat().join(""));

  const getFontClass = (script: "korean" | "default") => {
    switch (script) {
      case "korean":
        return "font-noto-serif-kr leading-10";
      default:
        return "font-serif";
    }
  };

  let globalSentenceIndex = 0;

  return (
    <div className="bg-white dark:bg-gray-900 p-4 md:p-6">
      <h1 className="text-ms md:text-md mb-4 text-gray-400 dark:text-gray-400">
        {translationtype}
      </h1>
      <h2
        className={`text-md md:text-xl mb-8 text-gray-800 dark:text-gray-200 ${getFontClass(
          titleScript
        )}`}
      >
        {title}
      </h2>
      <div
        className={`prose dark:prose-invert prose-sm md:prose-lg ${getFontClass(contentScript)} `}
      >
        {sentences.map((paragraph, paragraphIndex) => (
          <div key={paragraphIndex} className={`mb-6`}>
            {paragraph.map((sentence) => {
              const sentenceIndex = globalSentenceIndex++;
              return worktype === "poetry" ? (
                // Poetry: Each sentence gets its own div to preserve line breaks
                <div key={sentenceIndex}>
                  <span
                    className={`rounded py-1 whitespace-pre-wrap inline ${
                      hoveredIndex === sentenceIndex
                        ? "bg-yellow-50 dark:bg-yellow-200/20"
                        : "hover:bg-gray-50"
                    } transition duration-100`}
                    onMouseEnter={() => onHover(sentenceIndex)}
                    onMouseLeave={() => onHover(null)}
                  >
                    {sentence}
                  </span>
                </div>
              ) : (
                // Prose: Wrap sentences in a single paragraph to maintain spacing
                <p key={sentenceIndex} className="inline">
                  <span
                    className={`rounded py-1 inline ${
                      hoveredIndex === sentenceIndex
                        ? "bg-yellow-50 dark:bg-yellow-200/20"
                        : "hover:bg-gray-50"
                    } transition duration-100`}
                    onMouseEnter={() => onHover(sentenceIndex)}
                    onMouseLeave={() => onHover(null)}
                  >
                    {sentence}
                  </span>{" "}
                </p>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
