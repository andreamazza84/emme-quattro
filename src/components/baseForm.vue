<template>
  <div class="form">
    <!-- MESSAGE FORM-->
    <div v-if="typology === message" class="message">
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
          <textarea name="message" cols="20" rows="8" minlength="3" maxlength="10000" placeholder="Scrivi qui" required></textarea>
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
    
    <!-- LOGIN FORM -->
    <div v-if="typology === login" class="login">
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

    <!-- REGISTRATION FORM -->
    <div v-if="typology === registration" class="registration">
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

  </div>


</template>
<script>
import baseErrorMessage from '@/components/baseErrorMessage.vue'
export default {
  components: {
    baseErrorMessage
  },
  props: {
    typology: {
      required: true,
      type: String //message || registration || login 
    }
  },
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