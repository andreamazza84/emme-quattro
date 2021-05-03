<template>
  <section id="navbar">
    <div class="container">
      <router-link to="/chi-siamo" >Chi Siamo</router-link>
      <router-link to="/prodotti" >Prodotti</router-link>
      <router-link to="/servizi" >Servizi</router-link>
      <router-link to="/" class="home-page"><div class="logo"></div></router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/contatti">Contatti</router-link>
      <router-link to="/area-clienti">Area<br>Clienti</router-link>
      <div class="menu-hamburger"></div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      window: {       // dichiarazione iniziale per la variabile window
        width: 0,
        height: 0,
      },
    }
  },
  methods:{
    /**  
    * Cambia il numero di cards da mostrare in base alla larghezza della finestra.   
    */
    mediaQuery: function() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
        let width = 0;
        //tablet
        if(window.innerWidth <= 992 && window.innerWidth > 768) {
            this.show = this.size.md; //2
        }
        //mobile
        else if(window.innerWidth  <= 768){
            this.show = this.size.sm; //1
        }
        //desktop
        else if(window.innerWidth  > 992){
            this.show = this.size.lg; //3
        }
        width = (100/this.show);
        this.cardWidth = width.toString() + '%';
        //console.log(this.cardWidth);
        return this.cardWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.mediaQuery);
  },
  distroyed() {
    window.removeEventListener('resize', this.mediaQuery);
  },
}
</script>
