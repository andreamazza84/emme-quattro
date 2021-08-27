<template>
  <div id="app">
    <div id="header">
      <baseNavbar/>
    </div>
    <router-view id="main"/>
    <baseFooter/>
  </div>
</template>

<script>
import baseNavbar from '@/components/baseNavbar'
import baseFooter from '@/components/baseFooter'
export default {
  components:{
    baseNavbar,
    baseFooter,
  },
  data(){
    return {
      window: {
        scrollY: 0,
        scroll: false,
      },
    }
  },
  methods:{
    async retrieveData(item){
      try{
        await this.$store.dispatch('retrieveData', item);
      }
      catch(error){
        console.log("Error", error);
      }
    },
  },
  mounted(){
      this.retrieveData('carosello');
      this.retrieveData('news');
      this.retrieveData('prodotti');
      this.retrieveData('servizi');
      this.retrieveData('contatti');
      this.retrieveData('posts');
      this.retrieveData('pages');
  },
}
</script>

<style lang="scss">
  @import "~@/scss/app.scss";
</style>
