<template>
  <div class="contact-us pt-200">
    <div class="container90">
      <div class="row form">
        
        <div class="col-lg-8 col-md-8 col-sm-12">
          <h3 class="py-2-1">Contattaci</h3>
          <form action="submit" method="post">
            <label for="name">
              <input type="text" name="name" placeholder="Nome" minlength="3" maxlength="100" required>
            </label>
            <label for="email">
              <input type="email" name="email" placeholder="Email" maxlength="100" required>
            </label>
            <label for="name">
              <input type="text" name="name" placeholder="Oggetto delle richiesta" minlength="3" maxlength="100" required>
            </label>
            <label for="message">Il tuo messaggio:
              <textarea name="message" id="message" cols="20" rows="8" minlength="3" maxlength="10000" placeholder="Scrivi qui" required></textarea>
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
          <div class="contatti" v-for="(contatto, index) in contatti" :key="contatto.slug">
            <input type="button" :value="(copied === index)?'copiato!':contatto.title" class="btn" @click="copyToClipboard(contatto.content, index)">
            <span>{{contatto.content}}</span>
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
    return {
      copied: null,
    }
  },
  computed:{
    contatti: function(){
      return this.$store.state.contatti;
    },
    pages: function(){
      return this.$store.state.pages
    },
  },
  methods:{
    copyToClipboard: function(str, index){
      const el = document.createElement('textarea');  // Create a <textarea> element
      el.value = str;                                 // Set its value to the string that you want copied
      el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
      el.style.position = 'absolute';                 
      el.style.left = '-9999px';                      // Move outside the screen to make it invisible
      document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
      const selected =            
        document.getSelection().rangeCount > 0        // Check if there is any content selected previously
          ? document.getSelection().getRangeAt(0)     // Store selection if found
          : false;                                    // Mark as false to know no selection existed before
      el.select();                                    // Select the <textarea> content
      document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el);                  // Remove the <textarea> element
      if (selected) {                                 // If a selection existed before copying
        document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
        document.getSelection().addRange(selected);   // Restore the original selection
      }
      this.copied = index;
      setTimeout(()=>{
        this.copied = null;
      }, 5000);
    },
  },
  mounted(){
    //console.log(this.contatti);

  }
}
</script>