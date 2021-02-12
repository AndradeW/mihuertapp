<template>
  <div id="home" class="home">
    <div class="contenido_home">
      <div class="container">
        <div class="noticia">
            <h1> <u> Noticias más importantes en el mundo del campo </u></h1>
            <h5> <i> 31 de Enero de 2021 </i></h5>
          <img src="../assets/noticia.png" alt="noticia" />
        </div>

        <div class="noticias">
          <div class="noticaCorta">
            <img src="../assets/news1.jpg" alt="news1" class="not-ima" />
            <h4>Lorem ipsum dolor sit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              placeat quod omnis impedit nam fugit voluptatum aperiam
              architecto, corporis quo.
            </p>
            <a href="#">Leer mas...</a>
          </div>
          <div class="noticaCorta">
            <img src="../assets/news2.jpg" alt="news2" class="not-ima" />
            <h4>Lorem ipsum dolor sit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              placeat quod omnis impedit nam fugit voluptatum aperiam
              architecto, corporis quo.
            </p>
            <a href="#">Leer mas...</a>
          </div>
          <div class="noticaCorta">
            <img src="../assets/news3.jpg" alt="news3" class="not-ima" />
            <h4>Lorem ipsum dolor sit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              placeat quod omnis impedit nam fugit aenm voluptatum aperiam
              architecto, corporis quo.
            </p>
            <a href="#">Leer mas...</a>
          </div>
          <div class="noticaCorta">
            <img src="../assets/news2.jpg" alt="news4" class="not-ima" />
            <h4>Lorem ipsum dolor sit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              placeat quod omnis impedit nam fugit voluptatum aperiam
              architecto, corporis quo.
            </p>
            <a href="#">Leer mas...</a>
          </div>
        </div>
        <div class="finalsi">
          <div class="final">
            <h4>Lorem, ipsum.</h4>
            <li>Ipsum dolor.</li>
            <li>repellendus.</li>
            <li>Fugit nam</li>
            <li>Ipsum dolor.</li>
            <li>rem maiores ut</li>
            <li>Ipsum dolor.</li>
            <li>Consequuntur</li>
          </div>

          <div class="final">
            <h4>Lorem, ipsum.</h4>
            <li>Ipsum dolor.</li>
            <li>repellendus.</li>
            <li>Fugit nam</li>
            <li>Ipsum dolor.</li>
            <li>rem maiores ut</li>
            <li>Ipsum dolor.</li>
            <li>Consequuntur</li>
          </div>
          <div class="final">
            <h4>Lorem, ipsum.</h4>
            <li>Ipsum dolor.</li>
            <li>repellendus.</li>
            <li>Fugit nam</li>
            <li>Ipsum dolor.</li>
            <li>rem maiores ut</li>
            <li>Ipsum dolor.</li>
            <li>Consequuntur</li>
          </div>
          <div class="final">
            <h4>Lorem, ipsum.</h4>
            <li>Ipsum dolor.</li>
            <li>repellendus.</li>
            <li>Fugit nam</li>
            <li>Ipsum dolor.</li>
            <li>rem maiores ut</li>
            <li>Ipsum dolor.</li>
            <li>Consequuntur</li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  props: {
    msg: String,
  },
};
</script>

<style>
bodya {
  background-color: rgb(104, 230, 175);
  color: rgb(40, 110, 110);
  width: auto;
}

.container {
  border: 3px solid #7a811b;
  border-radius: 15px 150px;
  background: #003d20;
  //background-color: rgb(17, 104, 92);
  width: 100%;
  padding: 60px;
  //margin: auto;
}

.icono {
  float: left;
  width: 50px;
  padding: 10px;
}
.navegacion ul li {
  display: inline-block;
  padding: 40px 20px;
}
.navegacion {
  height: 70px;
}

.noticias {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  padding: 40px 15px;
}

.noticias img {
  width: 100%;
  height: 180px;
}

.noticias h4 {
  font-size: 20px;
  margin: 10px 0;
}

.noticaCorta:hover {
  color: #e5e7e9;
  border: 1px solid #e5e7e9;
  background: rgb(4, 116, 0);
  border: 1px solid #7a811b;
  padding: 8px;
}

.noticaCorta a:hover {
    color:black;
}

.noticia {
    color: antiquewhite;
    
}

.finalsi {
  background-color: rgb(112, 114, 112);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  padding: 40px 30px;
}
/* 
footer{
    text-align: center;
    background-color: rgb(23, 56, 56);
    height: 40px;
    
} */

@media only screen and (max-width: 600px) {
  .noticias {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    padding: 40px 15px;
  }
  .finalsi {
    background-color: rgb(65, 62, 62);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    padding: 40px 30px;
  }
  .noticia {
    //width: 15px;
  }
}
</style>
