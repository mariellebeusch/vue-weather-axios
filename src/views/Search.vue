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
    apiUrl () {
      return process.env.VUE_APP_WEATHER_API_BASE + this.city + '&units=metric&lang=de&appid=' + process.env.VUE_APP_WEATHER_API_KEY
    },
    backgroundCheck () {
      if (this.forecast.main && this.forecast.main.temp > 10) {
        return true
      } else {
        return false
      }
    }
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
<style>
p {
  font-size: 70px;
}

input {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  border: none;
  width: 100%;
  font-size: 30px;
  height: 3rem;
  padding-left: 0.875rem;
  line-height: 147.6%;
  padding-top: 0.825rem;
  padding-bottom: 0.5rem;
}

.information {
  padding-top: 30px;
}

.home {
  height: 100vh;
}

.cold {
  background-image: url("~@/assets/cold_bg.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.warm {
  background-image: url("~@/assets/warm_bg.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
