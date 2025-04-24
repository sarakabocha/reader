import { Work } from "../collection";

const original = [[]];

const translated = [[]];

export default {
  author: "김종호 / Kim Jong-Ho",
  date: "2007-12-30",
  worktype: "prose",
  lastModified: document.lastModified,
  translations: {
    original: {
      language: "ko",
      title: "한 해를 떠나 보 내며",
      content: original,
    },
    translated: {
      language: "en",
      title: "",
      content: translated,
    },
  },
} as Work;
