<template>
  <div class="area-clienti pt-200">
    <div class="container90">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <h2 class="py-2-1">Registrati</h2> 
          <p>Registrarsi consente di visualizzare tutte le informazioni riguardanti i prodotti, come le <em>schede di sicurezza</em>, i <em>codici prodotti</em>, ecc.</p>
          <baseRegistrationForm/>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <h2 class="py-2-1">Accedi all'area riservata</h2>
          <p>Se hai già effettuato la registrazione, inserisci username e password per accedere all'area riservata</p>
          <baseLoginForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baseLoginForm from '@/components/baseLoginForm'
import baseRegistrationForm from '@/components/baseRegistrationForm'
export default {
  components:{
      baseLoginForm,
      baseRegistrationForm
  }
}
</script>
<style lang="scss" scoped>
    

</style>
