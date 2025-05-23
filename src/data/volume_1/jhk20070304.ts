import { Work } from "../collection";

const original = [
  [
    `이번 주의 칼럼의 제목은 클린턴 대통령 시절 부통령이었고, 오랫동안 '지구온난화' (Global Warming) 문제를 설교하면서 살아 온, 알 고어가 쓴 책의 제목입니다. `,
    `또한 그 책은 다큐멘터리로 만들어져서, 올해 아카데미상 장편 다큐멘터리상을 수상했고, 그 주제가는 주제가상까지 받은 (다큐멘터리 영화의 주제가가 상을 받은 것은 이례적입니다) 바 있어서, 좀 더 유명해 진 제목입니다. `,
    `책임있게 글을 쓰려면 내가 먼저 읽어야 하겠기에, 어제 반즈엔 노블(Barnes & Noble) 서점에 가서 한 시간 반 가량 책을 읽어 보았습니다. `,
    `영화는 곧 보려고 합니다.`,
  ],
  [
    `이 제목이 의미하는 바가 무엇입니까? `,
    `불편한 진실이라? `,
    `인정하고 싶지 않고, 외면하고 싶지만 사실인 것을 말하는 것이겠지요? `,
    `저도 전에 그렇게 생각했습니다. `,
    `지구 온난화란, 인구가 점점 많아지고 자원을 더 많이 사용하다 보니까 공해가 더 심해지고, 그래서 지구의 운도가 올라간다는 것이니까, 그 정도는 상식적인 것이 아닌가? `,
    `그래도 어쩔 수 없는 일이 아닌가? `,
    `그렇게란 생각했추니다. `,
    `물론 책을 읽어도 그런 상식이 바뀌는 것은 아닙니다. `,
    `더 심각해지고 재앙이 예측되는 것입니다.`,
  ],
  [
    `알 고어라는 정치인이 왜 그런 ‘비정치적인’ 이슈를 가지고 평생을 자기 메시지라고 말하고 다니는가 의아했는데, 책을 보니 그에게는 전환점을 가져다 준 스승이 있었습니다. `,
    `하버드에서 공부할 때 교수였던 Dr. Revelle 이었습니다. `,
    `이 분은 60년대 말부터 우리가 사는 지구의 CO2, (이산화탄소) 농도를 여러곳에서 측정하기 시작했습니다. `,
    `그 결과, 20 세기초부터 오늘날까지 직선으로 상승하고 있는 패턴을 발견했습니다. `,
    `이산화탄소는 거대한 지구를 온실을 덮는 유리판처럼 되어, 태양에서 비추어지는 적외선이 지구에서 대기 밖으로 반사되어 가는 것을 막는 역할을 함으로써, 지구를 점점 덮게 만들고 기상재앙을 불러 온다는 사실입니다. `,
    `여기저기서 외쳐도, 발전이 우선인지라 법제화되지 않았습니다. `,
    `발전을 늦추는 것을 원치 않는 집단이 많기 때문입니다.`,
  ],
  [
    `2년전의 허리케인 카트리나는 지구온난화의 결과로 발생한 것임이 분명합니다. `,
    `그리고 매년 발생하는 허리케인과 태풍의 횟수와 강도는 커진다고 하니, 우리는 매년 여름 더 큰 재앙을 맞을 준비를 해야 함이 분명합니다. `,
    `그러므로, 재앙을 맞은 자들을 돕는 헌금을 하고, 그들을 위하여 기도하고, 몸으로 봉사하는 일도 중요하지만, 그 일만큼 중요한 것이 문명의 발전 방향을 수정하는 일임이 분명합니다. `,
    `이 사실은 분명히 '불편한 진실'입니다. `,
    `그러나 눈감을 수 없습니다. `,
    `지구온난화에 대하여 각국이 책임을 지자는 '교토 의정서’를 부시 대통령은 거절했습니다. `,
    `불편한 진실을 감추고 싶어하는 사람들이 뒤에 있기 때문입니다.`,
  ],
  [
    `제가 2년전 여름, 알라스카에 갔을 때 놀랐습니다. `,
    `앵커리지에서 차 안에 에어컨을 틀리 않으면 견딜수 없습니다. `,
    `원래 그런가 했더니, 옛날에는 그렇지 않았다고 합니다. `,
    `지구가 그렇게 더워진 것입니다. `,
    `빙하는 계속 녹고 있습니다. `,
    `맨 먼저 할 일은 우리 모두가 이 문제를 심각하게 아는 일입니다. `,
    `발전과 삶과 이 세상에 대하여 제대로 알 필요가 있습니다.`,
  ],
  [
    `창세기를 다시 읽어야 합니다. `,
    `하나님의 창조는 6 일간 이어졌고, 매일의 창조 작업후에 하나님은 '보기에 좋다' 하고 만족하셨습니다. `,
    `창조는 질서있고 좋은 완벽한 것이었습니다. `,
    `그리고, 제칠일에 하나님은 모든 일을 그치고, 쉬셨습니다. `,
    `6일간의 창조는 7일째 안식일에 완성이 되는 것이었습니다. `,
    `안식일은 공치는 날이 아니라, 하나님이 지키셨던 창조가 마무리되는 날임을 알려 줍니다. `,
    `우리에게 맡겨진 세계는 안식일의 개념을 모두가 바로 알고, 안식일을 안식일답게 지킬 때만 제대로 보존될 수 있습니다. `,
    `"생육하고 번성하여 땅을 채우고 정복하라"는 말씀은, 우리가 훼손하라는 것이 아닙니다. `,
    `우리에게 청지기로 살라는 당부입니다. `,
    `선물로 받은 세상을 보존하는 일과 망가뜨리는 일이 우리에게 달려 있는 것입니다. `,
    `안식일이 무엇이고, 그 의미의 확대가 무엇이고, 왜 우리에게 필요한지를 깨닫는 일입니다.
그것은 믿음의 중요한 부분입니다.`,
  ],
];

const translated = [
  [
    `This week’s column title is the title of a book written by Al Gore, who was Vice President during President Clinton’s administration and has spent much of his life preaching about the issue of “Global Warming.” `,
    `That book was also made into a documentary, which won the Academy Award for Best Documentary Feature this year, and even received the award for Best Original Song (it’s unusual for a documentary film’s theme song to win such an award), so the title has become more widely known. `,
    `To write responsibly, I thought I should read it myself first, so yesterday I went to Barnes & Noble and spent about an hour and a half reading the book. `,
    `I plan to watch the film soon.`,
  ],
  [
    `What does this title mean? `,
    `An inconvenient truth? `,
    `It must refer to something that is hard to accept, that we want to ignore but is in fact true, right? `,
    `I used to think that way too. `,
    `Global warming—well, as the population increases and more resources are used, pollution worsens, and so the Earth’s temperature rises—doesn’t that seem like common sense? `,
    `Isn’t it just something inevitable? `,
    `That’s what I used to think. `,
    `Of course, reading the book doesn’t change that basic understanding. `,
    `What changes is the realization that the situation is more serious and disaster is predicted.`,
  ],
  [
    `I wondered why a politician like Al Gore would spend his life talking about such a “non-political” issue, calling it his message, but in reading the book, I found he had a mentor who brought a turning point to his life. `,
    `It was Dr. Revelle, a professor he studied under at Harvard. `,
    `Dr. Revelle began measuring CO2 (carbon dioxide) levels in various places around the globe starting in the late 1960s. `,
    `As a result, he discovered a pattern of steady, linear increase in CO2 levels from the early 20th century to today. `,
    `Carbon dioxide acts like a glass plate covering a greenhouse over the vast Earth, preventing infrared radiation from the sun from reflecting back out of the atmosphere—thus increasingly covering the Earth and bringing about climate disasters. `,
    `Even though this was being warned about in various places, it was not legislated. `,
    `This is because many groups do not want anything that might slow down economic development.`,
  ],
  [
    `Hurricane Katrina, which struck two years ago, is clearly a result of global warming. `,
    `And since it is said that the number and intensity of hurricanes and typhoons each year will increase, it is clear that we must prepare every summer for greater disasters. `,
    `Therefore, while it is important to donate to help disaster victims, pray for them, and physically serve them, it is just as important to adjust the direction of our civilization’s development. `,
    `This fact is truly an “inconvenient truth.” `,
    `But we cannot turn a blind eye. `,
    `President Bush rejected the Kyoto Protocol, which urged nations to take responsibility for global warming. `,
    `That’s because there are people behind him who want to hide this inconvenient truth.`,
  ],
  [
    `When I went to Alaska two years ago in the summer, I was shocked. `,
    `In Anchorage, it was unbearable in the car without turning on the air conditioner. `,
    `I wondered if it had always been that way, but I was told it hadn’t. `,
    `The Earth has gotten that much hotter. `,
    `The glaciers are continuously melting. `,
    `The first thing we all need to do is to understand the seriousness of this issue. `,
    `We need to correctly understand development, life, and this world.`,
  ],
  [
    `We need to reread Genesis. `,
    `God’s creation lasted six days, and after each day’s creative work, God said, “It is good,” and was satisfied. `,
    `Creation was orderly, good, and perfect. `,
    `And on the seventh day, God stopped all His work and rested. `,
    `The creation over six days was completed on the seventh day, the Sabbath. `,
    `The Sabbath is not a useless day, but a day that tells us the completion of creation that God kept. `,
    `The world entrusted to us can only be properly preserved when everyone rightly understands the concept of the Sabbath and keeps it as the Sabbath should be kept. `,
    `The command to “be fruitful and multiply, fill the earth and subdue it” does not mean to destroy it. `,
    `It is a request for us to live as stewards. `,
    `Whether the world we have been given as a gift is preserved or destroyed depends on us. `,
    `It is about understanding what the Sabbath is, what the expansion of its meaning is, and why it is necessary for us. `,
    `That is an important part of faith.`,
  ],
];

export default {
  author: "김종호 / Kim Jong-Ho",
  date: "2007-03-04",
  worktype: "prose",
  lastModified: document.lastModified,
  translations: {
    original: {
      language: "ko",
      title: "불 편한 진실",
      content: original,
    },
    translated: {
      language: "en",
      title: "An Inconvenient Truth",
      content: translated,
    },
  },
} as Work;
