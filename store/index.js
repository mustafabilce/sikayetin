export const state = () => ({
    isAuthenticated: null,
    brands: [],
    categories: [],
    allComplaints: [],
    userInfo: {},
    popularComplaints: [],
    popularCategories: [],
    popularBrands: [],
    popularComments: [],
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
    },
    setPopularComplaints(state, popularComplaints){
        state.popularComplaints = popularComplaints
    },
    setPopularCategories(state, popularCategories){
        state.popularCategories = popularCategories
    },
    setPopularBrands(state, popularBrands){
        state.popularBrands = popularBrands
    },
    setPopularComments(state, popularComments){
        state.popularComments = popularComments
    },
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
    updatePopularComplaints({commit}, popularComplaints){
        commit('setPopularComplaints', popularComplaints);
    },
    updatePopularCategories({commit}, popularCategories){
        commit('setPopularCategories', popularCategories);
    },
    updatePopularBrands({commit}, popularBrands){
        commit('setPopularBrands', popularBrands);
    },
    updatePopularComments({commit}, popularComments){
        commit('setPopularComments', popularComments);
    },
}