<template>
  <div class="home cold" v-bind:class="{ warm : backgroundCheck }">
    <input type="text" v-model="city" v-on:keyup.enter="fetchWeather" placeholder="Ort eingeben...">
    <br>
    <p class="information" v-if="forecast.main">
      {{ forecastTemperature }}
    </p>

    <hr>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'Search',
  components: {},
  data () {
    return {
      forecast: {}
    }
  },
  computed: {
    ...mapFields(['city']),
    forecastTemperature () {
      return this.forecast.main.temp + ' °C'
    },
  },
  methods: {
    fetchWeather () {
      // actions dispatchen
      this.$store.dispatch('fetchWeather', this.city ).then(response => {
            this.forecast = response
          }
      )
    }
  }

}
</script>
<style scoped>

</style>
