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
              <td>{{test[0]}}</td>
              <td>{{test[1]}}</td>
              <td>{{test[2]}}</td>
              <td>{{test[3]}}</td>
          </tr>

          <tr v-for="item in teamOnlyRecords" v-bind:key="item" v-bind:item="item" class="bg-dark text-white">
              <td><img :src="item" style="width:50px; height:50px"></td>
              <td>{{item["name"]}}</td>
              <td>{{item.points}}</td>
              <td>{{item.wins}}</td>
              <td>{{item.losses}}</td>
              <td>{{item.img}}</td>
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
        data(){
          return{
              test: ["Points", "Wins", "Loss", "LR"]
          }
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
        methods:{
            img_path: {
            whatThePathis(){
                return "../assets/" + this.team.id + ".png"
                }
            }
        }
    }
</script>

<style scoped>

</style>