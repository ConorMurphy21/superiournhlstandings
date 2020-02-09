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
              <td>GP</td>
              <td>W</td>
              <td>L</td>
              <td>OT</td>
              <td>PTS</td>
              <td>RW</td>
              <td>ROW</td>
              <td>GF</td>
              <td>GA</td>
              <td>DIFF</td>
              <td>HOME</td>
              <td>AWAY</td>
              <td>S/O</td>
              <td>L10</td>
              <td>STRK</td>
          </tr>

          <tr v-for="item in teamOnlyRecords" v-bind:key="item" v-bind:item="item" class="bg-dark text-white">
              <td><img v-bind:src=img_path(item.team.id)  style="width:50px; height:50px"></td>
              <td>{{item.team.name}}</td>
              <td>{{item.points}}</td>
              <td>{{item.leagueRecord.wins}}</td>
              <td>{{item.leagueRecord.losses}}</td>
              <td>{{}}</td>
              <td>PTS</td>
              <td>RW</td>
              <td>ROW</td>
              <td>GF</td>
              <td>GA</td>
              <td>DIFF</td>
              <td>HOME</td>
              <td>AWAY</td>
              <td>S/O</td>
              <td>L10</td>
              <td>STRK</td>
          </tr>

      </table>

  </div>
</template>

<script>
    export default {
        name: "LeagueStandings",
        props: {
            records: []
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
        methods: {
            img_path: function(id) {
                return "../assets/" + id + ".png"
            }
        }
    }
</script>

<style scoped>

</style>