<template>
  <div :style="{ 'margin-left': sidebarWidth }">

  
    <Sidebar/>
    <div style="background-color:#111317; padding:30px; height:100%">
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
                    <input v-model="userInfo.name" type="text" class="form-control-sm" placeholder="Name" readonly>
                  </div>

                  <!-- Apellidos -->
                  <div style="margin-bottom:10px">
                    <p style="margin-bottom:5px">Last Name:</p>
                    <input v-model="userInfo.lastName" type="text" class="form-control-sm" placeholder="Last name" readonly>
                  </div>

                  <!-- Teléfono -->
                  <div style="margin-bottom:10px">
                    <p style="margin-bottom:5px">Phone:</p>
                    <input v-model="userInfo.phone" type="text" class="form-control-sm" placeholder="Phone number" readonly>
                  </div>
                </div>

                <div class="col">
                  <!-- Salón de eventos -->
                  <div style="margin-bottom:10px">
                    <p style="margin-bottom:5px">Event center:</p>
                    <input v-model="packageInfo.companyName" type="text" class="form-control-sm" placeholder="Nombre del Salon" readonly>
                  </div>

                  <!-- Paquete -->
                  <div style="margin-bottom:10px">
                    <p style="margin-bottom:5px">Package:</p>
                    <input v-model="packageInfo.name" type="text" class="form-control-sm" placeholder="Package name" readonly>
                  </div>

                  <!-- Fecha -->
                  <div style="margin-bottom:10px">
                    <p style="margin-bottom:5px">Date:</p>
                    <input v-model="date" type="text" class="form-control-sm" placeholder="YYYY-MM-DD">
                  </div>

                  <!-- Hora -->
                  <div style="margin-bottom:10px">
                    <p style="margin-bottom:5px">Time:</p>
                    <input v-model="time" type="text" class="form-control-sm" placeholder="HH:MM (24h format)">
                  </div>
                </div>
              </div>

              <!-- Botón de Agendar Cita -->
              <div class="d-flex justify-content-end" style="margin-top:30px">
                <a @click="createSchedule()" class="btn btn-primary" style="background-color:#3F5AE8">
                  <i class="fas fa-check" style="margin-right:5px" />
                  Create Schedule
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
import auth from '../logic/auth'
import {mapGetters} from 'vuex'

export default {
  name: 'NewSchedule',
  components: {
    Sidebar
  },
  setup() {
    return { sidebarWidth }
  },
  data() {
    return {
      // Modelos de inputs
      userInfo:{
        id:"",
        name: "",
        lastName: "",
        phone: "",
        email:""
      },
      packageInfo:{
        id:"",
        name: "",
        companyId:"",
        companyName: ""
      },
      date: "",
      time: "",

    }
  },
  computed:{
    ...mapGetters(['Pack/getPackageInfo', 'Users/getUserInfo'])
  },
  methods: {
    loadInfo(){
      this.userInfo.id = this['Users/getUserInfo']._id
      this.userInfo.name = this['Users/getUserInfo'].name
      this.userInfo.lastName = this['Users/getUserInfo'].lastName
      this.userInfo.phone = this['Users/getUserInfo'].phone
      this.userInfo.email = this['Users/getUserInfo'].email

      this.packageInfo.id = this['Pack/getPackageInfo']._id,
      this.packageInfo.name = this['Pack/getPackageInfo'].name,
      this.packageInfo.companyId = this['Pack/getPackageInfo'].company._id
      this.packageInfo.companyName = this['Pack/getPackageInfo'].company.name


      // console.log('%c⧭', 'color: #ff00c8', this['Pack/getPackageInfo'])
    },
    createSchedule() {
      
      var json = {
        userId: this.userInfo.id,
        companyId: this.packageInfo.companyId,
        packId: this.packageInfo.id,
        date: this.date,
        hour: this.time
      }

      auth.API_POST('/meetings/newMeeting', json, {'Content-Type': 'application/json'}).then(() => {
        this.$router.replace({ path: 'Schedule' })
      })

    }
  },
  mounted() {

    console.log('%c⧭', 'color: #99adcc', this['Pack/getPackageInfo'])

    console.log('%c⧭', 'color: #f279ca', this['Users/getUserInfo'])
    this.loadInfo();
  },
}
</script>