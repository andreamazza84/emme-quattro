<template>
  <div>
    <div class="informativa container90 pt-200">
        <h3 class="py-2-1">Informativa Area Contatti</h3>
        <div class="content" v-html="areaContattiPolicy.content.rendered">
          
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  computed: {
    //pages: function(){
    //  return this.$store.state.pages
    //},
    areaContattiPolicy: function(){
      return this.$store.state.pages.find((element) => {
        return element.slug === "informativa-area-contatti";
      });
    } 
  },
  mounted(){
    //console.log(this.pages);
  }
}
</script>