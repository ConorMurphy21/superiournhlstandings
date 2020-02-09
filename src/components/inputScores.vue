<template>
    <div>
    <input v-model="message" placeholder="Points per Win">
    <input v-model="message" placeholder="Points per Loss">
    <input v-model="message" placeholder="Points per OT Loss">
    </div>
</template>

<script>
    export default {
        name: "inputScores"
    }
</script>

<style scoped>

</style>