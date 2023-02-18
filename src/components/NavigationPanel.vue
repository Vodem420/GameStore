<script setup lang="ts">
import type { Ref } from "vue";
import { ref, onMounted } from "vue";
import gameGenres from "../services/gameGenres";
import router from "@/router";
import { useSearchByGenreStore } from "@/stores/searchByGenre";
import { useSearchStore } from "@/stores/search";

const storeSearch = useSearchStore();
const storeSearchByGenre = useSearchByGenreStore();

const genres: Ref<object> = ref([]);
const expandedList: Ref<boolean> = ref(true);

const fetchGamesGenres = async function () {
  try {
    genres.value = await gameGenres.getGenres();
  } catch (e) {
    alert("genres not loaded");
  }
};
const expandList = function () {
  expandedList.value = !expandedList.value;
};

const search = function (e: string) {
  if (e) {
    // we should clean the value before search by genres
    // cause then it will display games that matches name at current genre
    storeSearch.searchQuery = "";
    storeSearchByGenre.SearchByGenre(e);
    router.push("/dashboard?genre=" + e);
  }
};

onMounted(() => {
  fetchGamesGenres();
});
</script>

<template>
  <div class="navPanel">
    <h2>Genres</h2>
    <div
      class="navPanel__list"
      :class="{ active: expandedList, '': !expandedList }"
    >
      <div v-for="genre in genres" :key="genre.id" class="navPanel__list__item">
        <span :title="genre.slug" @click.prevent="search(genre.slug)">
          <img :src="genre.image_background" />
          <span>{{ genre.name }}</span></span
        >
      </div>
    </div>
    <div v-show="expandedList" class="navPanel__button" @click="expandList">
      Show More <span class="i-carbon-caret-down"></span>
    </div>
    <div v-show="!expandedList" class="navPanel__button" @click="expandList">
      Show Less <span class="i-carbon-caret-up"></span>
    </div>
  </div>
</template>
