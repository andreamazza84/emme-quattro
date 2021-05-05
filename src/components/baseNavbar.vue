<template>
  <section id="navbar" :style="`height: ${navbar.height}`">
    <div v-if="showBars" class="container">
      <router-link to="/" class="home-page">
        <div class="logo" :style="`transform: scale(${logo.scale})`"></div>
      </router-link>
      <i class="menu-hamburger" @click="showHide()"></i>
      
      <!-- Mobile Menu -->
      <div v-if="showMenu" class="mobile-menu">
          <i class="close-menu" @click="showHide()"></i>
          <router-link class="mobile-menu-link" to="/"><span @click="showHide()">Home</span></router-link>
          <router-link class="mobile-menu-link" to="/chi-siamo"><span @click="showHide()">Chi Siamo</span></router-link>
          <router-link class="mobile-menu-link" to="/prodotti"><span @click="showHide()">Prodotti</span></router-link>
          <router-link class="mobile-menu-link" to="/servizi"><span @click="showHide()">Servizi</span></router-link>
          <router-link class="mobile-menu-link" to="/news"><span @click="showHide()">News</span></router-link>
          <router-link class="mobile-menu-link" to="/contatti"><span @click="showHide()">Contatti</span></router-link>
          <router-link class="mobile-menu-link" to="/area-clienti"><span @click="showHide()">Area<br>Clienti</span></router-link>
      </div>
    </div>
    <!-- Desktop Menu -->
    <div v-else class="container desktop-menu">
      <router-link class="desktop-menu-link" to="/chi-siamo">Chi Siamo</router-link>
      <router-link class="desktop-menu-link" to="/prodotti">Prodotti</router-link>
      <router-link class="desktop-menu-link" to="/servizi">Servizi</router-link>
      <router-link class="desktop-menu-link home-page" to="/">
        <div class="logo" :style="`transform: scale(${logo.scale})`"></div>

      </router-link>
      <router-link class="desktop-menu-link" to="/news">News</router-link>
      <router-link class="desktop-menu-link" to="/contatti">Contatti</router-link>
      <router-link class="desktop-menu-link" to="/area-clienti">Area<br>Clienti</router-link>
    </div>

  </section>
</template>
<script>
export default {
  data(){
    return{
      showBars: false,
      showMenu: false,
      closeMenu: false,
      window: {       // dichiarazione iniziale per la variabile window
        width: 0,
        height: 0,
        scrollY: 0,
      },
      navbar:{
        width: 0,
        height: '150px',
        scaleY: '100%'
      },
      logo: {
        width: '130px',
        height: '130px',
        scale: '100%'
      }
    }
  },
  methods:{
    /**  
    * @window_resize Shows menu hamburger under 992px screen width    
    */
    mediaWidth: function() {
        //mobile 768px
        //tablet 992px
        //desktop 1200px
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
        if(window.innerWidth > 1200) {
          this.showBars = false;
          this.showManu = false;
        }
        if(window.innerWidth  <= 1200){
            this.showBars = true;
        }
    },
    /**
      @click shows the menu for mobile devices
     */
    showHide: function(){
      if(this.showMenu){
        this.showMenu = false;
      }
      else{
        this.showMenu = true;
      }
    },
    navbarHeight: function(){
      this.window.scrollY = window.scrollY;
      console.log(this.window.scrollY);
      if(this.window.scrollY === 0){
        //this.$emit({'scroll' : false});
        this.navbar.height = '150px';
        this.navbar.scaleY = '100%';
        this.logo.width = '130px';
        this.logo.height = '130px';
        this.logo.scale = '100%';
      }
      else{
        //this.$emit('scroll');
        this.navbar.height = '100px';
        this.navbar.scaleY = '80%';
        this.logo.width = '85px';
        this.logo.height = '85px';
        this.logo.scale = '70%';
      }
    },
  },
  created() {
    window.addEventListener('resize', this.mediaWidth);
    window.addEventListener('scroll', this.navbarHeight);
  },
  mounted(){
    this.mediaWidth();
  },
  distroyed() {
    window.removeEventListener('resize', this.mediaWidth);
    window.removeEventListener('scroll', this.navbarHeight);

  },
}
</script>
