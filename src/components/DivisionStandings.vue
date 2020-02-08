<template>
    <div>
        <league-standings v-bind:records="atlanticRecords">

        </league-standings>
        <league-standings v-bind:records="pacificRecords">

        </league-standings>
        <league-standings v-bind:records="metropolitanRecords">

        </league-standings>
        <league-standings v-bind:records="centralRecords">

        </league-standings>
    </div>
</template>

<script>
    import LeagueStandings from "./LeagueStandings";
    export default {
        name: "DivisionStandings",
        components: {LeagueStandings},
        props: {
            records: []
        },
        methods: {
            divRecords: function (div) {
                //Will use this method to sort
                let divRecords = [];
                for (let i = 0; i < this.records.length; i++) {
                    if(this.records[i].division.name === div) {
                        divRecords.push(this.records[i]);
                    }
                }
                return divRecords;
            }
        },
        computed:{
            atlanticRecords() {
                let div = "Atlantic";
                return this.divRecords(div);

            },
            pacificRecords(){
                let div = "Pacific";
                return this.divRecords(div);
            },
            metropolitanRecords() {
                let div = "Metropolitan";
                return this.divRecords(div);

            },
            centralRecords(){
                let div = "Central";
                return this.divRecords(div);
            }
        }
    }
</script>

<style scoped>

</style>