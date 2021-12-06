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
  },
  companiesList:[],
  // companyId:""
};

const getters = {
  getCompanyInfo: state => {
    return state.company
  },
  getCompaniesList: state => {
    return state.companiesList
  }
};

const actions = {
  async fetchCompanyInfo({commit}, json){

    console.log('%c⧭', 'color: #7f2200', json, "json company");
    await auth.API_POST('/companies/CompanyInfo', json, {'Content-Type': 'application/json'})
    .then((response) => {
      console.log('%c⧭', 'color: #9900ff', response);
      commit('setCompaniesList', response.data.data);
    })
  },
  async fetchCompaniesList({commit}){
    await auth.API_GET('/companies/companiesInfoList', {'Content-Type': 'application/json'})
    .then((response) => {
      console.log('%c⧭', 'color: #ff00f2', response);
      commit('setCompaniesList', response.data.data);
    })
  },
  async fetchCompanyUser({commit}, loginInfo){
    console.log('%c⧭', 'color: #7f2200', loginInfo, "loginInfo company");
    auth.API_POST('/companies/Login', loginInfo, {'Content-Type': 'application/json'})
    .then((response) => {
      console.log(response, "login info");
      commit('setCompanyUser', response.data.data);
    })
  },

  async createCompany({commit}, signUpInfo){
    auth.API_POST('companies/SignUp', signUpInfo, {'Content-Type': 'application/json'})
    .then((response) => {
      commit('setCompanyUser', response.data.data);
    })
  },

  async updateCompany({commit}, newCompany){
    auth.API_POST('companies/updateInfo', newCompany, {'Content-Type': 'application/json'})
    .then((response) => {
      commit('updUser', response.data.data);
    })
  }

};

const mutations = {
  setCompanyUser:(state, company) => state.company = company,
  setCompaniesList:(state, companies) => state.companiesList = companies,
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