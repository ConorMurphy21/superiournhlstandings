<template>
    <div>
        <b-table :fields="fields"
                 :items="teamOnlyRecords"
                 head-variant="dark"
                 responsive="sm"
                 hover
                 striped
                 bordered
                 small>
            <template v-slot:cell(index)="data">
                {{data.index + 1}}
            </template>
            <template v-slot:cell(image)="data">
                <img :src="data.item.img">
            </template>
        </b-table>
    </div>
</template>

<script>

    import HEADER_MAP from '../../assets/headerMap.json'
    export default {
        name: "GenericStandings",
        headerMap: HEADER_MAP,
        props: {
            name: {
                String,
                default: "NHL"
            },
            records: {
                type: Array,
                required: true
            },
            display: Array,
            sortable: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return{
                display2: ["gamesPlayed", "points", "wins", "losses", "ot"],
            }
        },
        computed: {
            teamOnlyRecords() {
                let teamOnlyRecords = [];
                for(let i = 0;i < this.records.length; i++ ) {
                    for(let j = 0; j < this.records[i].teamRecords.length; j++) {
                        teamOnlyRecords.push(this.records[i].teamRecords[j]);
                    }
                }
                teamOnlyRecords.sort(function(a,b){return b.points - a.points});
                return teamOnlyRecords;
            },
            fields(){
                let fields = [
                    {
                        key: "index",
                        label:""
                    },
                    {
                        key: "image",
                        label: ""
                    },
                    {
                        key: "name",
                        label: this.name
                    }
                ];
                for(let i = 0; i < this.display2.length; i++){
                    fields.push({
                        key: this.display2[i],
                        label: this.$options.headerMap[this.display2[i]].abr,
                        sortDirection: this.$options.headerMap[this.display2[i]].order,
                        sortable: this.sortable
                    });
                }
                return fields;
            }
        }
    }
</script>

<style scoped>
    img{
        width: 40px;
    }
</style>

