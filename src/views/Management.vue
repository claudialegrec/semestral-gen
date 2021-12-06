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
                <tr>
                  <td>Erick</td>
                  <td>Silva</td>
                  <td>nintendo@email.com</td>
                  <td>614 154 9058</td>
                  <td>
                    <a @click="deleteUser()" class="btn btn-danger" style="background-color:#E83F3F; margin-left:20px">
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
                <tr>
                  <td>Luigi's Mansion</td>
                  <td>614 123 4567</td>
                  <td>luigis@correo.com</td>
                  <td>Chihuahua</td>
                  <td>Luigis Street</td>
                  <td>
                    <a @click="deleteCompany()" class="btn btn-danger" style="background-color:#E83F3F; margin-left:20px">
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

export default {
  components: {
    Sidebar
  },
  setup() {
    return { sidebarWidth }
  },
  data() {
    return {
      deleteUser() {
        console.log('%c⧭', 'color: #ff0000', "Se eliminó un usuario")

      // var json = {
        
      // }

      // auth.API_POST('users/deleteUser', json, {'Content-Type': 'application/json'})

      },
      deleteCompany() {
        console.log('%c⧭', 'color: #ff0000', "Se eliminó una compañía")

      //   var json = {
        
      // }

      // auth.API_POST('companies/deleteCompany', json, {'Content-Type': 'application/json'})

      }
    }
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