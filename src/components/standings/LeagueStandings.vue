<template>
    <div>
        <h1 class="font-weight-bold">National Hockey League</h1>
        <generic-standings name="National Hockey League" v-bind:records="records"></generic-standings>
    </div>
</template>

<script>
    import GenericStandings from "@/components/standings/GenericStandings";
    export default {
        name: "ConferenceStandings",
        components: {GenericStandings},
        props: {
            records: Array,
            display: Array
        }
    }
</script>

<style scoped>
    h1{
        text-align: center;
        font-size: 250%;
    }
</style>