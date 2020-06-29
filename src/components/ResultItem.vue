<template>
  <a :href=result.url target="_blank">
    <li class="item">
      <img :src="result.imgUrl" :onerror="errorImg" />
      <div class="text">
        <p class="title" v-html="result.title"></p>
        <p class="context" v-html="result.content"></p>
      </div>
      <i :class="[result.collected?'el-icon-star-on':'el-icon-star-off']" style="float:right" @click="onfavor"></i>
    </li>
  </a>
</template>

<script>
import { favor,delfavor } from "../net/netUser";
export default {
  name: "ResultItem",
  props: {
    result: Object,
    classify: String
  },
  data() {
    return {
      errorImg: 'this.src="' + require("../assets/error.png") + '"'
    };
  },
  methods: {
    onfavor: function(e) {
      e.preventDefault();
      if (!window.sessionStorage.getItem("user")) {
        this.$message({ message: "请先登录", type: "warning" });
        return;
      }
      this.result.collected = !this.result.collected;
      if (this.result.collected) {
        favor(this.result.id,this.classify)
          .then(() => {
            console.log("favor success");
          })
          .catch(() => {
            console.log("error");
            this.result.collected = !this.result.collected;
          });
      }else{
        console.log("defavor");
        
        delfavor(this.result.id,this.classify)
          .then(() => {
            console.log("delfavor success");
          })
          .catch(() => {
            console.log("error");
            this.result.collected = this.result.collected;
          });
      }
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  height: 100px;
  margin-top: 17px;
  padding-bottom: 3px;
  border-bottom: 1px solid #e6e6e6;
}
.item img {
  flex: 1;
  height: 100%;
  padding-right: 20px;
}
.text {
  flex: 5;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.title {
  flex: 1;
  font-size: 22px;
  margin: 0px 0px;
}
.title >>> em {
  color: red;
  font-style: normal;
}

.context {
  flex: 2;
  margin-bottom: 15px;
  color: #888;
  margin-top: 10px;
  overflow: hidden;
  font-size: 14px;
}
.context >>> em {
  color: red;
  font-style: normal;
}

a {
  text-decoration: none;
  color: #2c3e50;
}
</style>