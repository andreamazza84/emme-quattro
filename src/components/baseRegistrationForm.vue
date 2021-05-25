<template>
  <div class="form">
    <form @submit.prevent="register()" class="registration">
      <!-- Username -->
      <div class="field name">
          <label for="name">Username</label>
          <input v-model="form.username" type="text" name="name" id="name" required>
      </div>
      <!-- Email -->
      <div class="field email">
          <label for="email">Email</label>
          <input v-model="form.email" type="email" name="email" id="email" required>
      </div>
      <div class="field password">
          <!-- Password -->
          <label for="password">Password</label>        
          <input v-model="form.password" type="password" name="password" id="password" placeholder="•••••••••••" required>
      </div>
      <div class="field password">
          <!-- Confirm password -->
          <label for="confirm-password">Conferma password</label>        
          <input type="password" name="password" id="confirm-password" placeholder="•••••••••••" required>
      </div>
      <div class="field submit">
          <button class="btn" type="submit">Invia</button>
      </div>

      <baseErrorMessage :text="message.error != '' ? message.error : message.success"/>
    </form>
  </div>
</template>

<script>
import baseErrorMessage from '@/components/baseErrorMessage.vue'

export default {
  components:{
        baseErrorMessage
  },
  data(){
    return{
      form: {
          username: '',
          email: '',
          password: '',
      },
      message:{
        error: '',
        success: '',
      },
    }
  },
  methods:{
    async register(){
      try{
          const result = await this.$store.dispatch('register', this.form);
          //const { redirect = false } = this.$route.query;
          //const path = redirect ? decodeURI(redirect) : '/login';
          //this.$router.push({ path });
          //alert('Registrazione avvenuta con successo');
          this.message.success = "Registrazione avvenuta con successo";
          this.messagge.error = '';

      }
      catch(error){
          console.log("Error ", error);
          this.message.error = error.response.data.message;
          this.message.success = '';
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.registration{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  max-width: $maxForm;
  padding: 5%;
  margin: 5%;
  .field{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 20px 0;
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
      }
  }
}
</style>