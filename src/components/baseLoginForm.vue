<template>
  <div class="form">
    <baseErrorMessage :text="message.error != '' ? message.error : message.success" />
    <form @submit.prevent="login()" class="login">
      <label for="username">
        <input v-model="form.username" type="text" name="username" placeholder="Username" minlength="3" maxlength="100" required>
      </label>
      <div class="field password">
        <label for="log-password">Password</label>
        <input v-model="form.password" id="log-password" type="password" placeholder="•••••••••••">
      </div>
      <div class="field submit">
        <button class="btn" type="submit">Entra</button>
      </div>
    </form>

    <form @submit.prevent="reset()" class="form">
      <div class="field forgot" @click="show()">Password dimenticata?</div>
      <div v-if="active" class="field password">
        <label for="reset-password">Email</label>
        <input v-model="forgot.user_login" id="reset-password" type="email" placeholder="Inserisci qui la tua email per recuperare la password" required>
        <button class="btn" type="submit">Recupera password</button>
      </div>
    </form>
  </div>
</template>
<script>
import baseErrorMessage from '@/components/baseErrorMessage.vue'
export default {
  components: {
    baseErrorMessage
  },
  data(){
    return {
      form: {
        username: '',
        password: '',
      },
      message:{
        error: '',
        success: '',
      },
      forgot:{
        user_login: '',
      },
      active: false,
    }
  },
  methods: {
    show: function(){
      if(!this.active){
        return this.active = true;
      }
      if(this.active){
        return this.active = false;
      }
    },
    async login() {
      try{
        const result = await this.$store.dispatch('login', this.form);
        const { redirect = false } = this.$route.query;
        const path = redirect ? decodeURI(redirect) : '/protected';
        this.$router.push({ path });
      }
      catch(error){
        console.log("Error:");
        console.log(error);
        console.log(error.response.data.message);
        this.message.error = error.response.data.message;
      }
    },
    async reset() {
      try{
        const result = await this.$store.dispatch('reset', this.forgot)
        this.message.success = "Una email con ##### è stata inviata alla tua casella di posta"
      }
      catch(error){
        this.message.error = error.response.data.message;
      }

    }
  },
  mounted(){
    console.log("baseLoginForm mounted correctly");
  }
}
</script>