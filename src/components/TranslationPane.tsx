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

  return (
    <div className="bg-white p-6">
      <h2 className="text-md mb-4 text-gray-400">{type}</h2>
      <h2 className={`text-xl mb-8 text-gray-800 ${getFontClass(titleScript)}`}>{title}</h2>
      <div className={`prose prose-lg ${getFontClass(contentScript)} `}>
        {sentences.map((sentence, index) => (
          <React.Fragment key={index}>
            {sentence.trim() === "\n" ? (
              <div className="h-6" />
            ) : (
              <div className={`whitespace-pre-wrap `}>
                <span
                  className={`rounded py-1 ${
                    hoveredIndex === index ? "bg-yellow-100" : "hover:bg-gray-50"
                  }`}
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
