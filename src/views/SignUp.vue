<template>
  <body class="bodyLogin">
    <div class="divLogin">
      <div style="padding:5px;">
        <h3 style="margin-left:-15px">Sign Up</h3>
        <p class="text-secondary" style="margin-left:-15px; margin-top:-10px">Create an account to continue</p>
      </div>

      <div class="row" style="margin-bottom:25px">
        <div class="col form-check" style="margin-left:50px">
          <input v-model="usertype" value="1" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
            User
          </label>
        </div>

        <div class="col form-check">
          <input v-model="usertype" value="2" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
          <label class="form-check-label" for="flexRadioDefault2">
            Company
          </label>
        </div>
      </div>

      <div v-if="usertype == 1">
        <div class="row" style="margin-top:-10px">
          <label class="labelLogin">Name</label>
          <input type="name" v-model="name" class="form-control" placeholder="Name"/>
        </div>

        <div class="row" style="margin-top:10px">
          <label class="labelLogin">Last Name</label>
          <input type="lastname" v-model="lastname" class="form-control" placeholder="Last Name"/>
        </div>

        <div class="row" style="margin-top:10px">
          <label class="labelLogin">E-mail</label>
          <input type="e-mail" v-model="email" class="form-control" placeholder="E-mail" />
        </div>

        <div class="row" style="margin-top:10px">
          <label class="labelLogin">Password</label>
          <input type="password" v-model="password" class="form-control" placeholder="•••••••" />
        </div>
      </div>

      <div v-if="usertype == 2">
        <div class="row" style="margin-top:-10px">
          <label class="labelLogin">Company Name</label>
          <input type="text" v-model="companyName" class="form-control" placeholder="Company Name" />
        </div>

        <div class="row" style="margin-top:10px">
          <label class="labelLogin">Location</label>
          <input type="text" v-model="location" class="form-control" placeholder="Location" />
        </div>

        <div class="row" style="margin-top:10px">
          <label class="labelLogin">E-mail</label>
          <input type="text" v-model="emailCompany" class="form-control" placeholder="E-mail" />
        </div>

        <div class="row" style="margin-top:10px">
          <label class="labelLogin">Password</label>
          <input type="password" v-model="passwordCompany" class="form-control" placeholder="•••••••" />
        </div>
      </div>

        <br>
        <div class="row">
          <button class="btn btn-primary btn-block" style="background-color:#1A2526" @click="signup()">Sign Up</button>
        </div>

        <div class="d-flex justify-content-center" style="margin-top:15px; margin-bottom:-15px">
          <p class="text-secondary" style="margin-left:-10px">Already have an account?</p>
          <a href="/" class="text-primary" style="margin-left:5px">Log In</a>
        </div>
    </div>
  </body>
</template>

<script>

import {mapActions, mapGetters} from "vuex"

export default {
  name: 'SignUp',
  computed:{
    ...mapGetters(['Users/getUserInfo', 'Company/getCompanyInfo'])
  },
  data() {
    return {
      // Modelos de usuario
      name: "",
      lastname: "",
      email: "",
      password: "",

      // Modelos de compañía
      companyName: "",
      location: "",
      emailCompany: "",
      passwordCompany: "",
      city: "",
      state: "",

      // Tipos de usuario
      usertype: "",
    }
  },
  mounted () {
  },
  methods: {
    ...mapActions(['Users/createUser', 'Company/createCompany']),
    signup() {
      if (this.usertype == 1) {
        var json = {
          name: this.name,
          lastName: this.lastname,
          email: this.email,
          password: this.password
        }

        this['Users/createUser'](json)
        .then((response) => {

          console.log('%c⧭', 'color: #e50000', response)
          this.$router.replace({ path: 'Home'})
        })

        // axios.post('http://7b44-2806-2f0-3500-1992-558b-9b4e-dba4-9562.ngrok.io/users/SingUp', json, {headers: {'Content-Type': 'application/json'}})
        // .then((response) => {
        //   console.log('%c⧭', 'color: #00a3cc', response)
        //   this.$router.replace({ path: 'Home'})
        // })
      } else {
        var jsonCompany = {
          name: this.companyName,
          email: this.emailCompany,
          password: this.passwordCompany,
          city: this.city,
          state: this.state,
          address: this.location,
        }

        this['Company/createCompany'](jsonCompany)
        .then(() => {
          this.$router.replace({ path: 'Home'})
        })

        // axios.post('http://7b44-2806-2f0-3500-1992-558b-9b4e-dba4-9562.ngrok.io/users/SingUp', jsonCompany, {headers: {'Content-Type': 'application/json'}})
        // .then((response) => {
        //   console.log('%c⧭', 'color: #00a3cc', response)
        //   this.$router.replace({ path: 'Home'})
        // })
      }
    }
  },
  watch: {

  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

  .titleh3, .labelLogin {
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
    text-align: start;
    margin-left: -10px;
    margin-bottom:5px ;
  }
  
  .bodyLogin {
    display: flex;
    font-weight: 400;
    font-family: 'Fira Sans', sans-serif;
    background: url('../assets/party.jpeg') no-repeat;
    background-size: 1540px;
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
  }

  .divLogin {
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 8px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }

  .auth-wrapper .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
  }

  .auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

  .btnLogin {
    background: #6E3AFF;
    
  }
</style>