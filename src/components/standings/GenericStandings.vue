<template>
    <div>
        <b-table
                id="standingstable"
                :fields="fields"
                :items="teamOnlyRecords"
                :sort-by="sortBy"
                @update:sortBy="updateSortBy($event)"
                :sort-desc="sortDesc"
                @update:sortDesc="updateSortDesc($event)"
                :sort-compare="pc.pointCompare"
                head-variant="dark"
                responsive="true"
                fixed
                hover
                striped
                small
                no-border-collapse
        >
            <!-- Custom team column with rank, icon, and name--->
            <template v-slot:cell(teamid)="data">
                <TeamIdentifier :item="data.item"></TeamIdentifier>
            </template>

            <!-- Decimal  values to 3 digits -->
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
    import TeamIdentifier from "@/components/standings/TeamIdentifier";
    export default {
        name: "GenericStandings",
        components: {TeamIdentifier},
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
            headers: {
                type: Array,
                required: true
            },
            rankType: {
                type: String,
                required: true
            },
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
                let variants = ['danger','none','success'];
                let teamOnlyRecords = [];
                for(let i = 0; i < this.records.length; i++ ) {
                    for(let j = 0; j < this.records[i].teamRecords.length; j++) {
                        teamOnlyRecords.push(this.records[i].teamRecords[j]);
                    }
                }
                teamOnlyRecords.sort(function (a, b) {
                    // sort descendingly by custPoints
                    return pc.pointCompare(b, a,"custPoints")
                });
                for(let i = 0; i < teamOnlyRecords.length; i++){
                    //because we Array sort sorts asc, but higher points rank higher
                    teamOnlyRecords[i].rank = i+1;
                    teamOnlyRecords[i].rankDiff = pc.rankCompare(i+1, teamOnlyRecords[i], this.rankType);
                    let variant = variants[Math.sign(teamOnlyRecords[i].rankDiff) + 1];
                    teamOnlyRecords[i]._cellVariants = {rankDiff: variant};
                }
                return teamOnlyRecords;
            },
            fields(){
                let fields = [{
                        key: "teamid",
                        label: this.name,
                        thStyle:{width:"300px"}
                }];
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
        height: 32px;
    }
</style>
<style>
    #standingstable td{
        border: #aaaaaa solid 1px;
    }
</style>

