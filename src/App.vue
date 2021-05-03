<template>
  <div id="app">
    <div id="header">
      <baseNavbar/>
      <section id="jingle">
        <div class="container">
          <div class="content">il colore su misura</div>
        </div>
      </section>
    </div>
    
    <router-view id="main"/>
    
    <div id="footer">
    
    </div>
  </div>
</template>

<script>
  import baseNavbar from '@/components/baseNavbar' 
  export default {
    components:{
      baseNavbar
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
    mounted(){
        this.retrieveData('prodotti');
        this.retrieveData('servizi');
        this.retrieveData('carosello');

    }, 
}
</script>

<style lang="scss">
  @import "~@/scss/app.scss";
</style>