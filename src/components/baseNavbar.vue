<template>
  <div>
    <section id="navbar" :style="`height: ${navbar.height}`">

      <!-- Mobile Menu -->
      <div v-if="showBars" class="container menu-hamburger">
        <router-link to="/" class="home-page">
          <div class="logo" :style="logoStyle"></div>
        </router-link>
        <i class="icon-hamburger" @click="showHide()"></i>
        
        <div v-if="showMenu" class="container mobile-menu">
            <i class="close-menu" @click="showHide()"></i>
            <router-link class="mobile-menu-link" to="/"><span class="link" @click="showHide(); scrollToTop()">Home</span></router-link>
            <router-link class="mobile-menu-link" to="/chi-siamo"><span class="link" @click="showHide(); scrollToTop()">Chi Siamo</span></router-link>
            <router-link class="mobile-menu-link" to="/prodotti"><span class="link" @click="showHide(); scrollToTop()">Prodotti</span></router-link>
            <router-link class="mobile-menu-link" to="/servizi"><span class="link" @click="showHide(); scrollToTop()">Servizi</span></router-link>
            <router-link class="mobile-menu-link" to="/news"><span class="link" @click="showHide(); scrollToTop()">News</span></router-link>
            <router-link class="mobile-menu-link" to="/contatti"><span class="link" @click="showHide(); scrollToTop()">Contatti</span></router-link>
            <router-link class="mobile-menu-link" to="/area-clienti"><span class="link" @click="showHide(); scrollToTop()">Area<br>Clienti</span></router-link>
        </div>
      </div>

      <!-- Desktop Menu -->
      <div v-else class="container desktop-menu">
        <router-link class="desktop-menu-link" to="/chi-siamo"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Chi Siamo</span></router-link>
        <router-link class="desktop-menu-link" to="/prodotti"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Prodotti</span></router-link>
        <router-link class="desktop-menu-link" to="/servizi"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Servizi</span></router-link>
        <router-link class="desktop-menu-link home-page" to="/">
          <div class="logo" :style="logoStyle" @click="scrollToTop()"></div>
        </router-link>
        <router-link class="desktop-menu-link" to="/news"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">News</span></router-link>
        <router-link class="desktop-menu-link" to="/contatti"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Contatti</span></router-link>
        <router-link class="desktop-menu-link" to="/area-clienti"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Area<br>Clienti</span></router-link>
      </div>
    </section>

    <section id="jingle">
      <div class="container" v-show="jingle.show">
        <div class="content">il colore su misura</div>
      </div>
    </section>
  </div>
</template>
<script>
import routes from '../router/index';
export default {
  data(){
    return{
      router: routes,
      showBars: false,
      showMenu: false,
      closeMenu: false,
      window: { 
        width: 0,
        height: 0,
        scrollY: 0,
      },
      navbar:{
        width: 0,
        height: '150px',
      },
      logo: {
        scale: '100%',
        dim: '130px',
      },
      jingle:{
        show: true,
      },
      link:{
        size: '1.5rem',
      },
    }
  },
  computed:{
    logoStyle() {
      return {'width': this.logo.dim, 'height': this.logo.dim};
      },
    },

  methods:{
    /** Scrolls page to top.
    * @click 
    */
    scrollToTop: function(){
      window.scrollTo(0,0);
    },
    /** Shows the menu for mobile devices
    * @click 
    */
    showHide: function(){
      if(this.showMenu){
        this.showMenu = false;
      }
      else{
        this.showMenu = true;
      }
    },
    /** Shows menu hamburger under 992px screen width
    * @window_resize     
    */
    mediaWidth: function() {
        //mobile 768px
        //tablet 992px
        //desktop 1200px
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
        if(window.innerWidth > 1200) {
          this.showBars = false;
          this.showMenu = false;
        }
        if(window.innerWidth  <= 1200){
            this.showBars = true;
        }
    },
    /** Adjusts the navbar height on the scroll position.
    * @window_scroll 
    */
    navbarHeight: function(){
      this.window.scrollY = window.scrollY;
      this.navbar.height = '90px';
      this.jingle.show = false;
      this.link.size = '1.2rem';
      if(this.window.scrollY === 0){
        this.navbar.height = '150px';
        this.jingle.show = true;
        this.link.size = '1.5rem';
      }
    },
    /** Re-render navbar logo dimensions
    * @window_scroll 
    * @window_resize
    */
    logoScale: function(){
      this.logo.dim = '78px';
      if(this.window.scrollY === 0){
        this.logo.dim = '90px';
        if(this.window.width > 1200){
          this.logo.dim = '130px';
        }
      }
    },
  },
  created() {
    window.addEventListener('resize', this.mediaWidth);
    window.addEventListener('scroll', this.navbarHeight);
    window.addEventListener('resize', this.logoScale);
    window.addEventListener('scroll', this.logoScale);
  },
  mounted(){
    this.mediaWidth();
    this.navbarHeight();
    this.logoScale();
  },
  distroyed() {
    window.removeEventListener('resize', this.mediaWidth);
    window.removeEventListener('scroll', this.navbarHeight);
    window.removeEventListener('resize', this.logoScale);
    window.removeEventListener('scroll', this.logoScale);
  },
}
</script>
