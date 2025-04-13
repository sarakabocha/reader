import { Work } from "../collection";

const original = [
  [
    `오늘은 마태, 마가, 누가 복음에 모두 기록된, 베드로의 입으로 이루어진 최초의 그리스도에 대한 신앙고백 "주는 그리스도시요, 살아 계신 하나님의 아들입니다" (마태 16:16) 에 대하여 말씀드리면서, 그 속에 담긴 교회의 의미에 대하여 되새겨 보겠습니다. 제자들이 예수님에 대한 믿음이 절정에 이르는 순간이 바로 이 고백입니다.`,
  ],
  [
    `그런데 이 말은 가이사랴 빌립보 지방에서 이루어졌습니다. 이 지명의 이름은 로마 황제 가이사(시이저)의 이름을 따서 명명된 도시라는 뜻입니다. 빌립비 지방을 로마식으로 만들고, 거기에 황제를 숭배하는 계단을 만들었던 곳이 가이사랴 빌립보였습니다. 당시에 대개 지중해 연안의 도시들은 그렇게 로마식으로 개조되었고, 철저한 이방 도시화되었습니다. 이곳은 갈릴리에서 북쪽으로 약 25마일 떨어진 곳이었습니다.`,
  ],
  [
    `그런데, 왜 이토록 중요한 그리스도에 대한 신앙고백이 이런 이방 도시에서 이루어졌을까요? 왜 거기서 이루어졌다고 보도했을까요? 예루살렘 성전이나 어떤 거룩한 곳이 아닌 이방 도시에서 베드로의 고백이 이루어졌는지 알 길은 없습니다. 그 이유가 직접 성서에 기록되지는 않았습니다. 우리가 상상할 도리밖에는 없습니다. 이렇게 생각할 수는 있습니다. 성지가 아닌 로마제국이 세운 도시에서 그리스도의 신분이 드러나는 "계시"가 이루어진 것은, 이 세상속에서 그리스도가 세울 교회의 힘을 알려주신 것이라고 할 수 있습니다.`,
  ],
  [
    `예수께서 제자들과 함께 가이사랴 빌립보 지방에 도착하여 고있습니다. "사람들이 나를 누구라고 말하더냐?" 사람들이 나를 어떻게 알고 있느냐? 제자들은 말합니다. "어떤 이들은 세례 요한이 다시 ??아났다고 하고, 어떤 이들은 엘리야라고, 또 누구는 예레미야라고 ??니다." 이 사람들의 공통점은 예언자입니다. 훌륭한 사람들일 뿐 ??시아로 알지 못한 것입니다. 예수님을 그들과 비교한 것은 이스라엘 사람들이 존경할만한 예언자들 중의 하나라고 여겼다는 말입니다. 여수님은 제자들에게 물으십니다. "그러면, 너희는 나를 누구라고 생각하느냐?" 다른 사람들은 그렇다고 치고, 그러면 너희들은 나를 어떻게 아는지 알고 싶다! 제자들을 향한 이 질문은 우리에게도 하시는 주님의 도전입니다. 너회는 나를 누구로 알고 믿느냐? 나를 누구라고 믿고 교인이 되었느냐? 나를 위대한 성현 중의 하나로 알고 교회에 등록했느냐? 좋은 가르침을 받으려고, 안 믿는 것보다 믿는 것이 마음을 정화하고 세상을 사는 데 더 나은 것 같아서 믿는다고 하느냐? 아니면 진정 예수를 하나님의 아들로, 나를 구원하신 주님으로 알고 나오느냐? 너회의 믿음의 실체는 무엇이냐? 이 질문은 피할 수 없고, 피해서는 안됩니다. 거기에 베드로와 같은 고백을 할 때, 우리는 그의 제자가 되는것입니다.`,
  ],
  [
    `교회는 믿는자의 모임이라고 누누이 들어서 알고 있습니다. 교회 건물이 아니고 불러서 모인 회중 '예플레시아'입니다. 하나님이 불러서 모인 회중이 교회입니다. 그러나, 그 속에 바른 신앙의 고백이 있을 때만
그 모임은 교회가 되는 것입니다. "예수는 그리스토시오, 살아 계신 하나님의 이들입니다" 하는 참다운 고백이 살아 있을 때, 그 무리들은 교회가 됩니다. 큰 교회가 되었으나 그 속에 산 고백이 사라졌다면 어떻게 됩니까? 얼마튼지 싸우고, 이권을 다투고, 세상의 옷음거리가 되는 것도 마다하지 않는 도적의 소굴이 될 수도 있습니다. 모여서 어울려 노는 일이 가장 좋다고 느끼는 모임으로 바뀐 수도 있습니다.`,
  ],
  [
    `그리스도에 대한 고백 위에 주님은 교회를 세운신다고 하셨습니다. 그래서 교회가 존재합니다. 그리고, 그렇게 세워진 교회는 죽음의 세력을 이기고, '땅에서 매기도 하고 풀기도 하는' 권세를 부여 받았습니다. 여러가지 의미로 이해 되지만, 그 중의 하나는 '죄를 용서할 수 있는 권한'을 가르킵니다. 교회는 바른 고백을 통하여, 죄인이 의로운 사람으로 인정되고, 새 삶이 이루어지는 곳입니다. 그래야 하는 곳입니다.`,
  ],
];

const translated = [
  [
    `Today, we will reflect on the meaning of the church embedded in Peter's first confession of faith about Christ, recorded in the Gospels of Matthew, Mark, and Luke: "You are the Christ, the Son of the living God" (Matthew 16:16). This confession marks the moment when the disciples' faith in Jesus reaches its peak.`,
  ],
  [
    `However, these words were spoken in the region of Caesarea Philippi. The name of this place means a city named after the Roman emperor Caesar. Caesarea Philippi was a place where Philip made the region Roman-style and built steps to worship the emperor. At that time, most cities along the Mediterranean coast were transformed in this Roman manner and became thoroughly Gentile cities. This place was about 25 miles north of Galilee.
`,
  ],
  [
    `But why was such an important confession of faith about Christ made in this Gentile city? Why was it reported to have happened there? There is no way to know why Peter’s confession happened in a Gentile city rather than in the Jerusalem Temple or some other sacred place. The reason is not explicitly recorded in the Bible. We can only imagine. One possible explanation is this: the "revelation" of Christ’s identity occurring in a city built by the Roman Empire signifies the power of the church that Christ would establish in this world.
`,
  ],
  [
    `Jesus arrives in the region of Caesarea Philippi with His disciples. He asks, "Who do people say that I am?" How do people perceive me? The disciples answer, "Some say John the Baptist has come back to life, others say Elijah, and still others say Jeremiah." The commonality among these figures is that they are prophets. They were great men, but the people did not recognize Jesus as the Messiah. Comparing Jesus to them meant that the Israelites saw Him as just another one of the prophets they respected. Jesus then asks His disciples, "But who do you say that I am?" Never mind what others say—what about you? Who do you think I am? This question to the disciples is also a challenge to us. Who do you believe I am? Why did you become a believer? Did you join the church thinking of me as one of the great sages? Did you believe because receiving good teachings seems better than not believing, as faith can purify the heart and make life in this world better? Or do you truly recognize Jesus as the Son of God and your Savior? What is the substance of your faith? This is a question that cannot be avoided and must not be ignored. When we make the same confession as Peter, we truly become His disciples.`,
  ],
  [
    `We have often heard that the church is a gathering of believers. It is not a building but a congregation called together—an "ekklesia." The church is the assembly called by God. However, this assembly only becomes a true church when it holds a proper confession of faith. When the true confession, "Jesus is the Christ, the Son of the living God," remains alive, that group becomes the church. What happens if a church grows large but loses its living confession? It can become a den of thieves, fighting endlessly over power and wealth, bringing disgrace to the world. It can also turn into a gathering where socializing and entertainment take precedence over faith.`,
  ],
  [
    `The Lord said He would build His church upon the confession of Christ. That is why the church exists. And the church established in this way receives the authority to overcome the power of death and to "bind and loose" on earth. This has various meanings, but one of them is the "authority to forgive sins." Through the right confession, the church is a place where sinners are recognized as righteous and given a new life. That is what it must be.`,
  ],
];

export default {
  author: "김종호 / Kim Jong-Ho",
  date: "2007-09-30",
  worktype: "prose",
  lastModified: document.lastModified,
  translations: {
    original: {
      language: "ko",
      title: "교회란 무엇인가?",
      content: original,
    },
    translated: {
      language: "en",
      title: "What is the Church?",
      content: translated,
    },
  },
} as Work;
