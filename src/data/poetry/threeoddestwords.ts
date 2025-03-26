import { Work } from "../collection";

const original = `Kiedy wymawiam słowo Przyszłość, 
pierwsza sylaba odchodzi już do przeszłości. 

Kiedy wymawiam słowo Cisza, 
niszczę ją. 

Kiedy wymawiam słowo Nic, 
stwarzam co, co nie mieści się w żadnym niebycie.`;

const translated = `When I pronounce the word Future,
the first syllable already belongs to the past.

When I pronounce the word Silence,
I destroy it.

When I pronounce the word Nothing,
I make something no non-being can hold.`;

export default {
  author: "Wisława Szymborska",
  date: "1976",
  type: "poetry",
  translations: {
    original: {
      language: "pl",
      title: "Trzy słowa najdziwniejsze",
      content: original,
    },
    translated: {
      language: "en",
      title: "The Three Oddest Words",
      content: translated,
    },
  },
} as Work;

// https://www.babelmatrix.org/works/pl/Szymborska,_Wis%C5%82awa-1923/Trzy_s%C5%82owa_najdziwniejsze/en/7555-The_Three_Oddest_Words
