import { processText } from "../../utils/textProcessor";
const original = `지난 밤에
눈이 소오복이 왔네

지붕이랑
길이랑 밭이랑
추워한다고
덮어 주는 이불인가 봐

그러기에
추운 겨울에만 나리지`;

const translated = `Last night
snow fell abundantly:

on the rooftops,
on the paths, on the farms.
Perhaps it is a blanket
that keeps us from the cold.

That’s why
it falls only in the chill of the winter.`;

export const snow = {
  name: "Snow",
  title: {
    original: ["눈"],
    translated: ["Snow"],
  },
  author: "윤동주 / Yun Dong-Ju",
  contents: {
    original: processText(original, { type: "poetry" }),
    translated: processText(translated, { type: "poetry" }),
  },
};
