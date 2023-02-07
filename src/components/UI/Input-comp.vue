<script setup lang="ts">
defineProps<{
  // label: {
  //   type: [String, Boolean];
  //   default: false;
  // };
  label: string;
  modelValue: String;
  placeholder: string;
  type: string;
}>();

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="inputComp__wrapper">
    <input
      type="text"
      :value="modelValue"
      class="inputComp"
      :placeholder="placeholder"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <label v-if="label" class="inputComp__label"> {{ label }} </label>
  </div>
</template>
