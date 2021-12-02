<template>
  <div style="background-color:#111317; padding:30px; height:100vh">
    <div class="card text-white" style="background-color:#181A1E; text-align:left; border-radius:10px">

      <!-- Header -->
      <div class="d-flex" style="padding:30px;">
        <div class="col">
          <h1>User profile</h1>
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
              <!-- Nombre -->
              <div class="col">
                <p style="margin-bottom:0px">Name:</p>
                <p style="color:#B5B5B5">Alfredo</p>

              <!-- Apellidos -->
                <p style="margin-bottom:0px">Last Name:</p>
                <p style="color:#B5B5B5">García Yapor</p>

                <!-- Teléfono -->
                <p style="margin-bottom:0px">Phone:</p>
                <p style="color:#B5B5B5">614 154 9058</p>

                <!-- Email -->
                <p style="margin-bottom:0px">Email:</p>
                <p style="color:#B5B5B5">alfredogy@outlook.com</p>
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

                <!-- Teléfono -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">E-mail:</p>
                  <input type="text" class="form-control-sm" placeholder="alfredogy@outlook.com">
                </div>

                <!-- Botón de Guardar Cambios -->
                <div class="d-flex justify-content-end" style="margin-top:30px">
                  <a @click="updInfoUser()" class="btn btn-primary" style="background-color:#3F5AE8">
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
    updInfoUser() {
      
      this.edit = 0;

    }
  }
}
</script>