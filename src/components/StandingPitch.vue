<template>
    <Standings system="3-Point-Game" v-bind:records="records">

    </Standings>
</template>

<script>
    import Standings from "./Standings";
    export default {
        name: "StandingPitch",
        components: {Standings},
        props:{
            system: String,
            records: []
        }
    }
</script>

<style scoped>

</style>