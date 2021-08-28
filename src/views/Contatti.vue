<template>
  <div class="contact-us pt-200">
    <div class="container80">
      <section class="row form">
        <div class="col-lg-5 col-md-8 col-sm-12 col-offset-lg-1 col-offset-md-2 col-offset-sm-0 py-2-2">
          <h2 class="py-2-2">Contatti</h2>
          <div class="contatti" v-for="(contatto, index) in contatti" :key="contatto.slug">
            <input type="button" class="btn" :value="(copied === index)?'copiato!': contatto.title" @click="copyToClipboard(contatto.content, index)">
            <span>{{contatto.content}}</span>
          </div>
        </div>
        <div class=" col-lg-5 col-md-12 col-sm-12 fornitori py-2-2">
          <h2 class="py-2-2">I nostri fornitori</h2>
          <a href="https://www.bottosso-frighetto.it" target=”_blank”><img src="~@/assets/logo-BF.jpg" alt="logo Botosso e Frighetto"></a>
          <a href="https://www.chimen.it/" target=”_blank”><img src="~@/assets/logo-chimen.png" alt="logo CHIMEN"></a>
        </div>
      </section>
      <section class="row form py-2-2">
        <div class="col-lg-10 col-md-12 col-sm-12 col-offset-lg-1 col-offset-md-0 col-offset-sm-0">
          <h2 class="py-2-2">Contattaci</h2>
          <baseForm typology="message" />
        </div>
      </section>

      <section class="row maps py-2-2">
        <div class="col-lg-10 col-md-12 col-sm-12 col-offset-lg-1 col-offset-md-0 col-offset-sm-0">
          <h2 class="py-2-2">Dove siamo</h2>
          <GoogleMap/>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'
import baseForm from '@/components/baseForm.vue'
export default {
  components: {
    GoogleMap,
    baseForm
  },
  data(){
    return {
      copied: null,
      contatti: this.$store.state.contatti.slice(0,4)
    }
  },
  computed:{
    // contatti: function(){
    //   return this.$store.state.contatti.slice(0,4);
    // },
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
  mounted () {
    async () => {
      this.contatti = await this.$store.state.contatti.slice(0,4);
    } 
  }
}
</script>
<style lang="scss" scoped>
  .contact-us {
    color: $darkcolor;
    .contatti{
      display: flex;
      width: 100%;
      text-align: left;
      margin-bottom: 1rem;
      input.btn{
        min-width: 110px;
        height: max-content;
        font-size: $small;
        margin-right: 1rem;
        text-transform: capitalize;
      }
    }
    .fornitori{
      a{
        display: block;
        margin-bottom: 1rem;
        img{
          width: 50%;
          max-width: 200px; 
          border-bottom: 1px solid transparent;
          transition: border 300ms;
        &:hover{
          border-bottom: 1px solid $borderlightcolor;
        }
      }
      }
    }
  }
  #maps{
    margin-bottom: 2rem;
  }
  .btn{
    @include btn;
  }
</style>