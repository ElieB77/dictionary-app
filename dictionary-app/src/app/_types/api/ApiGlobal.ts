import { ApiWordDefinition } from "./ApiWordDefinitions";

interface Phonetic {
  text: string;
  audio: string;
  sourceUrl: string;
  license: {
    name: string;
    url: string;
  };
}

export interface Definition extends ApiWordDefinition {}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}

export interface ApiGlobal {
  data: null;
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  definitions: Definition;
}
