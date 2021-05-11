<template>
  <div id="footer">

    <section class="footer-top">
      <div class="container">
        <div class="row">
          <div class="logo col-lg-4 col-md-12 col-sm-12">
            <router-link to="/">
              <img class="whole-logo" src="@/assets/M4_2021_clear.svg" alt="logo M4">
            </router-link>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis rem a, officia sint aperiam, voluptas excepturi atque fuga culpa nam delectus quasi. Aliquam praesentium minima assumenda fugit voluptas vel!
          </div>
          <div class="providers col-lg-4 col-md-6 col-sm-12">
            <div>I nostri fornitori:</div> 
            <a href="https://www.chimen.it/"><img src="~@/assets/logo-chimen.png" alt="logo CHIMEN"></a>
            <a href="https://www.bottosso-frighetto.it"><img src="~@/assets/logo-BF.jpg" alt="logo Botosso e Frighetto"></a>
          </div>
        </div>
      </div>
      <div class="scroll-to-top" @click="scrollToTop()"></div>
    </section>

    <section class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-offset-lg-1">
            <div class="privacy-policy">
              Emme Quattro Srl - Rappresentanze vernici legno - Via Pantanelli 115/117 - 61025 Montelabbate (PU) - Tel. 0721.498949 Fax 0721.498395 - P. Iva 01198290411 - <router-link class="privacy-policy-link" to="/privacy-policy">Privacy policy</router-link>
            </div> 
          </div>
           
        </div>
      </div>
      
    </section>

  </div>
</template>

<script>
export default {
  name: 'baseFooter',
  props: {
    //msg: String
  },
  methods:{
    scrollToTop: function(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
  },

}
</script>

