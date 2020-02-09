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
              <td v-for="disp in display2" v-bind:key="disp">{{headerMap[disp]}}</td>
          </tr>

          <tr v-for="item in teamOnlyRecords" v-bind:key="item.name" class="bg-dark text-white">
              <td><img v-bind:src="item.img" style="width:50px; height:50px"></td>
              <td>{{item["name"]}}</td>
              <td v-for="it in display2" v-bind:key="it" v-bind:it="it" v-bind:x="item">{{item[it]}}</td>
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
              display2: ["gamesPlayed", "points", "wins", "losses", "ot"],
              headerMap: {
                  gamesPlayed: "GP",
                  wins: "W",
                  losses: "L",
                  ot: "OT",
                  points: "P",
                  regulationWins : "RW",
                  goalsAgainst : "GA",
                  goalsScored : "GS",
                  divisionRank : "DR"
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
                teamOnlyRecords.sort(function(a,b){return b.points - a.points});
                return teamOnlyRecords;
            }
        }
    }
</script>

<style scoped>

</style>