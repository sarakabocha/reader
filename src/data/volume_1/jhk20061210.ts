import { Work } from "../collection";

const original = [[]];

const translated = [[]];

export default {
  author: "김종호 / Kim Jong-Ho",
  date: "2006-12-10",
  worktype: "prose",
  lastModified: document.lastModified,
  translations: {
    original: {
      language: "ko",
      title: "요 셉의 용 기",
      content: original,
    },
    translated: {
      language: "en",
      title: "",
      content: translated,
    },
  },
} as Work;
