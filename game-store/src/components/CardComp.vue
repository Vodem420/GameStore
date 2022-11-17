<template>
  <div class="Card">
    <div class="Card__ItemImg" :style="'background-image: url('+ item.background_image +');'"></div>
    <div class="Card__info">
      <div class="Card__head">
        <div class="Card__plaforms">
          <img :src="$img[platformImg]" v-for="platformImg in platformsSlugs" :key="platformImg">
        </div>
        <div class="Card__Raiting" :class="raitingColor">{{roundedRaiting}}</div>
      </div>
      <div class="Card__Title">
          <label>{{item.name}}</label>
      </div>
      <div class="Card__ItemGenres">
          <span v-for="genre in item.genres" :key="genre.id">{{genre.name}}</span>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
      name: 'card-comp',
      props: {
        item: {
          type: Object,
          required: true
        }
      },
      data(){
        return{
        }
      },
      methods: {
      },
      mounted(){
      },
      computed: {
        roundedRaiting(){
          return Math.round(this.item.metacritic)
        },
        raitingColor(){
          if(this.roundedRaiting >= 75){
            return  'green'
          } else if(this.roundedRaiting >= 50 && this.roundedRaiting < 75){
            return 'orange'
          } else {
            return 'red'
          }
        },
        platformsSlugs(){
          let platforms = this.item.parent_platforms;
          // console.log(this.item, 'this.item');
          return platforms.map(i =>{
            // console.log(i.platform.slug, 'Slug');
            return i.platform.slug
          })
        }
      }
  };
  </script>
  
  