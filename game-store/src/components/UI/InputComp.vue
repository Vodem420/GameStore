<template>
  <input 
    type="text"
    :value="value"
    @input="updateInput"
  >
</template>

<script>
export default {
    name: 'input-comp',
    props: {
        value: [String, Number]
    },
    data() {
        return {};
    },
    methods: {
        updateInput(event){
            this.$emit('update:value', event.target.value)
        }
    }
};
</script>

