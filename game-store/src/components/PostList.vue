<template>
  <div>
    <post-item 
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import PostItem from '@/components/PostItem'

export default{
  components: { PostItem },
  props: {
    posts: {
      type: Array,
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

