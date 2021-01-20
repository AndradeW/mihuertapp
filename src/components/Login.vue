<template>
    <div id="login" class="login">
        <div class="contenido_home">
            <h2 class="saludo">Hola {{username}} ¡Bienvenido!</h2>
            <form v-on:submit.prevent="processAuthUser">
                <!-- <label>Ingrese su usuario</label> -->
                <input type="text" v-model="user_in.username" placeholder="Usuario">
                <!-- <label>Ingrese su contraseña</label> -->
                <br>
                <input type="password"  v-model="user_in.password" placeholder="Contraseña">
                <br>
                <button  type="submit">Ingresar</button>
            </form>
            <h5> {{salida}}</h5>
        <img src="../assets/noticia.png" alt="noticia">
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
              this.$router.push({name: "admin"})
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
 
</style>
