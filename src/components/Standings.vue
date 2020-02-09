<template>

  <div>
    <b-btn-group>
      <b-button variant="secondary" @click="updateVar(0)">Wild Card</b-button>
      <b-button variant="secondary" @click="updateVar(3)">Division</b-button>
      <b-button variant="secondary" @click="updateVar(2)">Conference</b-button>
      <b-button variant="secondary" @click="updateVar(1)" autofocus>League</b-button>
    </b-btn-group>
    <league-standings v-if="standingType === 1" v-bind:records="records">

    </league-standings>
    <conference-standings v-else-if="standingType === 2" v-bind:records="records">

    </conference-standings>
    <division-standings v-else-if="standingType === 3" v-bind:records="records">

    </division-standings>

    <inputScores v-else-if="standingType === 4" v-bind:records="records">

    </inputScores>
  </div>
</template>

<script>
    import LeagueStandings from "@/components/LeagueStandings";
    import ConferenceStandings from "./ConferenceStandings";
    import DivisionStandings from "./DivisionStandings";
    import Input_scores from "./inputScores";
    export default {
        name: "Standings",
        props:{
            system: String,
            records: Array
        },
        components: {Input_scores, DivisionStandings, ConferenceStandings, LeagueStandings},
        data() {
          return {
            standingType: 3
          }
        },
        methods:{
          updateVar: function(val){
            this.standingType = val;
          }
        }
    }
</script>

<style scoped>

</style>