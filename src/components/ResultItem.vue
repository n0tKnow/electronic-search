<template>
  <li class="item">
    <img :src="result.url" />
    <div class="text">
      <p class="title">{{result.title}}</p>
      <p class="context">{{result.desc}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "ResultItem",
  props: {
    result: Object
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
  font-size:22px;
  margin: 0px 0px;
  
}
.context {
  flex: 2;
  margin-bottom: 15px;
  color: #888;
  margin-top: 10px;
  overflow: hidden;
  font-size: 14px;
}
</style>