<template>
    <div>
        <league-standings v-bind:records="atlanticRecords">

        </league-standings>
        <league-standings v-bind:records="metropolitanRecords">

        </league-standings>
        <league-standings v-bind:records="easternRecords">

        </league-standings>
        <league-standings v-bind:records="pacificRecords">

        </league-standings>

        <league-standings v-bind:records="centralRecords">

        </league-standings>
        <league-standings v-bind:records="westernRecords">

        </league-standings>
    </div>
</template>

<script>
    import LeagueStandings from "./LeagueStandings";
    export default {
        name: "WildcardStandings",
        components: {LeagueStandings},
        props: {
            records: Array
        },
        methods: {
            wildRecords: function (cat) {
                //Will use this method to sort
                let wildRecords = [];
                for (let i = 0; i < this.records.length; i++) {
                    if(this.records[i].division.name === cat) {
                        wildRecords.push(this.records[i]);
                        continue;
                    }
                    if(this.records[i].conference.name === cat) {
                        wildRecords.push(this.records[i]);
                    }
                }
                return wildRecords;
            }
        },
        computed:{
            atlanticRecords() {
                let cat = "Atlantic";
                return this.divRecords(cat);

            },
            metropolitanRecords() {
                let cat = "Metropolitan";
                return this.divRecords(cat);

            },
            easternRecords() {
                let cat = "Eastern";
                return this.divRecords(cat);

            },
            pacificRecords(){
                let cat = "Pacific";
                return this.divRecords(cat);
            },

            centralRecords(){
                let cat = "Central";
                return this.divRecords(cat);
            },
            westernRecords() {
                let cat = "Western";
                return this.divRecords(cat);
            }
        }
    }
</script>

<style scoped>

</style>