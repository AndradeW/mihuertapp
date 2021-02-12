<template>
  <div id="home" class="home">
    <div class="contenido_home">
      <h1>Nuestro equipo</h1>

      <div class="perfiles">

   
      <div class="noticaCorta">
        <img src="../assets/hombre.jpg" alt="news2" class="not-ima" />
        <h4>Lorem ipsum dolor sit.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          placeat quod omnis impedit nam fugit voluptatum aperiam architecto,
          corporis quo.
        </p>
        <a href="#">Leer mas...</a>
      </div>

       <div class="noticaCorta">
        <img src="../assets/mujer.jpg" alt="news2" class="not-ima" />
        <h4>Lorem ipsum dolor sit.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          placeat quod omnis impedit nam fugit voluptatum aperiam architecto,
          corporis quo.
        </p>
        <a href="#">Leer mas...</a>
      </div>

       <div class="noticaCorta">
        <img src="../assets/hombre.jpg" alt="news2" class="not-ima" />
        <h4>Lorem ipsum dolor sit.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          placeat quod omnis impedit nam fugit voluptatum aperiam architecto,
          corporis quo.
        </p>
        <a href="#">Leer mas...</a>
      </div>
       <div class="noticaCorta">
        <img src="../assets/hombre.jpg" alt="news2" class="not-ima" />
        <h4>Lorem ipsum dolor sit.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          placeat quod omnis impedit nam fugit voluptatum aperiam architecto,
          corporis quo.
        </p>
        <a href="#">Leer mas...</a>
      </div>
       
   </div>

      <!-- <img src="../assets/noticia.png" alt="noticia"> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    msg: String,
  },
};
</script>

<style>
.contenido_home{

  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
.perfiles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  padding: 40px 200px;
  //width: 50px;
  //element: center;
}

.perfiles img {
  width: 200px;
  height: auto;
}
</style>
