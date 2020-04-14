<template>
  <div class="search-box">
    <img src="https://www.baidu.com/img/bd_logo1.png"/>
    <el-form ref="form" :model="form" class="search">
      <el-input v-model="form.search" placeholder="请输入需要搜索的关键字"></el-input>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
    </el-form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      form: {
        search: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("/result");
    }
  }
};
</script>

<style scoped>
.search-box {
  margin: 0 auto;
  width: 60%;
}
.search-box img{
    padding-left: 25%;
    padding-top: 60px;
    padding-bottom: 60px;
    width: 400px;
    height: 200px;
}
.search {
  display: grid;
  grid-template-columns: 5fr 1fr;
  column-gap: 10px;
  
}
</style>