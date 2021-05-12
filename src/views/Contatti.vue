<template>
  <div class="contact-us">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="row">
            <h3>Contatti</h3>
            <div class="contatti" v-for="contatto in contatti" :key="contatto.slug">
              <div class="col-lg-6">
                <span class="index" v-html="contatto.title.rendered"></span>
              </div>
              <div class="col-lg-6">
                <span class="content" v-html="contatto.content.rendered"></span>  
              </div>            
            </div>
          </div>
        </div>

        <div class="col-lg-8 col-md-6 col-sm-12">
          <h3>Dove siamo</h3>
          <div id="map"></div>
        </div>

      </div>
      </div>
    </div>
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
      async
>
export default {
  data(){
    return {
      contatti: this.$store.state.contatti,
    }
  }
}
</script>