<template>
<div :style="{ 'margin-left': sidebarWidth }">
  <Sidebar/>
  <div style="background-color:#111317; padding:30px; height:150vh">
    <div class="card text-white" style="background-color:#181A1E; text-align:left; border-radius:10px">

      <!-- Header -->
      <div class="d-flex" style="padding:30px;">
        <div class="col">
          <h1>Company profile</h1>
          <h5 class="text-secondary" style="margin-left:20px; margin-top:-9px">Watch and update your information</h5>
        </div>
        <div v-if="edit == 0" class="ml-auto p-2">
          <a @click="edit = 1" class="btn btn-primary" style="background-color:#3F5AE8">
            <i class="fas fa-pen" style="margin-right:5px" />
            Edit
          </a>
        </div>

        <div v-if="edit == 1" class="ml-auto p-2">
          <a @click="edit = 0" class="btn btn-danger" style="background-color:#E83F3F; margin-left:20px">
            <i class="fas fa-times" style="margin-right:5px" />
            Stop editing
          </a>
        </div>
      </div>
      
      <!-- Vista sin hacer edición -->
      <div v-if="edit == 0" class="row" style="padding:30px; margin-top:-30px">
        <div class="col">
          <div style="padding:10px">
            {{packageList}}
            <!-- Datos de usuario -->
            <div class="row">
              <div class="col-4">
                <!-- Nombre -->
                <p style="margin-bottom:0px">Company Name:</p>
                <p style="color:#B5B5B5">{{ response.name }}</p>

                <!-- Descripción -->
                <p style="margin-bottom:0px">Description:</p>
                <p style="color:#B5B5B5">{{ response.description }}</p>

                <!-- Aforo -->
                <p style="margin-bottom:0px">Capacity:</p>
                <p style="color:#B5B5B5">{{ response.capacity }}</p>

                <!-- Imagen -->
                <p style="margin-bottom:0px">Image:</p>
                <p style="color:#B5B5B5">celebrare.png</p>

                <!-- Ciudad -->
                <p style="margin-bottom:0px">City:</p>
                <p style="color:#B5B5B5">{{ response.city }}</p>

                <!-- Estado -->
                <p style="margin-bottom:0px">State:</p>
                <p style="color:#B5B5B5">{{ response.state }}</p>

                <!-- Direccion -->
                <p style="margin-bottom:0px">Address:</p>
                <p style="color:#B5B5B5">{{ response.address }}</p>

                <!-- Teléfono -->
                <p style="margin-bottom:0px">Phone:</p>
                <p style="color:#B5B5B5">{{ response.phone }}</p>

                <!-- Correo -->
                <p style="margin-bottom:0px">Email:</p>
                <p style="color:#B5B5B5">{{ response.email }}</p>

                <!-- Correo -->
                <p style="margin-bottom:0px">Category:</p>
                <p style="color:#B5B5B5">{{ response.category }}</p>
              </div>

              <div class="col" style="margin-left:120px">
                <h5 style="margin-bottom:20px">Packages list</h5>
                <div class="row" v-for="(pack, key) in packageList" :key="key">
                  <div class="col">

                    <!-- Paquetes -->
                    <p style="margin-bottom:0px">{{pack.name}}:</p>
                    <p style="color:#B5B5B5">{{pack.description}}</p>
                    <p style="color:#B5B5B5; margin-top:-15px">${{pack.cost}} MXN</p>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Vista para hacer edición -->
      <div v-if="edit == 1" class="row" style="padding:30px; margin-top:-30px">
        <div class="col">
          <div style="padding:10px">
            <!-- Datos de cita -->
            <div class="row">
              <div class="col">
                <!-- Nombre de la compañía -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Company Name:</p>
                  <input v-model="companyName" type="text" class="form-control-sm">
                </div>

                <!-- Descripción -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Description:</p>
                  <input v-model="description" type="text" class="form-control-sm">
                </div>

                <!-- Aforo -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Capacity:</p>
                  <input v-model="capacity" type="text" class="form-control-sm">
                </div>

                <!-- Imágen -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Image:</p>
                  <input v-model="image" type="text" class="form-control-sm">
                </div>

                <!-- Ciudad -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">City:</p>
                  <input v-model="city" type="text" class="form-control-sm">
                </div>

                <!-- Estado -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">State:</p>
                  <input v-model="state" type="text" class="form-control-sm">
                </div>

                <!-- Dirección -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Address:</p>
                  <input v-model="address" type="text" class="form-control-sm">
                </div>

                <!-- Teléfono -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Phone:</p>
                  <input v-model="phone" type="text" class="form-control-sm">
                </div>

                <!-- Email -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Email:</p>
                  <input v-model="email" type="text" class="form-control-sm">
                </div>

                <!-- Categoría -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Category:</p>
                  <select v-model="category" class="form-control" id="exampleFormControlSelect1">
                    <option>Wedding</option>
                    <option>Children's party</option>
                    <option>Prom</option>
                    <option>Baptism</option>
                    <option>Bachelorette party</option>
                  </select>
                </div>
              </div>
              <!-- Componente de agregar paquete -->

              <addPackage v-for="(pack, key) in packageList" :key="key" :packageTitle="pack.name" :packageDescription="pack.description" :packagePrice="psck.cost"/>

            </div>

            <!-- Botón de Guardar Cambios -->
            <div class="d-flex justify-content-end" style="margin-top:30px">
              <a @click="updCompanyInfo()" class="btn btn-primary" style="background-color:#3F5AE8">
                <i class="fas fa-save" style="margin-right:5px" />
                Save
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
import {mapGetters, mapMutations} from "vuex"

import addPackage from '../components/addPackage.vue'
import auth from '../logic/auth' 

export default {
  components:{
    Sidebar,
    addPackage
  },
  setup() {
    return { sidebarWidth }
  },
  data() {
    return {
      // Variable de edición
      edit: 0,

      // Modelos de inputs
      companyInfo:{
        // companiId: "",
        // companyName: "",
        // description:"",
        // capacity: "",
        // image: "",
        // city: "",
        // state: "",
        // address: "",
        // phone: "",
        // email: "",
        // category: "",
      },

      packageList:[],

      companiId: "",
      companyName: "",
      description:"",
      capacity: "",
      image: "",
      city: "",
      state: "",
      address: "",
      phone: "",
      email: "",
      category: "",

      begin: "",

      packageTitle: "",
      packageDescription: "",
      packagePrice: "",

      response: ""

    }
  },
  computed:{
    ...mapGetters(['Company/getCompanyInfo'])
  },
  methods: {
    ...mapMutations(['Company/updateCompany']),
    loadPackages(){
      let json = {companyId: this.companyId}
      auth.API_POST('/packs/packageList', json, {'Content-Type': 'application/json'}).then((response) => {

        console.log('%c⧭', 'color: #1d5673', response, "loadPackages")
        this.packageList = response.data.data
        console.log('%c⧭', 'color: #b30000', this.packageList, "packageList")
      })
    },
    infoInputs() {
      this.companyId = this.companyInfo._id
      this.companyName = this.companyInfo.name
      this.description = this.companyInfo.description
      this.capacity = this.companyInfo.capacity
      this.city = this.companyInfo.city
      this.state = this.companyInfo.state
      this.address = this.companyInfo.address
      this.phone = this.companyInfo.phone
      this.email = this.companyInfo.email
      this.category = this.companyInfo.category
    },
    updCompanyInfo() {
      var json = {
        companyId: this.companyId,
        name: this.companyName,
        description: this.description,
        email: this.email,
        password: this.response.password,
        phone: this.phone,
        city: this.city,
        state: this.state,
        capacity: this.capacity,
        address: this.address,
        rating: this.response.rating,
        category: this.category,
      }

      console.log('%c⧭', 'color: #0088cc', json)

      this['Company/updateCompany'](json).then(() => {
        this.edit = 0;
      })

      // auth.API_POST('companies/updateInfo', json, {'Content-Type': 'application/json'})
      // .then((response) => {
      //   this.getCompanyInfo()
      //   console.log('%c⧭', 'color: #ff0000', response)
      //   this.edit = 0;
      // })
    },
    getCompanyInfo() {

      this.companyInfo = this['Company/getCompanyInfo']
      console.log('%c⧭', 'color: #e5de73', this.companyInfo, "companyInfo")
      this.infoInputs()
      this.loadPackages()
      // var json = {
      //   companyId: this.companyId
      // }

      // auth.API_POST('companies/CompanyInfo', json, {'Content-Type': 'application/json'})
      // .then((response) => {
      //   console.log('%c⧭', 'color: #da8a66', response)
      //   this.companyId = response.data.data[0]._id
      //   this.companyName = response.data.data[0].name
      //   this.description = response.data.data[0].description
      //   this.capacity = response.data.data[0].capacity
      //   this.city = response.data.data[0].city
      //   this.state = response.data.data[0].state
      //   this.address = response.data.data[0].address
      //   this.phone = response.data.data[0].phone
      //   this.email = response.data.data[0].email
      //   this.category = response.data.data[0].category
      // })

    }
  },
  mounted() {
    this.getCompanyInfo()
    console.log('%c⧭', 'color: #00e600', this['Company/getCompanyInfo'], "company info")

    this.response = this['Company/getCompanyInfo']
    console.log('%c⧭', 'color: #aa00ff', this.response)

    

  },
  watch: {

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
</style>