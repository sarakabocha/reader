import { Work } from "../collection";

const original = [
  [
    `우리는 누구나 소원을 가지고 있습니다. 일생에 걸친 장기적 소원도 있고, 당장 바램인 소원도 있습니다. 큰 포부도 있고, 그저 소박한 소원도 있습니다. 어떤 소원을 가지고 있습니까?네 소원 하나만 말해라 하시면, 무엇을 말하겠습니까?

`,
  ],
  [
    `어떤 사람은 좋은 집을 갖는 것이 소원일 수 있습니다. 남들이 부러워 할 만한, 그리고 이 정도면 편안하다고 할 만한 집을 갖기 원하는 사람들이 많을 것입니다. 집값이 비싼 캘리포니아에서는 집을 하나 가지는 것은 금사한 삶의 척도이기도 합니다. 또는, 내 소원은 명품 차를 가지는 것이라고 할 사람도 있습니다. 한국계 풋볼 선수로 유명해진 하인스 워드는 마이바흐라는 명품차를 탄다는 데, 나도 그 정도를 갖고 싶다고 생각하는 사람도 있을 것입니다. 또 어떤 사람은, 나는 집도 차도 큰 욕심은 없고, 이제부터 일을 놓고 여행을 실컷 다니다가 죽는 것이 소원이라고 말할 수도 있습니다. 좋다는 곳이 그리 많은데, 구경만 다니는 팔자로 살면 참 좋겠다고 말할 사람도 있습니다.`,
  ],
  [
    `
이런 소원들이 만족되면 그 이상은 없을까요? 더 바램이 없이 만조~옥 할까요? 마침 신문에 빌 게이츠의 집이 기사로 실렸는데, 그 집의 싯가는 1 억불이 넘는다 합니다. 집이 아니라 무슨 호화 리조트 같은데, 그의 얼굴은 왠지 요즘 많이 늙어 보입니다. 좋은 집에 살아도 늘 만족스런 것이 아닌 것 같습니다. 좋은 차, 한없는 여행도, 우리가 영적인 존재인 이상, 인간의 궁극적인 소원이 될 수 없습니다.
`,
  ],
  [
    `시편 27편을 읽어 보십시오. 4절에는 이렇게 되어 있습니다. "내가 주께 청한 한 가지 소원, 그 하나만을 얻으려고 애쓸 것이니, 한 평생 주의 집에 살면서 주의 자비로우신 모습을 보는 것과, 성전에서 주님과 의논하면서 살아가는 오직 그것뿐이다.” 이것은 순례자의 노래입니다. 그리고, 믿는자의 마음이라고 할 수 있습니다. 그의 소원은, 주님을 더욱더 사랑하는 것입니다. 하나님을 믿는 다고 확신하는 사람의 최고의 소원이 무엇입니까? 하나님과 하나되는 것입니다. 예수와 하나되는 것입니다. 여기 이 시편 기자의 소원을 두 가지로 정리할 수 있습니다.`,
  ],
  [
    `

우선, "주의 자비로운 모습을 보는 것" (혹은, 원문대로, 주의 아름다움을 보는 것) 입니다. 이것은 주님의 은혜, 좋으신 하나님을 경험함을 말합니다. 우리는 하나님을 좋은 분으로 경험해야 합니다. 내가 진정 변화되었다면, 하나님을 좋은 분으로 체험하고 기뻐해야 마땅합니다. 그렇지 않고 여전히 태도가 비관적이면, 문제있는 신자입니다. 또 한가지 "주의 아름다움을 보는 것"에는 하나님이 만드시고 다스리시는 창조세계를 긍정하는 것입니다. 내 삶을 긍정하는 것입니다. 내게 주신 모든 여건을 감사로 받아 들이고, 그 안에서 즐길 수 있어야 합니다.

`,
  ],
  [
    `두번째로, 이 사람은 "주님과 의논하며 살기를" 소원 했습니다. 주님과 교제함을 말합니다. 우리가 주님과 교제합이 없다면, 제자라고 할 수 있습니까? 주님과 동행한다고 할 수 있습니까? 교제함이 없이 사랑한다고 할 수 있습니까? 주님을 사랑함이 없이, 모든 위로와 좋으심을 체험할 수 있을까요? 교제가 있어야 합니다. 그럼, 교제는 무엇입니까? 삶 속에서 만나는 것입니다. 만남의 핵심은 "기도하는 것”입니다. 그리고, 주님의 말씀으로 가르침을 받는 것입니다. 가르침은 나를 고치게 됩니다. 말씀이 나를 고치도록 말씀을 받아 들여야 합니다. 목사로서 마음 아프게 느끼는 것은, 하나님을 사랑한다고 수없이 외치면서도, 하나님의 가르침을 전하는 목사의 말은 잘 안들으려고 하는 사람들을 보는 일입니다. 하나님이 당신의 사자를 통하지 않고 어찌 당신의 뜻을 전하시겠습니까? 예수님은 "나를 사랑하면 나의 가르침을 따를 것이라”고 하셨습니다. 진정으로 사랑하면, 사랑하는 분의 뜻을 따르게 되어 있습니다.

`,
  ],
  [
    `인생의 참 소원은 주님을 더욱 사랑하는 일이 되기 바랍니다. 주님과 더 가까이 교제하는 일이 되기 바랍니다. 다른 모든 것들은 이 소원에 따르는 선물이고, 수단일 뿐입니다. 그것들이 수단일 때, 감사가 우러나오는 것입니다만, 그것들이 내 목적이 될 때, 모두 허무로 바뀔 뿐입니다. 하나님을 더욱 사랑하시는 여러분이 되기 바랍니다.`,
  ],
];

const translated = [
  [
    `We all have wishes. Some are long-term aspirations that span a lifetime, while others are immediate desires. There are grand ambitions and also humble wishes. What kind of wish do you have? If someone asked you to name just one wish, what would you say?
`,
  ],
  [
    `For some people, owning a nice house may be their wish. Many want a home that others would envy, one that is comfortable enough to be proud of. In California, where home prices are high, owning a house is often seen as a benchmark of success. Others might say that their wish is to own a luxury car. For example, Hines Ward, a Korean-American football player, is known to drive a Maybach, and some people might think they would love to own something like that too. Still others might say, “I’m not too greedy for a house or car, but my wish is to retire from work and travel freely until I die.” With so many beautiful places in the world, some may dream of living a life where they just travel and explore endlessly.`,
  ],
  [
    `But if those wishes were fulfilled, would there be nothing more? Would we be completely satisfied with no further desires? I saw an article recently about Bill Gates' house, reportedly worth over $100 million. It looked more like a luxury resort than a home. Yet his face somehow looked aged and weary. It seems that even living in a great house doesn’t always bring true contentment. A luxury car, endless travel — these things, though appealing, cannot be the ultimate desire for us who are spiritual beings.
`,
  ],
  [
    `Read Psalm 27. Verse 4 says this: “One thing I ask from the Lord, this only do I seek: that I may dwell in the house of the Lord all the days of my life, to gaze on the beauty of the Lord and to seek Him in His temple.” This is the song of a pilgrim. And we can say it is the heart of a believer. His wish is to love the Lord more deeply. What is the greatest wish of someone who truly believes in God? To be united with God. To be one with Jesus. The psalmist’s desire can be summed up in two points.
`,
  ],
  [
    `First, “to gaze on the beauty of the Lord” — or as in the original language, “to behold the Lord’s graciousness.” This means to experience the grace and goodness of God. We must experience God as a good and gracious being. If we have truly been transformed, it is only natural to rejoice in God’s goodness. If we remain pessimistic in attitude, something is wrong with our faith. Also, seeing “the beauty of the Lord” means affirming the created world that God has made and governs. It means affirming our lives. We must be able to receive all that we’ve been given with gratitude and learn to enjoy life within it.`,
  ],
  [
    `
Second, this person desires “to seek Him in His temple” — meaning to have fellowship with the Lord. If we do not have fellowship with the Lord, can we really call ourselves disciples? Can we say we walk with Him? Can we claim to love Him without that fellowship? Can we experience His comfort and goodness without loving Him? There must be fellowship. And what is fellowship? It means meeting Him in our daily lives. At the core of meeting is prayer. And receiving teaching through His Word. That teaching changes us. We must accept God’s Word in a way that transforms us. As a pastor, it pains me when I see people who claim to love God but refuse to listen to the words of the pastor who conveys God’s teachings. How else would God communicate His will if not through His messenger? Jesus said, “If you love Me, you will obey My teachings.” True love leads to obeying the will of the one you love.`,
  ],
  [
    `May the true desire of your life be to love the Lord more deeply. May your greatest wish be to have closer fellowship with Him. All other things are gifts and tools that follow this desire. When they remain as tools, we are filled with gratitude; but when they become our goals, they all turn to emptiness. May you become someone who loves God more and more.
`,
  ],
];

export default {
  author: "김종호 / Kim Jong-Ho",
  date: "2007-03-11",
  worktype: "prose",
  lastModified: document.lastModified,
  translations: {
    original: {
      language: "ko",
      title: "나의 한가지 소원",
      content: original,
    },
    translated: {
      language: "en",
      title: "My One True Wish",
      content: translated,
    },
  },
} as Work;
