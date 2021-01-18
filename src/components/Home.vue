<template>
<div id="home" class="home">
  <div class="contenido_home">
    <h1>Bienvenidos a miHuertaAPP</h1>

    <p>miHuertAPP es una aplicación web diseñada para que nuestros campesinos puedan comercializar sus productos directamente con el
      consumidor final.
    </p>
    
    <!-- div id="input">
            <h2>Ingresa a tu CosechaApp</h2>
        <div id="no">
            <h1>Login</h1>
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            <button type="button" v-on:click="login()">Login</button>
        </div>
    </div -->
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style>

    .contenido_home {
        border: 3px solid #7a811b;
        border-radius: 15px 150px;
        background: #003d20;
        width: 360px;
        height: 80%;
        color: #E5E7E9;        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    .contenido_home *{
      padding: 15px;
    }
    .home{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .home h1{
      text-align: center;
    }

    .home p{
      text-align: center;
    }

    .login h2{
        color: #ffffff;

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
        padding: 10px 25px;
        margin: 5px 0;
    }

    .login button:hover{
        color: #E5E7E9;
        border: 1px solid #E5E7E9;
        background: rgb(4, 116, 0);
        border: 1px solid #7a811b;
    }
</style>
