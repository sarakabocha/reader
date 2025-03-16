import { processText } from '../../utils/textProcessor';

const original =
  `Nie uczyniłeś mnie ślepym
Dzięki Ci za to Panie
Nie uczyniłeś mnie garbatym
Dzięki Ci za to Panie
Nie uczyniłeś mnie dziecięciem alkoholika
Dzięki Ci za to Panie
Nie uczyniłeś mnie wodogłowcem
Dzięki Ci za to Panie
Nie uczyniłeś mnie jąkałą kuternogą karłem epileptykiem hermafrodytą koniem mchem ani niczym z fauny i flory
Dzięki Ci za to Panie
Ale dlaczego uczyniłeś mnie Polakiem?`;

const translated = `You did not make me blind
Thank You for that, Lord
You did not make me hunchbacked
Thank You for that, Lord
You did not make me a child of an alcoholic
Thank You for that, Lord
You did not make me hydrocephalic
Thank You for that, Lord
You did not make me a stuttering, crippled, dwarfish epileptic, A hermaphrodite, a horse, moss, or anything from the fauna and flora
Thank You for that, Lord
But why did You make me Polish?
`;

export const thanksgivingPrayer = {
  name: "Thanksgiving Prayer with an Excuse",
  title: {
    original: ["Modlitwa dziękczynna z wymówką"],
    translated: ["Thanksgiving Prayer with an Excuse"]
  },
  date: "1957",
  author: "Andrzej Bursa",
  contents: {
    original: processText(original, { type: 'poetry' }),
    translated: processText(translated, { type: 'poetry' })
  }
};