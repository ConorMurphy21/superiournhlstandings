<template>
    <div>
        <h1 class="font-weight-bold">Eastern Conference</h1>
        <generic-standings :records="easternRecords"
                           :sort-by.sync="sortBy"
                           :sort-desc.sync="sortDesc"
                           :headers="headers"
                           rank-type="conferenceRank"
                           name="Eastern Conference">
        </generic-standings>
        <h1 class="font-weight-bold">Western Conference</h1>
        <generic-standings :records="westernRecords"
                           :sort-by.sync="sortBy"
                           :sort-desc.sync="sortDesc"
                           :headers="headers"
                           rank-type="conferenceRank"
                           name="Western Conference">
        </generic-standings>
    </div>
</template>

<script>
    import GenericStandings from "./GenericStandings.vue";
    export default {
        name: "ConferenceStandings",
        components: {GenericStandings},
        data(){
            return{
                sortBy: "custPoints",
                sortDesc: true
            }
        },
        props: {
            records: Array,
            headers: Array
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
    h1{
        text-align: center;
        font-size: 250%;
    }

</style>