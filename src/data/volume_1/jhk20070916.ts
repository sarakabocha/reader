import { Work } from "../collection";

const original = [[]];

const translated = [[]];

export default {
  author: "김종호 / Kim Jong-Ho",
  date: "2007-09-16",
  worktype: "prose",
  lastModified: document.lastModified,
  translations: {
    original: {
      language: "ko",
      title: "종된 자의 감사",
      content: original,
    },
    translated: {
      language: "en",
      title: "",
      content: translated,
    },
  },
} as Work;
