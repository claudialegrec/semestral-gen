// import Vuex from 'vuex';
// import axios from 'axios';

const state = {
  appointmentsUser: [
    {
      companyName: "",
      pack: "",
      price: "",
      date: "",
      hour: ""
    },
  ],
  appointmentsCompany: [
    {
      clientName: "",
      pack: "",
      price: "",
      date: "",
      hour: ""
    },
  ]
};

const getters = {

};

const actions = {

};

const mutations = {

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