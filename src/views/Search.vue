<template>
    <div id="SearchView">
        <NavigationBar @changePage="hanleCompare"/>
        <Compare v-if="compare"/>
        <SearchForm v-else="" :showImage=true />
        
    </div>
</template>

<script>
    import Compare from './Compare';
    import SearchForm from "../components/SearchForm";
    import NavigationBar from "../components/NavigationBar";
    export default {
        name: "Search",
        components:{
            SearchForm,
            NavigationBar,
            Compare
        },
        data(){
            return {
                compare:false
            }
        },
        methods:{
            hanleCompare(flag){
                this.compare = flag;
            }
        }
    }
</script>

<style scoped>
    
</style>