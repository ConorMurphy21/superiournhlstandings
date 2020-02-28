<template>

  <div>
    <b-btn-group>
      <b-button variant="secondary" @click="updateVar('wildcard-standings')">Wild Card</b-button>
      <b-button variant="secondary" @click="updateVar('division-standings')">Division</b-button>
      <b-button variant="secondary" @click="updateVar('conference-standings')">Conference</b-button>
      <b-button variant="secondary" @click="updateVar('league-standings')">League</b-button>
    </b-btn-group>

    <component :is="standingType" :records="recordRevamp" :headers="headers"></component>

  </div>
</template>

<script>
  import LeagueStandings from "@/components/standings/LeagueStandings";
  import ConferenceStandings from "./ConferenceStandings";
  import DivisionStandings from "./DivisionStandings";
  import WildcardStandings from "./WildcardStandings";

  export default {
    name: "Standings",
    props: {
      system: Array,
      headers: Array,
      records: Array
    },
    components: {WildcardStandings, DivisionStandings, ConferenceStandings, LeagueStandings},
    data() {
      return {
        standingType: "league-standings",
      }
    },
    computed: {
      recordRevamp() {
        let recordRevamp = this.records;
        for (let i = 0; i < this.records.length; i++) {
          for (let j = 0; j < this.records[i].teamRecords.length; j++) {
            let points = 0;
            for (let k = 0; k < this.system.length; k++) {
              let test = this.system[k].attr;
              points += (this.system[k].val) * this.records[i].teamRecords[j][test];
            }
            recordRevamp[i].teamRecords[j].custPoints = points;
          }
        }
        return recordRevamp;
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