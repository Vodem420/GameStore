import { createStore } from 'vuex'
import { searchModule } from '@/store/searchModule'
import { gameGenreModule } from '@/store/gameGenreModule'

export default createStore({
  modules: {
    search: searchModule,
    gameGenre: gameGenreModule,
  }
})
