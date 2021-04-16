import axios from 'axios'
//Vue.axios.defaults.baseURL = 'http://localhost:8880/wp-json';

//Prodotti
let prodotti = [];
axios
.get(`http://localhost:8880/wp-json/wp/v2/prodotti`)
.then(response =>{
  for(let item in response.data){
      prodotti.unshift(response.data[item]);
    }
  })
  .catch(error => {
    console.log(error);
  })

//Servizi
let servizi = [];
axios
.get(`http://localhost:8880/wp-json/wp/v2/servizi`)
.then(response =>{
  for(let item in response.data){
      servizi.unshift(response.data[item]);
    }
  })
  .catch(error => {
    console.log(error);
  })

let store = {prodotti, servizi};  

export default store;