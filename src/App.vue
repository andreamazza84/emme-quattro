<template>
  <div id="app">
    <div id="header">
      <baseNavbar/>
    </div>
    
    <router-view id="main" :scroll="window.scroll"/>
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
            const result = await this.$store.dispatch('retrieveData', item);
        }
        catch(error){
            console.log("Error", error);
        }
      },
      scroll: function(){
        this.window.scrollY = window.scrollY;
        this.window.scroll = true;

        if(this.window.scrollY === 0){
          this.window.scroll = false;
        }
      }
    },

    created(){
      window.addEventListener('scroll', this.scroll);
    },
    mounted(){
        this.retrieveData('prodotti');
        this.retrieveData('servizi');
        this.retrieveData('carosello');
        this.retrieveData('contatti');
        this.retrieveData('pages');
        this.retrieveData('posts');
        this.retrieveData('news');
    },
    destroyed(){
      window.removeEventListener('scroll', this.scroll);
    }
}
</script>

<style lang="scss">
  @import "~@/scss/app.scss";
</style>