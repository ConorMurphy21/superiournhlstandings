<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Standings system="3-Point-Game">

    </Standings>
  </div>
</template>

<script>
import Standings from './components/Standings.vue';
import axios from 'axios';


export default {
  name: 'App',
  components: {
      Standings
  },
  // Fetches posts when the component is created
  created() {
    axios.get(`https://statsapi.web.nhl.com/api/v1/standings`)
            .then(response => {
              // JSON responses are automatically parsed.
              this.standings = response.data.records
            })
            .catch(e => {
              this.errors.push(e)
            })
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
