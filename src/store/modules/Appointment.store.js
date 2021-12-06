// import axios from 'axios';

const state = {
  appointmentsUser: [
    {
      id: "",
      companyName: "",
      package: "",
      price: "",
      date: "",
      time: ""
    },
  ],
  appointmentsCompany: [
    {
      id: "",
      clientName: "",
      package: "",
      price: "",
      date: "",
      time: ""
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