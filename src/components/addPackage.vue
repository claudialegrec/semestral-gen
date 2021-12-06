<template>
  <div class="col">
    <h5 style="margin-bottom:20px">Packages list</h5>
    <!-- Nombre del paquete -->
    <div style="margin-bottom:10px">
      <input v-model="packageInfo.packageTitle" type="text" class="form-control-sm" placeholder="Package 1">
    </div>

    <!-- Descripción del paquete -->
    <div style="margin-bottom:10px">
      <input v-model="packageInfo.packageDescription" type="text" class="form-control-sm" placeholder="Dinner, music, services and decoration.">
    </div>

    <!-- Precio del paquete -->
    <div style="margin-bottom:10px">
      <input v-model="packageInfo.packagePrice" type="text" class="form-control-sm" placeholder="$500,000 MXN">
    </div>

    

    <div class="row">
      <div class="d-inline-flex p-2 justify-content-end">
        <!-- Botón de agregar paquete -->
        <button @click="updatePackage()" class="btn btn-primary" style="margin-right:20px; background-color:#3F5AE8">
          Actualizar 
        </button>

        <!-- Botón de eliminar paquete -->
        <button @click="deletePackage()" class="btn btn-danger" style="background-color:#E83F3F">
          Eliminar
        </button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import auth from '../logic/auth' 

export default{
  name: 'addPackage',
  props:{
    id:String,
    packageTitle: String,
    packageDescription: String,
    packagePrice: String,
    companyId:String
  },
  data() {
    return {
      // Modelos de paquetes'
      packageInfo:{
        id:"",
        name: "",
        description: "",
        cost: "",
        companyId:""
      }
    }
  },
  methods: {
    updatePackage() {
            
      var json = {
        packId: this.packageTitle,
        name: this.packageTitle,
        description: this.packageDescription,
        cost: this.packagePrice,
        companyId: this.$props.companyId
      }

      auth.API_POST('/packs/updatePack', json, {'Content-Type': 'application/json'})
      .then((response) => {
        console.log('%c⧭', 'color: #0066ff', response);
      })

    },
    deletePackage() {
                  
      var json = {
        packageId: this.$props.id,
        companyId: this.$props.companyId
      }

      auth.API_POST('/packs/deletePack', json, {'Content-Type': 'application/json'})
      .then((response) => {
        console.log('%c⧭', 'color: #0066ff', response);
      })

    }
  },
  mounted() {
    this.packageInfo.name = this.$props.packageTitle
    this.packageInfo.description = this.$props.packageDescription
    this.packageInfo.cost = this.$props.packagePrice
    this.packageInfo.packId = this.$props.id
    this.packageInfo.companyId = this.$props.companyId
  },  
}
</script>
