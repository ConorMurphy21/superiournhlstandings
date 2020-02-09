<template>
  <div>

      <table class="table table-light table-striped">
      <tr>
          <th COLSPAN="17">
              <h1 style="text-align: center; font-size: 60px" class="font-weight-bold">NHL Standings</h1>
          </th>
      </tr>

          <tr class="bg-dark text-white" style="background:#A0A0A0; font-size:30px">
              <td></td>
              <td colspan="1">National Hockey League</td>
              <td v-for="disp in display2" v-bind:key="disp">{{headerMap[disp]}}</td>
          </tr>

          <tr v-for="item in teamOnlyRecords" v-bind:key="item.name" class="bg-light">
              <td><img v-bind:src="item.img" style="width:50px; height:50px;"></td>
              <td style="font-size:25px">{{item["name"]}}</td>
              <td style="font-size:25px" v-for="it in display2" v-bind:key="it" v-bind:it="it" v-bind:x="item">{{item[it]}}</td>
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
              sortOrder2: ["points", "wins", "regulationWins", "losses"],
              sortInOrDec2: [0,0,0,1],
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