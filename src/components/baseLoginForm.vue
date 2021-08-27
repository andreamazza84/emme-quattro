<template>
  <div class="form">
    <baseErrorMessage :text="message.error != '' ? message.error : message.success" />
    <!-- Login -->
    <form @submit.prevent="login()" class="login">
      <label for="username">
        <input v-model="form.username" type="text" name="username" placeholder="Username" minlength="3" maxlength="100" required>
      </label>
      <label for="password">
        <input v-model="form.password" type="password" name="password" placeholder="password" maxlength="100" required>
      </label>
      <button class="btn" type="submit">Entra</button>
    </form>

    <!-- Password reset -->
    <form @submit.prevent="reset()" class="password-reset">
      <div class="field forgot" @click="show()">Password dimenticata?</div>
      <div v-if="active" class="field password">
        <label for="reset-password">
          <input v-model="forgot.user_login" id="reset-password" type="email" placeholder="Inserisci qui la tua email per recuperare la password" required>
        </label>
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
      return this.active = !this.active;
    },
    async login() {
      try{
        await this.$store.dispatch('login', this.form);
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
        await this.$store.dispatch('reset', this.forgot)
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
<style lang="scss" scoped>
form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  label{
    width: 100%;
    text-align: left;
    margin: 0.5rem 0;
    font-size: $text;
    input, 
    textarea{
      width: 100%;
      font-family: 'Poppins', serif;
      font-size: $text;
      border: 1px solid $borderlightcolor;
      border-radius: 5px;
      padding: 5px;
      margin: 0.3rem 0;
    }
  }
  label[for="info"]{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    .btn{
      @include btn;
      margin-bottom: 0;
      font-size: $normal;
      text-align: center;
    }
    div.info{
      display: flex;
      align-items: center;
      input[type="checkbox"]{
        width: auto;
        margin-right: 1rem;
        transition: color 300ms;
        &:hover{
          color: $primary;
        }
      }
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
    margin-bottom: 2rem;
  }
}
</style>