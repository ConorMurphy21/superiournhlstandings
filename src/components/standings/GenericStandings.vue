<template>
    <div>
        <b-table :fields="fields"
                 :items="teamOnlyRecords"
                 striped="true"
                 head-variant="dark"
                 hover="true"
                 responsive="true"
                 small>
            <template v-slot:cell(index)="data">
                {{data.index + 1}}
            </template>
            <template v-slot:cell(image)="data">
                <img :src="data.item.img">
            </template>
        </b-table>
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
            },
            fields(){
                let fields = [
                    {
                        key: "index",
                        label:""
                    },
                    {
                        key: "image",
                        label: ""
                    },
                    {
                        key: "name",
                        label: this.name
                    }
                ];
                for(let i = 0; i < this.display2.length; i++){
                    fields.push({
                        key: this.display2[i],
                        label: this.headerMap[this.display2[i]],
                        sortable: true
                    });
                }
                return fields;
            }
        }
    }
</script>

<style scoped>
    img{
        width: 40px;
    }
</style>

