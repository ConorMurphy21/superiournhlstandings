<template>
    <table>
        <standings-item>

        </standings-item>
    </table>
</template>

<script>
    import StandingsItem from "./StandingsItem";
    export default {
        name: "LeagueStandings",
        components: {StandingsItem},
        data(){
            return{
                test: ["Boston","55","33","10","12","78","29","33","183","138","+45","18-2-9","15-8-3","0-7","7-2-1","W5"]
            }
        },
        props: {
            records: []
        },
        computed:{

        }
    }
</script>

<style scoped>

</style>