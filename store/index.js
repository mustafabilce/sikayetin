export const state = () => ({
    isAuthenticated: null,
    brands: [],
    categories: [],
    userID: '',
})

export const mutations = {
    auth(state) {
        state.isAuthenticated = true;
    },
    setUserID(state, userID) {
        state.userID = userID
    },
    notAuth(state) {
        state.isAuthenticated = false;
    },
    setBrands(state, brands){
        state.brands = brands
    },
    setCategories(state, categories){
        state.categories = categories
    }
}

export const actions = {
    updateBrands({commit}, brands){
        commit('setBrands', brands);
    },
    updateUserID({commit}, userID){
        commit('setUserID', userID);
    },
    updateCategories({commit}, categories){
        commit('setCategories', categories);
    },
}