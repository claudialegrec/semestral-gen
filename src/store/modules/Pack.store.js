// import axios from 'axios'

const state = {
  packages: []
};

const getters = {
  getPackageInfo: state => {
    return state.packages
  }
};

const actions = {

};

const mutations = {
  setPackages:(state, packages) => state.packages = packages,
  updPackage: (state, updatedPackage) => {
    if(state.package.id === updatedPackage.id){
      state.package = updatedPackage;
    }
  },
  deletePackages: (state, packages) => {
    if(state.packages.id === packages.id){
      state.packages = {
        id: "",
        title: "",
        description: "",
        price: ""
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