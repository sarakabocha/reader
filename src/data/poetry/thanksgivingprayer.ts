import { Work } from "../collection";

const original = `Nie uczyniłeś mnie ślepym
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

export default {
  author: "Andrzej Bursa",
  date: "1957",
  type: "poetry",
  translations: {
    original: {
      language: "pl",
      title: "Modlitwa dziękczynna z wymówką",
      content: original,
    },
    translated: {
      language: "en",
      title: "Thanksgiving Prayer with an Excuse",
      content: translated,
    },
  },
} as Work;
