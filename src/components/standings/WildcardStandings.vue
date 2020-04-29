<template>
    <div>
        <h1 class="font-weight-bold">Eastern Conference</h1>
        <generic-standings :records="metropolitanRecords"
                           :sortable="false"
                           :headers="headers"
                           rank-type="topWildCard"
                           name="Metropolitan Division">
        </generic-standings>
        <generic-standings :records="atlanticRecords"
                           :sortable="false"
                           :headers="headers"
                           rank-type="topWildCard"
                           name="Atlantic Division">
        </generic-standings>
        <generic-standings :records="easternRecords"
                           :sortable="false"
                           :headers="headers"
                           rank-type="wildCard"
                           name="Eastern Conference">

        </generic-standings>

        <h1 class="font-weight-bold">Western Conference</h1>
        <generic-standings :records="centralRecords"
                           :sortable="false"
                           :headers="headers"
                           rank-type="topWildCard"
                           name="Central Division">
        </generic-standings>
        <generic-standings :records="pacificRecords"
                           :sortable="false"
                           :headers="headers"
                           rank-type="topWildCard"
                           name="Pacific Division">
        </generic-standings>
        <generic-standings :records="westernRecords"
                           :sortable="false"
                           :headers="headers"
                           rank-type="wildCard"
                           name="Western Conference">
        </generic-standings>
    </div>
</template>

<script>
    import GenericStandings from "./GenericStandings.vue";
    import pc from '../../scripts/PointsCompare.js'
    export default {
        name: "WildcardStandings",
        components: {GenericStandings},
        props: {
            records: Array,
            headers: Array
        },
        data(){
            return{
                sortBy: "points",
                sortDesc: true
            }
        },
        methods: {
            wildConfRecords: function (name, divTop1, divTop2) {
                //Will use this method to sort
                let wildConfRecords = [{
                     teamRecords:[]
                     },
                ];
                let teams = [];
                let divTop = divTop1.concat(divTop2);
                let names = [];
                for (let i = 0; i < divTop.length; i++){
                    names[i] = divTop[i].team.name;
                }
                for (let i = 0; i < this.records.length; i++) {

                    if (this.records[i].conference.name === name) {
                        for (let j = 0; j < this.records[i].teamRecords.length; j++) {
                            if(names.includes(this.records[i].teamRecords[j].team.name)){
                                continue;
                            }
                            teams.push(this.records[i].teamRecords[j]);
                        }
                    }
                    wildConfRecords[0].teamRecords = teams;
                }
                return wildConfRecords;
            },
            divTopThree: function (name) {
                let onlyTopThree = [{
                    teamRecords:[]
                }];
                let onlyTopThreeTeams = [];
                let teamsInDiv = [];
                for (let i = 0; i < this.records.length; i++) {
                    if (this.records[i].division.name === name) {

                        for (let j = 0; j < this.records[i].teamRecords.length; j++) {
                            teamsInDiv.push(this.records[i].teamRecords[j]);
                        }

                        teamsInDiv.sort(function (a, b) {
                           return pc.pointCompare(b, a,"custPoints");
                       });

                        onlyTopThreeTeams = teamsInDiv.slice(0, 3);
                        onlyTopThree[0].teamRecords = onlyTopThreeTeams;
                        break;

                    }
                }
                return onlyTopThree;
            }
        },
        computed:{
            atlanticRecords() {
                return this.divTopThree("Atlantic");
            },
            metropolitanRecords() {
                return this.divTopThree("Metropolitan");
            },
            easternRecords() {
               return this.wildConfRecords("Eastern", this.metropolitanRecords[0].teamRecords, this.atlanticRecords[0].teamRecords);
            },
            centralRecords(){
                return this.divTopThree("Central");
            },
            pacificRecords(){
                return this.divTopThree("Pacific");
            },
            westernRecords() {
                return this.wildConfRecords("Western", this.centralRecords[0].teamRecords, this.pacificRecords[0].teamRecords);
            }
        }
    }
</script>

<style scoped>
    h1{
        text-align: center;
        font-size: 250%;
    }
</style>