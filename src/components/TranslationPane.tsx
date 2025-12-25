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
        return "font-noto-serif-kr";
      default:
        return "font-serif";
    }
  };

  let globalSentenceIndex = 0;

  return (
    <div className="bg-white dark:bg-gray-900 p-4 md:p-6">
      <h1 className="text-small mb-4 text-muted">{translationtype}</h1>
      <h2 className={`text-large mb-8 text-primary ${getFontClass(titleScript)}`}>{title}</h2>
      <div
        className={`prose dark:prose-invert prose-sm md:prose-lg ${getFontClass(contentScript)} !leading-[1.9]`}
      >
        {sentences.map((paragraph, paragraphIndex) => (
          <div key={paragraphIndex} className={`mb-6`}>
            {worktype === "prose" && <span className="inline-block w-6" />}
            {paragraph.map((sentence) => {
              const sentenceIndex = globalSentenceIndex++;
              return worktype === "poetry" ? (
                // Poetry: Each sentence gets its own div to preserve line breaks
                <div key={sentenceIndex}>
                  <span
                    className={`rounded-sm px-0.5 -mx-0.5 whitespace-pre-wrap inline leading-relaxed ${
                      hoveredIndex === sentenceIndex ? "highlighted-text" : "hovered-text"
                    } transition-colors duration-150`}
                    onMouseEnter={() => onHover(sentenceIndex)}
                    onMouseLeave={() => onHover(null)}
                  >
                    {sentence.trim()}
                  </span>
                </div>
              ) : (
                // Prose: Wrap sentences in a single paragraph to maintain spacing
                <p key={sentenceIndex} className="inline">
                  <span
                    className={`rounded-sm px-0.5 -mx-0.5 inline leading-relaxed ${
                      hoveredIndex === sentenceIndex ? "highlighted-text" : "hovered-text"
                    } transition-colors duration-150`}
                    onMouseEnter={() => onHover(sentenceIndex)}
                    onMouseLeave={() => onHover(null)}
                  >
                    {sentence.trim()}
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
