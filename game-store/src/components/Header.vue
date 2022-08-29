<template>
    <div class="Header__wrapper">
        <div class="Header">
            <div class="Header__left">
                <transition>
                    <img :src="currentLogo" @click="$router.push('/')" alt="games store logo" />
                </transition>
                <form class="searchInput__wrapper">
                    <input-comp 
                        id="search-box"
                        placeholder="Search..."
                        class="searchInput" 
                        :value="search"
                        @input="updateSearch"
                    />
                    <label for="search-box"><i class="material-icons">search</i></label>
                    <input type="submit" id="search-submit" />
                </form>
            </div>
            <div class="Header__right">
                <router-link class="btn btn__secondary" to="/dashboard">Log In</router-link>
                <router-link class="btn btn__main" to="/dashboard">Sign Up</router-link>
            </div>
        </div>
        <div class="Header__fix"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return{
            currentLogo: null,
        }
    },
    mounted(){
        this.currentLogo = this.RandomIMG();
        setInterval(() => {
        this.currentLogo = this.RandomIMG()
        }, 5000);
    },
    computed: {
        ...mapState({
            search: state => state.searchQuery
        })
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
            ];
            let i = Math.floor(Math.random() * imgs.length);
            return imgs[i]
        },
        updateSearch(e) {
            this.$store.commit('updateSearch', e.target.value)
        },
    }   
}
</script>