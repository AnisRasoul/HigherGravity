import { createStore } from 'vuex';

const store = createStore({
  state: {
    selectedCardDetails: {
      image: '',
      description: '',
      price: ''
    },
  },
  mutations: {
    setSelectedCardDetails(state, payload) {
      state.selectedCardDetails = payload;
    },
  },
  actions: {
    selectCardDetails({ commit }, cardDetails) {
      commit('setSelectedCardDetails', cardDetails);
    },
  },
  getters: {
    selectedCardDetails: state => state.selectedCardDetails,
  },
});

export default store;
