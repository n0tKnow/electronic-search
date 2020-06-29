<template>
  <div class="search-box">
    <img v-if="showImage" :src="imageUrl" />
    <el-form ref="form" :model="form" class="search">
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="form.search" onkeypress="if(event.keyCode == 13) return false;" @keyup.enter.native="onSubmit" placeholder="请输入需要搜索的关键字"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="onSubmit">搜索</el-button>
    </el-form>
  </div>

</template>

<script>
export default {
  props: {
    showImage: Boolean,
    searchStr: {
      type: String,
      default: ""
    },
    searchValue: {
      type: String,
      default: "1"
    },
  },
  data() {
    return {
      imageUrl: require("../assets/search.jpg"),
      form: {
        search: this.searchStr
      },
       options: [{
          value: '1',
          label: '手机'
        }, {
          value: '2',
          label: '电脑'
        }, {
          value: '4',
          label: '评测'
        }],
        value: this.searchValue
    };
  },
  methods: {
    onSubmit() {
      console.log(this.$route.name);
      if ("result" != this.$route.name) {
        this.$router.push({
          path: "/result",
          query: { keyword: this.form.search ,value:this.value}
        });
      } else {
        console.log("send " + this.form.search);
        this.$emit("search", this.form.search,this.value);
      }
    }
  }
};
</script>

<style scoped>
.search-box {
  margin: 0 auto;
  width: 60%;
}
.search-box img {
  padding-top: 60px;
  padding-bottom: 60px;
  width: 400px;
  height: 200px;
}
.search {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  column-gap: 10px;
}
</style>