<template>
    <div class="Header__wrapper">
        <div class="Header">
            <div class="Header__left">
                <img :src="currentLogo" alt="games store logo">
            </div>
            <div class="Header__right">
                <button class="btn btn__secondary btn__m">Log In</button>
                <button class="btn btn__main btn__m">Sign Up</button>
            </div>
        </div>
        <div class="Header__fix"/>
    </div>
</template>

<script>

export default {
    data(){
        return{
            currentLogo: null
        }
    },
  components: {},
  mounted(){
      this.currentLogo = this.RandomIMG();
  },
  methods:{
        RandomIMG(){
            let imgs = [
                this.$img['HeaderLogo1'],
                this.$img['HeaderLogo2'],
                this.$img['HeaderLogo3'],
                this.$img['HeaderLogo4'],
                this.$img['HeaderLogo5'],
                this.$img['HeaderLogo6']
            ]; //   Добавьте свои картинки через запятую
            let i = Math.floor(Math.random() * imgs.length);
           
            return imgs[i]
        },
    }
}
</script>