<template>
  <div class="home cold" v-bind:class="{ warm : backgroundCheck }">

    <weather-item :city="$route.params.city"></weather-item>

  </div>
</template>

<script>
import WeatherItem from '@/components/WeatherItem'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'City',
  components: {
    WeatherItem
  },
  data () {
    return {
      forecast: {}
    }
  },
  computed: {
    ...mapFields(['city']),
    forecastTemperature () {
      if (this.forecast.main) {
        return this.forecast.main.temp + ' °C'
      } else {
        return 'unbekannt'
      }
    },
    backgroundCheck () {
      return this.forecast.main && this.forecast.main.temp > 10
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
