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
                            if(!divTop.includes(this.records[i].teamRecords[j])){
                                teams.push(this.records[i].teamRecords[j]);
                            }
                        }
                        wildConfRecords.push(this.records[i]);
                        wildConfRecords[i].teamRecords = teams;
                        break;
                    }
                }
                return wildConfRecords;
            },
            divTopThree: function (name) {
                let onlyTopThree = [];
                let teams = [];
                for (let i = 0; i < this.records.length; i++) {
                    if (this.records[i].division.name === name) {

                        for (let j = 0; j < this.records[i].teamRecords.length; j++) {
                            teams.push(this.records[i].teamRecords[j]);
                        }

                       teams.sort(function (a, b) {
                           return b.points - a.points;
                       });

                        teams = teams.slice(0, 3);

                        this.records[i].teamRecords = teams;
                        onlyTopThree.push(this.records[i]);
                        break;

                    }
                }
                return onlyTopThree;
            }
        },
        computed:{
            atlanticRecords() {
                //return this.records;
                return this.divTopThree("Atlantic");
            },
            metropolitanRecords() {
                //return this.records;
                return this.divTopThree("Metropolitan");
            },
            easternRecords() {
                return this.records;
              // return this.wildConfRecords("Eastern", this.metropolitanRecords.teamRecords, this.atlanticRecords.teamRecords);
            },
            centralRecords(){
               // return this.records;

                return this.divTopThree("Central");
            },
            pacificRecords(){
               // return this.records;
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