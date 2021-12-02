// import axios from 'axios';
import auth from '../../logic/auth' 

const state = {
  company: {
    companyName: "",
    description: "",
    capacity: "",
    location: "",
    phone: "",
    city: "",
    state: "",
    address: "",
    password: ""
  }
};

const getters = {
  getCompanyInfo: state => {
    return state.company
  }
};

const actions = {
  async fetchCompanyUser({commit}, loginInfo){
    auth.API_POST('/companies/Login', loginInfo, {'Content-Type': 'application/json'})
    .then((response) => {
      console.log(response);
      commit('setCompanyUser', response.data.data);
    })
  },

  async createCompany({commit}, company){
    auth.API_POST('/companies/SingUp', company, {'Content-Type': 'application/json'})
    .then((response) => {
      commit('setCompanyUser', response.data.data);
    })
  },

};

const mutations = {
  setCompanyUser:(state, company) => state.company = company,
  updCompanyUser: (state, updatedCompany) => {
    if(state.company.id === updatedCompany.id){
      state.company = updatedCompany;
    }
  },
  deleteCompanyUser: (state, company) => {
    if(state.company.id === company.id){
      state.company = {
        id: "",
        companyName: "",
        description: "",
        capacity: "",
        location: "",
        phone: "",
        city: "",
        state: "",
        address: "",
        password: ""
      }
    }
  }
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