import axios from "axios";

export const api = {
  fetchWords: async (word: string) => {
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching words:", error);
      throw new Error("Failed to fetch words");
    }
  },
};
