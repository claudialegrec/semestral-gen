import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Modules import
import Appointment from '@/store/modules/Appointment.store';
import Company from '@/store/modules/Company.store';
import Pack from '@/store/modules/Pack.store';
import Users from '@/store/modules/Users.store';

export default new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    Appointment: Appointment,
    Company: Company,
    Pack: Pack,
    Users: Users
  }
})