import { Work } from "../collection";

const original = `죽는 날까지 하늘을 우러러
한 점 부끄럼이 없기를,
잎새에 이는 바람에도
나는 괴로워했다.
별을 노래하는 마음으로
모든 죽어 가는 것을 사랑해야지.
그리고 나한테 주어진 길을
걸어가야겠다.

오늘 밤에도 별이 바람에 스치운다.`;

const translated = `Until the day I die
I long to have no speck of shame when I gaze up toward heaven,
so I have tormented myself,
even when the wind stirs the leaves.
With a heart that sings the stars,
I will love all dying things.
And I will walk the way
that has been given to me.

Tonight, again, the wind brushes the stars.`;

export default {
  author: "윤동주 / Yun Dong-Ju",
  date: "1948",
  worktype: "poetry",
  translations: {
    original: {
      language: "ko",
      title: "서시(序詩)",
      content: original,
    },
    translated: {
      language: "en",
      title: "Prologue",
      content: translated,
    },
  },
} as Work;
