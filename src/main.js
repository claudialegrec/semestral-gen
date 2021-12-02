import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from '@/store'
import { createStore } from 'vuex'

import Appointment from '@/store/modules/Appointment.store';
import Company from '@/store/modules/Company.store';
import Pack from '@/store/modules/Pack.store';
import Users from '@/store/modules/Users.store';

const store = createStore({
//   state () {
//     return {
//       count: 0
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
    modules:{
      modules: {
        Appointment: Appointment,
        Company: Company,
        Pack: Pack,
        Users: Users
      }
    }
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@fortawesome/fontawesome-free/js/all'

const app = createApp(App).use(router).mount('#app')

app.use(store)