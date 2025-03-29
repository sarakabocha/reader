import React from "react";
import { detectScript } from "../utils/languageDetector";

type TranslationPaneProps = {
  type: string;
  title: string;
  sentences: string[];
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
};

export function TranslationPane({
  type,
  title,
  sentences,
  hoveredIndex,
  onHover,
}: TranslationPaneProps) {
  const titleScript = detectScript(title);
  const contentScript = detectScript(sentences.join(""));

  const getFontClass = (script: "korean" | "default") => {
    switch (script) {
      case "korean":
        return "font-noto-serif-kr";
      default:
        return "font-serif";
    }
  };

  const getWritingType = (type: string) => {
    switch (type) {
      case "poetry":
        return "block";
      case "essay":
        return "inline";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 md:p-6">
      <h1 className="text-ms md:text-md mb-4 text-gray-400 dark:text-gray-400">{type}</h1>
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
        {sentences.map((sentence, index) => (
          <React.Fragment key={index}>
            {sentence.trim() === "\n" ? (
              <div className="h-6" />
            ) : (
              <div className={`whitespace-pre-wrap ${getWritingType(type)}`}>
                <span
                  className={`rounded py-1 ${
                    hoveredIndex === index
                      ? "bg-yellow-50 dark:bg-yellow-200/20"
                      : "hover:bg-gray-50"
                  } transition duration-100`}
                  onMouseEnter={() => onHover(index)}
                  onMouseLeave={() => onHover(null)}
                >
                  {sentence}
                </span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
