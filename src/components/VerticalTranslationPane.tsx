import { detectScript } from "../utils/languageDetector";

type VerticalTranslationPaneProps = {
  originalTitle: string;
  translatedTitle: string;
  originalSentences: string[][];
  translatedSentences: string[][];
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
};

export function VerticalTranslationPane({
  originalTitle,
  translatedTitle,
  originalSentences,
  translatedSentences,
  hoveredIndex,
  onHover,
}: VerticalTranslationPaneProps) {
  const originalTitleScript = detectScript(originalTitle);
  const translatedTitleScript = detectScript(translatedTitle);
  const originalContentScript = detectScript(originalSentences.flat().join(""));
  const translatedContentScript = detectScript(translatedSentences.flat().join(""));

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
      <div className="mb-8">
        
        <h2 className={`text-large mb-4 text-primary ${getFontClass(originalTitleScript)}`}>
          {originalTitle}
        </h2>

        <h2 className={`text-large mb-8 text-primary ${getFontClass(translatedTitleScript)}`}>
          {translatedTitle}
        </h2>
      </div>

      <div className="prose dark:prose-invert prose-sm md:prose-lg !leading-[1.9]">
        {originalSentences.map((originalParagraph, paragraphIndex) => {
          const translatedParagraph = translatedSentences[paragraphIndex] || [];
          return (
            <div key={paragraphIndex} className="mb-8">
              {originalParagraph.map((originalSentence, sentenceInParagraphIndex) => {
                const translatedSentence = translatedParagraph[sentenceInParagraphIndex] || "";
                const sentenceIndex = globalSentenceIndex++;

                return (
                  <div key={sentenceIndex} className="mb-6">
                    {/* Original line */}
                    <div className="mb-2">
                      <span
                        className={`rounded-sm px-0.5 -mx-0.5 whitespace-pre-wrap inline leading-relaxed ${getFontClass(
                          originalContentScript
                        )} ${
                          hoveredIndex === sentenceIndex ? "highlighted-text" : "hovered-text"
                        } transition-colors duration-150`}
                        onMouseEnter={() => onHover(sentenceIndex)}
                        onMouseLeave={() => onHover(null)}
                      >
                        {originalSentence.trim()}
                      </span>
                    </div>

                    {/* Translated line */}
                    <div className="opacity-100 text-sm">
                      <span
                        className={`rounded-sm px-0.5 -mx-0.5 whitespace-pre-wrap inline leading-relaxed ${getFontClass(
                          translatedContentScript
                        )} ${
                          hoveredIndex === sentenceIndex ? "highlighted-text" : "hovered-text"
                        } transition-colors duration-150`}
                        onMouseEnter={() => onHover(sentenceIndex)}
                        onMouseLeave={() => onHover(null)}
                      >
                        {translatedSentence.trim()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

