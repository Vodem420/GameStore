<template>
    <div class="Header__wrapper">
        <div class="Header">
            <div class="Header__left">
                <transition 
                    @after-leave="switchHeaderImage"
                    name="fade">
                    <img v-show="show" :src="currentLogo" @click="$router.push('/')" alt="games store logo" />
                </transition>
                <div class="searchInput__wrapper">
                    <input-comp 
                        id="search-box"
                        placeholder="Search..."
                        class="searchInput" 
                        :value="search"
                        v-on:keyup.enter="updateSearch"
                    />
                    <label for="search-box" @click="submit()"><i class="material-icons">search</i></label>
                    <input type="submit" id="search-submit" />
                </div>
            </div>
            <div class="Header__right">
                <button class="btn btn__secondary" @click="showModal()">Log In</button>
                <button class="btn btn__main" @click="showModal()">Sign Up</button>
            </div>
        </div>
        <div class="Header__fix"></div>
        <login-modal v-show="isModalVisible" @close="closeModal"></login-modal>
        <sign-up-modal v-show="isModalVisible" @close="closeModal"></sign-up-modal>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import LoginModal from './LoginModal.vue';
import SignUpModal from './SignUpModal.vue';

export default {
  components: { SignUpModal, LoginModal },
    data(){
        return{
            currentLogo: null,
            show: true,
            isModalVisible: false,
        }
    },
    mounted(){
        this.currentLogo = this.RandomIMG();
        this.show = !this.show;
        // setInterval(() => {
        // this.currentLogo = this.RandomIMG();
        // this.show = !this.show;
        // }, 3000);
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
                this.$img['HeaderLogo6'],
                this.$img['HeaderLogo7'],
                this.$img['HeaderLogo8'],
            ];
            let i = Math.floor(Math.random() * imgs.length);
            if(this.currentLogo == imgs[i]){
                return this.RandomIMG();
            }
            return imgs[i]
        },
        switchHeaderImage(){
            this.currentLogo = this.RandomIMG();
            this.show = !this.show;
            setTimeout(() =>{
                this.show = !this.show;
            }, 2000);
        },
        updateSearch(e) {
            this.$store.commit('updateSearch', e.target.value)
        },
        submit(){
            let searchData = this.$store.getters.searchGame
            if(searchData.length){
                this.$router.push("/dashboard?q="+searchData);
            }
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
    }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>