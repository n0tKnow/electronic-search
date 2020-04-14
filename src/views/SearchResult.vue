<template>
  <div class="resultList">
    <ResultItem v-for="result of results" :key="result.id" :result="result"></ResultItem>
  </div>
</template>

<script>
import ResultItem from "../components/ResultItem";
const url = "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
export default {
  /*props: {
    results: Array
  },*/
  components: {
    ResultItem
  },
  data() {
    return {
      results: [
        { url: url, title: "testALL", desc: "go go go" },
        { url: url, title: "emmmmmmmm2", desc: "go go goaaaa2" },
        { url: url, title: "jajajjaajja3", desc: "gofsdfadsfdf go go3" },
        { url: url, title: "testALL4dfasd", desc: "go go goafdsaf 4" },
        { url: url, title: "testAsssssssssssssssssssssssssssssssLL5", desc: "go gogdsaqiiqoq go5" }
      ]
    };
  }
};
</script>

<style scoped>
.resultList {
  width: 80%;
  padding-left: 121px;
  padding-top:5px;
  margin-top: 35px;
}
</style>