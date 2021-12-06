// import axios from 'axios'

const state = {
  pack: {}
};

const getters = {
  getPackageInfo: state => {
    return state.pack
  }
};

const actions = {

};

const mutations = {
  setPackage:(state, pack) => {

    console.log('%c⧭', 'color: #00ff88', pack);
    state.pack = pack
  },
  updPackage: (state, updatedPackage) => {
    if(state.pack.id === updatedPackage.id){
      state.pack = updatedPackage;
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