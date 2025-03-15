import sentencize from "@stdlib/nlp/sentencize";

export const pangrams = {
  name: "Pangrams",
  original:
    sentencize("Zwinny brązowy lis przeskakuje nad leniwym psem. Zapakuj mi pudło pięcioma tuzinami dzbanów na alkohol. Jak irytująco szybko głupie zebry skaczą!"),
  translated: 
    sentencize("The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!")
};