<template>
<div id="home" class="home">
    <div class="contenido_home">
    <!-- h1>Bienvenidos a miHuertaAPP</h1 -->
				
        <table class="table table-striped">
                <thead>
            <tr>
                <th scope="col"> Usuario </th>
                <th scope="col"> Nombre </th>
                <th scope="col"> Apellido </th>
                <th scope="col"> Zona </th>
                <th scope="col"> Tipo de permiso </th>
            </tr>
                </thead>
            <tbody>						
            <tr v-for="item in salida">
                <td>{{item.username}}</td>
                <td>{{item.nombre}}</td>
                <td>{{item.apellido}}</td>
                <td>{{item.zona}}</td>
                <td>{{item.permiso}}</td>
            </tr>
            </tbody>
        </table>
	</div>

    <div id="input">
        <button type="button" v-on:click="adminDash">Buscar</button>  
    </div>
</div>

</template>

<script>
import axios from 'axios';
import LoginVue from './Login.vue';
   export default {
    name: "Dashboard",
    data:function(){
        salida: "Esperando acción"
        rol: "Este es el rol"
        lists : []
      return {
       
          
        //   cargo: "Tipo de usuario: ",
          salida: "Esperando acción", 
        //   rol: "Este es el rol",
          
          
        //   datosUsuario: {
        //         username: "",
        //         nombre: "",
        //         apellido:  "",
        //         zona: "",
        //         password: "",
        //         permiso: "",
        // }
      }
    },
 
    methods: { 
        
    adminDash: function (){
        let self = this
       
        axios.get("https://mihuertapp-back.herokuapp.com/usuarios/resumen/").then((result)=>{
            
            let datosUsuario = result.data
            //this.lists = result.data;

            console.log("Here")

            

            if (datosUsuario == "Usuario actualizado exitosamente"){
                this.salida = datosUsuario
            }else {

            for (var i = 0; i < datosUsuario.length; i++) {

                //console.log (datosUsuario[i].username);
                let prueba = (Object.values(datosUsuario[i]));

            console.log((prueba))
             this.salida = datosUsuario
             }   
            }
        }).catch((error)=>{
            alert("ERROR Servidorrewrwe");
            console.log(error);
        });
  },


    // def obtener_usuarios ():
    // lista_usuarios = []
    // for usuario in Usuarios:
    //     lista_usuarios.append(Usuarios[usuario])
    // return lista_usuarios


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
    }
    .consulta{
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

    td {
  text-transform: capitalize;
}
</style>
