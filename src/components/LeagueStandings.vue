<template>
    <div>
        <h5>
            {{records[1].data}}
        </h5>
    </div>
</template>

<script>
    export default {
        name: "LeagueStandings",
        props: {
            records: []
        },
        computed:{

        }
    }
</script>

<style scoped>

</style>