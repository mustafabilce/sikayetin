export const state = () => ({
    isAuthenticated: null,
    brands: [],
    categories: [],
    allComplaints: [],
    userInfo: {},
})

export const mutations = {
    auth(state) {
        state.isAuthenticated = true;
    },
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo
    },
    notAuth(state) {
        state.isAuthenticated = false;
    },
    setBrands(state, brands){
        state.brands = brands
    },
    setCategories(state, categories){
        state.categories = categories
    },
    setAllComplaints(state, allComplaints){
        state.allComplaints = allComplaints
    }
}

export const actions = {
    updateBrands({commit}, brands){
        commit('setBrands', brands);
    },
    updateUserInfo({commit}, userInfo){
        commit('setUserInfo', userInfo);
    },
    updateCategories({commit}, categories){
        commit('setCategories', categories);
    },
    updateAllComplaints({commit}, allComplaints){
        commit('setAllComplaints', allComplaints);
    },
}