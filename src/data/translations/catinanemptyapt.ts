import { processText } from '../../utils/textProcessor';
const original =
`Umrzeć - tego nie robi się kotu.
Bo co ma począć kot
w pustym mieszkaniu.
Wdrapywać się na ściany.
Ocierać między meblami.
Nic niby tu nie zmienione,
a jednak pozamieniane.
Niby nie przesunięte,
a jednak porozsuwane.
I wieczorami lampa już nie świeci.

Słychać kroki na schodach,
ale to nie te.
Ręka, co kładzie rybę na talerzyk,
także nie ta, co kładła.

Cos się tu nie zaczyna
w swojej zwykłej porze.
Cos się tu nie odbywa
jak powinno.
Ktoś tutaj był i był,
a potem nagle zniknął
i uporczywie go nie ma.

Do wszystkich szaf się zajrzało.
Przez polki przebiegło.
Wcisnęło się pod dywan i sprawdziło.
Nawet złamało zakaz
i rozrzuciło papiery.
Co więcej jest do zrobienia.
Spać i czekać.

Niech-no on tylko wróci,
niech-no się pokaże.
Już on się dowie,
ze tak z kotem nie można.
Będzie się szło w jego stronę
jakby się wcale nie chciało,
pomalutku,
na bardzo obrażonych łapach.
I żadnych skoków pisków na początek.`;

const translated =
`Die—you can’t do that to a cat.
Since what can a cat do
in an empty apartment?
Climb the walls?
Rub up against the furniture?
Nothing seems different here
but nothing is the same.
Nothing’s been moved
but there’s more space.
And at nighttime no lamps are lit.

Footsteps on the staircase,
but they’re new ones.
The hand that puts fish on the saucer
has changed, too.

Something doesn’t start
at its usual time.
Something doesn’t happen
as it should.
Someone was always, always here,
then suddenly disappeared
and stubbornly stays disappeared.

Every closet’s been examined.
Every shelf has been explored.
Excavations under the carpet turned up nothing.
A commandment was even broken:
papers scattered everywhere.
What remains to be done.
Just sleep and wait.

Just wait till he turns up,
just let him show his face.
Will he ever get a lesson
on what not to do to a cat.
Sidle toward him
as if unwilling
and ever so slow
on visibly offended paws,
and no leaps or squeals at least to start.`;

export const cat = {
  name: "Cat in an Empty Apartment",
  title: {
    original: ["Kot w pustym mieszkaniu"],
    translated: ["Cat in an Empty Apartment"]
  },
  date: "1991",
  author: "Wisława Szymborska",
  contents: {
    original: processText(original, { type: 'poetry' }),
    translated: processText(translated, { type: 'poetry' })
  }
};