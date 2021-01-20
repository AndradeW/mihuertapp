<template class= "appcss">
  <div id="app">
    <div class="header">
      
    <img id="logo" v-bind:src="require('./assets/miHuertaLogo.png')" alt="">
    <h2 v-if="is_auth">¡Bienvenido!</h2>
      <nav>
        <button v-on:click="init"> Inicio </button>
        <button v-on:click="news"> Noticias </button>
        <button v-on:click="about"> About </button>
        <!-- button v-on:click="getBalance">Saldo</button -->
        
        <!--a href="/user/login" class="button" >Inicio sesión</a-->
        <button v-on:click="gologin" v-if="!is_auth">Inicio de sesión</button>
        <button v-on:click="consulta" v-if="is_auth">Administrar</button>
        <!--button v-on:click="dash" v-if="is_auth">Dashboard</button-->
        <button v-on:click="cerrarSesion" v-if="is_auth">Cerrar Sesión</button>


      </nav>
      
    </div>
    
    <div class="main-component">
    <router-view  v-on:log-in="login" ></router-view>
    </div>

    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>

<script>

import vueRouter from 'vue-router'

  export default {
    name: 'App',

    components: {},

    data: function(){
      return {
        is_auth: localStorage.getItem('isAuth') || false
      }
    },

    methods: {

      updateAuth: function(){
      var self = this
      self.is_auth  = localStorage.getItem('isAuth') || false

      if(self.is_auth == false)
        self.$router.push({name: "login"})

      else{
        
        //self.$router.push({name: "admin"})
      }  
    },

      init: function(){
        if(this.$route.name != "/"){
          //let username = localStorage.getItem("current_username")
          this.$router.push({name: "root"})
        }
      },

      getBalance: function(){
        if(this.$route.name != "user_balance"){
          let username = localStorage.getItem("current_username")
          this.$router.push({name: "user_balance", params:{ username: username }})
        }
      },

      login: function(username){
        //if(this.$route.name != "login"){
        this.$router.push({name: "login"})
        
        localStorage.setItem('isAuth', true)
        this.updateAuth()
        //}
      },

      gologin: function(){
        if(this.$route.name != "login"){
        this.$router.push({name: "login"})
        
        //localStorage.setItem('isAuth', true)
        //this.updateAuth()
        }
      },

      consulta: function(){
        if(this.$route.name != "admin"){
        this.$router.push({name: "admin"})
        
        //localStorage.setItem('isAuth', false)
        this.updateAuth()
        }
      },

      dash: function(){
        if(this.$route.name != "dashboard"){
        this.$router.push({name: "dashboard"})
        
        //localStorage.setItem('isAuth', false)
        this.updateAuth()
        }
      },

      news: function(){
        if(this.$route.name != "news"){
        this.$router.push({name: "news"})
        
        //localStorage.setItem('isAuth', false)
        //this.updateAuth()
        }
      },

      about: function(){
        if(this.$route.name != "about"){
        this.$router.push({name: "about"})
        
        //localStorage.setItem('isAuth', false)
        //this.updateAuth()
        }
      },


      cerrarSesion: function(){
        localStorage.removeItem('isAuth')
        //localStorage.setItem('isAuth', false)
        this.updateAuth()
        //self.$router.push({name: "login"})
     
        
      },

    },

    created: function(){
    this.$router.push({name: "root"})
    //this.updateAuth()
  }
  }
</script>


<style>

  .appcss{
    padding: 10px;
    background-color: red;
    z-index: 0;
  }

  body{
    margin: 0 0 0 0;
    //background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23a1d1c5' fill-opacity='0.50' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");

    
  }
  .header{
    margin: auto;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #003d20;
    color:#E5E7E9  ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
    width: 20%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    //width: 60%;
    display: flex;
    //justify-content: space-around;
    align-items: center;
    //font-size: 20px;
    margin: 0px 10px !important;
  }
  .header nav button{
    color: #E5E7E9;
    background: #7a811b;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 0px 3px;
  }
  .header nav button:hover{
    color: #ffffff;
    background: rgb(4, 116, 0);
    border: 1px solid #7a811b;
  }
  .main-component{
    //height: 200vh;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23a1d1c5' fill-opacity='0.50' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");
    padding: 10px 30px;
    
    /*background: #FDFEFE ;*/
    
  }
.contenido{
  //padding-top: 30px;
  width: 360px;
//margin: auto;
}
   
  .footer{
    //margin: 0;
    //padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #003d20;
    color: white;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 .header img{
    width: auto;
    height: 100%;
    text-align: center;
  }



@media only screen and (max-width: 380px) {
  saludo {
    color: red;
    display: none;
    
  }
}


</style>
