<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item,index) in items" :index="index.toString()" :key="item">{{item}}</el-menu-item>
      <div v-if="userName" class="user">
        <a class="name">{{userName}}</a>
        <el-avatar shape="circle" :src="user.avatarUrl" align="center"></el-avatar>
        <el-button type="primary" @click="onExit">注销</el-button>
      </div>
      <div v-else="" class="login">
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button type="primary" @click="onRegister">注册</el-button>
      </div>

    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "0",
      items: ["首页", "分类", "订阅", "个人中心"],
      user: {
        name: "aabb",
        avatarUrl:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      },
      userName: window.sessionStorage.getItem("userName")
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onLogin(){
      this.$router.push("/login")
    },
    onRegister() {
      this.$router.push("/result")
    },
    onExit(){
      window.sessionStorage.removeItem("userName");
      this.userName = "";
      this.$message({
        message: "已注销",
        type: "success"
      });
    }
  }
};
</script>

<style scoped>
.user {
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  align-items: center;
  float: right;
  height: 61px;
  margin-right: 10px;
}
.login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  float: right;
  height: 61px;
  margin-right: 10px;
}

.name{
  margin-top: 20px;
}


</style>