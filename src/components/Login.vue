<template>
    <div id="login" class="login">
        <div class="contenido_login">
            <h2 class="saludo">Hola {{username}} ¡Bienvenido!</h2>
            <form v-on:submit.prevent="processAuthUser">
                <!-- <label>Ingrese su usuario</label> -->
                <input type="text" v-model="user_in.username" placeholder="usuario">
                <!-- <label>Ingrese su contraseña</label> -->
                <br>
                <input type="password"  v-model="user_in.password" placeholder="contraseña">
                <br>
                <button  type="submit">Ingresar</button>
            </form>
            <h5> {{salida}}</h5>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
   export default {
    name: "Login",
    data:function(){
      return {
        user_in: {
          username: "",
          password: "",
        },
        salida: "",
        autorizado: false
        
      }
    },
    methods: {
      processAuthUser: function(){
        var self = this
        axios.post("https://mihuertapp-back.herokuapp.com/usuarios/validacion", self.user_in,  {headers: {}})
          .then((result) => {
            if (result.data.Autenticado){
              this.salida = "Autorización exitosa";
              this.autorizado = true
              //localStorage.setItem('isAuth', true)
              self.$emit('log-in', self.user_in.username)
            }else{
              this.salida = "Autorización fallida";
            }
          })
          .catch((error) => {
            this.salida = "Usuario no existe";
          })
      }
    },
    created: function(){
      this.username = this.$route.params.username
    }

  }
</script>

<style>
    .contenido_login {
        border: 3px solid #7a811b;
        border-radius: 15px 150px;
        background: #003d20;
        width: 100%;
        height: 60%;
        color: #E5E7E9;        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .login{
        margin: auto;
        padding: 0%;
        height: 100%;
        width: 360px;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login h2{
        color: #ffffff;
    }

    .login h5{
        color: red;
    }
    .login form{
        width: 50%;
        
    }
    .login input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border-radius: 5px 15px;
        border: 1px solid #7a811b;
        
    }
    
    .login button{
        width: 100%;
        height: 40px;
        color: #E5E7E9;
        background: #7a811b;
        border: 1px solid #E5E7E9;
        
        border-radius: 5px;
        
        margin: 5px 0;
    }
    .login button:hover{
        color: #E5E7E9;
        border: 1px solid #E5E7E9;
        background: rgb(4, 116, 0);
        border: 1px solid #7a811b;
    }

.saludo {
    color: red;
    display: none;
    
  }
  @media only screen and (max-width: 380px) {
  .saludo {
    color: red;
    display: none;
    
  }
}
</style>
