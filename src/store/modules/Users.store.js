// import axios from 'axios'
import auth from '../../logic/auth' 

const state = {
  user: {
    mensaje: "hola"
    // id: "",
    // name: "",
    // lastname: "",
    // phone: "",
    // email: "",
    // password: "",
    // city: "",
    // state: "",
    // address: ""
  }
};

const getters = {
  getUserInfo: state => {
    return state.user
  }
};

const actions = {

  async LoadUserInfo({commit}, userId){
    await auth.API_POST('/users/Login', userId, {'Content-Type': 'application/json'})
    .then((response) => {
      console.log(response);
      commit('setUser', response.data.data);
    })
  },

  async fetchUser({commit}, loginInfo){
    await auth.API_POST('/users/Login', loginInfo, {'Content-Type': 'application/json'})
    .then((response) => {
      console.log(response);
      commit('setUser', response.data.data);
    })
  },

  async createUser({commit}, user){
    auth.API_POST('/users/SingUp', user, {'Content-Type': 'application/json'})
    .then((response) => {
      commit('setUser', response.data.data);
    })
  },

  async updateUser({commit}, newUser){
    auth.API_POST('/users/updateInfo', newUser, {'Content-Type': 'application/json'})
    .then((response) => {
      commit('updUser', response.data.data);
    })
  }
};

const mutations = {
  setUser:(state, user) => state.user = user,
  updUser: (state, updatedUser) => {
    if(state.user.id === updatedUser.id){
      state.user = updatedUser;
    }
  },
  deleteUser: (state, user) => {
    if(state.user.id === user.id){
      state.user={
        id:"",
        name: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        city:"",
        state:"",
        address:""
      }
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}