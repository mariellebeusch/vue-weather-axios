<template>
  <v-card tile>
    <v-card-title class="text-h3">
      {{ forecastCity }}
    </v-card-title>
    <v-card-text class="text-h5">
      Aktuelle Temperatur: {{ forecastTemperature }}
    </v-card-text>
  </v-card>
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
