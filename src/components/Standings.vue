<template>
  <div>
    <b-btn-group>
      <b-button variant="secondary" @select="updateVar(0)">Wild Card</b-button>
      <b-button variant="secondary">Division</b-button>
      <b-button variant="secondary">Conference</b-button>
      <b-button variant="secondary" autofocus>League</b-button>
    </b-btn-group>
    <league-standings  v-bind:records="leagueRecords">

    </league-standings>

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
              standingType: 3
            }
        },
        methods:{
          updateVar: function(test){
            this.standingType = test;
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
          }
        }

    }
</script>

<style scoped>

</style>