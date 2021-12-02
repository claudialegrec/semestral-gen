// import axios from 'axios';

const state = {
  appointmentsUser: [
    {
      id: "",
      companyName: "",
      package: "",
      price: "",
      date: "",
      hour: ""
    },
  ],
  appointmentsCompany: [
    {
      id: "",
      clientName: "",
      package: "",
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