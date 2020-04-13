<template>
    <div id="SearchView">
        <NavigationBar/>
        <SearchForm/>
    </div>
</template>

<script>
    import NavigationBar from "../components/NavigationBar";
    import SearchForm from "../components/SearchForm";
    export default {
        name: "Search",
        components:{
            NavigationBar,
            SearchForm
        }
    }
</script>

<style lang="scss" scoped>

</style>