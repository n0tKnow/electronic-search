<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item,index) in items" :index="index.toString()" :key="item">{{item}}</el-menu-item>
      <div class="user">
        <h5>{{user.name}}</h5>
        <el-avatar shape="circle" fit="fit" :src="user.avatarUrl"></el-avatar>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      items: ["首页", "分类", "订阅", "个人中心"],
      user: {
        name: "aabb",
        avatarUrl:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
  .user{
      display: grid ;
      grid-template-columns: 1fr 1fr;
      float: right;
      padding: 0px 20px;
  }
</style>