import { Work } from "../collection";

const original = `Co innego cebula.
Ona nie ma wnętrzności.
Jest sobą na wskroś cebula
do stopnia cebuliczności.
Cebulasta na zewnątrz,
cebulowa do rdzenia,
mogłaby wejrzeć w siebie
cebula bez przerażenia.

W nas obczyzna i dzikość
ledwie skórą przykryta,
inferno w nas interny,
anatomia gwałtowna,
a w cebuli cebula,
nie pokretne jelita.
Ona wielekroć naga,
do głębi itympodobna.

Byt niesprzeczny cebula,
udany cebula twór.
W jedej po prostu druga,
w większej mniejsza zawarta,
a w następnej kolejna,
czyli trzecia i czwarta.
Dośrodkowa fuga.
Echo złożone w chór.

Cebula, to ja rozumiem:
najnadobniejszy brzuch świata.
Sam się aureolami
na własną chwałę oplata.
W nas tłuszcze, nerwy, żyły,
śluzy i sekretności.
I jest nam odmówiony
idiotyzm doskonałaości.`;

const translated = `The onion, now that’s something else.
Its innards don’t exist.
Nothing but pure onionhood
fills this devout onionist.
Oniony on the inside,
onionesque it appears.
It follows its own daimonion
without our human tears.

Our skin is just a coverup
for the land where none dare go,
an internal inferno,
the anathema of anatomy.
In an onion there’s only onion
from its top to its toe,
onionymous monomania,
unanimous omninudity.

At peace, of a peace,
internally at rest.
Inside it, there’s a smaller one
of undiminished worth.
The second holds a third one,
the third contains a fourth.
A centripetal fugue.
Polyphony compressed.

Nature’s rotundest tummy,
its greatest success story,
the onion drapes itself in its
own aureoles of glory.
We hold veins, nerves, and fat,
secretions’ secret sections.
Not for us such idiotic
onionoid perfections.`;

export default {
  author: "Wisława Szymborska",
  date: "1976",
  worktype: "poetry",
  translations: {
    original: {
      language: "pl",
      title: "Cebula",
      content: original,
    },
    translated: {
      language: "en",
      title: "Onion",
      content: translated,
    },
  },
} as Work;
