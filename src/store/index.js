import { createStore } from 'vuex'



// Modules import
import Appointment from '@/store/modules/Appointment.store';
import Company from '@/store/modules/Company.store';
import Pack from '@/store/modules/Pack.store';
import Users from '@/store/modules/Users.store';

const store = createStore({
  state () {
    return {
      count: 0,
      companyId:"",
      packageId:"",
      userType:0
    }
  },
  mutations: {
    setCompanyDetails (state, id) {
      state.companyId = id
    },
    setPackageDetails (state, id) {
      state.packageId = id
    },
    setUserType (state, type) {
      state.userType = type
    }
  },
  modules:{
    Appointment,
    Company,
    Pack,
    Users
  }
})

export default store