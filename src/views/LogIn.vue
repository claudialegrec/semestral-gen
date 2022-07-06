<template>
  <body class="bodyLogin">
    <div class="divLogin">
      <div style="padding:5px;">
        <h3 style="margin-left:-15px">Welcome back</h3>
        <p class="text-secondary" style="margin-left:-15px; margin-top:-10px">Welcome back! Please enter your details</p>
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
      <div class="row" style="margin-top:-10px">
        <label class="labelLogin">Username</label>
        <input type="email" v-model="user" class="form-control" placeholder="Username or Email" />
      </div>

      <div class="row" style="margin-top:10px">
        <label class="labelLogin">Password</label>
        <input type="password" v-model="password" class="form-control" placeholder="Password" />
      </div>

      <br>
      <div class="row">
        <button class="btn btn-primary btn-block" style="background-color:#1A2526" @click="login()">Log In</button>
      </div>

      <div class="d-flex justify-content-center" style="margin-top:15px; margin-bottom:-15px">
        <p class="text-secondary" style="margin-left:-10px">Don't have an account?</p>
        <a href="SignUp" class="text-primary" style="margin-left:5px">Sign up</a>
      </div>
    </div>
  </body>
</template>

<script>
// import axios from 'axios'
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
  // name: 'LogIn',
  data() {
    return {
      user: "",
      password: "",
      usertype: ""
    }
  },
  computed:{
    ...mapGetters(['Users/getUserInfo', 'Company/getCompanyInfo'])
  },
  mounted() {
    
  },
  methods: {

    ...mapActions(['Users/fetchUser', 'Company/fetchCompanyUser']),
    ...mapMutations(['setUserType']),
    login() {
      
      var json = {
        email: this.user,
        password: this.password
      }

      if(this.usertype == 1){
        this.setUserType(this.usertype)
        this['Users/fetchUser'](json)
        .then(() => {
          this.$router.replace({ path: 'Home'})
        })
      }else{
        this.setUserType(this.usertype)
        this['Company/fetchCompanyUser'](json)
        .then(() => {

          this.$router.replace({ path: 'Home'})
        })
      }

      



      // axios.post('http://7b44-2806-2f0-3500-1992-558b-9b4e-dba4-9562.ngrok.io/users/Login', json, {headers: {'Content-Type': 'application/json'}})
      // .then((response) => {
      //   console.log('%c⧭', 'color: #00a3cc', response)
      // })
      
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

  .titleh3, .labelLogin {
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;

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