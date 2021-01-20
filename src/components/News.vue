<template>
<div id="home" class="home">
  <div class="contenido_homeNO">
        <div class="container">
        <nav class="navegacion">
            <img src="../assets/image.png" alt="icono" class="icono">
        </nav>

        <div class="noticia">
            <img src="../assets/noticia.png" alt="noticia">

        </div>
                
        <div class="noticias">
            <div>
                <img src="../assets/news1.jpg" alt="news1" class="not-ima">
                <h4>Lorem ipsum dolor sit.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat quod omnis impedit nam fugit voluptatum aperiam architecto, corporis quo.</p>
                <a href="#">Leer mas...</a>
            </div>
            <div>
                <img src="../assets/news2.jpg" alt="news2" class="not-ima">
                <h4>Lorem ipsum dolor sit.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat quod omnis impedit nam fugit voluptatum aperiam architecto, corporis quo.</p>
                <a href="#">Leer mas...</a>
            </div>
            <div>
                <img src="../assets/news3.jpg" alt="news3" class="not-ima">
                <h4>Lorem ipsum dolor sit.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat quod omnis impedit nam fugit aenm voluptatum aperiam architecto, corporis quo.</p>
                <a href="#">Leer mas...</a>
            </div>
            <div>
                <img src="../assets/news2.jpg" alt="news4" class="not-ima">
                <h4>Lorem ipsum dolor sit.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat quod omnis impedit nam fugit voluptatum aperiam architecto, corporis quo.</p>
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
  name: 'News',
  props: {
    msg: String
  }
}
</script>

<style>
    


body{
    background-color: rgb(14, 49, 34);
    color: rgb(40, 110, 110);
    width: auto;
}

.container{
    background-color: rgb(21, 107, 187);
    width: auto;
}

.icono{
    float: left;;
    width: 50px;
    padding: 10px;
}
.navegacion ul li{

    display: inline-block;
    padding: 40px 20px;
   
}
.navegacion{
    height: 70px;
}


.noticia{
    width: auto;

  }

.noticias{
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


.finalsi{
    background-color: rgb(65, 62, 62);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    padding: 40px 30px;
}

footer{
    text-align: center;
    background-color: rgb(38, 41, 41);
    height: 40px;
    
}

@media only screen and (max-width: 600px) {
    .noticias{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        padding: 40px 15px;
    }
    .finalsi{
        background-color: rgb(65, 62, 62);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        padding: 40px 30px;
    }
    .noticia{
        width: 
    
      }
  }




    .contenido_home {
        border: 3px solid #7a811b;
        border-radius: 15px 150px;
        background: #003d20;
        width: 80%;
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
