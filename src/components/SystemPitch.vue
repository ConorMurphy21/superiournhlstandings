<template>
    <Standings :system="sysObj" :records="records" :headers="sysHeaders">

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
        },
        computed: {
            sysObj(){
                return this.$options.systems[this.system].system;
            },
            sysHeaders(){
                return this.$options.systems[this.system].headers;
            }
        }
    }
</script>

<style scoped>

</style>