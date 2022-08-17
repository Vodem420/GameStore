<template>
  <div v-if="show">
    <div @click.stop>
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'modal-comp',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },
    methods: {
        
    }
};
</script>

