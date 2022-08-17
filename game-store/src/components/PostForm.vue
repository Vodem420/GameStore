<template>
    <form @submit.prevent>
      <h3>create post</h3>
      <input 
        type="text"
        placeholder="title"
        v-model="post.title"
      >
      <input 
        type="text"
        placeholder="body"
        v-model="post.body"
      >
      <button-component @click="createPost()">Add</button-component>
    </form>
</template>

<script>
import ButtonComponent from '@/components/UI/ButtomComp'

export default{
  components: { ButtonComponent },
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost(){
      if(!this.post.title || !this.post.body){
        return false
      }
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  },
}
</script>

