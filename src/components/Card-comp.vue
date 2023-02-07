<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  item: { type: Object, required: true },
});

const roundedRaiting = computed<number>(() => {
  return Math.round(props.item.metacritic);
});

const raitingColor = computed<string>(() => {
  if (roundedRaiting.value >= 75) {
    return "green";
  } else if (roundedRaiting.value >= 50 && roundedRaiting.value < 75) {
    return "orange";
  } else {
    return "red";
  }
});

const platformsSlugs = computed<object>(() => {
  let platforms = props.item.parent_platforms;
  return platforms.map((i: any) => {
    return i.platform.slug;
  });
});
</script>

<template>
  <div class="Card">
    <div
      class="Card__ItemImg"
      :style="'background-image: url(' + item.background_image + ');'"
    ></div>
    <div class="Card__info">
      <div class="Card__head">
        <div class="Card__plaforms">
          <img
            v-for="platformImg in platformsSlugs"
            :key="platformImg"
            :src="`/images/platforms/${platformImg}.svg`"
          />
        </div>
        <div class="Card__Raiting" :class="raitingColor">
          {{ roundedRaiting }}
        </div>
      </div>
      <div class="Card__Title">
        <label>{{ item.name }}</label>
      </div>
      <div class="Card__ItemGenres">
        <span v-for="genre in item.genres" :key="genre.id">{{
          genre.name
        }}</span>
      </div>
    </div>
  </div>
</template>
