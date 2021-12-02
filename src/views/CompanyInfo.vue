<template>
  <div style="background-color:#111317; padding:30px; height:100vh">
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
                <p style="color:#B5B5B5">Celebráre</p>

                <!-- Descripción -->
                <p style="margin-bottom:0px">Description:</p>
                <p style="color:#B5B5B5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <!-- Aforo -->
                <p style="margin-bottom:0px">Capacity:</p>
                <p style="color:#B5B5B5">100 - 150</p>

                <!-- Imagen -->
                <p style="margin-bottom:0px">Image:</p>
                <p style="color:#B5B5B5">celebrare.png</p>

                <!-- Ubicación -->
                <p style="margin-bottom:0px">Location:</p>
                <p style="color:#B5B5B5">Av Francisco Villa 5510, Saucito, 31110 Chihuahua, Chih.</p>

                <!-- Teléfono -->
                <p style="margin-bottom:0px">Phone:</p>
                <p style="color:#B5B5B5">614 425 5250</p>
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
                  <input type="text" class="form-control-sm" placeholder="Celebráre">
                </div>

                <!-- Descripción -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Description:</p>
                  <input type="text" class="form-control-sm" placeholder="Some quick example text to build on the card title and make up the bulk of the card's content.">
                </div>

                <!-- Aforo -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Capacity:</p>
                  <input type="text" class="form-control-sm" placeholder="100-150">
                </div>

                <!-- Imágen -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Image:</p>
                  <input type="text" class="form-control-sm" placeholder="celebrare.png">
                </div>

                <!-- Ubicación -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Location:</p>
                  <input type="text" class="form-control-sm" placeholder="Av Francisco Villa 5510, Saucito, 31110 Chihuahua, Chih.">
                </div>

                <!-- Teléfono -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Phone:</p>
                  <input type="text" class="form-control-sm" placeholder="614 425 5250">
                </div>
              </div>

              <div class="col">
                <h5 style="margin-bottom:20px">Packages list</h5>

                <!-- Nombre del paquete -->
                <div style="margin-bottom:10px">
                  <input type="text" class="form-control-sm" placeholder="Package 1">
                </div>

                <!-- Descripción del paquete -->
                <div style="margin-bottom:10px">
                  <input type="text" class="form-control-sm" placeholder="Dinner, music, services and decoration.">
                </div>

                <!-- Precio del paquete -->
                <div style="margin-bottom:10px">
                  <input type="text" class="form-control-sm" placeholder="$500,000 MXN">
                </div>

                <hr>

                <div class="row">
                  <div class="d-inline-flex p-2 justify-content-end">
                    <!-- Botón de agregar paquete -->
                    <button class="btn btn-primary" style="margin-right:20px; background-color:#3F5AE8">
                      <i class="fas fa-plus" />
                    </button>

                    <!-- Botón de eliminar paquete -->
                    <button class="btn btn-danger" style="background-color:#E83F3F">
                      <i class="fas fa-minus" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

            <!-- Botón de Guardar Cambios -->
            <div class="d-flex justify-content-end" style="margin-top:30px">
              <a @click="edit = 0" class="btn btn-primary" style="background-color:#3F5AE8">
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