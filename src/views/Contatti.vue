<template>
  <div id="contact-us">
    <div class="container">
      <div class="row">
        <div class="contatti col-lg-4">
          <div class="contatti" v-for="contatto in contatti" :key="contatto.slug">
            <span v-html="contatto.title.rendered"></span>
            <span v-html="contatto.content.rendered"></span>  

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      contatti: this.$store.state.contatti,
    }
  }
}
</script>