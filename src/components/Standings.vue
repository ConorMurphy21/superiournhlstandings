<template>
  <div>
    <b-btn-group>
      <b-button variant="secondary">Wild Card</b-button>
      <b-button variant="secondary">Division</b-button>
      <b-button variant="secondary">Conference</b-button>
      <b-button variant="secondary" autofocus>League</b-button>
    </b-btn-group>
    <league-standings  v-bind:records="leagueRecords">

    </league-standings>
    <h5>
      {{leagueRecords}}
    </h5>
  </div>
</template>

<script>
    import LeagueStandings from "@/components/LeagueStandings";
    export default {
        name: "Standings",
        props:{
            system: String,
            records: []
        },
        components: {LeagueStandings},
        data(){
            return{
            }
        },
        computed: {
          leagueRecords() {
           let leagueRecords = [];
            for(let i = 0;i < this.records.length; i++ ) {
              for(let j = 0; j < this.records[i].teamRecords.length; j++) {
                leagueRecords.push(this.records[i].teamRecords[j]);
              }
            }
            return leagueRecords;
          },
          conferenceRecords() {
            let easternRecords = [];
            let easternRecords = [];
            for(let i = 0;i < this.records.length; i++ ) {
              for(let j = 0; j < this.records[i].teamRecords.length; j++) {
                leagueRecords.push(this.records[i].teamRecords[j]);
              }
            }
            return leagueRecords;
          }
        }

    }
</script>

<style scoped>

</style>