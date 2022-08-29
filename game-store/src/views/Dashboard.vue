<template>
  <div class="Dashboard">
    <div class="Dashboard__navPanel">
        <label>navigation panel</label>
    </div>
    <div class="Dashboard__MainSection">
        <div 
        class="Dashboard__ItemsWrapper">
            <TransitionGroup>
                <div class="Dashboard__Item" v-for="item in searchHandler" :key="item.id" @search="searchItem()">
                    <div class="Dashboard__ItemImg" :style="'background-image: url(' + item.image +');'"></div>
                    <div class="Dashboard__ItemFlex">
                        <label>{{item.title}}</label>
                        <div>{{item.rating}}</div>
                    </div>
                    <div class="Dashboard__ItemGenres">
                        <span v-for="genre in item.genre" :key="genre">{{genre}}</span>
                    </div>
                    <span>$ {{item.price}}</span>
                </div>
            </TransitionGroup>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                id: 1, 
                title: 'Death Stranding', 
                body: 'The legendary developer Hideo Kojima releases a new iconic game for the genre.'
                + 'Sam Bridges must dare to overcome the world transformed by the loop of death.', 
                genre: ["Action", 'rpg', 'ololo'],
                image: this.$img['DeathStranding'], 
                players: "1",
                rating: 5,
                price: 30
                },
                {
                id: 2, 
                title: 'Metro Exodus', 
                body: 'Set in the post-apocalyptic wasteland of the former Russian Federation and Republic of Kazakhstan'
                + 'the player must cope with the new hazards and engage in combat against mutated'
                + 'creatures as well as hostile humans.', 
                genre: ["Action", 'rpg', 'ololo'], 
                image: this.$img['Metro'], 
                players: "1",
                rating: 3,
                price: 45
                },
                {
                id: 3, 
                title: `Assassin's Creed Odyssey`, 
                body: 'It tells a mythological history of the Peloponnesian War between Athens'
                + 'and Sparta from 431 to 422 BC. Players control a Spartan mercenary,'
                + 'who fights on both sides of the conflict, as they attempt to find their'
                + 'family and eliminate the mysterious Cult of Kosmos.', 
                genre: ["Action", 'rpg', 'ololo'], 
                image: this.$img['Odyssey'], 
                players: "1",
                rating: 5,
                price: 40
                },
                {
                id: 4, 
                title: 'Stalker', 
                body: 'STALKER 2 is set in a fictional version of the Chernobyl Exclusion Zone'
                + 'in which the power plant mysteriously exploded again in 2006, causing strange'
                + 'supernatural events that defy all scientific reasoning and spawning horrifying'
                + 'mutated beasts that began to roam.', 
                genre: ["Action", 'rpg', 'ololo'], 
                image: this.$img['Stalker'], 
                players: "2",
                rating: 4,
                price: 15
                },
                {
                id: 5, 
                title: 'The Witcher 3: Wild Hunt', 
                body: 'The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective.'
                + 'Players control Geralt of Rivia, a monster slayer known as a Witcher. Geralt walks, runs,'
                + 'rolls and dodges, and (for the first time in the series) jumps, climbs and swims.', 
                genre: ["Action", 'rpg', 'ololo'], 
                image: this.$img['Witcher'], 
                players: "2-4",
                rating: 1,
                price: 5
                },
            ],
        };
    },
    methods: {
    },
    computed: {
        searchHandler(){
            return this.items.filter(e =>{
                return e.title.toLowerCase().includes(this.$store.getters.searchGame.toLowerCase()); /* || */
            })
        },
    },
};
</script>

