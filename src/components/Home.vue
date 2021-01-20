<template>
<div id="home" class="home">
  <div class="contenido_home">
    <h1>Bienvenidos a miHuertaAPP</h1>

    <p>miHuertAPP es una aplicación web diseñada para que nuestros campesinos puedan comercializar sus productos directamente con el
      consumidor final.
    </p>
    
    <img src="../assets/noticia.png" alt="noticia">
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

</style>
