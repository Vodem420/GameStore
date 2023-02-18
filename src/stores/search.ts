import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({ searchQuery: "" }),
  getters: {
    searchGame: (state) => state.searchQuery,
  },
  actions: {
    updateSearch() {
      this.searchQuery;
    },
  },
});
