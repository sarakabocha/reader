import { Work } from "../collection";

const original = [[]];

const translated = [[]];

export default {
  author: "김종호 / Kim Jong-Ho",
  date: "2007-09-02",
  worktype: "prose",
  lastModified: document.lastModified,
  translations: {
    original: {
      language: "ko",
      title: "춤 추 며 예배한 다윗",
      content: original,
    },
    translated: {
      language: "en",
      title: "",
      content: translated,
    },
  },
} as Work;
