<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <router-link to="/" class="text-decoration-none">
          Wetter App
        </router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-main v-bind:class="backgroundImage">
      <v-container fluid>
        <v-row>
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      backgroundImage: 'backgroundImage'
    }),
  },
  mounted: function () {
    this.$store.dispatch('fetchWeatherForStore', this.$store.state.city)
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

