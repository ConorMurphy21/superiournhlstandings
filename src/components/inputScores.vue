<template>
    <div>
        <pre>
    <input v-model="m1" placeholder="Points per Win"><br>
    <input v-model="m2" placeholder="Points per Loss"><br>
    <input v-model="m3" placeholder="Points per OT Loss">

        </pre>

        <b-button variant="submit!"></b-button>

    </div>
</template>

<script>
    export default {
        name: "inputScores",
        ppw: "m1",
        ppl: "m2",
        ppo: "m3"
    }
</script>

<style scoped>

</style>
