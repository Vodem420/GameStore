import { defineStore } from "pinia";

export const useSearchByGenreStore = defineStore("genre", {
  state: () => ({ genre: [] }),
  getters: {
    getGenre: (state) => state.genre,
  },
  actions: {
    SearchByGenre(data) {
      this.genre = data;
    },
  },
});
