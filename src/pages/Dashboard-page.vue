<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import gameAPI from "@/services/gameAPI";
import CardComp from "@/components/Card-comp.vue";

const items: Ref<object> = ref([]);

const fetchGames = async function (params: object) {
  try {
    items.value = await gameAPI.getGames(params);
  } catch (e) {
    alert("error");
  }
};
fetchGames();
</script>

<template>
  <div class="Dashboard">
    <div class="Dashboard__navPanel">
      <!-- <Navigation-panel /> -->
    </div>
    <div class="Dashboard__MainSection">
      <div class="Dashboard__ItemsWrapper">
        <CardComp v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>
