<template>
  <div id="app">
    <h1>
    </h1>
    <Standings system="3-Point-Game" v-bind:records="records">

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
    data(){
      return{
        records: [],
        headMap: ["GP", "W", "L","OT","RW","OW","GA","GF","P"]
      }
    },
    // Fetches posts when the component is created
    created() {
      axios.get(`https://statsapi.web.nhl.com/api/v1/standings`)
              .then(response => {
                // JSON responses are automatically parsed.
                this.records = response.data.records;

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
