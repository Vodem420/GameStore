export const searchModule = {
    state: () => ({
        searchQuery: '',
    }),
    getters: {
    searchGame(state){
        return state.searchQuery
    }
    },
    mutations: {
    updateSearch(state, search){
        state.searchQuery = search
    }
    },
    actions: {

    },
}