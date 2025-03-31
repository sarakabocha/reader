import sentencize from "@stdlib/nlp/sentencize";

export type TextProcessorOptions = {
  worktype: "poetry" | "prose";
};

export function processText(text: string, options: TextProcessorOptions): string[][] {
  if (options.worktype === "poetry") {
    return text.split("\n\n").map((stanza) => stanza.split("\n"));
  }

  if (options.worktype === "prose") {
    return text.split(/\n\n+/).map((paragraph) => {
      const sentences = sentencize(paragraph);

      // Extra handling for edge cases:
      return sentences.flatMap((sentence) => {
        // Fix common issues with abbreviations or incorrect sentence splits
        return sentence
          .replace(/(?<=\b[A-Z][a-z]|\betc|\bDr|\bMr|\bMrs|\bMs)\.\s+/g, ". ") // Fix abbreviation splits
          .replace(/(?<=\d)\.\s+(?=\d)/g, ".") // Prevent number splits (e.g., "3.14" or "2024.03.29")
          .split(/(?<=[.!?])\s+(?=[A-Z0-9])/); // Final sentence split ensuring punctuation-based separation
      });
    });
  }
  return [sentencize(text)];
}
