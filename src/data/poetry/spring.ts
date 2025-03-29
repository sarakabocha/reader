import { Work } from "../collection";

const original = `봄이 혈관 속에 시내처럼 흘러
돌 , 돌, 시내 가차운 언덕에
개나리, 진달래, 노오란 배추꽃

삼동(三冬)을 참어온 나는
풀포기처럼 피어난다.

즐거운 종달새야
어느 이랑에서나 즐거웁게 솟쳐라.

푸르른 하늘은
아른아른 높기도 한데`;

const translated = `Spring runs within blood vessels like a stream,
and on the bank near a stream
forsythias, azaleas, and yellow cabbage flowers

I, who have endured winter,
sprout like grass

Joyful robin,
fly up from any furrow

The blue sky
glistens high above`;

export default {
  author: "윤동주 / Yun Dong-Ju",
  date: "1948",
  worktype: "poetry",
  translations: {
    original: {
      language: "ko",
      title: "봄",
      content: original,
    },
    translated: {
      language: "en",
      title: "Spring",
      content: translated,
    },
  },
} as Work;
