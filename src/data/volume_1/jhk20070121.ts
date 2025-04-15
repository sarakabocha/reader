import { Work } from "../collection";

const original = [
  [
    `산상수훈의 팔복 중 앞의 네 가지는 하나님과 우리와의 관계에 대한 것이라고 할 수 있고, 뒤의 네 가지는 나와 이웃간의 관계에서 오는 복이라고 할 수 있습니다. `,
    `오늘은 5장 7-9 절의 세 가지 복의 목록을 보면서, 우리에게 알려 주시는 복에 대하여 생각하겠습니다. `,
    `이 세 가지의 복은 점층적인 관계가 있습니다. `,
    `즉 , 9절의 복이 가장 귀하고 가치 있는 것입니다. `,
    `왜 그럴까요? 하나님의 아들 (하나님의 자녀)라고 불리울 것이라고 하기 때문입니다.`,
  ],

  [
    `세 가지의 복은, “긍휼히 여기는 자는 복이 있나니, 저희가 긍휼히 여김을 받을 것이요, `,
    `마음이 청결한 자는 복이 있나니, 저희가 하나님을 볼 것이요, `,
    `평화를 만드는 자는 복이 있나니, 저희가 하나님의 아들이라 일컬음을 받을 것이다" 입니다. `,
    `마지막의 축복이 최고라고 생각합니다. `,
    `하나 하나 살펴 보겠습니다.`,
  ],

  [
    `첫째, 자비를 베푸는 자가, 자비로이 여김을 받는다고 합니다. `,
    `내가 심은대로 돌아 옵니다. `,
    `예수님도 제자들을 파송할 때, 어디를 가든지 축복하라고 하셨습니다. `,
    `그들이 축복을 받으면 거기 축복이 머물고, 받을 자세가 되지 못하면, 그 축복은 너희에게 되돌아 온다! `,
    `저주를 명한 경우는 없습니다. 그대로 돌아오기 때문입니다. `,
    `우리는 자비를 베푸는 믿음이 되어야 합니다. 내가 자비의 선물을 받기 때문입니다.`,
  ],

  [
    `둘째, 마음이 깨끗한 자는 가 하나님을 볼 것이라고 했습니다. `,
    `어떻게 하나님의 얼굴을 볼 수 있습니까? 하나님을 눈으로 본 사람이 있습니까? 눈으로는 보지 못합니다. `,
    `흰수염이 난 인자한 할아버지 모습은 어릴 적 동화에서 본 이미지이긴 하지만 하나님의 얼굴은 아닙니다. `,
    `그러나, 마음으로는 볼 수는 있습니다. `,
    `야곱은 그의 마음 속에 비추어진 하나님을 보았습니다.`,
  ],

  [
    `야곱이 오랜 객지 생활 후에 형 에서를 만나 감격적인 화해를 했을 때, ‘형님의 얼굴을 보니 하나님의 얼굴을 보는 듯 합니다’ 하고 말합니다. `,
    `무슨 뜻입니까? 진정으로 화해하고 마음이 깨끗해 졌을 때 그는 하나님을 본 것입니다. `,
    `야곱은 형을 속이고 성공을 했고, 객지에 나가 아둥바둥 산 끝에 두 아내도 얻고 재산가가 되었습니다. `,
    `그러나, 그의 마지막 목표는 고향 땅으로 돌아오는 것이었습니다. `,
    `그의 고향은 그의 안식처입니다. `,
    `고향에 오자면 형과 반드시 마주쳐야 합니다. `,
    `형의 복수가 두려웠습니다. `,
    `압복강에서 천사와 씨름하듯이 하나님께 부르짖어 응답을 받습니다. `,
    `야곱은 이스라엘로 존재가 변화 합니다. `,
    `그리고 이제 조마 조마 형을 만나러 갔는데, 이미 형 에서도 변화된 상태였습니다. `,
    `야곱 자신이 깨끗이 죄를 씻고 변화하고 나니, 하나님은 형을 변화시킨 것입니다. `,
    `분노가 녹아진 형의 얼굴에서 하나님의 얼굴을 보았습니다.`,
  ],

  [
    `셋째, 평화를 이루는 사람은 복이 있나니, 저희가 하나님의 아들이라고 불리울 것이다 했습니다. `,
    `평화를 만드는 사람 peacemaker 입니다. `,
    `평화를 만드는 사람이 하나님의 아들이라고 불리우는 축복을 받습니다. `,
    `그게 축복인가, 하고 생각할 사람들도 있을 것입니다. `,
    `예수를
믿으면 이미 하나님의 자녀가 되는 것이 아닌가요? 하고 물을 것이기 때문입니다. `,
    `물론 그것을 이미 약속해 주셨습니다. `,
    `“영접하는 자, 곧 그 이름을 믿는 자들에게는 하나님의 자녀가 되는 권세를 주셨으니, 이는 혈통으로나 육정으로나 사람의 뜻으로 나지 아니하고, 오직 하나님께 로서 난 자들 이니라"(요한 1:12) 하셨기 때문입니다.`,
  ],

  [
    `그렇습니다. 예수를 영접하는 자에게는 하나님의 자녀라는 칭호를 주셨습니다. `,
    `그러나, 산상수훈의 가르침은 평화를 이룰 때 하나님의 자녀라고 불리울 자격이 있다는 것입니다. `,
    `그것이 진정한 축복이라고 하신 것입니다. `,
    `평화가 얼마나 소중합니까? 얼마나 많은 삶의 영역에서 평화가 사라지고 있습니까? `,
    `국가간, 가정, 부부, 이웃간, 그리고 무엇보다 나 자신의 속에서 평화를 이를 수 있다면 그 자체가 최고의 축복이 아니겠습니까?`,
  ],
];

const translated = [
  [
    `Among the Beatitudes in the Sermon on the Mount, the first four can be said to relate to our relationship with God, while the latter four concern the blessings that come from our relationships with others. `,
    `Today, we will look at the three blessings listed in Matthew 5:7-9 and reflect on the blessings given to us. `,
    `These three blessings are progressively connected. `,
    `The blessing in verse 9 is the most precious and valuable. `,
    `Why is that? Because it says they will be called the sons (children) of God.
`,
  ],
  [
    `The three blessings are: "Blessed are the merciful, for they shall receive mercy. `,
    `Blessed are the pure in heart, for they shall see God. `,
    `Blessed are the peacemakers, for they shall be called sons of God." `,
    `I believe the last blessing is the greatest. `,
    `Let’s examine them one by one.`,
  ],

  [
    `First, those who show mercy will receive mercy. `,
    `You reap what you sow. `,
    `When Jesus sent out His disciples, He instructed them to bless wherever they went. `,
    `If the people were ready to receive the blessing, it would remain there, but if not, the blessing would return to them! `,
    `He never commanded them to pronounce curses because whatever is given returns. `,
    `We must have faith that shows mercy because we ourselves receive the gift of mercy.`,
  ],

  [
    `Second, it says that the pure in heart will see God. `,
    `How can one see the face of God? Has anyone ever seen God with their eyes? We cannot see Him with our physical eyes. `,
    `The image of a kind old man with a white beard may be something we remember from childhood stories, but that is not the face of God. `,
    `However, we can see Him with our hearts. `,
    `Jacob saw God reflected in his heart.`,
  ],
  [
    `After many years of wandering, when Jacob was finally reunited with his brother Esau in an emotional reunion, he said, "Seeing your face is like seeing the face of God." `,
    `What did he mean? When he truly reconciled and his heart was purified, he saw God. `,
    `Jacob had deceived his brother to gain success, struggled through hardships in a foreign land, and eventually became wealthy with two wives. `,
    `However, his ultimate goal was to return to his homeland. `,
    `His homeland was his place of rest. `,
    `To return, he had to face his brother. `,
    `He feared Esau’s revenge. `,
    `At the Jabbok River, he wrestled with an angel and cried out to God, receiving an answer. `,
    `Jacob’s identity changed to Israel. `,
    `
Then, as he anxiously went to meet his brother, he found that Esau had already changed as well. `,
    `Once Jacob had cleansed himself of his sins and transformed, God had also changed his brother’s heart. `,
    `In the face of his brother, whose anger had melted away, Jacob saw the face of God.`,
  ],
  [
    `Third, "Blessed are the peacemakers, for they shall be called sons of God." `,
    `A peacemaker is someone who creates peace. `,
    `Those who make peace receive the blessing of being called children of God. `,
    `Some may wonder, is that really a blessing? `,
    `Wouldn’t believing in Jesus already make someone a child of God? That question may arise. `,
    `Of course, that promise has already been given: `,
    `
"To all who received Him, to those who believed in His name, He gave the right to become children of God—children born not of natural descent, nor of human decision or a husband's will, but born of God." (John 1:12)
`,
  ],
  [
    `
Yes, those who receive Jesus are given the title of children of God. `,
    `However, the teaching of the Sermon on the Mount is that those who make peace have the qualification to be called children of God. `,
    `That is the true blessing. `,
    `How precious is peace? In how many areas of life is peace disappearing? `,
    `Between nations, within families, between spouses, among neighbors, and most importantly, within ourselves—if we can achieve peace in these areas, wouldn’t that be the greatest blessing of all?`,
  ],
];

export default {
  author: "김종호 / Kim Jong-Ho",
  date: "2007-01-21",
  worktype: "prose",
  lastModified: document.lastModified,
  translations: {
    original: {
      language: "ko",
      title: "피스메이커가 되라: 산상수훈 (3)",
      content: original,
    },
    translated: {
      language: "en",
      title: "Be a Peacemaker: Sermon on the Mount (3)",
      content: translated,
    },
  },
} as Work;
