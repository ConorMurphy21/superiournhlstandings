<template>
  <div id="app">
    <h1>
    </h1>
    <standing-pitch system="3-Point-Game" v-bind:records="records">

    </standing-pitch>
    <sidebar-menu :menu="menu" width="100px" rtl="false"/>
  </div>
</template>

<script>
  import StandingPitch from "./components/StandingPitch";
  import axios from 'axios';
  import { SidebarMenu } from 'vue-sidebar-menu';

  export default {
    name: 'App',
    components: {
      StandingPitch,
      SidebarMenu
    },
    data(){
      return{
        menu: [
          {
            header: true,
            title: 'Main Navigation',
            hiddenOnCollapse: true,
          },
          {
            href: '/',
            title: 'Dashboard',
            icon: 'fa fa-user'
          },
          {
            href: '/charts',
            title: 'Charts',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/charts/sublink',
                title: 'Sub Link'
              }
            ]
          },
          {

          }
        ],
        records: [],
        headMap: ["GP", "W", "L","OT","RW","OW","GA","GF","P"]
      }
    },
    // Fetches posts when the component is created
    created() {
      axios.get(`https://statsapi.web.nhl.com/api/v1/standings`)
              .then(response => {
                // JSON responses are automatically parsed.
                this.records = response.data.records;

              })
              .catch(e => {
                this.errors.push(e)
              })
    }
  }

</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
