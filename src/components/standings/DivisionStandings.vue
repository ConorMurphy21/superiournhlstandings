<template>
    <div>
        <h1 class="font-weight-bold">Eastern Conference</h1>
        <generic-standings :records="metropolitanRecords"
                           :sort-by.sync="sortBy"
                           :sort-desc.sync="sortDesc"
                           :headers="headers"
                           name="Metropolitan Division">
        </generic-standings>
        <generic-standings :records="atlanticRecords"
                           :sort-by.sync="sortBy"
                           :sort-desc.sync="sortDesc"
                           :headers="headers"
                           name="Atlantic Division">
        </generic-standings>
        <h1 class="font-weight-bold">Western Conference</h1>
        <generic-standings :records="centralRecords"
                           :sort-by.sync="sortBy"
                           :sort-desc.sync="sortDesc"
                           :headers="headers"
                           name="Central Division">
        </generic-standings>
        <generic-standings :records="pacificRecords"
                           :sort-by.sync="sortBy"
                           :sort-desc.sync="sortDesc"
                           :headers="headers"
                           name="Pacific Division">
        </generic-standings>
    </div>
</template>

<script>
    import GenericStandings from "./GenericStandings.vue";
    export default {
        name: "DivisionStandings",
        components: {GenericStandings},
        props: {
            records: Array,
            headers: Array
        },
        data(){
            return{
                sortBy: "custPoints",
                sortDesc: true
            }
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
    h1{
        text-align: center;
        font-size: 250%;
    }
</style>