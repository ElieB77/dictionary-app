import { ApiWordDefinitions } from "./ApiWordDefinitions";

export interface ApiGlobal {
  definitions: ApiWordDefinitions[];
  partOfSpeech: string;
  synonyms: string[];
}
