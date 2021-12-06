<template>
  <div class="col">
    <h5 style="margin-bottom:20px">Packages list</h5>
    <!-- Nombre del paquete -->
    <div style="margin-bottom:10px">
      <input v-model="packageTitle" type="text" class="form-control-sm" placeholder="Package 1">
    </div>

    <!-- Descripción del paquete -->
    <div style="margin-bottom:10px">
      <input v-model="packageDescription" type="text" class="form-control-sm" placeholder="Dinner, music, services and decoration.">
    </div>

    <!-- Precio del paquete -->
    <div style="margin-bottom:10px">
      <input v-model="packagePrice" type="text" class="form-control-sm" placeholder="$500,000 MXN">
    </div>

    <hr>

    <div class="row">
      <div class="d-inline-flex p-2 justify-content-end">
        <!-- Botón de agregar paquete -->
        <button @click="addNewPackage()" class="btn btn-primary" style="margin-right:20px; background-color:#3F5AE8">
          <i class="fas fa-plus" />
        </button>

        <!-- Botón de eliminar paquete -->
        <button @click="deletePackage()" class="btn btn-danger" style="background-color:#E83F3F">
          <i class="fas fa-minus" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../logic/auth' 

export default{
  name: 'addPackage',
  data() {
    return {
      // Modelos de paquetes
      packageTitle: "",
      packageDescription: "",
      packagePrice: "",
    }
  },
  methods: {
    addNewPackage() {
            
      var json = {
        packageTitle: this.packageTitle,
        packageDescription: this.packageDescription,
        packagePrice: this.packagePrice
      }

      auth.API_POST('/packs/newPackage', json, {'Content-Type': 'application/json'})
      .then((response) => {
        console.log('%c⧭', 'color: #0066ff', response);
      })

    },
    deletePackage() {
                  
      var json = {
        packageTitle: this.packageTitle,
        packageDescription: this.packageDescription,
        packagePrice: this.packagePrice
      }

      auth.API_POST('/packs/deletePack', json, {'Content-Type': 'application/json'})
      .then((response) => {
        console.log('%c⧭', 'color: #0066ff', response);
      })

    }
  }
}
</script>
