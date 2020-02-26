<template>
    <div>
        <h1 class="font-weight-bold">Eastern Conference</h1>
        <generic-standings :records="metropolitanRecords"
                           :sortable="false"
                           :headers="headers"
                           name="Metropolitan Division">
        </generic-standings>
        <generic-standings :records="atlanticRecords"
                           :sortable="false"
                           :headers="headers"
                           name="Atlantic Division">
        </generic-standings>
        <generic-standings :records="easternRecords"
                           :sortable="false"
                           :headers="headers"
                           name="Eastern Conference">

        </generic-standings>

        <h1 class="font-weight-bold">Western Conference</h1>
        <generic-standings :records="centralRecords"
                           :sortable="false"
                           :headers="headers"
                           name="Central Division">
        </generic-standings>
        <generic-standings :records="pacificRecords"
                           :sortable="false"
                           :headers="headers"
                           name="Pacific Division">
        </generic-standings>
        <generic-standings :records="westernRecords"
                           :sortable="false"
                           :headers="headers"
                           name="Western Conference">
        </generic-standings>
    </div>
</template>

<script>
    import GenericStandings from "./GenericStandings.vue";
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
                let wildConfRecords = [];
                let teams = [];
                let divTop = divTop1.concat(divTop2);
                for (let i = 0; i < this.records.length; i++) {
                    if (this.records[i].conference.name === name) {
                        for (let j = 0; j < this.records[i].teamRecords.length; j++) {
                            if(!divTop[j].teamincludes(this.records[i].teamRecords[j])){
                                teams.push(this.records[i].teamRecords[j]);
                            }
                        }
                        wildConfRecords[0] = this.records[i];
                        wildConfRecords[0].teamRecords = teams;
                        break;
                    }
                }
                return wildConfRecords;
            },
            divTopThree: function (name) {
                let onlyTopThree = [];
                let onlyTopThreeTeams = [];
                let teams = [];
                for (let i = 0; i < this.records.length; i++) {
                    if (this.records[i].division.name === name) {

                        for (let j = 0; j < this.records[i].teamRecords.length; j++) {
                            teams.push(this.records[i].teamRecords[j]);
                        }

                       teams.sort(function (a, b) {
                           return b.points - a.points;
                       });

                        onlyTopThreeTeams = teams.slice(0, 3);
                        onlyTopThree[0] = this.records[i];
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
                return this.records;
               //return this.wildConfRecords("Eastern", this.metropolitanRecords[0].teamRecords, this.atlanticRecords[0].teamRecords);
            },
            centralRecords(){
                return this.divTopThree("Central");
            },
            pacificRecords(){
                return this.divTopThree("Pacific");
            },
            westernRecords() {
                return this.records;

                //return this.wildConfRecords("Eastern", this.atlanticRecords.teamRecords, this.metropolitanRecords.teamRecords);
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