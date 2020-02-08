<template>
  <div>
    <h1>
      {{standings}}
    </h1>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        standings: [],
        errors: []
      }
    },

    // Fetches posts when the component is created.
    created() {
      axios.get(`https://statsapi.web.nhl.com/api/v1/standings`)
              .then(response => {
                // JSON responses are automatically parsed.
                this.standings = response.data
              })
              .catch(e => {
                this.errors.push(e)
              })
    }
  }
</script>

<style scoped>

</style>