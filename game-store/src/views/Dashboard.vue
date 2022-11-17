<template>
  <div class="Dashboard">
    <div class="Dashboard__navPanel">
        <Navigation-panel/>
    </div>
    <div class="Dashboard__MainSection">
        <div class="Dashboard__ItemsWrapper">
            <CardComp
            v-for="item in items" 
            :key="item.id"
            :item="item"/>
        </div>
    </div>
  </div>
</template>

<script>
import gameApi from '../services/gameApi'
import CardComp from '@/components/CardComp'
import NavigationPanel from '@/components/NavigationPanel'
export default {
    data() {
        return {
            items: [],
        };
    },
    mounted() {
        this.updateSearchQuery();
    },
    methods: {
        updateSearchQuery() {
            let params = (new URL(document.location)).searchParams;
            let q = params.get("q");
            if (!this.$store.getters.searchGame && q) {
                this.$store.commit("updateSearch", q);
            }
        },
        async fetchGames() {
            try {
                this.items = await gameApi.getGameOptions({ search: this.searchGame });
            }
            catch (e) {
                alert("games not loaded");
            }
        },
    },
    computed: {
        searchGame() {
            return this.$store.getters.searchGame
        }
    },
    watch: {
        searchGame: {
            handler(){
                this.fetchGames()
            },
            immediate: true
        },
    },
    components: { CardComp, NavigationPanel }
};
</script>

