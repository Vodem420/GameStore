<template>
  <div>
    <post-form 
      @create="createPost"
    />
    <post-list 
      :posts="posts"
      @delete="deletePost"
    />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
export default{
  components:{ PostList, PostForm },
  data() {
    return {
      posts: [
        {id: 1, title: 'post 1', body: 'post 1 body'},
        {id: 2, title: 'post 2', body: 'post 2 body'},
        {id: 3, title: 'post 3', body: 'post 3 body'}
      ],
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post)
    },
    deletePost(post){
      console.log(post);
      this.posts = this.posts.filter(e => e.id !== post.id)
    }
  },
}
</script>

