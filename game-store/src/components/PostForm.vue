<template>
    <form @submit.prevent>
      <h3>create post</h3>
      <input-comp 
        type="text"
        placeholder="title"
        v-model:value="post.title"
      />
      <input-comp
        type="text"
        placeholder="body"
        v-model:value="post.body"
      />
      <button-comp @click="createPost()">Add</button-comp>
    </form>
</template>

<script>

export default{
    data() {
        return {
            post: {
                title: "",
                body: ""
            }
        };
    },
    methods: {
        createPost() {
            if (!this.post.title || !this.post.body) {
                return false;
            }
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: ""
            };
        }
    }
}
</script>

