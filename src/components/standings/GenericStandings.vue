<template>
    <div>
        <b-table :fields="fields"
                 :items="teamOnlyRecords"
                 :sort-by="sortBy"
                 @update:sortBy="updateSortBy($event)"
                 :sort-desc="sortDesc"
                 @update:sortDesc="updateSortDesc($event)"
                 :sort-compare="pc.pointCompare"
                 head-variant="dark"
                 responsive
                 hover
                 striped
                 bordered
                 dark
                 small>
            <template v-slot:cell(image)="data" >
                <img :src="data.item.img">
            </template>
            <template v-slot:cell(custPointPercentage)="data">
                {{data.item.custPointPercentage.toFixed(3)}}
            </template>
            <template v-slot:cell(pointPercentage)="data">
                {{data.item.custPointPercentage.toFixed(3)}}
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
                default: "NHL",
            },
            records: {
                type: Array,
                required: true
            },
            headers: Array,
            sortable: {
                type: Boolean,
                default: true
            },
            sortBy: {
                type: String,
                default: "custPoints"
            },
            sortDesc: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return{
                pc: null
            }
        },
        computed: {
            teamOnlyRecords() {
                let teamOnlyRecords = [];
                for(let i = 0; i < this.records.length; i++ ) {
                    for(let j = 0; j < this.records[i].teamRecords.length; j++) {
                        teamOnlyRecords.push(this.records[i].teamRecords[j]);
                    }
                }
                //So we do the tiebreaker first, because the tie breaker is the same regardless of point system
                teamOnlyRecords.sort(this.pc.tieBreakerCompare);
                //then we sort with points (this will be variable later)
                //this works because sort is stable
                teamOnlyRecords.sort(function (a, b) {
                    return a.custPoints - b.custPoints;
                });
                for(let i = 0; i < teamOnlyRecords.length; i++){
                    //because we Array sort sorts asc, but higher points rank higher
                    teamOnlyRecords[i].rank = teamOnlyRecords.length-i;
                }
                return teamOnlyRecords;
            },
            fields(){
                let fields = [
                    {
                        key: "rank",
                        label:"rank"
                    },
                    {
                        key: "image",
                        label: ""
                    },
                    {
                        key: "name",
                        label: this.name,
                        stickyColumn: true
                    }
                ];
                for(let i = 0; i < this.headers.length; i++){
                    fields.push({
                        key: this.headers[i],
                        label: this.$options.headerMap[this.headers[i]].abr,
                        sortDirection: this.$options.headerMap[this.headers[i]].order,
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
            this.pc = pc;
        }
    }
</script>

<style scoped>
    img{
        width: 40px;
    }
</style>

