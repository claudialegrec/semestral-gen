// import Vuex from 'vuex';
// import axios from 'axios';

const state = {
  company: {
    companyName: "",
    description: "",
    image: "",
    location: "",
    phone: ""
  }
};

const getters = {
  // getListas: (state) => state.listas
};

const actions = {
  // addServiceList({ commit }, json) {
  //   commit('addService', json)
  // }
};

const mutations = {
  // addService:(state, service) => state.servicio = service
};

export default {
    namespaced: true,
    state : {
        ...state
    },
    getters: {
        ...getters
    },
    actions: {
        ...actions
    },
    mutations: {
        ...mutations
    }
}