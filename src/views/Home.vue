<template>
  <div style="background-color:#111317; padding:30px; height:100vh">
    <div class="card text-white" style="background-color:#181A1E; text-align:left;  border-radius:10px">

      <!-- Header -->
      <div class="row" style="padding:30px;">
        <h1>Welcome, User</h1>
        <h5 class="text-secondary" style="margin-left:20px; margin-top:-9px">Get to know the event center in your area</h5>
      </div>
      
      <div class="row" style="padding:30px; margin-top:-30px">
        <div v-for="(company, key) in companiesList" :key="key" class="col-sm-4 mb-3">
          {{company}}
          <!-- Card de negocios -->
          <CardService :title="company.name" :rating="company.rating" :text="company.description"/>

        </div>
      </div>

    </div>
  </div>
</template>

<script>

import CardService from '@/components/CardService'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    CardService,
  },
  computed:{
    ...mapGetters(['Users/getUserInfo', 'Company/getCompanyInfo', 'Company/getCompaniesList'])
  },
  data() { 
    return {
      userInfo:{},
      companiesList:[]
    }
  },
  // created() {
    
  // },
  mounted() {

    // console.log('%c⧭', 'color: #00e600', this['Users/getUserInfo'])
    
    console.log('%c⧭', 'color: #00a3cc', this['Company/getCompanyInfo'])
    // this['Company/fetchCompaniesList']
    // this['Company/getCompaniesList']
    this['Company/fetchCompaniesList']().then(() => {
      this.companiesList = this['Company/getCompaniesList']
      console.log('%c⧭', 'color: #00bf00', this['Company/getCompaniesList'])
      console.log('%c⧭', 'color: #733d00', this.companiesList)
    })
  },
  methods: {
    ...mapActions(['Company/fetchCompaniesList'])
  },
}
</script>
