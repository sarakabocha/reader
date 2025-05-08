import { Work } from "../collection";

const original = [
  [
    `이솝 우화에 나오는 우리가 잘 아는 이야기를 되새겨 볼까 합니다. `,
    `어떤 사람이 낙타를 타고 사막을 여행하고 있었습니다. `,
    `먼 길이라서 사막에서 텐트를 치고 하룻밤을 자게 되었습니다. `,
    `사막은 낮에는 무덥지만 밤에는 아주 춥습니다. `,
    `이 사람은 당연히 텐트 안에서 잤고, 낙타는 바깥에서 자게 되었습니다. `,
    `밖에서 자고 있던 낙타가 추운지 주인에게 청을 했습니다. `,
    `“한발만 텐트 안에 넣고 자게 해 주세요.” "그래라!" 주인은 자기를 태우고 수고하는 낙타가 한발을 텐트 속에 넣게 해 주었습니다. `,
    `조금 있다고 낙타는 한발만 더 넣게 해 달라고 했습니다. `,
    `그 소원도 들어 주었습니다. `,
    `그런데, 주인이 잠이 든 사이에 낙타는 나머지 두 발도 살짝 넣고, 그 다음엔 꼬리를 넣고, 엉덩이 마저 넣어 버렸습니다. `,
    `결국 주인이 잠이 깼을 때는, 자신은 텐트 밖으로 던져 지고 낙타가 텐트 속에서 자고 있었습니다.
`,
  ],
  [
    `이솝의 본래 의도를 저는 잘 모르지만, 이 이야기는 죄의 속성에 대하여 잘 말해준다고 믿습니다. `,
    `죄는 한꺼번에 달려 오지 않고, 야금 야금 우리에게 침입해 들어옵니다. `,
    `우리 속담에 바늘 도둑이 소도둑된다는 말이 있습니다. `,
    `아주 작은 것을 훔치는 버릇을 내버려 두면 결국 큰 도둑이 되어 버린다는 말입니다.
`,
  ],
  [
    `죄가 커지지 못하게 하려면 어떻게 해야 합니까? `,
    `아주 작은 죄라도 잘못임을 깨달아야 합니다. `,
    `잘못을 알게 해 주어야 합니다. `,
    `죄에 민감한 영혼이 되어야 합니다. `,
    `그런데. `,
    `문제는 죄를 피할 능력이 우리에게 있는가 하는 물음입니다. `,
    `양심은 누구에게나 있기 때문에, 잘못인 줄 알면서도 죄를 범하고, 죄라고 남에게 가르치면서도, 자신은 바로 그 죄를 몰래 범하는 것이 인간의 모습입니다. `,
    `죄의 문제에 있어서 인간은 전혀 위대하지 않습니다. `,
    `오히려 위대해지려면, 죄를 낱낱이 고하는 순간 그 사람은 위대해 보이고, 실제로 존경을 받습니다.
`,
  ],
  [
    `성 어거스틴은 그의 '고백록'에서 어린 시절 배를 훔쳐 먹던 시절을 회개했습니다. `,
    `그 때는 배가 고파서 배를 따 먹은 것이 아니라, 훔쳐 먹는 그 자체의 즐거움 때문에 범죄했었다고 철저히 회개했습니다.
`,
  ],
  [
    `로마서 7강에서 사도 바울은 그의 위대함을 나타내 주는데, 그것은 "내 속에 선을 행하려는 마음이 있는 데, 악이 붙어 있다는 것입니다… 아, 나는 비참한 사람입니다. `,
    `누가 나를 이 몸에서 나를 건져 주겠습니까?” 하고 실존적인 탄식을 했습니다. `,
    `아무도 이 탄식이 나와 상관없다고 할 사람이 없습니다. `,
    `이 탄식은 오히려 그를 위대한 사도로 만들었습니다. `,
    `죄는 덮으면 썩어 냄새나고 병이 나며, 반대로 스스로 드러내고 회개하면 칭찬과 존경을 받습니다.
`,
  ],
  [
    `우리가 죄의 문제를 어떻게 해결할 수 있습니까? `,
    `그리스도의 십자가의 구속의 사랑을 만나야 합니다. `,
    `내 힘으로 될 수 없고, 나는 죄에 대하여 무력한 존재임을 알고, 대신 그리스도께서 죄의 힘을 무력화시켜 주셨다는 것을 확신해야만, 죄라는 원수를 물리칠 수 있습니다. `,
    `내 죄가 하나님의 은혜로 말끔이 씻긴 것을 체험하는 길만이 해결입니다.
`,
  ],
  [
    `그리스도의 십자가를 안다는 것은, 내 죄가 용서받는 체험을 하는 것입니다. `,
    `이 체험이 없이 십자가를 안다고 할 수 없습니다. `,
    `로마서 6장 5절에는 "우리가 그의 죽으심과 같은 죽음으로 그와 연합하는 자가 되었으면, 또한 분명히, 그의 부활하심과 같은 부활로 그와 연합하는 사람이 될 것입니다" 하고 말씀했습니다. `,
    `이것은 십자가의 신비입니다. `,
    `십자가 사건을 아는 것은 지식으로 앎이 아닙니다. `,
    `나의 죄를 짓는 본성이 십자가에 못박히는 체험을 할 때만이, 비로소 십자가를 아는 것입니다. `,
    `흔히, 아이를 낳아 길러 본 후라야, 딸은 비로소 어머니의 심정을 안다는 말과 같습니다. `,
    `기독교는 그래서 체험의 종교라고 말합니다.
`,
  ],
  [
    `지금은 사순절입니다. `,
    `죄의 노예가 되지 말고, 그리스도와 더불어 죽고 그와 함께 다시 살아난 체험과 고백을 소유하기 바랍니다.
`,
  ],
];

const translated = [
  [
    `Let us reflect on a familiar story from Aesop’s Fables. `,
    `A man was traveling through the desert on a camel. `,
    `Since the journey was long, he set up a tent in the desert to spend the night. `,
    `The desert is scorching during the day but very cold at night. `,
    `Naturally, the man slept inside the tent, and the camel slept outside. `,
    `Feeling cold, the camel made a request to its master: `,
    `“Please let me put just one foot inside the tent.” “Alright!” said the master, allowing the hard-working camel who had carried him to put one foot inside the tent. `,
    `A little while later, the camel asked to put in just one more foot. `,
    `That wish was granted too. `,
    `However, while the master was asleep, the camel quietly put in its remaining two feet, then its tail, and finally, its entire backside. `,
    `In the end, when the master woke up, he had been thrown outside the tent, and the camel was sleeping inside.
`,
  ],
  [
    `I don’t know Aesop’s original intent, but I believe this story speaks well to the nature of sin. `,
    `Sin does not rush in all at once — it creeps in little by little. `,
    `There is a Korean proverb that says, “A needle thief becomes a cow thief.” `,
    `It means that if one leaves the habit of stealing small things unchecked, one eventually becomes a big thief.
`,
  ],
  [
    `So how can we prevent sin from growing? `,
    `We must recognize even the smallest sin as wrong. `,
    `We must be made aware of our wrongdoings. `,
    `We must become souls that are sensitive to sin. `,
    `But the problem is this: Do we have the ability to avoid sin? `,
    `Since everyone has a conscience, people often sin even though they know it's wrong. `,
    `They teach others not to sin, yet secretly commit those very sins themselves. `,
    `In dealing with sin, human beings are not at all great. `,
    `In fact, when one confesses their sins in full detail, they appear great and are even respected.
`,
  ],
  [
    `St. Augustine, in his Confessions, repented of the time in his childhood when he stole pears. `,
    `He confessed that he hadn’t stolen them out of hunger but for the pleasure of stealing itself, and he repented of this thoroughly.
`,
  ],
  [
    `In Romans chapter 7, the Apostle Paul reveals his greatness by saying, “Although I have the desire to do what is good, evil is right there with me... `,
    `What a wretched man I am! Who will rescue me from this body of death?” `,
    `No one can claim this lament has nothing to do with them. `,
    `On the contrary, this very lament made Paul a great apostle. `,
    `Sin, when hidden, rots, stinks, and causes disease, but when it is exposed and repented of, it brings praise and respect.
`,
  ],
  [
    `How can we solve the problem of sin? `,
    `We must encounter the redeeming love of Christ’s cross. `,
    `We cannot do it by our own strength. We must recognize that we are powerless against sin and be fully convinced that Christ has rendered the power of sin ineffective. Only then can we overcome the enemy called sin. `,
    `The only solution is the path of experiencing that our sins have been completely cleansed by God’s grace.
`,
  ],
  [
    `To know the cross of Christ is to experience the forgiveness of our sins. `,
    `Without this experience, one cannot truly say they know the cross. `,
    `Romans 6:5 says, “If we have been united with Him in a death like His, we will certainly also be united with Him in a resurrection like His.” `,
    `This is the mystery of the cross. `,
    `Knowing the event of the cross is not a matter of head knowledge. `,
    `Only when the sinning nature within us is nailed to the cross through personal experience can we truly say we know the cross. `,
    `It is like the saying that a daughter only truly understands her mother’s heart after she gives birth and raises a child herself. `,
    `That is why Christianity is called a religion of experience.
`,
  ],
  [
    `It is now the season of Lent. `,
    `I hope you will not become a slave to sin, but rather, have the experience and confession of dying with Christ and being raised again with Him.
`,
  ],
];

export default {
  author: "김종호 / Kim Jong-Ho",
  date: "2007-03-18",
  worktype: "prose",
  lastModified: document.lastModified,
  translations: {
    original: {
      language: "ko",
      title: "죄의 종이 되지 말라",
      content: original,
    },
    translated: {
      language: "en",
      title: "Do not become a slave to sin",
      content: translated,
    },
  },
} as Work;
