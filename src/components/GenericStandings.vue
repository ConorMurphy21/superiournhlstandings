<template>
    <div>

        <table class="table table-light table-striped">
            <tr class="bg-dark text-white" style="background:#A0A0A0; font-size:30px">
                <td></td>
                <td colspan="1">{{name}}</td>
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
        name: "GenericStandings",
        props: {
            name: String,
            records: Array,
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
