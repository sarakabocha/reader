import sentencize from "@stdlib/nlp/sentencize";

export type TextProcessorOptions = {
  worktype: "poetry" | "prose";
};

export function processText(text: string, options: TextProcessorOptions): string[][] {
  if (options.worktype === "poetry") {
    return text.split("\n\n").map((stanza) => stanza.split("\n"));
    // return text.split("\n").map((line) => (line.trim() === "" ? [] : [line]));
    // return text.split("\n").map((line) => (line.trim() === "" ? "\n" : line + "\n"));
  }

  if (options.worktype === "prose") {
    return text.split(/\n\n+/).map((paragraph) => sentencize(paragraph));
    // .join(" "));
    // .flatMap((paragraph) => [paragraph, "\n"]);
  }
  return [sentencize(text)];
}
