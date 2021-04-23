<template>
    
    <div id="area-clienti">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2>Registrati</h2> 
              <form @submit.prevent="register()" class="registration" method="POST">
              <p>Registrarsi consente di visualizzare tutte le informazioni riguardanti i prodotti, come le <em>schede di sicurezza</em>, i <em>codice prodotti</em>, ecc.</p>
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
                      <input v-model="form.password" type="password" name="password" id="password" required>
                  </div>
                  <div class="field password">
                      <!-- Confirm password -->
                      <label for="confirm-password">Conferma password</label>        
                      <input type="password" name="password" id="confirm-password" required>
                  </div>
                  <div class="field submit">
                      <button type="submit" class="btn">Invia</button>
                  </div>
                  <baseErrorMessage :text="error.message"/>
              </form>
            </div>
            <div class="col-lg-6">
              <baseLoginForm />
            </div>
          </div>
        </div>
    </div>

</template>

<script>
import baseErrorMessage from '@/components/baseErrorMessage.vue'
import baseLoginForm from '@/components/baseLoginForm'

export default {
    components:{
        baseLoginForm,
        baseErrorMessage
    },
    data(){
        return{
            form: {
                username: '',
                email: '',
                password: '',
            },
            error:{
                message: ''
            },
        }
    },
    methods:{
        async register(){
            try{
                const result = await this.$store.dispatch('register', this.form);
                const { redirect = false } = this.$route.query;
                const path = redirect ? decodeURI(redirect) : '/login';
                this.$router.push({ path });
                alert('Registrazione avvenuta con successo');

            }
            catch(error){
                console.log("Error ", error);
                this.error.message = error.response.data.message;
            }
        }
    }
}

</script>
<style lang="scss" scoped>
.container{
    .registration{
        max-width: 768px;
        width: 100%;
        margin: auto;
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
                background-color: $vue-green;
                &:hover{
                    background-color: $vue-green-hover;
                }
            }
        }
    }
}

</style>
