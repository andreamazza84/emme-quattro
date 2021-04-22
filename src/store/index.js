import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// Vue.axios.defaults.baseURL = 'http://localhost:8880/wp-json'; (vedi main.js)

export default new Vuex.Store({
  state: {
    user: null,
    register: null,
    prodotti: null,
    servizi: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    DELETE_USER(state) {
      state.user = null;
    },
    REGISTER_USER(state, register) {
      state.register = register;
    },
    SET_PRODOTTI(state, prodotti){
      state.prodotti = prodotti;
    },
    SET_SERVIZI(state, servizi){
      state.servizi = servizi;
    }
  },
  actions: {
    //Login
    login({ commit }, credentials){
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.post(`/jwt-auth/v1/token`, credentials);
          commit('SET_USER', data);
          resolve(data);
        }catch(e){
          reject(e);
        }
      })
    },
    validate({ state }) {
      return axios({
        url: `/jwt-auth/v1/token/validate`, 
        method: 'post',
        headers: {
          'Authorization': `Bearer ${state.user.token}`
        }
      })
    },
    //Logout
    logout({ commit }){
      commit('DELETE_USER', 'null');
    },
    //Registration
    register({ commit }, credentials){
      return new Promise(async (resolve, reject) =>{
        try{
          const { data } = await axios.post(`/wp/v2/users/register`, credentials);
          commit('REGISTER_USER', data);
          resolve(data);
        }
        catch(error){
          reject(error);
        }
      });
    },
    retrieveData({ commit }, item){
      return new Promise(async (resolve, reject) =>{
        try{
          const { data } = await axios.get(`/wp/v2/${item}`);
          if(item === "prodotti"){ return commit('SET_PRODOTTI', data); }
          if(item === "servizi"){ return commit ('SET_SERVIZI', data); }

          resolve(data);
        }
        catch(error){
          reject(error);
        }
      }); 
    }
  },
  modules: {
  }
})