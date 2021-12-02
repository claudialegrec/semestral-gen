import { createStore } from 'vuex'



// Modules import
import Appointment from '@/store/modules/Appointment.store';
import Company from '@/store/modules/Company.store';
import Pack from '@/store/modules/Pack.store';
import Users from '@/store/modules/Users.store';

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  // mutations: {
  //   increment (state) {
  //     state.count++
  //   }
  // },
  modules:{
    Appointment,
    Company,
    Pack,
    Users
  }
})

export default store