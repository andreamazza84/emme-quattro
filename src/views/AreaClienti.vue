<template>
  <div class="area-clienti pt-200">
    <div class="container90">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-sm-10 col-offset-sm-1">
          <h2 class="py-2-1">Registrati</h2> 
          <p>Registrarsi consente di visualizzare tutte le informazioni riguardanti i prodotti, come le <em>schede di sicurezza</em>, i <em>codici prodotti</em>, ecc.</p>
          <!-- <baseRegistrationForm/> -->
          <baseForm typology="registration"/>
        </div>
        <div class="col-lg-5 col-offset-lg-2 col-md-5 col-sm-10 col-offset-sm-1">
          <h2 class="py-2-1">Accedi all'area riservata</h2>
          <p>Se hai già effettuato la registrazione, inserisci <em>nome utente</em> e <em>password</em> per accedere all'area riservata</p>
          <!-- <baseLoginForm/> -->
          <baseForm typology="login"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import baseLoginForm from '@/components/baseLoginForm'
//import baseRegistrationForm from '@/components/baseRegistrationForm'
import baseForm from '@/components/baseForm.vue'

export default {
  components:{
     // baseLoginForm,
     // baseRegistrationForm,
      baseForm
  }
}
</script>
