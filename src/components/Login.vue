<template>
    <div id="login" class="consulta">
        <div class="contenido_consulta">
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
        <!-- <img src="../assets/noticia.png" alt="noticia"> -->
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
        autorizado: false,
        username: "",
        
      }
    },
    methods: {
      processAuthUser: function(){
        var self = this
        axios.post("https://mihuertapp-back.herokuapp.com/usuarios/validacion", self.user_in,  {headers: {}})
          .then((result) => {
            if (result.data.Autenticado){
              this.salida = "Autorización exitosa";
              this.username = result.username;
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
  .contenido_consulta{
        border: 3px solid #7a811b;
        border-radius: 15px 150px;
        background: #003d20;
        width: 100%;
        height: 90%;
        min-height: 50vh;
        color: #E5E7E9;        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .consulta {
        margin: auto;
        padding: 0%;
        height: 100%;
        width: 500px;
      
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .consulta h2{
        color: #ffffff;
    }
    .consulta form{
        width: 70%;
        
    }
    .consulta input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border-radius: 5px 15px;
        border: 1px solid #7a811b;
        
    }
    
    .consulta button{
        width: 48%;
        height: 40px;
        color: #E5E7E9;
        background: #7a811b;
        border: 1px solid #E5E7E9;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
    .consulta button:hover{
        color: #E5E7E9;
        border: 1px solid #E5E7E9;
        background: rgb(4, 116, 0);
        border: 1px solid #7a811b;
    }
</style>
