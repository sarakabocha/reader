import sentencize from "@stdlib/nlp/sentencize";

export type TextProcessorOptions = {
  type: "poetry" | "prose";
};

export function processText(text: string, options: TextProcessorOptions): string[] {
  if (options.type === "poetry") {
    return text.split("\n").map((line) => (line.trim() === "" ? "\n" : line + "\n"));
  }

  if (options.type === "prose") {
    return sentencize(text);
  }

  return sentencize(text);
}
