import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'Chur'
  },
  mutations: {
    // Funktion mutiert die Stadt
    setCity (state, payload) {
      state.city = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
