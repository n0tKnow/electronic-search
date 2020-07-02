<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item,index) in items" :index="index.toString()" :key="item">{{item}}</el-menu-item>
      <div v-if="user.username" class="user">
        <a class="name">{{user.username}}</a>
        <el-avatar shape="circle" :src="avatarUrl" align="center"></el-avatar>
        <el-button type="primary" @click="onExit">注销</el-button>
      </div>
      <div v-else="" class="login">
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button type="primary" @click="onRegister">注册</el-button>
      </div>
    </el-menu>
    <el-drawer title="收藏夹" :visible.sync="drawer" direction="rtl">
      <el-collapse v-if="user.username" accordion>
        <el-collapse-item>
          <template slot="title">
            <span style="float:right">手机</span><i class="header-icon el-icon-info"></i>
          </template>
          <el-button v-for="f of favors" :key="f.toId" @click="handleCompare(f.toId)">{{f.name}}</el-button>
        </el-collapse-item>
        <el-collapse-item title="文章\评测">
          <el-card shadow="hover" v-for="f of favoras " :key="f.toId">
            {{f.name}}
          </el-card>
        </el-collapse-item>
      </el-collapse>
      <span v-else="">未登录</span>
    </el-drawer>
  </div>
</template>

<script>
import { loginout, getfavor } from "../net/netUser";
import eventBus from '../router/eventBus.js'

export default {
  data() {
    return {
      activeIndex: "0",
      items: ["首页", "对比", "收藏夹"],
      drawer: false,
      fakeuser: {
        name: "aabb",
        avatarUrl:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      },
      user: window.sessionStorage.getItem("user")
        ? JSON.parse(window.sessionStorage.getItem("user"))
        : {},
      favors: [],
      favoras:[],
      favorClassify: ["手机", "文章评测"]
    };
  },

  computed: {
    avatarUrl() {
      return this.user.avatarUrl ? this.avatarUrl : this.fakeuser.avatarUrl;
    }
  },

  methods: {
    handleCompare(toID){
      eventBus.$emit("addCompare",toID);
    },
    handleSelect(key, keyPath) {
      switch (parseInt(key)) {
        case 0:
          if ("Search" != this.$route.name) {
            this.$router.push("/");
          }else{
            this.$emit("changePage",false);
          }
          break;
        case 1:
          if ("compare" != this.$route.name) {
            this.$emit("changePage",true);
          }
          break;
        case 2:
          this.onDrawer();
          break;

        default:
          break;
      }
    },
    onLogin() {
      this.$router.push("/login");
    },
    onRegister() {
      this.$router.push("/result");
    },
    onExit() {
      loginout(() => {
        window.sessionStorage.removeItem("user");
        window.sessionStorage.removeItem("token");
        this.user = "";
        this.$message({
          message: "已注销",
          type: "success"
        });
      });
    },
    onDrawer() {
      this.drawer = true;
      getfavor()
        .then(res => {
          console.log(res.data);
          this.favors = res.data.data.filter((data)=>{
            return data.classify == 1;
          });
          this.favoras = res.data.data.filter((data)=>{
            return data.classify == 4;
          });
        })
        .catch(e => {
          this.$message({ message: "未登录" , type: "warning" });
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

.name {
  margin-top: 20px;
}
</style>