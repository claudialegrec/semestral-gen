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
                <p style="color:#B5B5B5">{{userInfo.name}}</p>

              <!-- Apellidos -->
                <p style="margin-bottom:0px">Last Name:</p>
                <p style="color:#B5B5B5">{{userInfo.lastName}}</p>

                <!-- Teléfono -->
                <p style="margin-bottom:0px">Phone:</p>
                <p style="color:#B5B5B5">{{userInfo.phone}}</p>

                <!-- Email -->
                <p style="margin-bottom:0px">Email:</p>
                <p style="color:#B5B5B5">{{userInfo.email}}</p>

                <!-- Direccion -->
                <p style="margin-bottom:0px">Address:</p>
                <p style="color:#B5B5B5">{{userInfo.address}}</p>

                <!-- Localizacion -->
                <p style="margin-bottom:0px">Localización:</p>
                <p style="color:#B5B5B5" v-if="userInfo.city != '' && userInfo.state!= ''">{{userInfo.city}}, {{userInfo.state}}</p>
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
                  <input v-model="name" type="text" class="form-control-sm" placeholder="Name">
                </div>

                <!-- Apellidos -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Last Name:</p>
                  <input v-model="lastName" type="text" class="form-control-sm" placeholder="Last name">
                </div>

                <!-- Teléfono -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Phone:</p>
                  <input v-model="phone" type="text" class="form-control-sm" placeholder="Phone">
                </div>

                <!-- Email -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">E-mail:</p>
                  <input v-model="email" type="text" class="form-control-sm" placeholder="E-mail">
                </div>

                <!-- Address -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">Address:</p>
                  <input v-model="address" type="text" class="form-control-sm" placeholder="Address">
                </div>

                <!-- City -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">City:</p>
                  <input v-model="city" type="text" class="form-control-sm" placeholder="City">
                </div>

                <!-- State -->
                <div style="margin-bottom:10px">
                  <p style="margin-bottom:5px">State:</p>
                  <input v-model="state" type="text" class="form-control-sm" placeholder="alfredogy@outlook.com">
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
import auth from '../logic/auth' 
import {mapGetters, mapActions} from "vuex"

export default {
  data() {
    return {
      edit: 0,

      // Modelos de inputs
      userInfo:{
        name: "",
        lastName: "",
        phone: "",
        email: "",
        address:"",
        city:"",
        state:""
      },


      name: "",
      lastName: "",
      phone: "",
      email: "",
      address:"",
      city:"",
      state:"",
      password:"",
      userId:""


    }
  },
  computed:{
    ...mapGetters(['Users/getUserInfo'])
  },
  mounted() {
    // this['Users/getUserInfo']
    // console.log('%c⧭', 'color: #007300', this['Users/getUserInfo'])
    this.loadUserInfo();
  },
  methods: {
    ...mapActions(['Users/LoadUserInfo']),
    loadUserInfo(){
      this.userInfo.name = this['Users/getUserInfo'].name;
      this.userInfo.lastName = this['Users/getUserInfo'].lastName;
      this.userInfo.phone = this['Users/getUserInfo'].phone;
      this.userInfo.email = this['Users/getUserInfo'].email;
      this.userInfo.address = this['Users/getUserInfo'].address;
      this.userInfo.city = this['Users/getUserInfo'].city;
      this.userInfo.state = this['Users/getUserInfo'].state;

      //inputs
      this.name = this['Users/getUserInfo'].name;
      this.lastName = this['Users/getUserInfo'].lastName;
      this.phone = this['Users/getUserInfo'].phone;
      this.email = this['Users/getUserInfo'].email;
      this.address = this['Users/getUserInfo'].address;
      this.city = this['Users/getUserInfo'].city;
      this.state = this['Users/getUserInfo'].state;
      this.password = this['Users/getUserInfo'].password;
      this.userId = this['Users/getUserInfo']._id;
      console.log('%c⧭', 'color: #006dcc', this.userInfo, "userInfo")
    },
    updInfoUser() {
      
      var json = {
        userId: this.userId,
        name: this.name,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
        address: this.address,
        city: this.city,
        state: this.state,
        password: this.password
      }

      auth.API_POST('/users/updateInfo', json, {'Content-Type': 'application/json'})
      .then(() => {
        this.edit = 0
        // console.log('%c⧭', 'color: #ff0000', response);
        

        console.log('%c⧭', 'color: #e57373', this.userId)
        this['Users/LoadUserInfo']({userId: this.userId}).then(() => {
          this.loadUserInfo();
        })
      })
      
    }
  }
}
</script>