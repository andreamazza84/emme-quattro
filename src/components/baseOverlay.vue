<template>
  <div
    class="cookie"
    :class="cookie ? 'hidden' : 'visible'"
  >
    <v-btn
      class="close"
      outlined
      fab
      color="#fff"
    >
      <v-icon
        @click="$store.dispatch('setCookie', 'cookie-policy')"
      >
        fas fa-times
      </v-icon>
    </v-btn>
    <div class="cookie-content">
      <div
        class="disclaimer"
      >
      Noi e terze parti selezionate utilizziamo cookie o tecnologie simili come specificato nella cookie policy.<br>
      Puoi acconsentire all’utilizzo di tali tecnologie chiudendo questa informativa, interagendo con un link o un pulsante al di fuori di questa informativa o continuando a navigare in altro modo.
      </div>
      <div class="buttons">
        <v-btn
          elevation="2"
          rounded
          outlined
          color="#fff"
          class="policy white--text mr-2"
          @click="$router.push('/cookie-policy').catch(()=>{}), $store.dispatch('setCookie', 'cookie-policy'), scrollToTop()"
        >
          <span>Cookie Policy</span>
        </v-btn>
        <v-btn
          elevation="2"
          rounded
          class="accept white--text"
          @click="$store.dispatch('cookie'), $store.dispatch('setCookie', 'cookie-policy')"
        >
          <span>Accetta tutti i cookie</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      cookie: function () {
        return this.$store.state.cookie;
      } 
    },
    mounted () {
      this.$store.dispatch('getCookie', 'cookie-policy');
    },
    methods: {
      scrollToTop: function(){
        window.scrollTo(0,0);
      },
      
    }
  }
</script>
<style lang="scss" scoped>
  .cookie{
    position: fixed;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    justify-content: center;
    background-color: #00000099;
    .cookie-content{
      display: flex;
      padding: 0 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      .buttons{
        .accept{
          background-color: $primary;
          color: $lightcolor;
        }
      }
    }
    .close{
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
    .disclaimer{
      line-height: 2rem;
      margin-bottom: 2rem;
      font-weight: 600;
    }
  }
  .hidden{
    display: none;
  }
  .visible{
    display: flex;
  }
</style>