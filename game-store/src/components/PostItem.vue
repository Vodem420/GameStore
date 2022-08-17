<template>
  <div>
    <div>
        <div class="post__title"><b> {{post.title}} </b></div>
        <div class="post__body"><b> {{post.body}} </b></div>
    </div>
    <button-comp
      @click="$emit('delete', post)"
    >X</button-comp>
  </div>
</template>

<script>
export default{
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

