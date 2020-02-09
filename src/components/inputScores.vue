<template>
    <div>
        <pre>
    <input v-model="m1" placeholder="Points per Win"><br>
    <input v-model="m2" placeholder="Points per Loss"><br>
    <input v-model="m3" placeholder="Points per OT Loss">

            <b-button>Submit!</b-button>
        </pre>

        <b-button variant="submit!"></b-button>

    </div>
</template>

<script>
    export default {
        name: "inputScores"

    }
</script>

<style scoped>

</style>
