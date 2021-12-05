<template>
  <div style="background-color:#111317; padding:30px; height:130vh">
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
            Editar
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
                <p style="color:#B5B5B5">Chihuahua</p>

                <!-- Estado -->
                <p style="margin-bottom:0px">State:</p>
                <p style="color:#B5B5B5">Chihuahua</p>

                <!-- Direccion -->
                <p style="margin-bottom:0px">Address:</p>
                <p style="color:#B5B5B5">{{ response.address }}</p>

                <!-- Teléfono -->
                <p style="margin-bottom:0px">Phone:</p>
                <p style="color:#B5B5B5">{{ response.phone }}</p>

                <!-- Correo -->
                <p style="margin-bottom:0px">Email:</p>
                <p style="color:#B5B5B5">{{ response.email }}</p>
              </div>

              <div class="col" style="margin-left:120px">
                <h5 style="margin-bottom:20px">Packages list</h5>

                <!-- Paquetes -->
                <p style="margin-bottom:0px">Package 1:</p>
                <p style="color:#B5B5B5">Dinner, music, services and decoration.</p>
                <p style="color:#B5B5B5; margin-top:-15px">$500,000 MXN</p>

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
                  <input v-model="desciption" type="text" class="form-control-sm">
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

                <!-- Teléfono -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Email:</p>
                  <input v-model="email" type="text" class="form-control-sm">
                </div>
              </div>

              <!-- Componente de agregar paquete -->
              <addPackage />

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
</template>

<script>
import {mapGetters} from "vuex"

import addPackage from '../components/addPackage.vue'
import auth from '../logic/auth' 

export default {
  components:{
    addPackage
  },
  data() {
    return {
      // Variable de edición
      edit: 0,

      // Modelos de inputs
      companyName: "",
      description:"",
      capacity: "",
      image: "",
      city: "",
      state: "",
      address: "",
      phone: "",
      email: "",
      packageTitle: "",
      packageDescription: "",
      packagePrice: "",

      response: ""

    }
  },
  methods: {
    updCompanyInfo() {
      var json = {
        companyId: "",
        name: this.companyName,
        description: this.description,
        email: "",
        password: "",
        phone: this.phone,
        city: this.city,
        state: this.state,
        address: this.address,
        capacity: this.capacity,
        // packageTitle: this.packageTitle,
        // packageDescription: this.packageDescription,
        // packagePrice: this.packagePrice,
      }

      auth.API_POST('/companies/updateInfo', json, {'Content-Type': 'application/json'})
      .then((response) => {
        console.log('%c⧭', 'color: #ff0000', response)
        this.edit = 0;
      })
    },
  },
  computed: {
    ...mapGetters(['Company/getCompanyInfo'])
  },
  mounted() {
    console.log('%c⧭', 'color: #00e600', this['Company/getCompanyInfo'])

    this.response = this['Company/getCompanyInfo']
    console.log('%c⧭', 'color: #aa00ff', this.response)
  }
}
</script>