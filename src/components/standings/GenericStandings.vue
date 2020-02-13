<template>
    <div>
        <b-table :fields="fields"
                 :items="teamOnlyRecords"
                 :sort-by="sortBy"
                 @update:sortBy="updateSortBy($event)"
                 :sort-desc="sortDesc"
                 @update:sortDesc="updateSortDesc($event)"
                 :sort-compare="pointsCompare"
                 head-variant="dark"
                 responsive="sm"
                 fixed
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
    import pc from '../../scripts/PointsCompare.js'
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
            },
            sortBy: {
                type: String,
                default: "points"
            },
            sortDesc: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return{
                display2: ["gamesPlayed", "points", "wins", "losses", "ot"],
                pointsCompare: null
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
        },
        methods:{
            updateSortBy(newSortBy){
                this.$emit('update:sortBy',newSortBy);
            },
            updateSortDesc(newSortDesc){
                this.$emit('update:sortDesc',newSortDesc);
            }
        },
        created(){
            this.pointsCompare = pc.pointCompare;

        }
    }
</script>

<style scoped>
    img{
        width: 40px;
    }
</style>

