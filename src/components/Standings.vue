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
    import InputScores from "./inputScores";
    export default {
        name: "Standings",
        props:{
            system: String,
            records: Array
        },
        components: {InputScores, DivisionStandings, ConferenceStandings, LeagueStandings},
        data() {
          return {
            standingType: 3
      props: {
        systemName: String,
        system: Object,
        records: Array
      },
      components: {DivisionStandings, ConferenceStandings, LeagueStandings},
      data() {
        return {
          standingType: 3,
          system2: [
            {
              attr: "wins",
              val: 2
            },
            {
              attr: "ot",
              val: 1
            }
          ]
        }
      },
      computed: {
        recordRevamp() {
          let recordRevamp = this.records;
          for (let i = 0; i < this.records.length; i++) {
            for (let j = 0; j < this.records[i].teamRecords.length; j++) {
              let points = 0;
              for (let k = 0; k < this.system2.length; k++) {
                let test = this.system2[k].attr;
                points += (this.system2[k].val) * this.records[i].teamRecords[j][test];
              }
              recordRevamp[i].teamRecords[j].points = points;
            }
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