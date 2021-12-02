// import axios from 'axios'

const state = {
  user: {
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
};

const getters = {
    // getUserInfo: state => {
    //     return state.user
    // }
};

const actions = {
//   fetchUser()
};

const mutations = {
    // setUser:(state, user) => state.user = user,
    // updUser: (state, updatedUser) => {
    //     if(state.user.id === updatedUser.id){
    //         state.user = updatedUser;
    //     }
    // },
    // deleteUser: (state, user) => {
    //     if(state.user.id === user.id){
    //         state.user={
    //             id:"",
    //             name: "",
    //             lastname: "",
    //             phone: "",
    //             email: "",
    //             password: "",
    //             city:"",
    //             state:"",
    //             address:""
    //         }
    //     }
    // }
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