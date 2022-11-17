<template>
    <modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>
            This is a new modal header.
        </template>
        <template v-slot:body>
            This is a new sg modal body.
        </template>
        <template v-slot:footer>
            This is a new modal footer.
        </template>
    </modal>
</template>

<script>
import Modal from '@/components/UI/modal.vue';
export default {
    name: 'signup-modal',
    data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
    components: {Modal}
};
</script>