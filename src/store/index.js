import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    DELETE_USER(state) {
      state.user = null
    }
  },
  actions: {
    //Login
    login({ commit }, credentials){
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.post(`http://localhost:8880/wp-json/jwt-auth/v1/token`, credentials)
          commit('SET_USER', data)
          resolve(data)
        }catch(e){
          reject(e)
        }
      })
    },
    validate({ state }) {
      return axios({
        url: `http://localhost:8880/wp-json/jwt-auth/v1/token/validate`, 
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
  },
  modules: {
  }
})