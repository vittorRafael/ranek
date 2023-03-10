import { api } from '@/services'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    }
  },
  getters: {
  },
  mutations: {
    UPDATE_LOGIN(state, payload){
      state.login = payload
    },
    UPDATE_USUARIO(state, payload){
      state.usuario = payload
    },
  },
  actions: {
    getUsuario(context, payload){
      api.get(`/usuario/${payload}`)
        .then(r => {
          context.commit('UPDATE_USUARIO', r.data)
          context.commit('UPDATE_LOGIN', true)
        })
    }
  },
  modules: {
  }
})
