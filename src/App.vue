<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Standings system="3-Point-Game">

    </Standings>
  </div>
</template>

<script>
import Standings from './components/Standings.vue'


export default {
  name: 'App',
  components: {
      Standings
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
