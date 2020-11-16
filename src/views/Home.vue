<template>
  <div class="home cold" v-bind:class="{ warm : backgroundCheck }">
    <input type="text" v-model="city" v-on:keyup.enter="fetchWeather" placeholder="Ort eingeben...">
    <br>
    <p class="information" v-if="forecast.main">
      {{ forecastTemperature }}
    </p>

    <hr>
    <weather-item city="Chur"></weather-item>
    <weather-item city="Grabs"></weather-item>
    <weather-item city="Bern"></weather-item>
    <weather-item city="Miami"></weather-item>
  </div>
</template>

<script>
import WeatherItem from '@/components/WeatherItem'
import { mapFields } from 'vuex-map-fields'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    WeatherItem
  },
  data () {
    return {
      forecast: {}
    }
  },
  computed: {
    // Mit this.$store.state.{name} hol ich den Wert vom state
    /* city () {
       return this.$store.state.city
    } */
    ...mapFields(['city']),
    forecastTemperature () {
      return this.forecast.main.temp + ' °C'
    },
    apiUrl () {
      return 'https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=metric&appid=' + process.env.VUE_APP_WEATHER_API_KEY
    },
    backgroundCheck () {
      return this.forecast.main && this.forecast.main.temp > 10
    }
  },
  methods: {
    fetchWeather () {
      // Mutation setCity wird aufgerufen und gibt den payload city mit
      // this.$store.commit('setCity', this.city)

      // Scope this ist nur innerhalb der then Schleife gültig, deshalb this
      let self = this
      axios.get(this.apiUrl)
          .then(function (response) {
            // handle success
            self.forecast = response.data
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    }
  }
}
</script>
<style>
p {
  font-size: 70px;
}

input {
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
