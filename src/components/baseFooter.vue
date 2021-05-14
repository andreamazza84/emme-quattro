<template>
  <div id="footer">

    <section class="footer-top">
      <div class="container footer-container">
      
        <div class="logo">
          <router-link class="home-page-link" to="/">
              <div class="clear-logo" alt="logo M4"></div>
          </router-link>
        </div>

        <ul class="contatti">
          <li>EMME QUATTRO SRL</li>
          <li>Rappresentanze vernici legno</li>
          <li>Via Pantanelli 115/117</li>
          <li>61025 Montelabbate (PU)</li>
          <li><hr></li>
          <li>Tel. 0721 498949 | Fax. 0721 498395</li>
          <li>P.IVA 01198290411</li>  
        </ul>

        <ul class="social">
          <li><a class="facebook" href="https://www.facebook.com"><i class="fab fa-facebook-square"></i></a></li>
          <li><a class="linkedin" href="https://www.linkedin.com"><i class="fab fa-linkedin"></i></a></li>
          <li><a class="instagram" href="https://www.instagram.com"><i class="fab fa-instagram-square"></i></a></li>
        </ul>
        
        <ul class="menu">
          <li>
            <router-link class="footer-menu-links" to="/chi-siamo"><span>chi siamo</span></router-link>
          </li>
          <li>
            <router-link class="footer-menu-links" to="/prodotti"><span>prodotti</span></router-link>
          </li>
          <li>
            <router-link class="footer-menu-links" to="/servizi"><span>servizi</span></router-link>
          </li>
          <li>
            <router-link class="footer-menu-links" to="/news"><span>news</span></router-link>
          </li>
          <li>
            <router-link class="footer-menu-links" to="/contatti"><span>contatti</span></router-link>
          </li>
          <li>
            <router-link class="footer-menu-links" to="/area-clienti"><span>area clienti</span></router-link>
          </li>
        </ul>
        
      </div>
      <!--
      <div class="container">
        <div class="row">
          <div class="logo col-lg-1 col-md-12 col-sm-12">
            <router-link to="/">
              <div class="clear-logo" alt="logo M4"></div>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis rem a, officia sint aperiam, voluptas excepturi atque fuga culpa nam delectus quasi. Aliquam praesentium minima assumenda fugit voluptas vel!
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis rem a, officia sint aperiam, voluptas excepturi atque fuga culpa nam delectus quasi. Aliquam praesentium minima assumenda fugit voluptas vel!
          </div>
          <div class="providers col-lg-4 col-md-6 col-sm-12">
            <div>I nostri fornitori:</div> 
            <a href="https://www.chimen.it/"><img src="~@/assets/logo-chimen.png" alt="logo CHIMEN"></a>
            <a href="https://www.bottosso-frighetto.it"><img src="~@/assets/logo-BF.jpg" alt="logo Botosso e Frighetto"></a>
          </div>
        </div>
      </div>
      -->
      <div class="scroll-to-top" @click="scrollToTop()"><i class="fas fa-chevron-up"></i></div>
    </section>

    <section class="footer-bottom">
    <!--  
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-offset-lg-1">
            <div class="privacy-policy">
              Emme Quattro Srl - Rappresentanze vernici legno - Via Pantanelli 115/117 - 61025 Montelabbate (PU) - Tel. 0721.498949 Fax 0721.498395 - P. Iva 01198290411 - <router-link class="privacy-policy-link" to="/privacy-policy">Privacy policy</router-link>
            </div> 
          </div>
           
        </div>
      </div>
      
    -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'baseFooter',
  props: {
    //msg: String
  },
  data(){
    return{
      logoM4:{
        path: 'M4_2021_clear_logo_only.svg'
      },
    }
  },
  methods:{
    scrollToTop: function(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
  },

}
</script>

