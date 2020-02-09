<template>
    <TR>
        <TD><img src="../../public/assets/boston_bruins.svg.png" width="50px" height="50px"> </TD>
            <TD style="padding-top: 23px">{{ LeagueStandings.test[0] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[1] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[2] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[3] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[4] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[5] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[6] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[7] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[8] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[9] }}</TD>
        <TD style="padding-top: 23px; color: #00B000">{{ LeagueStandings.test[10] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[11] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[12] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[13] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[14] }}</TD>
        <TD style="padding-top: 23px">{{ LeagueStandings.test[15] }}</TD>
    </TR>
</template>

<script>
    export default {
        name: "StandingsItem",
        props:{
            record: Object
        }
    }
</script>

<style scoped>

</style>