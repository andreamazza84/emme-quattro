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
      baseFooter
    },
    data(){
      return {}
    },
    methods:{
      async retrieveData(item){
        try{
            const result = await this.$store.dispatch('retrieveData', item);
        }
        catch(error){
            console.log("Error", error);
        }
      }
    },
    // created(){
    //   window.addEventListener('scroll', this.scrollPosition);
    // },
    mounted(){
        this.retrieveData('prodotti');
        this.retrieveData('servizi');
        this.retrieveData('carosello');
    },
    // destroyed(){
    //   window.removeEventListener('scroll', this.scrollPosition);
    // }
}
</script>

<style lang="scss">
  @import "~@/scss/app.scss";
</style>