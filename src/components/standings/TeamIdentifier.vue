<template>
    <div id="teamid">
        <b> {{item.rank}}.  </b>
        <img :src="item.img">
        <b>  {{item.name}}</b>
    </div>
</template>

<script>
    export default {
        name: "TeamIdentifier",
        props:{
            item: {}
        }
    }
</script>

<style scoped>
    b{
        width: 100px;
    }
    img{
        width: 32px;
    }
    div{
        text-align: left;
        max-width: 275px;
    }
</style>