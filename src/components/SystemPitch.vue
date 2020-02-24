<template>
    <Standings :system="system" :records="records">

    </Standings>
</template>

<script>
    import DEFAULT_SYSTEMS from '../assets/defaultSystems.json'
    import Standings from "./standings/Standings";
    export default {
        name: "SystemPitch",
        systems: DEFAULT_SYSTEMS,
        components: {Standings},
        props:{
            system: String,
            records: Array
        }
    }
</script>

<style scoped>

</style>