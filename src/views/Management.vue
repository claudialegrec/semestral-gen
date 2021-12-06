<template>
  <div :style="{ 'margin-left': sidebarWidth }">
    <Sidebar/>
    <div style="background-color:#111317; padding:30px; height:100%">
      <div style="background-color:#111317; height:180vh">
        <div class="card text-white" style="background-color:#181A1E; text-align:left;  border-radius:10px">

          <!-- Header -->
          <div class="row" style="padding:30px;">
            <h1>Users management</h1>
            <h5 class="text-secondary" style="margin-left:20px; margin-top:-9px">Delete some problematic users...</h5>
          </div>
      
          <div class="row" style="padding:30px; margin-top:-30px">

            <h5>Users accounts</h5>

            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col"></th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, key) in usersList" :key="key">
                  <td>{{ item.name }}</td>
                  <td>{{ item.lastName }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.phone }}</td>
                  <td>
                    <a @click="deleteUser(item._id)" class="btn btn-danger" style="background-color:#E83F3F; margin-left:20px">
                      <i class="fas fa-trash-alt" style="margin-right:5px" />
                      Delete User
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <h5>Companies accounts</h5>

            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Company Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">City</th>
                  <th scope="col">Address</th>
                  <th scope="col"></th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, key) in companiesList" :key="key">
                  <td>{{ item.name }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.city }}</td>
                  <td>{{ item.address }}</td>
                  <td>
                    <a @click="deleteCompany(item._id)" class="btn btn-danger" style="background-color:#E83F3F; margin-left:20px">
                      <i class="fas fa-trash-alt" style="margin-right:5px" />
                      Delete User
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar'
import { sidebarWidth } from '@/components/sidebar/state'
import auth from '../logic/auth'
import {mapGetters, mapActions} from "vuex"

export default {
  components: {
    Sidebar
  },
  setup() {
    return { sidebarWidth }
  },
  data() {
    return {
      companiesList: [],
      usersList: [],
    }
  },
  methods: {
    deleteUser(id) {

      var json = {
        userId: id,
        adminId: this['Users/getUserInfo']._id
      }
      console.log('%c⧭', 'color: #00bf00', json)

      auth.API_POST('/users/deleteUser', json, {'Content-Type': 'application/json'})
      .then((response) => {
          console.log('%c⧭', 'color: #0088cc', response)
          this.loadInfoUsers()
      })

      },
      deleteCompany(id) {

        var json = {
          companyId: id,
          adminId:this['Users/getUserInfo']._id
        }

        auth.API_POST('/companies/deleteCompany', json, {'Content-Type': 'application/json'})
        .then((response) => {
          console.log('%c⧭', 'color: #733d00', response)
          this.loadInfoCompanies()
      })

      },
      loadInfoUsers() {

        auth.API_GET('/users/usersList', {'Content-Type': 'application/json'})
        .then((response) => {
          console.log('%c⧭', 'color: #00a3cc', response)
          this.usersList = response.data.data
        })

      },
      loadInfoCompanies() {

        auth.API_GET('/companies/companiesInfoList', {'Content-Type': 'application/json'})
        .then((response) => {
          console.log('%c⧭', 'color: #00e600', response)
          this.companiesList = response.data.data
        })

      },
      ...mapActions(['Users/LoadUserInfo'])
  },
  mounted() {
    this.loadInfoUsers()
    this.loadInfoCompanies()
  },
  computed: {
    ...mapGetters(['Users/getUserInfo'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

th, td {
  text-align: center;
}

h5 {
  margin-bottom: 20px;
}
</style>