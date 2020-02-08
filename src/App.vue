<template>
  <div id="app">
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
                for (let i = 0; i < this.records.length; i++){
                  for(let j = 0; j < this.records[i].teamRecords.length; j++){
                    this.records[i].teamRecords[j].data = [];
                    this.records[i].teamRecords[j].data[0] = this.records[i].teamRecords[j].gamesPlayed;
                    this.records[i].teamRecords[j].data[1] = this.records[i].teamRecords[j].leagueRecord.wins;
                    this.records[i].teamRecords[j].data[2] = this.records[i].teamRecords[j].leagueRecord.losses;
                    this.records[i].teamRecords[j].data[3] = this.records[i].teamRecords[j].leagueRecord.ot;
                    this.records[i].teamRecords[j].data[4] = this.records[i].teamRecords[j].regulationWins;
                    this.records[i].teamRecords[j].data[5] = this.records[i].teamRecords[j].leagueRecord.wins -
                            this.records[i].teamRecords[j].regulationWins;
                    this.records[i].teamRecords[j].data[6] = this.records[i].teamRecords[j].goalsAgainst;
                    this.records[i].teamRecords[j].data[7] = this.records[i].teamRecords[j].goalsScored;
                    this.records[i].teamRecords[j].data[8] = this.records[i].teamRecords[j].points;
                  }
                }
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
