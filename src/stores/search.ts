import { defineStore } from "pinia";

export type Search = { value: string };

export const useSearchStore = defineStore("search", {
  state: () => ({
    searchValue: [] as Search[],
  }),
  getters: {
    setSearchValue() {
      return this.searchValue;
    },
  },
  actions: {
    setSearchValue() {
      this.searchValue;
    },
  },
});

export default useSearchStore;
