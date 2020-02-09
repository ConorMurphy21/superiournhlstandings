<template>
    <div>
        <h1>
            {{atlanticRecords}}
        </h1>
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
                    if(this.records[i].conference.name === cat) {
                        wildRecords.push(this.records[i]);
                        continue;
                    }
                    if(this.records[i].division.name === cat) {
                        wildRecords.push(this.records[i]);
                    }

                }
                wildRecords.sort(function(a,b){return b.points - a.points});
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
                return this.wildRecords(cat).slice(0,3);
            },

            centralRecords(){
                let cat = "Central";
                return this.wildRecords(cat).slice(0,3);
            },
            westernRecords() {
                let cat = "Western";
                return this.wildRecords(cat);
            }
        }
    }
</script>

<style scoped>

</style>