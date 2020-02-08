<template>
  <div>
    <b-btn-group>
      <b-button variant="secondary">Wild Card</b-button>
      <b-button variant="secondary">Division</b-button>
      <b-button variant="secondary">Conference</b-button>
      <b-button variant="secondary" autofocus>League</b-button>
    </b-btn-group>
    <league-standings records="{{records}}">

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
              val: "test"
            }
        }

    }
</script>

<style scoped>

</style>