<template>

    <div id="area-clienti">
        <div class="container">
            <h2>Area clienti</h2> 
            <form class="registration" action="#" method="POST">
            <p>Registrarsi consente di visualizzare tutte le informazioni riguardanti i prodotti, come le <em>schede di sicurezza</em>, i <em>codice prodotti</em>, ecc.</p>
                <!-- Nome -->
                <div class="field name">
                    <label for="name">Nome</label>
                    <input type="text" name="name" id="" required>
                </div>
                <!-- Cognome -->
                <div class="field lastname">
                    <label for="lastname">Cognome</label>
                    <input type="text" name="lastname" id="" required>
                </div>
                <!-- Email -->
                <div class="field email">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="" required>
                </div>
                <div class="field password">
                    <!-- Password -->
                    <label for="password">Password</label>        
                    <input type="password" name="password" id="" required>
                </div>
                <div class="field password">
                    <!-- Confirm password -->
                    <label for="password">Conferma password</label>        
                    <input type="password" name="password" id="" required>
                </div>
                <div class="field submit">
                    <button type="submit" class="btn">Invia</button>
                </div>
            </form>
        </div>
    </div>

</template>

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

<script>

import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
    
}

</script>

