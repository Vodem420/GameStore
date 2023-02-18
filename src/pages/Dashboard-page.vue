<script setup lang="ts">
import { ref, watchEffect, onMounted, computed } from "vue";
import type { Ref } from "vue";
import gameAPI from "@/services/gameAPI";
import CardComp from "@/components/Card-comp.vue";
import NavigationPanel from "@/components/NavigationPanel.vue";
import { useSearchByGenreStore } from "@/stores/searchByGenre";
import { useSearchStore } from "@/stores/search";

const storeSearchByGenre = useSearchByGenreStore();
const storeSearch = useSearchStore();
const items: Ref<object> = ref([]);

const fetchGames = async function (params?: object) {
  try {
    items.value = await gameAPI.getGames(params);
  } catch (e) {
    alert("error");
  }
};

const updateSearchQuery = function () {
  let params = new URL(document.location).searchParams;
  let q = params.get("q");
  if (!storeSearch.searchGame && q) {
    storeSearch.updateSearch();
  }
};

watchEffect(() => {
  fetchGames({
    search: storeSearch.searchGame,
    genres: storeSearchByGenre.getGenre,
    // Use this if y wana serch by multiply genres
    // genres: [storeSearchByGenre.getGenre].join(","),
  });
});

onMounted(() => {
  fetchGames();
});
</script>

<template>
  <div class="Dashboard">
    <div class="Dashboard__navPanel">
      <NavigationPanel />
    </div>
    <div class="Dashboard__MainSection">
      <div class="Dashboard__ItemsWrapper">
        <CardComp v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>
