<template>
  <div>
    aktuelles Wetter im Vuex Store:
    {{ forecastCity }}: {{ forecastTemperature }}
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Weather',
  data () {
    return {

    }
  },
  computed: {
    // So hol ich das aktuelle Wetter aus dem state (store)
    /*
    forecast() {
      return this.$store.state.forecast
    },
    */
    ...mapGetters({
      forecast: 'currentForecast'
    }),
    forecastTemperature () {
      if (this.forecast.main) {
        return this.forecast.main.temp + ' °C'
      } else {
        return 'unbekannt'
      }
    },
    forecastCity () {
      if (this.forecast.name) {
        return this.forecast.name
      } else {
        return 'unbekannt'
      }
    }
  },
  mounted () {},
  methods: {}
}
</script>
