<template>
    <transition name="modal-fade">
        <div class="modal__backdrop">
            <div class="modal"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
            >
                <header class="modal__header" id="modalTitle">
                    <slot name="header">
                        This is the default title!
                    </slot>
                    <button @click="close" aria-label="Close modal">x</button>
                </header>
    
                <section class="modal__body" id="modalDescription">
                    <slot name="body">
                        This is the default body!
                    </slot>
                </section>
    
                <footer class="modal__footer">
                    <slot name="footer">
                        This is the default footer!
                    </slot>
                    <button @click="close" aria-label="Close modal">Close Modal</button>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'modal-comp',
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>