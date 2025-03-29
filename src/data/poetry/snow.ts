import { Work } from "../collection";

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

export default {
  author: "윤동주 / Yun Dong-Ju",
  date: "1941",
  worktype: "poetry",
  translations: {
    original: { language: "ko", title: "눈", content: original },
    translated: { language: "en", title: "Snow", content: translated },
  },
} as Work;
