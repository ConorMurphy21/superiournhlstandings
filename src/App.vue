<template>
  <div id="app">
    <div id="standings">
    <SystemPitch system="fpw" :records="records">

    </SystemPitch>
    </div>
  </div>
</template>

<script>
  import SystemPitch from './components/SystemPitch.vue';
  import axios from 'axios';

  export default {
    name: 'App',
    components: {
      SystemPitch
    },
    data(){
      return{
        records: []
      }
    },
    // Fetches posts when the component is created
    created() {
      axios.get(`https://statsapi.web.nhl.com/api/v1/standings?expand=standings.record`)
              .then(response => {
                // JSON responses are automatically parsed.
                this.records = response.data.records;
                for(let i = 0;i < this.records.length; i++ ) {
                  for(let j = 0; j < this.records[i].teamRecords.length; j++) {
                    const team = this.records[i].teamRecords[j];
                    team.img = "../assets/" + team.team.name + ".png";
                    team.name = team.team.name;
                    team.wins = team.leagueRecord.wins;
                    team.losses = team.leagueRecord.losses;
                    team.ot = team.leagueRecord.ot;
                    team.otw = team.wins - team.regulationWins;
                    team.pointPercentage = team.points / (2*team.gamesPlayed);
                    team.wildCardRank = Number(team.wildCardRank);
                    team.divisionRank = Number(team.divisionRank);
                    team.conferenceRank = Number(team.conferenceRank);
                    team.leagueRank = Number(team.leagueRank);
                    team.ties = team.ot + team.otw
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
  #standings{
    margin: auto;
    max-width: 80%;
    min-width: 800px;
  }
</style>
