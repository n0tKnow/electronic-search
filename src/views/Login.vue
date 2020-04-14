<template>
  <div class="bg">
    <div class="loginBox">
      <h2>登录</h2>
      <form>
        <div class="inputBox">
          <input type="text" name="" v-model="form.username" required="">
          <label>UserName</label>
        </div>
        <div class="inputBox">
          <input type="password" name="" v-model="form.password" required=""><label>Password</label>
        </div>
        <div class="btns">
            <el-button type="primary" @click="onLogin">登录</el-button>
            <el-button type="primary" @click="onRegister">注册</el-button>
        </div>
        
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        form: {
          username: "",
          password: ""
        }
      };
    },
  methods: {
    onLogin() {
      console.log(this.form.username);
    },
    onRegister() {
      console.log(this.form.username);
    }
  }
};
</script>

<style scoped>
.loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 40px;
  background: rgb(0,0,0,.8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}


.loginBox h2{
    margin: 0;
    padding-bottom: 30px;
    text-align: center;
    color:#fff;    
}
.inputBox{
    position: relative;
}

.inputBox input{
    width: 100%;
    padding: 10px 0 5px 0;
    font-size: 16px;
    color: #fff;
    letter-spacing: 1px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #e6e6e6;
    outline: none;
    background: transparent;
}

.inputBox label{
    position: absolute;
    top:0;
    left: 0;
    padding:10px 0 5px 0;
    font-size: 16px;
    color:#fff;
    letter-spacing: 1px;
    pointer-events: none;
    transition: .5s;
}

.inputBox input:valid ~ label,
.inputBox input:focus ~ label{
    top: -25px;
    left: 0px;
    color: #03a9f4;
    font-size: 14px;
}

.btns{
    margin-top: 10px;
    float: right;
}

</style>