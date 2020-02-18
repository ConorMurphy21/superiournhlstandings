<template>
    <Standings system="3-Point-Game" v-bind:records="records">

    </Standings>
</template>

<script>
    import Standings from "./standings/Standings";
    export default {
        name: "StandingPitch",
        components: {Standings},
        props:{
            system: String,
            records: Array
        }
    }
</script>

<style scoped>

</style>