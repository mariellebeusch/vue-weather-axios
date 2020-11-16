<template>
  <div>
    {{ city }}: {{ forecastTemperature }}
  </div>
</template>
<script>

export default {

  name: 'Weather',
  data () {
    return {
      forecast: {}
    }
  },
  props: ['city'],
  computed: {
    // Hier verändere ich meine Daten für die Ausgabe
    forecastTemperature () {
      if (this.forecast.main) {
        return this.forecast.main.temp + ' °C'
      } else {
        return 'unbekannt'
      }
    },
    apiUrl () {
      return 'https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=metric&appid=' + process.env.VUE_APP_WEATHER_API_KEY
    },
  },
  mounted () {
    // Sobald eine Komponente in DOM gerendert wird wird mounted aufgerufen
    this.fetchWeather()
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
