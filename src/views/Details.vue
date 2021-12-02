<template>
  <div style="background-color:#111317; padding:30px; height:100%">
    <div class="card text-white" style="background-color:#181A1E; text-align:left;  border-radius:10px">

      <!-- Header -->
      <div class="row" style="padding:30px;">
        <div class="col">
          <h1>Celebráre</h1>
          <h5 class="text-secondary" style="margin-left:20px; margin-top:-9px">Get to know the datails of this event center</h5>
        </div>
        <div class="d-flex col justify-content-end" style="margin-right:20px; margin-top:10px">
          <i class="fas fa-star" style="margin-right:5px; margin-top:3px; color:#FFB13C; font-size:25px" />
          <h3>4.3</h3>
        </div>
      </div>
      
      <div class="row" style="padding:30px; margin-top:-30px">
        <div class="col">
          <div style="padding:10px">
            <!-- Datos de cita -->
            <div class="row">
                <!-- Paquete -->
              <div class="col">
                <p style="margin-bottom:0px">Description:</p>
                <p style="color:#B5B5B5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <!-- Ubicacion -->
                <p style="margin-bottom:0px">Location:</p>
                <p style="color:#B5B5B5">Av Francisco Villa 5510, Saucito, 31110 Chihuahua, Chih.</p>

                <!-- Phone -->
                <p style="margin-bottom:0px">Phone:</p>
                <p style="color:#B5B5B5">614 425 5250</p>

                <h5 style="margin-bottom:20px">Packages</h5>

                <!-- Paquetes -->
                <p style="margin-bottom:0px">Package 1:</p>
                <p style="color:#B5B5B5">Dinner, music, services and decoration.</p>

                <div class="d-flex justify-content-end">
                  <button class="btn btn-primary" style="background-color:#3F5AE8" @click="createSchedule()">Create Schedule</button>
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
import auth from '../logic/auth'
import {mapState} from 'vuex'
export default {
  name: 'Details',
  data() {
    return {
      companyInfo:{}
    }
  },
  computed:{
    // ...mapGetters(['Company/getCompanyInfo'])
    ...mapState(['companyId'])
  },
  methods: {
    createSchedule() {
      this.$router.replace({ path: 'NewSchedule' })
    },
    loadInfo(){
      let json = {companyId: this.companyId}
      auth.API_POST('companies/CompanyInfo', json, {'Content-Type': 'application/json'}).then((response) => {
        this.companyInfo = response.data.data;
      })
    }
  }
}
</script>