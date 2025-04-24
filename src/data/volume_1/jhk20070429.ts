import { Work } from "../collection";

const original = [[]];

const translated = [[]];

export default {
  author: "김종호 / Kim Jong-Ho",
  date: "2007-04-29",
  worktype: "prose",
  lastModified: document.lastModified,
  translations: {
    original: {
      language: "ko",
      title: "칭찬합시다",
      content: original,
    },
    translated: {
      language: "en",
      title: "",
      content: translated,
    },
  },
} as Work;
