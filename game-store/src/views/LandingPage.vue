<template>
  <div class="Landing">
    <div class="S1">
      <agile :options="sliderOptions">
        <div v-for="item in items" :key="item.id">
          <div class="slide">
            <div class="S1__wrapper">
              <p>{{item.title}}</p>
              <span class="S1__body">{{item.body}}</span>
              <div class="S1__genres">
                <label>Genres:</label> <span v-for="genre in item.genre" :key="genre" class="S1__genre">{{genre}}</span>
              </div>
              <div class="S1__platforms">
                <label>Platforms:</label> <i class="material-icons">{{item.platforms}}</i>
              </div>
              <div v-if="item.players > 1" class="S1__players"><i class="material-icons">group</i> {{item.players}}</div>
              <div v-else class="S1__players"><i class="material-icons">person</i>{{item.players}}</div>
              <div class="S1__background" :style="'background-image: url(' + item.image +');'"></div>
            </div>
          </div>
        </div>
      </agile>
    </div>
    <div class="posts">
      <post-form 
      @create="createPost"
    />
    <post-list 
      :posts="posts"
      @delete="deletePost"
    />
    </div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
export default{
  components:{ PostList, PostForm },
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
          players: "1"
        },
        {
          id: 2, 
          title: 'Metro Exodus', 
          body: 'Set in the post-apocalyptic wasteland of the former Russian Federation and Republic of Kazakhstan'
          + 'the player must cope with the new hazards and engage in combat against mutated'
          + 'creatures as well as hostile humans.', 
          genre: ["Action", 'rpg', 'ololo'], 
          image: this.$img['Metro'], 
          players: "1"
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
          players: "1"
        },
        {
          id: 4, 
          title: 'S.T.A.L.K.E.R. 2', 
          body: 'STALKER 2 is set in a fictional version of the Chernobyl Exclusion Zone'
          + 'in which the power plant mysteriously exploded again in 2006, causing strange'
          + 'supernatural events that defy all scientific reasoning and spawning horrifying'
          + 'mutated beasts that began to roam.', 
          genre: ["Action", 'rpg', 'ololo'], 
          image: this.$img['Stalker'], 
          players: "2"
        },
        {
          id: 5, 
          title: 'The Witcher 3: Wild Hunt', 
          body: 'The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective.'
          + 'Players control Geralt of Rivia, a monster slayer known as a Witcher. Geralt walks, runs,'
          + 'rolls and dodges, and (for the first time in the series) jumps, climbs and swims.', 
          genre: ["Action", 'rpg', 'ololo'], 
          image: this.$img['Witcher'], 
          players: "2-4"
        },
      ],
      posts: [
        {id: 1, title: 'post 1', body: 'post 1 body'},
        {id: 2, title: 'post 2', body: 'post 2 body'},
        {id: 3, title: 'post 3', body: 'post 3 body'}
      ],
      sliderOptions: {
          autoplay: false,
          changeDelay: 7000,
          autoplaySpeed: 15000,
          fade: true,
          infinite: true,
          pauseOnDotsHover: true,
          pauseOnHover :true,
          speed: 400,
      }
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

