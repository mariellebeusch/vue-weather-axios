<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <weather-store></weather-store>

        <v-list class="mt-5">
          <v-list-item to="/city/grabs">Grabs</v-list-item>
          <v-list-item to="/city/kairo">Kairo</v-list-item>
          <v-list-item to="/city/new%20york">New York</v-list-item>
        </v-list>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WeatherStore from '@/components/WeatherStore'
import { mapGetters } from 'vuex'
import store from '../store'

export default {
  name: 'City',
  components: {
    WeatherStore
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      forecast: 'currentForecast'
    })
  },
  methods: {},
  beforeRouteUpdate: (to, from, next) => {
    store.dispatch('fetchWeatherForStore', to.params.city).then(response => {
      console.log(response)
      next()
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style>


</style>
