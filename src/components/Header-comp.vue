<script setup lang="ts">
import InputComp from "./UI/Input-comp.vue";
import { ref, onMounted } from "vue";
import { useSearchStore } from "@/stores/search";
import { useSearchByGenreStore } from "@/stores/searchByGenre";
import router from "@/router";

const storeSearchByGenre = useSearchByGenreStore();
const storeSearch = useSearchStore();
const searchValue = ref("");
const currentLogo = ref(null);
const showLogo = ref(true);

const submit = function () {
  storeSearch.searchQuery = searchValue.value;
  if (searchValue.value.length) {
    router.push("/dashboard?q=" + searchValue.value);
  }
  searchValue.value = "";
  storeSearchByGenre.genre = [];
};

const RandomIMG = function () {
  let imgs = [1, 2, 3, 4, 5, 6, 7, 8];
  let i = Math.floor(Math.random() * imgs.length);
  if (currentLogo.value == imgs[i]) {
    return RandomIMG();
  }
  return imgs[i];
};
const switchHeaderImage = function () {
  currentLogo.value = RandomIMG();
  showLogo.value = !showLogo.value;
  setTimeout(() => {
    showLogo.value = !showLogo.value;
  }, 2000);
};

onMounted(() => {
  currentLogo.value = RandomIMG();
  showLogo.value = !showLogo.value;
});
</script>

<template>
  <header class="Header__wrapper">
    <div class="Header">
      <div class="Header__left">
        <transition name="fade" @after-leave="switchHeaderImage">
          <img
            v-show="showLogo"
            :src="`/images/header/${currentLogo}.svg`"
            alt="games store logo"
            @click="$router.push('/dashboard')"
          />
        </transition>
        <div class="searchInput">
          <input-comp
            v-model="searchValue"
            label=""
            placeholder="Search..."
            type="text"
            @keyup.enter="submit"
          />
        </div>
      </div>
      <div class="Header__right">
        <button class="btn btn__secondary">Log In</button>
        <button class="btn btn__main">Sign Up</button>
      </div>
    </div>
    <div class="Header__fix"></div>
  </header>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
