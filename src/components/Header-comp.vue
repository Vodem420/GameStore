<script setup lang="ts">
import { ref } from "vue";
import InputComp from "./UI/Input-comp.vue";
const search = ref("");

const onInput = (e: { target: { value: string } }) => {
  search.value = e.target.value;
};
</script>

<template>
  <header class="Header__wrapper">
    <div class="Header">
      <div class="Header__left">
        <div class="searchInput__wrapper">
          <input-comp
            v-model="search"
            label=""
            placeholder="Search..."
            type="text"
            @input="onInput"
          />
          value is {{ search }}
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
