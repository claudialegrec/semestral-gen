<template>
  <div style="background-color:#111317; padding:30px; height:100vh">
    <div class="card text-white" style="background-color:#181A1E; text-align:left;  border-radius:10px">

      <!-- Header -->
      <div class="row" style="padding:30px;">
        <h1>Create a schedule in this event center</h1>
      </div>
      
      <div class="row" style="padding:30px; margin-top:-30px">
        <div class="col">
          <div style="padding:10px">
            <!-- Inputs de Agendar Cita -->
            <div class="row">
              <div class="col">
                <!-- Nombre -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Name:</p>
                  <input type="text" class="form-control-sm" placeholder="Alfredo">
                </div>

                <!-- Apellidos -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Last Name:</p>
                  <input type="text" class="form-control-sm" placeholder="García Yapor">
                </div>

                <!-- Teléfono -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Phone:</p>
                  <input type="text" class="form-control-sm" placeholder="614 154 9058">
                </div>
              </div>

              <div class="col">
                <!-- Salón de eventos -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Event center:</p>
                  <input type="text" class="form-control-sm" placeholder="Celebráre">
                </div>

                <!-- Paquete -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Pack:</p>
                  <input type="text" class="form-control-sm">
                </div>

                <!-- Fecha -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Date:</p>
                  <input type="text" class="form-control-sm">
                </div>

                <!-- Hora -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Hour:</p>
                  <input type="text" class="form-control-sm">
                </div>
              </div>
            </div>

            <!-- Botón de Agendar Cita -->
            <div class="d-flex justify-content-end" style="margin-top:30px">
              <a class="btn btn-primary" style="background-color:#3F5AE8">
                <i class="fas fa-check" style="margin-right:5px" />
                Create Schedule
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewSchedule',
  data() {
    return {

    }
  },
  methods: {
    addSchedule() {

    }
  }
}
</script>