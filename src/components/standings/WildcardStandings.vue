<template>
    <div>
        <h1 class="font-weight-bold">Eastern Conference</h1>
        <generic-standings v-bind:records="easternRecords" name="Eastern Conference"></generic-standings>
        <generic-standings v-bind:records="metropolitanRecords" name="Metropolitan Division"></generic-standings>
        <generic-standings v-bind:records="atlanticRecords" name="Atlantic Division"></generic-standings>
        <h1 class="font-weight-bold">Western Conference</h1>
        <generic-standings v-bind:records="westernRecords" name="Western Conference"></generic-standings>
        <generic-standings v-bind:records="centralRecords" name="Central Division"></generic-standings>
        <generic-standings v-bind:records="pacificRecords" name="Pacific Division"></generic-standings>
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
            wildRecords: function (cat, cat2) {
                //Will use this method to sort
                let wildRecords = [];
                let teams = [];
                for (let i = 0; i < this.records.length; i++) {
                    //if it finds the division, can break out as there is only one division
                    if(this.records[i][cat2].name === cat) {
                        for(let j = 0; j < this.records[i].teamRecords.length; j++) {
                            teams.push(this.records[i].teamRecords[j]);
                        }
                        wildRecords.push(this.records[i]);
                        teams.sort(function(a,b){return b.points - a.points});
                        wildRecords.teamRecords = teams.slice(0, 3);
                        break;
                    }
                }
                return wildRecords;
            }
        },
        computed:{
            atlanticRecords() {
                let cat = "Atlantic";
                return this.wildRecords(cat);
            },
            metropolitanRecords() {
                let cat = "Metropolitan";
                return this.wildRecords(cat);

            },
            easternRecords() {
                let cat = "Eastern";
                return this.wildRecords(cat);

            },
            pacificRecords(){
                let cat = "Pacific";
                return this.wildRecords(cat);
            },

            centralRecords(){
                let cat = "Central";
                return this.wildRecords(cat);
            },
            westernRecords() {
                let cat = "Western";
                return this.wildRecords(cat);
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