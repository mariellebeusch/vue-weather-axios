<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-text-field
            v-model="city" v-on:keyup.enter="fetchWeather"
            placeholder="Ort eingeben..."
            hide-details
            single-line
        ></v-text-field>
        <br>
        <weather-store></weather-store>
        <br>
        <v-btn @click="goCity('New York')">New York</v-btn>
        <v-btn @click="goCity('Edinburgh')">Edinburgh</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WeatherStore from '@/components/WeatherStore'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    WeatherStore
  },
  data () {
    return {
      city: '',
    }
  },
  computed: {
    ...mapGetters({
      forecast: 'currentForecast'
    })
  },
  methods: {
    fetchWeather () {
      this.$store.dispatch('fetchWeatherForStore', this.city)
    },
    goCity (city) {
      this.$router.push({ name: 'City', params: { city: city } })
    }
  }
}
</script>
<style>

</style>
