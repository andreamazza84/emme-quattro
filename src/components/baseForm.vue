<template>
  <div class="form">
    <!-- MESSAGE FORM-->
    <div v-if="typology === 'message'" class="message-wrapper">
      <form action="submit" method="post">
        <label for="name">Nome
          <input type="text" name="name" placeholder="Nome" minlength="3" maxlength="100" required>
        </label>
        <label for="email">Email
          <input type="email" name="email" placeholder="Email" maxlength="100" required>
        </label>
        <label for="object">Oggetto
          <input type="text" name="object" placeholder="Oggetto delle richiesta" minlength="3" maxlength="100" required>
        </label>
        <label for="message">Il tuo messaggio:
          <textarea name="message" cols="20" rows="8" minlength="3" maxlength="10000" placeholder="Scrivi qui..." required></textarea>
        </label>
        <label for="info">
          <div class="info">
            <div>Accetto <router-link :to="{name:'Informativa'}" target="_blank" @click.native="scrollToTopAuto()">l'informativa sull'utilizzo dei dati</router-link></div>
            <!-- <div><modal :show="true" content="cookie-policy"/>Accetto l'informativa sull'utilizzo dei dati</div> -->
            <input type="checkbox" name="info" required>
          </div>
        </label>
        <hr>
        <button type="submit" class="btn">Invia</button>
      </form>
    </div>
    
    <!-- LOGIN FORM -->
    <div v-if="typology === 'login'" class="login-wrapper">
      <!-- Login -->
      <form @submit.prevent="login()" class="login">
        <label for="username">Nome utente
          <input v-model="form.login.username" type="text" name="username" placeholder="Username" minlength="3" maxlength="100" required>
        </label>
        <label for="password">Password
          <input v-model="form.login.password" type="password" name="password" placeholder="Password" maxlength="100" required>
        </label>
        <button class="btn" type="submit">Entra</button>
      </form>

      <!-- Reset password -->
      <form @submit.prevent="reset()" class="reset-password">
        <div class="forgot" @click="show()">Password dimenticata?</div>
        <label v-if="active" class="hidden" for="reset-password">
          <input v-model="forgot.user_login" name="reset-password" type="email" placeholder="Inserisci qui la tua email per recuperare la password" required>
        </label>
        <button v-if="active" class="btn" type="submit">Recupera password</button>
        <baseErrorMessage v-show="response" :error="error" :success="success" :text="text"/>
      </form>
    </div>

    <!-- REGISTRATION FORM -->
    <div v-if="typology === 'registration'" class="registration-wrapper">
      <form @submit.prevent="register()" class="registration">
        <!-- Username -->
        <label for="name">Nome utente
            <input v-model="form.registration.username" type="text" name="name" placeholder="Nome" minlength="3" maxlength="30" required>
        </label>
        <!-- Email -->
        <label for="email">Email
            <input v-model="form.registration.email" type="email" name="email" placeholder="Email" minlength="3" maxlength="30" required>
          </label>
        <!-- Password -->
        <label for="password">Password (min 8, max 24 caratteri)
            <input v-model="form.registration.password" type="password" name="password" placeholder="Password" minlength="8" maxlength="24" required>
        </label>
            <!-- Confirm password -->
        <label for="confirm-password">
          <input v-model="form.registration.password2" @blur="passwordCheck()" type="password" name="confirm-password" placeholder="Conferma password" required>
        </label>        
        <button class="btn" type="submit" @click="timer()">Invia</button> 
        <baseErrorMessage v-show="response" :error="error" :success="success" :text="text"/>
      </form>
    </div>
  </div>


</template>
<script>
import baseErrorMessage from '@/components/baseErrorMessage.vue'
export default {
  components: {
    baseErrorMessage,
  },
  props: {
    typology: {
      required: true,
      type: String //message || registration || login 
    }
  },
  data(){
    return {
      form:{
        login: {
          username: '',
          password: ''
        },
        registration:{
          username: '',
          email: '',
          password: '',
          password2: '',
        },
      },
      forgot:{
        user_login: '',
      },
      message:{
        error: '',
        success: '', 
      },
      active: false,
      response: false,
    }
  },
  computed:{
    error: function(){
      return this.message.error != '' ? true : false
    },
    success: function(){
      return this.message.error != '' ? false : true
    },
    text: function(){
      return this.message.error != '' ? this.message.error : this.message.success
    }
  },
  methods:{
    show: function(){
      return this.active = !this.active;
    },
    timer: function(){
      this.response = true;
      setTimeout(()=>{ this.response = false }, 10000);
    },
    scrollToTopAuto: function(){
      window.scrollTo({top: 0, behavior: 'auto'});
    },
    passwordCheck: function(){
      if(this.registration.password != this.registration.password2){
        this.message.error = "Le password inserite non coincidono";
        
      }
    },
    // LOGIN
    async login() {
      try{
        const result = await this.$store.dispatch('login', this.form.login);
        const { redirect = false } = this.$route.query;
        const path = redirect ? decodeURI(redirect) : '/protected';
        this.$router.push({ path });
        this.timer();
      }
      catch(error){
        console.log("Error:");
        console.log(error);
        this.message.error = error.response.data.message;
        this.timer();

      }
    },

    async reset() {
      try{
        const result = await this.$store.dispatch('reset', this.forgot)
        this.message.success = "Una email con ##### è stata inviata alla tua casella di posta"
        this.timer();
      }
      catch(error){
        this.message.error = error.response.data.message;
          this.timer();

      }
    },
    // LOGIN

    // REGISTRATION
    async register(){
      try{
          const result = await this.$store.dispatch('register', this.form.registration);
          //const { redirect = false } = this.$route.query;
          //const path = redirect ? decodeURI(redirect) : '/login';
          //this.$router.push({ path });
          //alert('Registrazione avvenuta con successo');
          this.message.success = "Registrazione avvenuta con successo";
          this.message.error = '';
          this.timer();
      }
      catch(error){
          console.log("Error ", error);
          this.message.error = error.response.data.message;
          this.message.success = '';
          this.timer();

      }
    }
    // REGISTRATION
  },
}
</script>

<style lang="scss" scoped>
form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  label{
    width: 100%;
    text-align: left;
    margin: 0.5rem 0;
    font-size: $text;
    input, 
    textarea{
      width: 100%;
      font-family: $fontPrimary;
      font-size: $text;
      border: 1px solid $borderlightcolor;
      border-radius: 5px;
      padding: 5px;
      margin: 0.3rem 0;
    }
  }
  label[for="info"]{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    .btn{
      @include btn;
      margin-bottom: 0;
      font-size: $normal;
      text-align: center;
    }
    .info{
      display: flex;
      align-items: center;
      input[type="checkbox"]{
        width: auto;
        margin-left: 0.5rem;
        transition: color 300ms;
        &:hover{
          color: $primary;
        }
      }
    }
  }
  .forgot{
    cursor: pointer;
    transition: color 300ms;
    &:hover,
    &:focus{
      color: $primary;
    }
  }
  hr{
    color: $borderlightcolor;
    width: 100%;
    border: 1px 0 0 0;
    margin-bottom: 1rem;
  }
  .btn{
    @include btn;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
</style>