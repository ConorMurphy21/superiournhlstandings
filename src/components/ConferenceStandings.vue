<template>

</template>

<script>
    export default {
        name: "ConferenceStandings",
        props: {
            records: []
        },
        methods: {
            confRecords: function (conf) {
                let conferenceRecords = [];
                for (let i = 0; i < this.records.length; i++) {
                    if(this.records[i].conference)
                    for (let j = 0; j < this.records[i].teamRecords.length; j++) {

                        conferenceRecords.push(this.records[i].teamRecords[j]);
                    }
                }
                return conf;
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