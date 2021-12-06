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
            <div class="col-sm-4 mb-3">
              <p><b> User: </b></p>
              <p>Rosa Melano</p>
            </div>

            <div class="col">
              <div class="d-flex justify-content-end">
                <a href="#" class="btn btn-danger" style="background-color:#E83F3F; margin-left:20px">
                  <i class="fas fa-trash-alt" style="margin-right:5px" />
                  Delete User
                </a>
              </div>
            </div>

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
</style>