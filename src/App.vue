<template>
  <div id="app">
    <nav class="navigation">
      <router-link to="/search">Ort suchen</router-link>
      <router-link to="/">Alle anzeigen</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
}

.navigation {
  display: inline-block;
  font-size: 18px;
  & a {
    padding: 7px;
  }
}

#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
