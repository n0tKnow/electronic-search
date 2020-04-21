<template>
    <div id="SearchView">
        <NavigationBar/>
        <SearchForm/>
    </div>
</template>

<script>
    import SearchForm from "../components/SearchForm";
    import NavigationBar from "../components/NavigationBar";
    export default {
        name: "Search",
        components:{
            SearchForm,
            NavigationBar
        }
    }
</script>

<style scoped>
    
</style>