<template>
    <div>
        <league-standings v-bind:records="easternRecords">

        </league-standings>
        <league-standings v-bind:records="westernRecords">

        </league-standings>
    </div>
</template>

<script>
    import LeagueStandings from "./LeagueStandings";
    export default {
        name: "ConferenceStandings",
        components: {LeagueStandings},
        props: {
            records: []
        },
        methods: {
            confRecords: function (conf) {
                //Will use this method to sort
                let conferenceRecords = [];
                for (let i = 0; i < this.records.length; i++) {
                    if(this.records[i].conference.name === conf) {
                        conferenceRecords.push(this.records[i]);
                    }
                }
                return conferenceRecords;
            }
        },
        computed:{
            westernRecords() {
                let conf = "Western";
                return this.confRecords(conf);

            },
            easternRecords(){
                let conf = "Eastern";
                return this.confRecords(conf);
            }
        }
    }
</script>

<style scoped>

</style>