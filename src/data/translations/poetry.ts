import sentencize from "@stdlib/nlp/sentencize";

export const poetry = {
  name: "Poetry",
  original:
    sentencize("Dwie drogi rozchodziły się w żółtym lesie. I żal mi, że nie mogłem iść obiema. I będąc jednym wędrowcem, długo stałem."),
  translated:
    sentencize("Two roads diverged in a yellow wood. And sorry I could not travel both. And be one traveler, long I stood")
};