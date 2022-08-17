<template>
  <div>
    <div>
        <div class="post__title"><b> {{post.title}} </b></div>
        <div class="post__body"><b> {{post.body}} </b></div>
    </div>
    <button-component>X</button-component>
  </div>
</template>

<script>
import ButtonComponent from '@/components/UI/ButtomComp'

export default{
  components: { ButtonComponent },
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

