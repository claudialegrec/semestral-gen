<template>
  <div style="background-color:#111317; padding:30px; height:100vh">
    <div class="card text-white" style="background-color:#181A1E; text-align:left;  border-radius:10px">

      <!-- Header -->
      <div class="row" style="padding:30px;">
        <h1>Welcome, User</h1>
        <h5 class="text-secondary" style="margin-left:20px; margin-top:-9px">Get to know the event center in your area</h5>
      </div>
      
      <div class="row" style="padding:30px; margin-top:-30px">
        <div class="col">

          <!-- Card de negocios -->
          <CardService/>

        </div>
      </div>

    </div>
  </div>
</template>

<script>

import CardService from '@/components/CardService'
import { mapGetters } from 'vuex'

export default {
  components: {
    CardService,
  },
  computed:{
    ...mapGetters(['Users/getUserInfo', 'Company/getCompanyInfo'])
  },
  data() { 

  },
  mounted() {
    
    console.log('%c⧭', 'color: #00e600', this['Users/getUserInfo'])
    
    console.log('%c⧭', 'color: #00a3cc', this['Company/getCompanyInfo'])
  },
}
</script>
