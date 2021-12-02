<template>
  <div style="background-color:#111317; padding:30px; height:100vh">
    <div class="card text-white" style="background-color:#181A1E; text-align:left;  border-radius:10px">

      <!-- Header -->
      <div class="row" style="padding:30px;">
        <h1>Schedule</h1>
        <h5 class="text-secondary" style="margin-left:20px; margin-top:-9px">In this section you can see your appointments</h5>
      </div>
      
      <div class="row" style="padding:30px; margin-top:-30px">
        <div class="col">

          <!-- Contenedor de detalles de citas -->
          <div class="card" style="width:73rem; background-color:#292A33; border-radius:10px">
            <div class="card-body">

              <!-- Titulo del card -->
              <div class="row" style="padding:10px">
                <div class="col">
                  <h4 class="card-title">Celebráre</h4>
                </div>
              </div>

              <div v-if="edit == 0">
                <div style="padding:10px">
                  <!-- Datos de cita -->
                  <div class="row">
                    <!-- Paquete -->
                    <div class="col">
                      <p style="margin-bottom:0px">Paquete:</p>
                      <p style="color:#B5B5B5">Paquete 1</p>

                    <!-- Precio -->
                      <p style="margin-bottom:0px">Price:</p>
                      <p style="color:#B5B5B5">$500,000 MXN</p>
                    </div>

                    <div class="col">
                      <!-- Fecha -->
                      <p style="margin-bottom:0px">Fecha:</p>
                      <p style="color:#B5B5B5">27 de Noviembre del 2021</p>

                      <!-- Hora -->
                      <p style="margin-bottom:0px">Hora:</p>
                      <p style="color:#B5B5B5">8:00 PM</p>
                    </div>
                  </div>
                </div>

                <!-- Botones de editar y cancelar -->
                <div class="row" style="margin-bottom:10px; margin-right:10px">
                  <div class="col d-flex justify-content-end">
                    <a @click="edit = 1" class="btn btn-primary" style="background-color:#3F5AE8">
                      <i class="fas fa-pen" style="margin-right:5px" />
                      Editar
                    </a>
                    <a href="#" class="btn btn-danger" style="background-color:#E83F3F; margin-left:20px">
                      <i class="fas fa-trash-alt" style="margin-right:5px" />
                      Cancelar
                    </a>
                  </div>
                </div>
              </div>

              <!-- Cuando se va a editar -->
              <div v-if="edit == 1">
                <div style="padding:10px">
                  <!-- Datos de cita -->
                  <div class="row">
                    <!-- Paquete -->
                    <div class="col">
                      <div style="margin-bottom:10px">
                        <p style="margin-bottom:5px">Paquete:</p>
                        <input type="text" class="form-control-sm" placeholder="Paquete 1" disabled>
                      </div>

                    <!-- Precio -->
                      <p style="margin-bottom:5px">Price:</p>
                      <input type="text" class="form-control-sm" placeholder="$500,000 MXN" disabled>
                    </div>

                    <div class="col" style="margin-bottom:10px">
                      <!-- Fecha -->
                      <div style="margin-bottom:10px">
                        <p style="margin-bottom:5px">Fecha:</p>
                        <input type="text" class="form-control-sm" placeholder="27 de Noviembre del 2021">
                      </div>

                      <!-- Hora -->
                      <p style="margin-bottom:5px">Hora:</p>
                      <input type="text" class="form-control-sm" placeholder="8:00 PM">
                    </div>
                  </div>
                </div>

                <!-- Botones de editar y cancelar -->
                <div class="row" style="margin-bottom:10px; margin-right:10px">
                  <div class="col d-flex justify-content-end">
                    <a @click="edit = 0" class="btn btn-primary" style="background-color:#3F5AE8">
                      <i class="fas fa-save" style="margin-right:5px" />
                      Guardar cambios
                    </a>
                    <a @click="edit = 0" class="btn btn-danger" style="background-color:#E83F3F; margin-left:20px">
                      <i class="fas fa-times" style="margin-right:5px" />
                      Cancelar cambios
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: 0,
    }
  },
  methods: {

  }
}
</script>
