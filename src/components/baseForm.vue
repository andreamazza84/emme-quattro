<template>
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
</template>
<script>
export default {
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