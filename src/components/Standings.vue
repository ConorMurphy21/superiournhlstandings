<template>

  <div>
    <b-btn-group>
      <b-button variant="secondary" @select="updateVar(0)">Wild Card</b-button>
      <b-button variant="secondary">Division</b-button>
      <b-button variant="secondary">Conference</b-button>
      <b-button variant="secondary" autofocus>League</b-button>
    </b-btn-group>
    <league-standings  v-bind:records="records">

    </league-standings>
    <conference-standings v-bind:records="records">

    </conference-standings>
    <division-standings v-bind:records="records">

    </division-standings>
  </div>
</template>

<script>
    import LeagueStandings from "@/components/LeagueStandings";
    import ConferenceStandings from "./ConferenceStandings";
    import DivisionStandings from "./DivisionStandings";
    export default {
        name: "Standings",
        props:{
            system: String,
            records: []
        },
        components: {DivisionStandings, ConferenceStandings, LeagueStandings},
        data(){
            return{
              standingType: 3
            }
        }
    }
</script>

<style scoped>

</style>