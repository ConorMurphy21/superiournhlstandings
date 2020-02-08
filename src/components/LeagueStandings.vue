<template>
  <div>

   <li v-for="item in records" v-bind:key="item" v-bind:item="item">
       {{item.team.name}}
   </li>

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