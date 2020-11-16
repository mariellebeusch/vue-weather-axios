import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'Chur'
  },
  getters: {
    getField,
    currentCity: state =>  {
      return state.city
    }
  },
  mutations: {
    updateField,
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
