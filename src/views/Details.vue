<template>
<div :style="{ 'margin-left': sidebarWidth }">
  <Sidebar/>
  <div style="background-color:#111317; padding:30px; height:150vh">
    <div class="card text-white" style="background-color:#181A1E; text-align:left;  border-radius:10px">

      <!-- Header -->
      <div class="row" style="padding:30px;">
        <div class="col">
          <h1>{{companyInfo.name}}</h1>
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
              <!-- {{companyInfo[0]}} -->
                <!-- Paquete -->
              <div class="col">
                <p style="margin-bottom:0px">Description:</p>
                <p style="color:#B5B5B5">{{companyInfo.description}}</p>

                <!-- Ubicacion -->
                <p style="margin-bottom:0px">Location:</p>
                <p style="color:#B5B5B5" v-if="companyInfo.address != '' && companyInfo.city != '' && companyInfo.state != '' ">{{companyInfo.address}}, {{companyInfo.city}}, {{companyInfo.state}}</p>
                <p style="color:#B5B5B5" v-else>Without Location</p>

                <!-- Phone -->
                <p style="margin-bottom:0px">Phone:</p>
                <p style="color:#B5B5B5">{{companyInfo.phone}}</p>

                

                <!-- Paquetes -->


              </div>
            </div>
            <hr>
            <div class="row mt-3" style="padding:30px; margin-top:-30px" v-for="(pack, key) in packageList" :key="key">
              <div class="col">

                <h5 style="margin-bottom:20px">Packages</h5>
                <p style="margin-bottom:0px">{{pack.name}}</p>
                <p style="color:#B5B5B5">{{pack.description}}</p>
                <p style="color:#B5B5B5">{{pack.cost}}</p>
                
                <div class="d-flex justify-content-end">
                  <button class="btn btn-primary" style="background-color:#3F5AE8" @click="createSchedule(pack)">Create Schedule</button>
                </div>
                <hr>
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
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Details',
  components: {
    Sidebar
  },
  setup() {
    return { sidebarWidth }
  },
  data() {
    return {
      companyInfo:"",
      packageList:[]
    }
  },
  
    
  computed:{
    // ...mapGetters(['Company/getCompanyInfo'])
    ...mapState(['companyId'])
  },
  mounted() {

    console.log('%c⧭', 'color: #807160', this.companyId)
    this.loadInfo()
    this.loadPackages()
  },
  methods: {
    ...mapMutations(['setPackageDetails', 'Pack/setPackage']),
    createSchedule(pack) {

      // console.log('%c⧭', 'color: #7f7700', pack)
      this.setPackageDetails(pack._id);
      this['Pack/setPackage'](pack)

      this.$router.replace({ path: 'NewSchedule' })
    },
    loadPackages(){
      let json = {companyId: this.companyId}
      auth.API_POST('/packs/packageList', json, {'Content-Type': 'application/json'}).then((response) => {

        console.log('%c⧭', 'color: #1d5673', response)
        this.packageList = response.data.data
        console.log('%c⧭', 'color: #00b300', this.packageList)
      })
    },
    loadInfo(){
      let json = {companyId: this.companyId}

      console.log('%c⧭', 'color: #ffa640', json)
      auth.API_POST('/companies/CompanyInfo', json, {'Content-Type': 'application/json'}).then((response) => {
        this.companyInfo = response.data.data[0];
        console.log('%c⧭', 'color: #735656', response.data.data)

        console.log('%c⧭', 'color: #d90000', this.companyInfo)
      })

    }
  }
}
</script>