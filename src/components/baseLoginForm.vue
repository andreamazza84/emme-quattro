<template>
  <div>
    <baseErrorMessage :text="message.error != '' ? message.error : message.success" />
    <form @submit.prevent="login()" class="form">
      <div class="field name">
        <label for="username">Username</label>
        <input v-model="form.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
      </div>
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

<style lang="scss" scoped>
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: $maxForm;
  padding: 5%;
  margin: 5%;
  border: 1px solid #aaa;
  .field{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;
    label{
      margin-bottom: 5px;
    }
    input{
      width: 100%;
      height: 2rem;
      border-radius: 5px;
      border: 1px solid $borderlightcolor;
      padding: 0 10px;
    }
    .btn{
      @include btn;
      align-self: center;
      background-color: $primary;
      &:hover{
        background-color: $primary-hover;
      }
    }
  }
  .forgot{
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
}
</style>