<template>
    <div>
        <h1 class="font-weight-bold">Eastern Conference</h1>
        <generic-standings v-bind:records="metropolitanRecords" name="Metropolitan Division"></generic-standings>
        <generic-standings v-bind:records="atlanticRecords" name="Atlantic Division"></generic-standings>
        <generic-standings v-bind:records="easternRecords" name="Eastern Conference"></generic-standings>

        <h1 class="font-weight-bold">Western Conference</h1>
        <generic-standings v-bind:records="centralRecords" name="Central Division"></generic-standings>
        <generic-standings v-bind:records="pacificRecords" name="Pacific Division"></generic-standings>
        <generic-standings v-bind:records="westernRecords" name="Western Conference"></generic-standings>
    </div>
</template>

<script>
    import GenericStandings from "./GenericStandings.vue";
    export default {
        name: "WildcardStandings",
        components: {GenericStandings},
        props: {
            records: Array
        },
        methods: {
            wildConfRecords: function (name, divTop1, divTop2) {
                //Will use this method to sort
                let wildConfRecords = [];
                let teams = [];
                for (let i = 0; i < this.records.length; i++) {
                    //if it finds the division, can break out as there is only one division
                    if (this.records[i].conference.name === name) {
                        for (let j = 0; j < this.records[i].teamRecords.length; j++) {
                            teams.push(this.records[i].teamRecords[j]);
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
                    if (this.records[i].divison.name === name) {
                        for (let j = 0; j < this.records[i].teamRecords.length; j++) {
                            teams.push(this.records[i].teamRecords[j]);
                        }
                        teams.sort(function (a, b) {
                            return b.points - a.points
                        });
                        teams = teams.slice(0, 3);

                        onlyTopThree.push(this.records[i]);
                        onlyTopThree[0].teamRecords = teams;
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
                return this.wildRecords("Eastern", this.metropolitanRecords.teamRecords, this.atlanticRecords.teamRecords);
            },
            centralRecords(){
                return this.divTopThree("Central");
            },
            pacificRecords(){
                return this.divTopThree("Pacific");
            },
            westernRecords() {
                return this.wildRecords("Eastern", this.atlanticRecords.teamRecords, this.metropolitanRecords.teamRecords);
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