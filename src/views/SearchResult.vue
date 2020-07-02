<template>
  <div>
    <NavigationBar />
    <div class="resultList">
      <SearchForm :showImage=false :searchValue="value" :searchStr="keyword" @search="handleSearchEvent" />
      <ResultItem v-for="result of results.rows" :key="result.url" :result="result" :classify="results.classify"></ResultItem>
    </div>
    <div class="block">
      <el-pagination background @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="20" layout="prev, pager, next, jumper" :total="results.total">
      </el-pagination>
    </div>
  </div>

</template>

<script>
import ResultItem from "../components/ResultItem";
import NavigationBar from "../components/NavigationBar";
import SearchForm from "../components/SearchForm";
import { search, searchPhone, searchComputer } from "../net/netUser";

export default {
  props: {},
  components: {
    ResultItem,
    NavigationBar,
    SearchForm
  },
  data() {
    return {
      currentPage: 1,
      results: { rows: [] },
      keyword: this.$route.query.keyword,
      value: this.$route.query.value
    };
  },
  methods: {
    handleCurrentChange(val) {
      search(this.keyword, 20, val)
        .then(res => {
          console.log(res);
          res["data"]["data"] && res["data"]["data"]["classify"] == "4"
          this.results = res["data"]["data"];
          window.scrollTo(0, 0);
        })
        .catch(error => console.log("search error"));
      console.log(`当前页: ${val}`);
    },
    handleSearchEvent(word, key) {
      switch (parseInt(key)) {
        case 4:
          console.log("handle artist");
          search(word, 20, 0)
            .then(res => {
              console.log(res["data"]);
              if(res["data"]["data"]) res["data"]["data"]["classify"] = "4";
              this.results = res["data"]["data"] || { rows: [] };
              console.log(this.results.classify);
              
            })
            .catch(error => console.log(error));
          break;
        case 1:
          searchPhone(word).then(res => {
            console.log("handle phone");
            let data = res.data.data || [];
            console.log(data);
            for (let k in data) {
              data[k]["title"] = data[k].name;
              data[k]["content"] = data[k].name;
            }
            this.results.rows = data;
            this.results.total = data.length;
          });
          break;
        case 2:
          searchPhone(word).then(res => {
            console.log("handle computer");
            let data = res.data.data || [];
            console.log(data);
            for (let k in data) {
              data[k]["title"] = data[k].name;
              data[k]["content"] = data[k].name;
            }
            this.results.rows = data;
            this.results.total = data.length;
          });
          break;
        default:
          break;
      }

      console.log(this.results.classify);
    }
  },
  mounted: function name(params) {
    if (!this.keyword) return;
    this.handleSearchEvent(this.keyword, this.value);
  }
};
</script>

<style scoped>
.resultList {
  width: 80%;
  padding-left: 121px;
  padding-top: 5px;
  margin-top: 35px;
}

.block {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>