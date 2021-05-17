<template>
  <div class="contact-us pt-200">
    <div class="container90">
      <div class="row form">
        
        <div class="col-lg-8 col-md-8 col-sm-12">
          <h3 class="py-2-1">Contattaci</h3>
          <form action="submit" method="post">
            <label for="name">Nome:
              <input type="text" name="name" placeholder="Nome" minlength="3" maxlength="100" required>
            </label>
            <label for="email">Email:
              <input type="email" name="email" placeholder="Email" maxlength="100" required>
            </label>
            <label for="name">Oggetto:
              <input type="text" name="name" placeholder="Nome" minlength="3" maxlength="100" required>
            </label>
            <label for="message">Il tuo messaggio:
              <textarea name="message" id="message" cols="20" rows="10" minlength="3" maxlength="10000" required></textarea>
            </label>
            <label for="info">
              <div class="info">
                <input type="checkbox" name="info" required>
                <div>Accetto l'informativa <br> sull'utilizzo dei dati</div>
              </div>
              <router-link class="btn" to="/informativa-area-contatti">Leggi<br>l'informativa</router-link>
            </label>
            <hr>
            <button type="submit" class="btn">Invia</button>
          </form>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12">
          <h3 class="py-2-2 row">Contatti</h3>
          <ul class="contatti left col-lg-6">
            <li><i class="fas fa-print fa-lg"></i></li>
            <li><i class="fas fa-phone-alt fa-lg"></i></li>
            <li><i class="fas fa-envelope-open-text fa-lg"></i></li>
            <li><i class="fas fa-map-marked-alt fa-lg"></i></li>
          </ul>
          <div class="contatti right col-lg-6">
            <input type="text" v-for="contatto in contatti" :name="contatto.slug" :key="contatto.slug" :value="contatto.content" readonly="readonly"><input type="button" value="Copia" class="btn">
          </div>
        </div>

      </div>
      <div class="row contacts">
        <div class="col-lg-12">
          <h3 class="py-2-1">Dove siamo</h3>
          <GoogleMap/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GoogleMap from '@/components/GoogleMap'
export default {
  components: {
    GoogleMap
  },
  data(){
    return {}
  },
  computed:{
    contatti: function(){
      return this.$store.state.contatti;
    },
    pages: function(){
      return this.$store.state.pages
    },
  },
  mounted(){
    //console.log(this.contatti);
  }
}
</script>