<template>
<div id="consulta" class="consulta">
    <div class="contenido_consulta">
        <!-- <h2>Hola<span>{{rol}} </span> ¡Bienvenido!</h2> -->
        <form class="form-group" v-on:submit.prevent>
            <!-- <label>Ingrese usuario a consultar:</label> -->
            <br>
            <input type="text" v-model="datosUsuario.username" placeholder="Usuario">
            <br>
            <input id="nombre" type="text" v-model="datosUsuario.nombre" placeholder="Nombre">
            <br>
            <input id="apellido"  type="text" v-model="datosUsuario.apellido" placeholder="Apellido">
            <br>
            <input id="zona"  type="text" v-model="datosUsuario.zona" placeholder="Zona">
            <br>
            <input id="password"  type="password" v-model="datosUsuario.password" placeholder="Contraseña">
            <br>
            <!--input id="permiso" type="text" v-model="datosUsuario.permiso" placeholder="rol"-->
            <select id="Rol" name="Rol" v-model="datosUsuario.permiso">
                <option selected value=""> Elige una opción </option>
                <option value="administrador">Administrador</option>
                <option value="comprador">Comprador</option>
                <option value="pequenoProdcutor">Pequeño productor</option>
            </select>
            <br>
            <button @click="adminCrear" type="submit" >Crear</button>
            <button @click="adminConsultar" type="submit" >Consultar</button>
            <button @click="adminActualizar" type="submit" >Actualizar</button>
            <button @click="adminBorrar" type="submit" >Borrar</button>
        </form>
        
        <button @click="dash" type="submit" >Dashboard</button>
        <!-- <h5> {{salida}} </h5> -->
        
    </div>
</div>

</template>

<script>
import axios from 'axios';
import LoginVue from './Login.vue';
   export default {
    name: "Admin",
    data:function(){
        salida: "Esperando acción";
        rol: "Este es el rol";
      return {
       
          
        //   cargo: "Tipo de usuario: ",
        //   salida: "Esperando acción", 
        //   rol: "Este es el rol",
          
          
          datosUsuario: {
                username: "",
                nombre: "",
                apellido:  "",
                zona: "",
                password: "",
                permiso: "",
        }
      }
    },
 
    methods: {
      adminConsultar: function(){
        //this.username = this.$route.params.username 
        let self = this
        // salida: "Esperando acción"
        // rol: "Este es el rol"

        if (this.datosUsuario.username == ""){alert("No ha ingresado un usuario")}
        else {
        axios.get("https://mihuertapp-back.herokuapp.com/usuario/permiso/"+ 
        this.datosUsuario.username).then((result) => {
          let rol = result.data.permiso
            
          if( rol == "administrador" || rol == "comprador"){
              this.salida = "Tipo de usuario: "+ rol//result.data.permiso
              //alert(this.salida)
              
                      }
                      else if (rol == "pequenoProductor"){
                        this.salida = "Tipo de usuario: " + "Pequeño productor"
                        
                      }
                      else {this.salida = result.data}
                        document.getElementById("nombre").value = result.data.nombre
                        document.getElementById("apellido").value = result.data.apellido
                        document.getElementById("zona").value = result.data.zona
                        document.getElementById("password").value = result.data.password
                        document.getElementById("Rol").value = rol

                        console.log(this.salida)
                        if (this.salida == "Usuario no registrado"){alert("Usuario no registrado")}


                      }).catch((error) => {
        alert("ERROR Servidor");
        console.log(error);
      });
      
		
        }
    },
    
    
    adminCrear: function (){
        let self = this
        

        if (this.datosUsuario.username == ""){alert("No ha ingresado un usuario")}
        else {
        axios.post("https://mihuertapp-back.herokuapp.com/usuarios/crear", self.datosUsuario,  {headers: {}}).then((result)=>{
            var operacion_exitosa =result.data.mensaje 
            if (operacion_exitosa == "Usuario creado exitosamente"){
                this.salida = "Usuario  " + self.datosUsuario.username + " creado exitosamente"
            }else {this.salida = "No es posible crear el usuario"}
            alert(this.salida)
        }).catch((error)=>{
            alert("ERROR Servidor");
            console.log(error);
        });

    }

  },

      adminBorrar: function (){
        let self = this
       
        if (this.datosUsuario.username == ""){alert("No ha ingresado un usuario")}
        else {
        axios.delete("https://mihuertapp-back.herokuapp.com/usuario/eliminar/" + this.datosUsuario.username).then((result)=>{
            var operacion_exitosa =result.data.mensaje 
            if (operacion_exitosa == "Usuario eliminado exitosamente"){
                this.salida = "Usuario " + self.datosUsuario.username + " eliminado exitosamente"
            }else {this.salida = "No se logró borrar"}
        }).catch((error)=>{
            alert("ERROR Servidor");
            console.log(error);
        });

    }

  },

  adminActualizar: function (){
        let self = this
       
        if (this.datosUsuario.username == ""){alert("No ha ingresado un usuario")}
        else {
        axios.put("https://mihuertapp-back.herokuapp.com/usuario/actualizar/", self.datosUsuario,  {headers: {}}).then((result)=>{
            var operacion_exitosa =result.data.mensaje 
            if (operacion_exitosa == "Usuario actualizado exitosamente"){
                this.salida = "Usuario " + self.datosUsuario.username + " actualizado exitosamente"
            }else {this.salida = "El usuario que intenta actualizar no se encuentra registrado"}
        }).catch((error)=>{
            alert("ERROR Servidor");
            console.log(error);
        });

    }
    },

    dash: function(){
        if(this.$route.name != "dashboard"){
        this.$router.push({name: "dashboard"})
        }

    }
    
    }
}


</script>

<style>
    .contenido_consulta {
        border: 3px solid #7a811b;
        border-radius: 15px 150px;
        background: #003d20;
        width: 100%;
        height: 90%;
        color: #E5E7E9;        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 50hv;
    }
    .consulta{
        margin: auto;
        padding: 0%;
        height: 100%;
        width: 500px;
    
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 50hv;
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
