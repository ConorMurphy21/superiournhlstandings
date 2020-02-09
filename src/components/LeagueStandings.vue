<template>
  <div>

      <table class="table table-light table-striped">
      <tr>
          <th COLSPAN="17">
              <h1 style="text-align: center" class="font-weight-bold">NHL Standings</h1>
          </th>
      </tr>

          <tr class="bg-dark text-white">
              <td colspan="2">National Hockey League</td>
          </tr>

          <tr v-for="item in teamOnlyRecords" v-bind:key="item.name" class="bg-dark text-white">
              <td><img :src="item.img" style="width:50px; height:50px"></td>
              <td>{{item["name"]}}</td>
              <td>{{item.points}}</td>
              <td>{{item.wins}}</td>
              <td>{{item.losses}}</td>
              <td>{{item.ot}}</td>
          </tr>

      </table>

  </div>
</template>

<script>
    export default {
        name: "LeagueStandings",
        props: {
            records: Array,
            sortOrder: Array,
            display: Array
        },
        data(){
          return{
              sortOrder2: ["points", "wins", "regulationWins"],
              display2: ["gamesPlayed", "points", "wins", "losses", "overtime"],
              headerMap: {
                  gamesPlayed: "GP",
                  wins: "W",
                  losses: "L"
              }
          }
        },
        created(){

        },
        computed: {
            teamOnlyRecords() {
                let teamOnlyRecords = [];
                for(let i = 0;i < this.records.length; i++ ) {
                    for(let j = 0; j < this.records[i].teamRecords.length; j++) {
                        teamOnlyRecords.push(this.records[i].teamRecords[j]);
                    }
                }
                return teamOnlyRecords;
            }
        },
    }
</script>

<style scoped>

</style>