<template>
<div :style="{ 'margin-left': sidebarWidth }">
  <Sidebar/>
  <div style="background-color:#111317; padding:30px; height:120vh">
    <div style="background-color:#111317; height:100%">
      <div class="card d-flex text-white" style="background-color:#181A1E; text-align:left;  border-radius:10px">

        <!-- Header -->
        <div class="row" style="padding:30px;">
          <h1>Schedule</h1>
          <h5 class="text-secondary" style="margin-left:20px; margin-top:-9px">In this section you can see your appointments</h5>
        </div>
      
        <div class="row" style="padding:30px; margin-top:-30px">
          <div class="col">

            <!-- Contenedor de detalles de citas -->
            <div class="card mb-3" style="background-color:#292A33; border-radius:10px" v-for="(meeting, key) in meetingsList" :key="key">
              <div class="card-body">

                <!-- Titulo del card -->
                <div class="row" style="padding:10px">
                  <div class="col">
                    <h4 class="card-title">{{meeting.company.name}}</h4>
                  </div>
                </div>

                <div v-if="meeting.edit == 0">
                  <div style="padding:10px">
                    <!-- Datos de cita -->
                    <div class="row">
                      <!-- Paquete -->
                      <div class="col">
                        <p style="margin-bottom:0px">Paquete:</p>
                        <p style="color:#B5B5B5">{{meeting.pack.name}}</p>

                        <!-- Precio -->
                        <p style="margin-bottom:0px">Price:</p>
                        <p style="color:#B5B5B5">${{meeting.pack.cost}} MXN</p>
                      </div>

                      <div class="col">
                        <!-- Fecha -->
                        <p style="margin-bottom:0px">Date:</p>
                        <p style="color:#B5B5B5">{{meeting.date}}</p>

                        <!-- Hora -->
                        <p style="margin-bottom:0px">Time:</p>
                        <p style="color:#B5B5B5">{{meeting.hour}}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Botones de editar y cancelar -->
                  <div class="row" style="margin-bottom:10px; margin-right:10px">
                    <div class="col d-flex justify-content-end">
                      <a @click="editMode(meeting, key)" class="btn btn-primary" style="background-color:#3F5AE8">
                        <i class="fas fa-pen" style="margin-right:5px" />
                        Edit
                      </a>
                      <a href="#" class="btn btn-danger" style="background-color:#E83F3F; margin-left:20px">
                        <i class="fas fa-trash-alt" style="margin-right:5px" />
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Cuando se va a editar -->
                <div v-if="meeting.edit == 1">
                  <div style="padding:10px">
                    <!-- Datos de cita -->
                    <div class="row">
                      <!-- Paquete -->
                      <div class="col">
                        <div style="margin-bottom:10px">
                          <p style="margin-bottom:5px">Paquete:</p>
                          <input type="text" v-model="meetingsEdit.packName" class="form-control-sm" placeholder="Paquete 1" readonly>
                        </div>

                        <!-- Precio -->
                        <p style="margin-bottom:5px">Price:</p>
                        <input type="text" v-model="meetingsEdit.cost" class="form-control-sm" placeholder="$500,000 MXN" readonly>
                      </div>

                      <div class="col" style="margin-bottom:10px">
                        <!-- Fecha -->
                        <div style="margin-bottom:10px">
                          <p style="margin-bottom:5px">Date:</p>
                          <input v-model="meetingsEdit.date" type="text" class="form-control-sm" placeholder="YYYY-MM-DD">
                        </div>

                        <!-- Hora -->
                        <p style="margin-bottom:5px">Hour:</p>
                        <input v-model="meetingsEdit.hour" type="text" class="form-control-sm" placeholder="HH:MM (formato de 24hrs)">
                      </div>
                    </div>
                  </div>

                <!-- Botones de editar y cancelar -->
                  <div class="row" style="margin-bottom:10px; margin-right:10px">
                    <div class="col d-flex justify-content-end">
                      <a @click="updSchedule(key)" class="btn btn-primary" style="background-color:#3F5AE8">
                        <i class="fas fa-save" style="margin-right:5px" />
                        Guardar cambios
                      </a>
                      <a @click="readMode(key)" class="btn btn-danger" style="background-color:#E83F3F; margin-left:20px">
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
  </div>
</div>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar'
import { sidebarWidth } from '@/components/sidebar/state'
import auth from '../logic/auth' 
import {mapGetters} from 'vuex'

export default {
  components: {
    Sidebar
  },
  setup() {
    return { sidebarWidth }
  },
  data() {
    return {
      meetingsList:[],
      meetingsEdit:{
        id:"",
        packId:"",
        companyId:"",
        userId:"",
        packName: "",
        cost: "",
        date: "",
        hour: ""
      },
      edit: 0,

      // Modelos de inputs a actualizar
      date: "",
      time: "",

    }
  },
  computed:{
    ...mapGetters(['Users/getUserInfo'])
  },
  methods: {
    loadMeetings(){

      console.log('%c⧭', 'color: #00258c', this['Users/getUserInfo'])
      var json = {
        userId: this['Users/getUserInfo']._id
      }
      auth.API_POST('/meetings/userInfo', json, {'Content-Type': 'application/json'}).then((response) => {

        // console.log('%c⧭', 'color: #994d75', response);
        this.meetingsList = response.data.data

        this.meetingsList.forEach(element => {
          element.edit = 0;
        });
      })
    },
    updSchedule(index) {

      var json = {
        meetingId:this.meetingsEdit.id,
        packId:this.meetingsEdit.packId,
        companyId:this.meetingsEdit.companyId,
        userId:this.meetingsEdit.userId,
        date: this.meetingsEdit.date,
        hour: this.meetingsEdit.hour
      }

      console.log('%c⧭', 'color: #00bf00', "Cambios guardados")

      auth.API_POST('/meetings/updateMeeting', json, {'Content-Type': 'application/json'})
      .then((response) => {
        this.meetingsList[index].edit = 0
        this.loadMeetings()
        console.log('%c⧭', 'color: #0066ff', response);
      })
      
    },

    editMode(meeting, index){
      this.meetingsEdit.id = meeting._id;
      this.meetingsEdit.userId = meeting.user._id;
      this.meetingsEdit.companyId = meeting.company._id;
      this.meetingsEdit.packId = meeting.pack._id;
      this.meetingsEdit.packName = meeting.pack.name;
      this.meetingsEdit.cost = meeting.pack.cost;
      this.meetingsEdit.date = meeting.date;
      this.meetingsEdit.hour = meeting.hour;

      this.meetingsList[index].edit = 1
    },

    readMode(index){
      this.meetingsEdit.id = ""
      this.meetingsEdit.userId = ""
      this.meetingsEdit.companyId = ""
      this.meetingsEdit.packId = ""
      this.meetingsEdit.packName = ""
      this.meetingsEdit.cost = ""
      this.meetingsEdit.date = ""
      this.meetingsEdit.hour = ""

      this.meetingsList[index].edit = 0
    }
  },
  mounted() {
    this.loadMeetings()
  },
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
