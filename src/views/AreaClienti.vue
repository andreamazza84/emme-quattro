<template>

    <div id="area-clienti">
        <div class="container">
            <h2>Area clienti</h2> 
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
            </form>
        </div>
    </div>

</template>

<script>

import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
    data(){
        return{
            form: {
                username: '',
                email: '',
                password: '',
            }
        }
    },
    methods:{
        async register(){
            try{
                const result = await this.$store.dispatch('register', this.form);
                const { redirect = false } = this.$route.query;
                const path = redirect ? decodeURI(redirect) : '/';
                this.$router.push({ path });
            }
            catch(error){
                console.log("Error ", error);
            }
        }
    }
}

</script>

<style lang="scss">
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