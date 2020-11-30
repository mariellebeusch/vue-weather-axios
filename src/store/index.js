import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'Chur',
    forecast: {}
  },
  getters: {
    getField,
    currentCity: state =>  {
      return state.city
    },
    currentForecast: state => {
      return state.forecast
    },
    backgroundImage: state => {
      if (state.forecast.main && state.forecast.main.temp > 10) {
        return 'warm'
      } else {
        return 'cold'
      }
    }
  },
  mutations: {
    updateField,
    // Funktion mutiert die Stadt
    setCity (state, payload) { state.city = payload },
    setForecast (state, payload) { state.forecast = payload }
  },
  actions: {
    fetchWeather (state, payload) {
      return axios.get(process.env.VUE_APP_WEATHER_API_BASE + payload + '&units=metric&lang=de&appid=' + process.env.VUE_APP_WEATHER_API_KEY)
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    fetchWeatherForStore ({ commit }, payload) {
      return axios.get(process.env.VUE_APP_WEATHER_API_BASE + payload + '&units=metric&lang=de&appid=' + process.env.VUE_APP_WEATHER_API_KEY)
        .then(function (response) {
          commit('setForecast', response.data)
          return response.data
        })
        .catch(function (error) {
          console.log(error)
          return error
        })
    }
  },
  modules: {
  }
})
