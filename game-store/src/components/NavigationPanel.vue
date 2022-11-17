<template>
    <div class="navPanel">
        <h2>Genres</h2>
        <div class="navPanel__list">
            <div v-for="genre in genres" :key="genre.id" class="navPanel__list__item">
                <a href=""> <img :src="genre.image_background"/> <span>{{genre.name}}</span></a>
            </div>
        </div>
    </div>
</template>
    
<script>
import gameApi from '../services/gameApi'
    export default {
        name: 'nav-comp',
        props: {},
        data(){
          return{
            genres: []
          }
        },
        methods: {
            async fetchGamesGenres() {
            try {
                this.genres = await gameApi.getGenres();
                console.log(this.genres, 'GENRES !!!!!!');
            }
            catch (e) {
                alert("games not loaded");
            }
        }
        },
        mounted(){
            this.fetchGamesGenres();
        },
        computed: {
          
        }
    };
    </script>
    
    